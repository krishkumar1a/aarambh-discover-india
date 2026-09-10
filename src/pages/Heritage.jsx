import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function Heritage() {
  const heritageCategories = [
    {
      title: "Monuments",
      text:
        "Explore India's iconic monuments, timeless architecture and stories carved through centuries.",
      action: "Explore Monuments",
      image: "/images/heritage/monuments.webp",
      path: "/heritage/monuments",
    },

    {
      title: "Forts & Palaces",
      text:
        "Discover magnificent forts, grand palaces and royal architecture shaped by India's rich history.",
      action: "Explore Forts & Palaces",
      image: "/images/heritage/palaces.webp",
      path: "/heritage/forts",
    },

    {
      title: "Temples",
      text:
        "Experience India's ancient temples, sacred traditions and architectural wonders passed through generations.",
      action: "Explore Temples",
      image: "/images/heritage/temples.webp",
      path: "/heritage/temples",
    },

    {
      title: "Historic Cities",
      text:
        "Walk through historic cities, living traditions and cultural landscapes shaped by centuries of history.",
      action: "Explore Historic Cities",
      image: "/images/heritage/historic.webp",
      path: "/heritage/cities",
    },

    {
      title: "UNESCO Heritage",
      text:
        "Explore India's internationally recognised heritage sites, preserving remarkable history, culture and architecture.",
      action: "Explore UNESCO Heritage",
      image: "/images/heritage/unseco.webp",
      path: "/heritage/unesco",
    },

    {
      title: "Hidden Gems",
      text:
        "Discover lesser-known treasures, forgotten stories and cultural landmarks waiting to be explored.",
      action: "Explore Hidden Gems",
      image: "/images/heritage/hidden.webp",
      path: "/heritage/hidden-gems",
    },
  ];

  return (
    <section className="section page">

      {/* =========================
          PAGE HEADING
      ========================== */}

      <SectionHeading
        eyebrow="INDIAN HERITAGE"
        title="Stories carved through centuries."
        text="Explore India's monuments, forts, temples, historic cities, UNESCO sites and hidden cultural treasures."
      />

      {/* =========================
          HERITAGE CATEGORIES
      ========================== */}

      <div className="heritageGrid">
        {heritageCategories.map((item) => (
          <Link
            to={item.path}
            className="heritageCard heritageImageCard"
            key={item.path}
          >
            <div className="heritageImage">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="heritageInfo">
              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span className="heritageDiscover">
                {item.action} →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* =========================
          HERITAGE PROMO
      ========================== */}

      <div className="heritagePromo">
        <span>INDIA'S HERITAGE</span>

        <h2>
          Heritage isn't just <i>history.</i>
        </h2>

        <p>
          It lives in India's monuments, forts, temples,
          historic cities, UNESCO sites and hidden treasures,
          preserving the stories of generations.
        </p>

        <Link
          to="/explore"
          className="promoLink"
        >
          Explore India's Heritage →
        </Link>
      </div>

    </section>
  );
}