import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

export default function Culture() {
  const { t } = useLanguage();

  const culture = t?.culture || {};
  const page = culture.page || {};
  const categories = culture.categories || {};
  const promo = culture.promo || {};

  const cultureCategories = [
    {
      slug: "festivals",
      icon: "🎉",
      title: categories.festivals?.title || "Festivals & Celebrations",
      text:
        categories.festivals?.text ||
        "Experience India's vibrant festivals, colourful celebrations, rituals and traditions passed through generations.",
      explore:
        categories.festivals?.explore ||
        "Explore Festivals & Celebrations",
      image: "/images/culture/festivals & celebrations/festivals.webp",
    },

    {
      slug: "dance-music",
      icon: "💃",
      title: categories.danceMusic?.title || "Dance & Music",
      text:
        categories.danceMusic?.text ||
        "Discover India's classical and folk dance and music traditions that express stories, emotions and regional identity.",
      explore:
        categories.danceMusic?.explore ||
        "Explore Dance & Music",
      image: "/images/culture/dance & music/dance.webp",
    },

    {
      slug: "clothing",
      icon: "🥻",
      title: categories.clothing?.title || "Traditional Clothing",
      text:
        categories.clothing?.text ||
        "Explore India's diverse traditional clothing, handlooms, textiles and regional weaving traditions.",
      explore:
        categories.clothing?.explore ||
        "Explore Traditional Clothing",
      image: "/images/culture/clothing/traditionss.webp",
    },

    {
      slug: "art-storytelling",
      icon: "🎨",
      title:
        categories.artStorytelling?.title ||
        "Art & Storytelling",
      text:
        categories.artStorytelling?.text ||
        "Explore folk art, paintings, theatre and storytelling traditions shaped by generations of Indian communities.",
      explore:
        categories.artStorytelling?.explore ||
        "Explore Art & Storytelling",
      image: "/images/culture/art-storytelling/art.webp",
    },

    {
      slug: "traditions-lifestyle",
      icon: "🏡",
      title:
        categories.traditionsLifestyle?.title ||
        "Traditions & Lifestyle",
      text:
        categories.traditionsLifestyle?.text ||
        "Discover everyday customs, rituals, communities and ways of life that make India's cultural identity unique.",
      explore:
        categories.traditionsLifestyle?.explore ||
        "Explore Traditions & Lifestyle",
      image: "/images/culture/traditions-lifestyle/traditionss.webp",
    },

    {
      slug: "languages-literature",
      icon: "📖",
      title:
        categories.languagesLiterature?.title ||
        "Languages & Literature",
      text:
        categories.languagesLiterature?.text ||
        "Discover India's rich linguistic diversity, regional literature, poetry, storytelling and written traditions.",
      explore:
        categories.languagesLiterature?.explore ||
        "Explore Languages & Literature",
      image: "/images/culture/language/lang.webp",
    },
  ];

  return (
    <section className="section page">

      {/* BACK */}
      <Link to="/" className="backLink">
        {page.back || "← Back to Home"}
      </Link>

      {/* HEADER */}
      <SectionHeading
        eyebrow={page.eyebrow || "INDIA'S CULTURE"}
        title={
          page.title ||
          "A culture as diverse as the land itself."
        }
        text={
          page.description ||
          "Discover the festivals, music, clothing, art, traditions and languages that bring India's cultural identity to life."
        }
      />

      {/* CULTURE CATEGORIES */}
      <div className="cultureGrid">

        {cultureCategories.map((item) => (
          <Link
            to={`/culture/${item.slug}`}
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
                {item.explore} →
              </span>

            </div>

          </Link>
        ))}

      </div>

      {/* PROMO */}
      <div className="heritagePromo">

        <span>
          {promo.eyebrow || "LIVING CULTURE"}
        </span>

        <h2>
          {promo.title || "Culture isn't just history."}
        </h2>

        <p>
          {promo.description ||
            "It lives in India's festivals, music, clothing, art, traditions, languages and the everyday lives of its people."}
        </p>

        <Link
          to="/explore"
          className="promoLink"
        >
          {promo.link || "Explore India's Culture →"}
        </Link>

      </div>

    </section>
  );
}