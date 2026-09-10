import { Link, useParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const foodCategories = {
  "east-india": {
    eyebrow: "EAST INDIAN CUISINE",
    title: "Flavours shaped by rivers, rice and tradition.",
    text:
      "Discover the distinctive food traditions of Bengal, Odisha, Assam and Bihar.",

    items: [
      {
        name: "Litti Chokha",
        slug: "litti-chokha",
        region: "Bihar",
        image: "/images/food/east-india/litti-chokha.webp",
        description:
          "A beloved Bihari dish of roasted wheat balls served with spiced mashed vegetables.",
      },
      {
        name: "Rosogolla",
        slug: "rosogolla",
        region: "West Bengal",
        image: "/images/food/east-india/rosogolla.webp",
        description:
          "Soft chhena dumplings soaked in light sugar syrup and celebrated as one of Bengal's iconic sweets.",
      },
      {
        name: "Machher Jhol",
        slug: "machher-jhol",
        region: "West Bengal",
        image: "/images/food/east-india/machher-jhol.webp",
        description:
          "A traditional Bengali fish curry prepared with spices and a light, flavourful gravy.",
      },
      {
        name: "Dalma",
        slug: "dalma",
        region: "Odisha",
        image: "/images/food/east-india/dalma.webp",
        description:
          "A traditional Odia preparation combining lentils and vegetables with gentle spices.",
      },
      {
        name: "Pakhala Bhata",
        slug: "pakhala-bhata",
        region: "Odisha",
        image: "/images/food/east-india/pakhala-bhata.webp",
        description:
          "A traditional fermented rice dish especially enjoyed in Odisha during warmer months.",
      },
      {
        name: "Khar",
        slug: "khar",
        region: "Assam",
        image: "/images/food/east-india/khar.webp",
        description:
          "A distinctive Assamese preparation known for its unique alkaline ingredient and simple flavours.",
      },
    ],
  },

  "north-india": {
    eyebrow: "NORTH INDIAN CUISINE",
    title: "Rich flavours, hearty dishes and timeless traditions.",
    text:
      "Explore the diverse culinary traditions of Punjab, Kashmir, Rajasthan and the northern plains.",

    items: [
      {
        name: "Butter Chicken",
        slug: "butter-chicken",
        region: "Punjab",
        image: "/images/food/north-india/butter-chicken.webp",
        description:
          "A rich and creamy chicken preparation known for its buttery tomato-based gravy.",
      },
      {
        name: "Rajma Chawal",
        slug: "rajma-chawal",
        region: "North India",
        image: "/images/food/north-india/rajma-chawal.webp",
        description:
          "A comforting combination of spiced kidney bean curry served with steamed rice.",
      },
      {
        name: "Chole Bhature",
        slug: "chole-bhature",
        region: "Punjab & North India",
        image: "/images/food/north-india/chole-bhature.webp",
        description:
          "Spiced chickpea curry served with deep-fried, fluffy bhature.",
      },
      {
        name: "Rogan Josh",
        slug: "rogan-josh",
        region: "Kashmir",
        image: "/images/food/north-india/rogan-josh.webp",
        description:
          "A celebrated Kashmiri curry known for aromatic spices and tender meat.",
      },
      {
        name: "Dal Baati Churma",
        slug: "dal-baati-churma",
        region: "Rajasthan",
        image: "/images/food/north-india/dal-baati-churma.webp",
        description:
          "A traditional Rajasthani meal combining baked baati, lentils and sweet churma.",
      },
      {
        name: "Kadhi Pakora",
        slug: "kadhi-pakora",
        region: "North India",
        image: "/images/food/north-india/kadhi-pakora.webp",
        description:
          "A yogurt-based curry with gram-flour fritters, traditionally served with rice.",
      },
    ],
  },

  "south-india": {
    eyebrow: "SOUTH INDIAN CUISINE",
    title: "A world of spice, coconut, rice and tradition.",
    text:
      "Experience the varied flavours of Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana.",

    items: [
      {
        name: "Masala Dosa",
        slug: "masala-dosa",
        region: "South India",
        image: "/images/food/south-india/masala-dosa.webp",
        description:
          "A crisp fermented rice-and-lentil crepe traditionally filled with spiced potato.",
      },
      {
        name: "Idli Sambar",
        slug: "idli-sambar",
        region: "South India",
        image: "/images/food/south-india/idli-sambar.webp",
        description:
          "Soft steamed rice cakes served with lentil-based sambar and traditional chutneys.",
      },
      {
        name: "Hyderabadi Biryani",
        slug: "hyderabadi-biryani",
        region: "Telangana",
        image: "/images/food/south-india/hyderabadi-biryani.png",
        description:
          "A fragrant rice dish layered with meat, aromatic spices and herbs.",
      },
      {
        name: "Appam & Stew",
        slug: "appam-stew",
        region: "Kerala",
        image: "/images/food/south-india/appam-stew.png",
        description:
          "Soft, lacy rice pancakes traditionally paired with a gently spiced coconut-based stew.",
      },
      {
        name: "Pongal",
        slug: "pongal",
        region: "Tamil Nadu",
        image: "/images/food/south-india/pongal.webp",
        description:
          "A traditional rice and lentil preparation enjoyed in both savoury and festive forms.",
      },
      {
        name: "Mysore Pak",
        slug: "mysore-pak",
        region: "Karnataka",
        image: "/images/food/south-india/mysore-pak.webp",
        description:
          "A rich traditional sweet made from gram flour, ghee and sugar.",
      },
    ],
  },

  "west-india": {
    eyebrow: "WEST INDIAN CUISINE",
    title: "Bold flavours from the western coast and beyond.",
    text:
      "Explore the distinctive culinary traditions of Gujarat, Maharashtra, Goa and western India.",

    items: [
      {
        name: "Vada Pav",
        slug: "vada-pav",
        region: "Maharashtra",
        image: "/images/food/west-india/vada-pav.webp",
        description:
          "A spiced potato fritter served inside a bread roll with chutneys and spices.",
      },
      {
        name: "Pav Bhaji",
        slug: "pav-bhaji",
        region: "Maharashtra",
        image: "/images/food/west-india/pav-bhaji.webp",
        description:
          "A rich vegetable mash served with buttered pav and fresh garnishes.",
      },
      {
        name: "Dhokla",
        slug: "dhokla",
        region: "Gujarat",
        image: "/images/food/west-india/dhokla.webp",
        description:
          "A soft and savoury steamed preparation made primarily from fermented gram batter.",
      },
      {
        name: "Undhiyu",
        slug: "undhiyu",
        region: "Gujarat",
        image: "/images/food/west-india/undhiyu.webp",
        description:
          "A traditional mixed vegetable preparation associated with Gujarati cuisine.",
      },
      {
        name: "Goan Fish Curry",
        slug: "goan-fish-curry",
        region: "Goa",
        image: "/images/food/west-india/goan-fish-curry.webp",
        description:
          "A coastal curry combining fish with coconut, spices and tangy flavours.",
      },
      {
        name: "Puran Poli",
        slug: "puran-poli",
        region: "Maharashtra",
        image: "/images/food/west-india/puran-poli.webp",
        description:
          "A traditional sweet flatbread filled with a spiced lentil and jaggery mixture.",
      },
    ],
  },

  "street-food": {
    eyebrow: "INDIAN STREET FOOD",
    title: "The flavours of India, served on the streets.",
    text:
      "Discover the snacks, chaats and quick bites that bring India's streets to life.",

    items: [
      {
        name: "Pani Puri",
        slug: "pani-puri",
        region: "Across India",
        image: "/images/food/street-food/pani-puri.webp",
        description:
          "Crispy hollow puris filled with spiced water, chutneys and flavourful fillings.",
      },
      {
        name: "Samosa",
        slug: "samosa",
        region: "Pan India",
        image: "/images/food/street-food/samosa.webp",
        description:
          "A crisp pastry filled traditionally with spiced potatoes and peas.",
      },
      {
        name: "Aloo Tikki",
        slug: "aloo-tikki",
        region: "North India",
        image: "/images/food/street-food/aloo-tikki.webp",
        description:
          "Crispy potato patties commonly served with chutneys, yogurt and spices.",
      },
      {
        name: "Kathi Roll",
        slug: "kathi-roll",
        region: "Kolkata",
        image: "/images/food/street-food/kathi-roll.webp",
        description:
          "A popular Kolkata street food consisting of fillings wrapped in a flaky paratha.",
      },
      {
        name: "Vada Pav",
        slug: "street-vada-pav",
        region: "Mumbai",
        image: "/images/food/street-food/vada-pav.webp",
        description:
          "Mumbai's iconic street snack combining a spiced potato fritter with pav and chutneys.",
      },
      {
        name: "Jhalmuri",
        slug: "jhalmuri",
        region: "West Bengal",
        image: "/images/food/street-food/jhalmuri.webp",
        description:
          "A crunchy Bengali snack made with puffed rice, spices, vegetables and mustard oil.",
      },
    ],
  },

  "sweets-drinks": {
    eyebrow: "INDIAN SWEETS & DRINKS",
    title: "Sweet traditions and refreshing favourites.",
    text:
      "Taste India's beloved sweets, desserts and traditional drinks enjoyed across generations.",

    items: [
      {
        name: "Jalebi",
        slug: "jalebi",
        region: "Pan India",
        image: "/images/food/sweets-drinks/jalebi.jpeg",
        description:
          "Crispy spiral-shaped sweets soaked in fragrant sugar syrup.",
      },
      {
        name: "Gulab Jamun",
        slug: "gulab-jamun",
        region: "Pan India",
        image: "/images/food/sweets-drinks/gulab-jamun.jpeg",
        description:
          "Soft fried milk-solid dumplings soaked in sweet aromatic syrup.",
      },
      {
        name: "Rasgulla",
        slug: "rasgulla",
        region: "West Bengal & Odisha",
        image: "/images/food/sweets-drinks/rasgulla.jpeg",
        description:
          "Soft chhena-based dumplings cooked and served in light sugar syrup.",
      },
      {
        name: "Lassi",
        slug: "lassi",
        region: "Punjab & North India",
        image: "/images/food/sweets-drinks/lassi.png",
        description:
          "A refreshing yogurt-based drink enjoyed in sweet and savoury varieties.",
      },
      {
        name: "Masala Chai",
        slug: "masala-chai",
        region: "Pan India",
        image: "/images/food/sweets-drinks/masala-chai.jpeg",
        description:
          "A comforting tea prepared with milk, tea leaves and aromatic spices.",
      },
      {
        name: "Filter Coffee",
        slug: "filter-coffee",
        region: "South India",
        image: "/images/food/sweets-drinks/filter-coffee.jpeg",
        description:
          "A strong and aromatic South Indian coffee traditionally prepared using a filter.",
      },
    ],
  },
};

export default function FoodDetail() {
  const { slug } = useParams();

  const category = foodCategories[slug];

  if (!category) {
    return (
      <section className="section center">
        <h1>Food category not found.</h1>

        <p>
          We couldn't find the food category you're looking for.
        </p>

        <Link to="/food" className="secondary">
          ← Back to Food
        </Link>
      </section>
    );
  }

  return (
    <section className="section page">

      <Link to="/food" className="backLink">
        ← Back to Food
      </Link>

      <SectionHeading
        eyebrow={category.eyebrow}
        title={category.title}
        text={category.text}
      />

      <div className="monumentGrid">

        {category.items.map((item) => (
          <article
            className="monumentCard"
            key={item.slug}
          >

            {/* ONLY IMAGE IS CLICKABLE */}
            <Link
              to={`/food/${slug}/${item.slug}`}
              className="cardImageLink"
            >
              <img
                src={item.image}
                alt={item.name}
              />
            </Link>

            <div className="monumentInfo">

              <small>
                📍 {item.region}
              </small>

              <h3>
                {item.name}
              </h3>

              <p>
                {item.description}
              </p>

              {/* ONLY BUTTON IS CLICKABLE */}
              <Link
                to={`/food/${slug}/${item.slug}`}
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