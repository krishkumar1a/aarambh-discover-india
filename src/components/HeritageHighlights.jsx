import { getLocationHeritage } from "../data/locationHeritage";

export default function HeritageHighlights({ location }) {
  const heritage = getLocationHeritage(location || "");

  if (!heritage) {
    return (
      <section className="heritage-highlights heritage-empty">
        <div className="heritage-section-heading">
          <span>🏛️ LOCATION HERITAGE GUIDE</span>
          <h2>Select a featured destination to discover its stories.</h2>
          <p>Choose Varanasi, Patna, Jaipur, Kolkata or Bodh Gaya to unlock iconic sites and hidden heritage gems.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="heritage-highlights">
      <div className="heritage-section-heading">
        <span>🏛️ CURATED FOR {location.toUpperCase()}</span>
        <h2>Iconic landmarks & hidden heritage.</h2>
        <p>Balance famous places with lesser-known stories for a richer journey.</p>
      </div>

      <div className="heritage-columns">
        <div className="heritage-column">
          <div className="heritage-column-title">
            <span className="heritage-icon">⭐</span>
            <div><small>MUST EXPERIENCE</small><h3>Iconic Heritage Sites</h3></div>
          </div>
          {heritage.iconic.map((site, index) => (
            <article className="heritage-site-card" key={site.name}>
              <span className="site-number">0{index + 1}</span>
              <div><span className="site-tag">{site.tag}</span><h4>{site.name}</h4><p>{site.description}</p></div>
            </article>
          ))}
        </div>

        <div className="heritage-column hidden-column">
          <div className="heritage-column-title">
            <span className="heritage-icon">💎</span>
            <div><small>GO BEYOND THE OBVIOUS</small><h3>Hidden Heritage Gems</h3></div>
          </div>
          {heritage.hidden.map((site, index) => (
            <article className="heritage-site-card hidden-site-card" key={site.name}>
              <span className="site-number">0{index + 1}</span>
              <div><span className="site-tag">{site.tag}</span><h4>{site.name}</h4><p>{site.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
