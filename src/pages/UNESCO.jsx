import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function UNESCO() {
  const sites = [
    {
      name: "Taj Mahal",
      slug: "taj-mahal",
      state: "Uttar Pradesh",
      image: "/images/tajmahal.webp",
      description:
        "A globally recognised masterpiece of Mughal architecture and one of India's most iconic heritage sites.",
    },
    {
      name: "Khajuraho Group of Monuments",
      slug: "khajuraho-group-of-monuments",
      state: "Madhya Pradesh",
      image: "/images/khajuraho.webp",
      description:
        "A remarkable collection of temples celebrated for their intricate sculptures and extraordinary architecture.",
    },
    {
      name: "Sun Temple, Konark",
      slug: "sun-temple-konark",
      state: "Odisha",
      image: "/images/suntemple.webp",
      description:
        "A spectacular temple designed as a monumental stone chariot dedicated to the Sun God.",
    },
    {
      name: "Ajanta Caves",
      slug: "ajanta-caves",
      state: "Maharashtra",
      image: "/images/ajanta.webp",
      description:
        "Ancient rock-cut caves known for their Buddhist paintings, sculptures and remarkable craftsmanship.",
    },
    {
      name: "Ellora Caves",
      slug: "ellora-caves",
      state: "Maharashtra",
      image: "/images/ellora.webp",
      description:
        "A magnificent complex of Buddhist, Hindu and Jain rock-cut monuments.",
    },
    {
      name: "Sanchi",
      slug: "sanchi",
      state: "Madhya Pradesh",
      image: "/images/sanchi.webp",
      description:
        "An important Buddhist heritage site featuring ancient stupas, gateways and monuments.",
    },
  ];

  return (
    <section className="section page">

      <Link to="/heritage" className="backLink">
        ← Back to Heritage
      </Link>

      <SectionHeading
        eyebrow="UNESCO WORLD HERITAGE"
        title="India's heritage, recognised by the world."
        text="Explore remarkable cultural sites that represent India's history, architecture, art and living traditions."
      />

      <div className="monumentGrid">

        {sites.map((site) => (
          <article
            className="monumentCard"
            key={site.name}
          >

            {/* CLICKABLE PHOTO */}
            <Link
              to={`/heritage/unesco/${site.slug}`}
              className="monumentImageLink"
            >
              <img
                src={site.image}
                alt={site.name}
              />
            </Link>

            <div className="monumentInfo">

              <small>📍 {site.state}</small>

              <h3>{site.name}</h3>

              <p>{site.description}</p>

              {/* CLICKABLE BUTTON */}
              <Link
                to={`/heritage/unesco/${site.slug}`}
                className="secondary"
              >
                Explore Story →
              </Link>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}