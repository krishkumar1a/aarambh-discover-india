import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function HistoricCities() {
  const cities = [
    {
      name: "Varanasi",
      slug: "varanasi",
      state: "Uttar Pradesh",
      image: "/images/varanasi.webp",
      description:
        "One of the world's oldest living cities, known for its ghats, temples and spiritual traditions.",
    },
    {
      name: "Jaipur",
      slug: "jaipur",
      state: "Rajasthan",
      image: "/images/jaipur.webp",
      description:
        "The Pink City, celebrated for its royal architecture, colourful streets and historic palaces.",
    },
    {
      name: "Agra",
      slug: "agra",
      state: "Uttar Pradesh",
      image: "/images/agra.webp",
      description:
        "A historic Mughal city famous for the Taj Mahal, Agra Fort and its rich architectural heritage.",
    },
    {
      name: "Kolkata",
      slug: "kolkata",
      state: "West Bengal",
      image: "/images/kolkata.webp",
      description:
        "A city of colonial architecture, literature, art and cultural traditions.",
    },
    {
      name: "Udaipur",
      slug: "udaipur",
      state: "Rajasthan",
      image: "/images/udaipur.webp",
      description:
        "The City of Lakes, known for its palaces, lakes and elegant Rajput heritage.",
    },
    {
      name: "Mysore",
      slug: "mysore",
      state: "Karnataka",
      image: "/images/mysore.webp",
      description:
        "A royal city known for its magnificent palace, traditional celebrations and cultural heritage.",
    },
  ];

  return (
    <section className="section page">

      <Link to="/heritage" className="backLink">
        ← Back to Heritage
      </Link>

      <SectionHeading
        eyebrow="HISTORIC CITIES"
        title="Cities where history still lives."
        text="Explore India's historic cities through their architecture, streets, traditions, people and stories."
      />

      <div className="monumentGrid">

        {cities.map((city) => (
          <article
            className="monumentCard"
            key={city.name}
          >

            {/* CLICKABLE PHOTO */}
            <Link
              to={`/heritage/cities/${city.slug}`}
              className="monumentImageLink"
            >
              <img
                src={city.image}
                alt={city.name}
              />
            </Link>

            <div className="monumentInfo">

              <small>📍 {city.state}</small>

              <h3>{city.name}</h3>

              <p>{city.description}</p>

              {/* CLICKABLE EXPLORE BUTTON */}
              <Link
                to={`/heritage/cities/${city.slug}`}
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