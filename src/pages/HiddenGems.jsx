import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function HiddenGems() {
  const sites = [
    {
      name: "Tawang Monastery",
      slug: "tawang-monastery",
      state: "Arunachal Pradesh",
      image: "/images/heritage/hiddengems/tawang.webp",
      description:
        "A magnificent Himalayan monastery surrounded by dramatic mountains, peaceful valleys and rich Buddhist traditions.",
    },
    {
      name: "Majuli",
      slug: "majuli",
      state: "Assam",
      image: "/images/heritage/hiddengems/majuli.webp",
      description:
        "A culturally rich river island known for its monasteries, traditional arts, vibrant festivals and Assamese heritage.",
    },
    {
      name: "Champaner-Pavagadh",
      slug: "champaner-pavagadh",
      state: "Gujarat",
      image: "/images/heritage/hiddengems/champaner.webp",
      description:
        "An extraordinary archaeological landscape where ancient temples, mosques, forts and stepwells reveal centuries of history.",
    },
    {
      name: "Dholavira",
      slug: "dholavira",
      state: "Gujarat",
      image: "/images/heritage/hiddengems/dholavira.webp",
      description:
        "An ancient Harappan city in the Rann of Kutch showcasing remarkable urban planning, water systems and archaeological remains.",
    },
    {
      name: "Mandu",
      slug: "mandu",
      state: "Madhya Pradesh",
      image: "/images/heritage/hiddengems/mandu.webp",
      description:
        "A historic hilltop city filled with magnificent palaces, gateways, mosques and romantic stories from medieval India.",
    },
    {
      name: "Chettinad",
      slug: "chettinad",
      state: "Tamil Nadu",
      image: "/images/heritage/hiddengems/chetinad.webp",
      description:
        "A fascinating region famous for grand mansions, distinctive architecture, traditional cuisine and the heritage of the Chettiar community.",
    },
  ];

  return (
    <section className="section page">

      <Link to="/heritage" className="backLink">
        ← Back to Heritage
      </Link>

      <SectionHeading
        eyebrow="HIDDEN GEMS OF INDIA"
        title="Places that deserve to be discovered."
        text="Step beyond India's famous landmarks and discover lesser-known places shaped by remarkable history, architecture, culture and landscapes."
      />

      <div className="monumentGrid">

        {sites.map((site) => (
          <article
            className="monumentCard"
            key={site.name}
          >

            {/* CLICKABLE PHOTO */}
            <Link
              to={`/heritage/hidden-gems/${site.slug}`}
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
                to={`/heritage/hidden-gems/${site.slug}`}
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