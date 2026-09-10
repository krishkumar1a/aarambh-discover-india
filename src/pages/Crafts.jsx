import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function Crafts() {
  const craftCategories = [
    {
      slug: "pottery",
      icon: "🏺",
      title: "Pottery & Ceramics",
      text:
        "Discover India's traditional pottery, ceramics and clay craftsmanship shaped by generations of artisans.",
      image: "/images/crafts/pottery.webp",
    },

    {
      slug: "handloom-textiles",
      icon: "🧵",
      title: "Handloom & Textiles",
      text:
        "Explore India's handwoven fabrics, traditional looms, embroidery and textile traditions.",
      image: "/images/crafts/textiles.webp",
    },

    {
      slug: "folk-art",
      icon: "🎨",
      title: "Folk Art",
      text:
        "Discover paintings, decorative arts and artistic traditions rooted in India's communities.",
      image: "/images/crafts/folk-art.webp",
    },

    {
      slug: "woodcraft",
      icon: "🪵",
      title: "Woodcraft",
      text:
        "Explore India's intricate wooden carvings, toys, furniture and traditional craftsmanship.",
      image: "/images/crafts/woodcraft.webp",
    },

    {
      slug: "jewellery-metalwork",
      icon: "💍",
      title: "Jewellery & Metalwork",
      text:
        "Discover traditional jewellery, metal crafts and regional ornament-making traditions.",
      image: "/images/crafts/jewellery.webp",
    },

    {
      slug: "bamboo-cane",
      icon: "🧺",
      title: "Bamboo & Cane",
      text:
        "Explore sustainable handmade crafts created from bamboo, cane and other natural materials.",
      image: "/images/crafts/bamboo.webp",
    },
  ];

  return (
    <section className="section page">

      {/* BACK */}
      <Link to="/" className="backLink">
        ← Back to Home
      </Link>

      {/* HEADER */}
      <SectionHeading
        eyebrow="INDIA'S CRAFTS"
        title="Made by hand. Carried through generations."
        text="Explore the artisans, materials and traditions behind India's extraordinary craftsmanship."
      />

      {/* CRAFT CATEGORIES */}
      <div className="cultureGrid">

        {craftCategories.map((item) => (
          <Link
            to={`/crafts/${item.slug}`}
            className="heritageCard cultureCard"
            key={item.slug}
          >

            {/* IMAGE */}
            <div className="cultureImage">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>

            {/* CONTENT */}
            <div className="cultureInfo">

              <b>{item.icon}</b>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span>
                Explore {item.title} →
              </span>

            </div>

          </Link>
        ))}

      </div>

      {/* PROMO */}
      <div className="heritagePromo">

        <span>ARTISANS OF INDIA</span>

        <h2>
          More than crafts. <i>Living traditions.</i>
        </h2>

        <p>
          Behind every handmade object is an artisan,
          a community and a tradition passed from one
          generation to the next.
        </p>

        <Link
          to="/explore"
          className="promoLink"
        >
          Explore India's Crafts →
        </Link>

      </div>

    </section>
  );
}