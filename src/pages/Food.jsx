import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

export default function Food() {
  const foodCategories = [
    {
      slug: "east-india",
      icon: "🍚",
      title: "East Indian Cuisine",
      text:
        "Discover the rich flavours of Bengal, Odisha, Assam, Bihar and the eastern regions of India.",
      image: "/images/food/east-india.webp",
    },

    {
      slug: "north-india",
      icon: "🫓",
      title: "North Indian Cuisine",
      text:
        "Explore hearty flavours, traditional breads, rich curries and culinary traditions from North India.",
      image: "/images/food/north-india.webp",
    },

    {
      slug: "south-india",
      icon: "🥥",
      title: "South Indian Cuisine",
      text:
        "Experience the diverse flavours of Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana.",
      image: "/images/food/south-india.webp",
    },

    {
      slug: "west-india",
      icon: "🥘",
      title: "West Indian Cuisine",
      text:
        "Explore the distinctive cuisines of Maharashtra, Gujarat, Goa and the western regions of India.",
      image: "/images/food/west-india.webp",
    },

    {
      slug: "street-food",
      icon: "🌶️",
      title: "Street Food",
      text:
        "Discover India's irresistible street food culture, from spicy chaats to famous regional favourites.",
      image: "/images/food/street-food.webp",
    },

    {
      slug: "sweets-drinks",
      icon: "🍬",
      title: "Sweets & Drinks",
      text:
        "Taste India's beloved sweets, traditional desserts and refreshing drinks enjoyed across generations.",
      image: "/images/food/sweets-drinks.webp",
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
        eyebrow="INDIAN CUISINE"
        title="A journey through the flavours of India."
        text="Discover the regional cuisines, street food, sweets and traditional flavours that make Indian food so diverse."
      />

      {/* FOOD CATEGORIES */}
      <div className="cultureGrid">

        {foodCategories.map((item) => (
          <Link
            to={`/food/${item.slug}`}
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

        <span>INDIAN FOOD CULTURE</span>

        <h2>
          Every region has a <i>flavour.</i>
        </h2>

        <p>
          From traditional home cooking to bustling street food,
          India's cuisine reflects its regions, communities,
          traditions and history.
        </p>

        <Link
          to="/explore"
          className="promoLink"
        >
          Explore India's Food →
        </Link>

      </div>

    </section>
  );
}