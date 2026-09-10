import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function Forts() {
  const forts = [
    {
      name: "Amber Fort",
      slug: "amber-fort",
      state: "Rajasthan",
      image: "/images/amber.webp",
      description:
        "A magnificent hill fort known for its grand courtyards, artistic architecture and royal history.",
    },
    {
      name: "Red Fort",
      slug: "red-fort",
      state: "Delhi",
      image: "/images/redfort.webp",
      description:
        "A historic Mughal fort and one of Delhi's most iconic landmarks.",
    },
    {
      name: "Mehrangarh Fort",
      slug: "mehrangarh-fort",
      state: "Rajasthan",
      image: "/images/Mehrangarh.webp",
      description:
        "A majestic fort rising above Jodhpur, showcasing Rajput architecture and royal heritage.",
    },
    {
      name: "Mysore Palace",
      slug: "mysore-palace",
      state: "Karnataka",
      image: "/images/mysore.webp",
      description:
        "A spectacular palace celebrated for its royal interiors, architecture and illuminated evenings.",
    },
    {
      name: "Chittorgarh Fort",
      slug: "chittorgarh-fort",
      state: "Rajasthan",
      image: "/images/chittorgarh.webp",
      description:
        "One of India's largest forts, carrying stories of Rajput courage, sacrifice and history.",
    },
    {
      name: "City Palace",
      slug: "city-palace",
      state: "Rajasthan",
      image: "/images/citypalace.webp",
      description:
        "A beautiful palace complex overlooking Lake Pichola and reflecting Udaipur's royal heritage.",
    },
  ];

  return (
    <section className="section page">

      <Link to="/heritage" className="backLink">
        ← Back to Heritage
      </Link>

      <SectionHeading
        eyebrow="FORTS & PALACES"
        title="Where India's royal stories live."
        text="Explore magnificent forts and palaces that reveal the kingdoms, architecture and traditions of India's royal past."
      />

      <div className="monumentGrid">

        {forts.map((fort) => (
          <article
            className="monumentCard"
            key={fort.name}
          >

            {/* =================================================
                CLICKABLE PHOTO ONLY
            ================================================= */}

            <Link
              to={`/heritage/forts/${fort.slug}`}
              className="monumentImageLink"
            >
              <img
                src={fort.image}
                alt={fort.name}
              />
            </Link>


            {/* =================================================
                NORMAL CONTENT
            ================================================= */}

            <div className="monumentInfo">

              <small>
                📍 {fort.state}
              </small>

              <h3>
                {fort.name}
              </h3>

              <p>
                {fort.description}
              </p>


              {/* =================================================
                  CLICKABLE BUTTON ONLY
              ================================================= */}

              <Link
                to={`/heritage/forts/${fort.slug}`}
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