import { useEffect, useMemo, useState } from "react";
import { Heart, MessageCircle, PenLine, Send, Sparkles } from "lucide-react";

const storagePrefix = "aarambh-place-community-v1";

function initials(name = "Explorer") {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("") || "EX";
}

export default function PlaceCommunity({ placeName, placeId, placeType = "Place" }) {
  const key = `${storagePrefix}:${placeId}`;
  const [mode, setMode] = useState("comment");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try { setPosts(JSON.parse(localStorage.getItem(key) || "[]")); }
    catch { setPosts([]); }
  }, [key]);

  const save = (next) => {
    setPosts(next);
    localStorage.setItem(key, JSON.stringify(next));
  };

  const submit = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    const item = {
      id: crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`,
      kind: mode,
      name: name.trim() || "Anonymous Explorer",
      title: mode === "story" ? (title.trim() || `My ${placeName} story`) : "",
      message: message.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
    };
    save([item, ...posts]);
    setTitle(""); setMessage(""); setNotice(mode === "story" ? "Your travel story has been published locally." : "Your comment has been added locally.");
    setTimeout(() => setNotice(""), 3000);
  };

  const like = (id) => save(posts.map((post) => post.id === id ? { ...post, likes: (post.likes || 0) + 1 } : post));

  const summary = useMemo(() => ({ comments: posts.filter((p) => p.kind === "comment").length, stories: posts.filter((p) => p.kind === "story").length }), [posts]);

  return (
    <section className="place-community" aria-label={`Community discussion about ${placeName}`}>
      <div className="place-community-intro">
        <div>
          <span className="community-kicker"><Sparkles size={15}/> TRAVELLER COMMUNITY</span>
          <h2>What would you share about <em>{placeName}?</em></h2>
          <p>Leave a quick tip or publish a short travel story for future explorers of this {placeType.toLowerCase()}.</p>
        </div>
        <div className="community-counts">
          <div><strong>{summary.comments}</strong><span>Comments</span></div>
          <div><strong>{summary.stories}</strong><span>Stories</span></div>
        </div>
      </div>

      <div className="place-community-grid">
        <form className="place-post-form" onSubmit={submit}>
          <div className="post-tabs" role="tablist" aria-label="Choose post type">
            <button type="button" className={mode === "comment" ? "active" : ""} onClick={() => setMode("comment")}><MessageCircle size={16}/> Comment</button>
            <button type="button" className={mode === "story" ? "active" : ""} onClick={() => setMode("story")}><PenLine size={16}/> Travel story</button>
          </div>

          <label>Your name (optional)
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="How should explorers know you?" />
          </label>
          {mode === "story" && <label>Story title
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={`My experience at ${placeName}`} />
          </label>}
          <label>{mode === "story" ? "Tell your story" : "Your comment"}
            <textarea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder={mode === "story" ? "What did you discover, learn or experience?" : "Share a tip, memory or question..."} />
          </label>
          <button className="community-submit" type="submit"><Send size={17}/> {mode === "story" ? "Publish story" : "Post comment"}</button>
          <small className="community-local-note">Demo mode: posts are saved in this browser using LocalStorage.</small>
          {notice && <div className="community-notice">✓ {notice}</div>}
        </form>

        <div className="place-post-feed">
          <div className="feed-heading"><h3>Explorer notes</h3><span>{posts.length} shared</span></div>
          {posts.length === 0 ? <div className="place-empty"><MessageCircle size={24}/><strong>Be the first explorer to contribute.</strong><p>Your local post will appear here immediately.</p></div> : posts.map((post) => (
            <article className={`place-post ${post.kind}`} key={post.id}>
              <div className="post-avatar">{initials(post.name)}</div>
              <div className="post-body">
                <div className="post-meta"><strong>{post.name}</strong><span>{post.kind === "story" ? "Travel story" : "Comment"}</span></div>
                {post.title && <h4>{post.title}</h4>}
                <p>{post.message}</p>
                <div className="post-footer"><small>{new Date(post.createdAt).toLocaleDateString()}</small><button type="button" onClick={() => like(post.id)}><Heart size={15}/> {post.likes || 0}</button></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
