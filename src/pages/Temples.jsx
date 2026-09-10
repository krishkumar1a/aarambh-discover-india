import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function Temples() {
  const temples = [
    {
      name: "Kashi Vishwanath Temple",
      slug: "kashi-vishwanath-temple",
      state: "Uttar Pradesh",
      image: "/images/kashi.webp",
      description:
        "One of India's most revered temples, located in the spiritual heart of Varanasi.",
    },
    {
      name: "Jagannath Temple",
      slug: "jagannath-temple",
      state: "Odisha",
      image: "/images/jagannath.webp",
      description:
        "A sacred temple in Puri, renowned for its traditions, architecture and annual Rath Yatra.",
    },
    {
      name: "Meenakshi Amman Temple",
      slug: "meenakshi-amman-temple",
      state: "Tamil Nadu",
      image: "/images/madurai.webp",
      description:
        "A spectacular temple complex famous for its colourful towers and intricate sculptures.",
    },
    {
      name: "Kedarnath Temple",
      slug: "kedarnath-temple",
      state: "Uttarakhand",
      image: "/images/kedarnath.webp",
      description:
        "An ancient Himalayan temple surrounded by dramatic mountains and sacred landscapes.",
    },
    {
      name: "Konark Sun Temple",
      slug: "konark-sun-temple",
      state: "Odisha",
      image: "/images/konark.webp",
      description:
        "A remarkable temple designed as a monumental chariot and celebrated for its stone carvings.",
    },
    {
      name: "Brihadeeswarar Temple",
      slug: "brihadeeswarar-temple",
      state: "Tamil Nadu",
      image: "/images/thanjavur.webp",
      description:
        "A masterpiece of Chola architecture known for its monumental scale and historic significance.",
    },
  ];

  return (
    <section className="section page">

      <Link to="/heritage" className="backLink">
        ← Back to Heritage
      </Link>

      <SectionHeading
        eyebrow="TEMPLES OF INDIA"
        title="Where faith meets architecture."
        text="Discover India's sacred spaces, ancient traditions and extraordinary temple architecture."
      />

      <div className="monumentGrid">
        {temples.map((temple) => (
          <article
            className="monumentCard"
            key={temple.name}
          >

            {/* CLICKABLE PHOTO */}
            <Link
              to={`/heritage/temples/${temple.slug}`}
              className="monumentImageLink"
            >
              <img
                src={temple.image}
                alt={temple.name}
              />
            </Link>

            <div className="monumentInfo">

              <small>📍 {temple.state}</small>

              <h3>{temple.name}</h3>

              <p>{temple.description}</p>

              {/* CLICKABLE BUTTON */}
              <Link
                to={`/heritage/temples/${temple.slug}`}
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