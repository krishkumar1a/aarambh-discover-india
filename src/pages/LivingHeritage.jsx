import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock3, MapPin, Play, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { livingHeritageCategories, livingHeritageItems } from "../data/livingHeritageData";
import PlaceCommunity from "../components/PlaceCommunity";

const categoryNames = {
  all: "All",
  heritage: "Heritage",
  food: "Food",
  culture: "Culture",
  craft: "Crafts",
};

function ItemCard({ item }) {
  return (
    <Link
      to={`/living-heritage/${item.type}/${item.slug}`}
      className="living-item-card"
    >
      <div className="living-item-image">
        <img src={item.image} alt={item.name} loading="lazy" />
        <span>{item.type === "craft" ? "CRAFT" : item.type.toUpperCase()}</span>
      </div>
      <div className="living-item-body">
        <small>{item.region}</small>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <strong>Explore living story <ArrowRight size={15} /></strong>
      </div>
    </Link>
  );
}

function LivingLanding() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return livingHeritageItems.filter((item) => {
      const categoryMatch = active === "all" || item.type === active;
      const text = `${item.name} ${item.region} ${item.category} ${item.description}`.toLowerCase();
      return categoryMatch && (!q || text.includes(q));
    });
  }, [active, query]);

  return (
    <main className="living-page">
      <section className="living-hero living-hero-index">
        <div className="living-hero-copy">
          <span className="living-kicker"><Sparkles size={15} /> LIVING HERITAGE</span>
          <h1>India's heritage is not frozen in time.<br /><em>It is still being lived.</em></h1>
          <p>
            Explore the food, festivals, music, traditions, crafts and historic places that continue to shape everyday India.
            Pick anything below to open its full Living Heritage experience.
          </p>
          <div className="living-hero-actions">
            <a href="#living-library" className="living-primary">Explore the collection <ArrowRight size={17} /></a>
            <Link to="/community" className="living-secondary">Community discoveries</Link>
          </div>
        </div>
        <div className="living-hero-art living-hero-art-index">
          <img src="/images/tajmahal.webp" alt="Indian living heritage" />
          <div className="hero-art-card">
            <span>135+</span>
            <div><small>LIVING TRADITIONS</small><strong>Places, food, culture & crafts</strong></div>
          </div>
          <div className="hero-art-orbit orbit-one" /><div className="hero-art-orbit orbit-two" />
        </div>
      </section>

      <section className="living-section" id="living-library">
        <div className="living-heading">
          <div>
            <span>01 · EXPLORE LIVING INDIA</span>
            <h2>Choose what you want to experience.</h2>
          </div>
          <p>
            Start with a category, search for a specific tradition, or open any card to enter the same immersive story format used for the Taj Mahal.
          </p>
        </div>

        <div className="living-filter-row">
          <div className="living-filters" role="tablist" aria-label="Living heritage categories">
            {livingHeritageCategories.map((category) => (
              <button
                key={category.key}
                className={active === category.key ? "active" : ""}
                onClick={() => setActive(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
          <label className="living-search">
            <Search size={17} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Taj Mahal, Holi, Biryani..."
            />
          </label>
        </div>

        <div className="living-results-head">
          <span>{filtered.length} experiences</span>
          <span>{categoryNames[active]} · India</span>
        </div>

        <div className="living-library-grid">
          {filtered.map((item) => <ItemCard item={item} key={`${item.type}-${item.slug}`} />)}
        </div>
      </section>
    </main>
  );
}

function LivingDetail() {
  const { type, slug } = useParams();
  const item = livingHeritageItems.find((entry) => entry.type === type && entry.slug === slug);

  const related = useMemo(() => {
    if (!item) return [];
    return livingHeritageItems
      .filter((entry) => entry.type === item.type && entry.slug !== item.slug)
      .slice(0, 3);
  }, [item]);

  if (!item) {
    return (
      <main className="living-page">
        <section className="living-empty">
          <span className="living-kicker">LIVING HERITAGE</span>
          <h1>Experience not found.</h1>
          <Link to="/living-heritage" className="living-primary">Back to Living Heritage</Link>
        </section>
      </main>
    );
  }

  const timeline = [
    { year: "ORIGINS", title: "Where the story begins", text: `${item.name} grew from the regional history, communities and environments of ${item.region}.` },
    { year: "EVOLUTION", title: "Tradition takes shape", text: "Generations adapted techniques, recipes, rituals and creative expressions while keeping the core identity alive." },
    { year: "COMMUNITY", title: "People carry it forward", text: "Families, artists, cooks, performers, artisans and local communities continue to pass the knowledge from one generation to another." },
    { year: "TODAY", title: "Heritage in everyday life", text: `${item.name} remains part of India's living cultural landscape, experienced by communities and visitors alike.` },
  ];

  return (
    <main className="living-page living-detail-page">
      <section className="living-hero living-detail-hero">
        <div className="living-hero-copy">
          <Link to="/living-heritage" className="living-back"><ArrowLeft size={16} /> All Living Heritage</Link>
          <span className="living-kicker"><Sparkles size={15} /> {item.type === "craft" ? "CRAFTS" : item.type.toUpperCase()} · {item.region.toUpperCase()}</span>
          <h1>{item.name}.<br /><em>Still alive today.</em></h1>
          <p>{item.description}</p>
          <div className="living-hero-actions">
            <a href="#story" className="living-primary">Explore the story <ArrowRight size={17} /></a>
            <Link to="/community" className="living-secondary">See community discoveries</Link>
          </div>
        </div>
        <div className="living-hero-art">
          <img src={item.image} alt={item.name} />
          <div className="hero-art-card"><span>LIVE</span><div><small>REGION</small><strong>{item.region}</strong></div></div>
          <div className="hero-art-orbit orbit-one" /><div className="hero-art-orbit orbit-two" />
        </div>
      </section>

      <section className="living-section" id="story">
        <div className="living-heading">
          <div><span>01 · THE LIVING STORY</span><h2>What makes {item.name} more than a thing of the past?</h2></div>
          <p>Living heritage is the knowledge, practice and memory people continue to use, celebrate and share.</p>
        </div>

        <div className="living-story-intro">
          <div>
            <span>THE EXPERIENCE</span>
            <h2>{item.name} lives through people.</h2>
          </div>
          <p>{item.description} Today, its meaning is carried through practice: by communities who make it, celebrate it, cook it, perform it, wear it, preserve it or pass its stories forward.</p>
        </div>

        <div className="living-timeline">
          {timeline.map((step, index) => (
            <article key={step.year} className={`living-timeline-card ${index === timeline.length - 1 ? "current" : ""}`}>
              <span>{step.year}</span>
              <div className="living-timeline-dot" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="living-section living-people-section">
        <div className="living-heading">
          <div><span>02 · PEOPLE & PRACTICE</span><h2>Heritage becomes real when people use it.</h2></div>
          <p>Every living tradition has makers, performers, families, communities and travellers around it.</p>
        </div>
        <div className="living-practice-grid">
          <article><span>01</span><h3>Knowledge</h3><p>Skills and stories move from one generation to the next through teaching, observation and participation.</p></article>
          <article><span>02</span><h3>Practice</h3><p>The tradition stays alive because people continue to cook, create, perform, celebrate, wear or preserve it.</p></article>
          <article><span>03</span><h3>Identity</h3><p>Regional heritage connects people to place, memory, community and a sense of belonging.</p></article>
        </div>
      </section>

      <section className="living-section place-community-wrap">
        <PlaceCommunity
          placeName={item.name}
          placeId={`living-${item.type}-${item.slug}`}
          placeType="Living Heritage Experience"
        />
      </section>

      {related.length > 0 && (
        <section className="living-section living-related-section">
          <div className="living-heading">
            <div><span>03 · KEEP EXPLORING</span><h2>More from {categoryNames[item.type]}.</h2></div>
            <p>Move to another experience without leaving the Living Heritage collection.</p>
          </div>
          <div className="living-related-grid">
            {related.map((entry) => <ItemCard item={entry} key={`${entry.type}-${entry.slug}`} />)}
          </div>
        </section>
      )}

      <section className="living-section living-detail-footer">
        <Link to="/living-heritage" className="living-secondary"><ArrowLeft size={16} /> Browse all 135+ experiences</Link>
        <Link to="/community" className="living-primary">Explore community discoveries <ArrowRight size={16} /></Link>
      </section>
    </main>
  );
}

export default function LivingHeritage() {
  const { type, slug } = useParams();
  return type && slug ? <LivingDetail /> : <LivingLanding />;
}
