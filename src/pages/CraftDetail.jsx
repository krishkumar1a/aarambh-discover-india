import { Link, useParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const craftCategories = {
  pottery: {
    eyebrow: "INDIAN POTTERY & CERAMICS",
    title: "Clay shaped by generations of craftsmanship.",
    text:
      "Discover India's diverse pottery traditions, from everyday vessels to decorative ceramics shaped by regional techniques.",

    items: [
      {
        name: "Blue Pottery",
        slug: "blue-pottery",
        region: "Rajasthan",
        image: "/images/crafts/pottery/blue-pottery.webp",
        description:
          "A distinctive decorative pottery tradition known for colourful glazed surfaces and intricate floral and geometric designs.",
      },
      {
        name: "Terracotta",
        slug: "terracotta",
        region: "Across India",
        image: "/images/crafts/pottery/terracotta.webp",
        description:
          "Traditional fired clay craft used to create pottery, sculptures, lamps and decorative objects.",
      },
      {
        name: "Khurja Pottery",
        slug: "khurja-pottery",
        region: "Uttar Pradesh",
        image: "/images/crafts/pottery/khurja.webp",
        description:
          "A celebrated pottery tradition known for colourful ceramic vessels, painted patterns and glazed surfaces.",
      },
      {
        name: "Bankura Horse",
        slug: "bankura-horse",
        region: "West Bengal",
        image: "/images/crafts/pottery/bankura.webp",
        description:
          "A famous terracotta craft of Bengal recognised for its stylised horse figures and distinctive form.",
      },
      {
        name: "Longpi Pottery",
        slug: "longpi-pottery",
        region: "Manipur",
        image: "/images/crafts/pottery/longpi.webp",
        description:
          "A traditional pottery style from Manipur made using distinctive natural materials and handcrafting techniques.",
      },
      {
        name: "Black Pottery",
        slug: "black-pottery",
        region: "Uttar Pradesh",
        image: "/images/crafts/pottery/black-pottery.webp",
        description:
          "Traditional black pottery known for its dark polished surface and detailed decorative patterns.",
      },
    ],
  },

  "handloom-textiles": {
    eyebrow: "INDIAN HANDLOOM & TEXTILES",
    title: "Threads woven into India's cultural identity.",
    text:
      "Explore India's remarkable handloom traditions, regional fabrics, embroidery and weaving techniques.",

    items: [
      {
        name: "Banarasi Weaving",
        slug: "banarasi-weaving",
        region: "Uttar Pradesh",
        image: "/images/crafts/textiles/banarasi.webp",
        description:
          "A luxurious weaving tradition from Varanasi known for intricate patterns, silk fabrics and detailed designs.",
      },
      {
        name: "Kanjivaram Weaving",
        slug: "kanjivaram-weaving",
        region: "Tamil Nadu",
        image: "/images/crafts/textiles/kanjivaram.webp",
        description:
          "A celebrated South Indian silk weaving tradition known for rich colours and elaborate borders.",
      },
      {
        name: "Phulkari Embroidery",
        slug: "phulkari-embroidery",
        region: "Punjab",
        image: "/images/crafts/textiles/phulkari.webp",
        description:
          "A vibrant embroidery tradition featuring colourful floral patterns and detailed handwork.",
      },
      {
        name: "Chikankari",
        slug: "chikankari",
        region: "Uttar Pradesh",
        image: "/images/crafts/textiles/chikankari.webp",
        description:
          "A delicate embroidery tradition from Lucknow known for elegant patterns and fine hand stitching.",
      },
      {
        name: "Ikat",
        slug: "ikat",
        region: "Odisha & Telangana",
        image: "/images/crafts/textiles/ikat.webp",
        description:
          "A resist-dyeing and weaving technique that creates distinctive geometric and blurred patterns.",
      },
      {
        name: "Pochampally",
        slug: "pochampally",
        region: "Telangana",
        image: "/images/crafts/textiles/pochampally.webp",
        description:
          "A renowned handloom tradition known for colourful Ikat textiles and geometric patterns.",
      },
    ],
  },

  "folk-art": {
    eyebrow: "INDIAN FOLK ART",
    title: "Paintings that preserve stories and traditions.",
    text:
      "Discover India's regional folk-art traditions where colour, symbolism and storytelling come together.",

    items: [
      {
        name: "Madhubani",
        slug: "madhubani",
        region: "Bihar",
        image: "/images/crafts/folk-art/madhubani.webp",
        description:
          "A vibrant folk painting tradition known for bold lines, geometric patterns and themes from nature and mythology.",
      },
      {
        name: "Warli",
        slug: "warli",
        region: "Maharashtra",
        image: "/images/crafts/folk-art/warli.webp",
        description:
          "A tribal art tradition using simple geometric figures to depict community life, nature and celebrations.",
      },
      {
        name: "Pattachitra",
        slug: "pattachitra",
        region: "Odisha",
        image: "/images/crafts/folk-art/pattachitra.webp",
        description:
          "A detailed traditional painting style known for strong outlines and mythological storytelling.",
      },
      {
        name: "Gond Art",
        slug: "gond-art",
        region: "Madhya Pradesh",
        image: "/images/crafts/folk-art/gond.webp",
        description:
          "A colourful tribal art tradition featuring nature, animals and intricate patterns.",
      },
      {
        name: "Kalamkari",
        slug: "kalamkari",
        region: "South India",
        image: "/images/crafts/folk-art/kalamkari.webp",
        description:
          "A traditional textile art involving hand-drawn designs, natural dyes and narrative themes.",
      },
      {
        name: "Phad Painting",
        slug: "phad-painting",
        region: "Rajasthan",
        image: "/images/crafts/folk-art/phad.webp",
        description:
          "A traditional scroll-painting style used to visually narrate stories of local heroes and traditions.",
      },
    ],
  },

  woodcraft: {
    eyebrow: "INDIAN WOODCRAFT",
    title: "Carved from wood. Shaped by tradition.",
    text:
      "Explore India's wooden toys, carvings, furniture and decorative crafts created by skilled artisans.",

    items: [
      {
        name: "Kondapalli Toys",
        slug: "kondapalli-toys",
        region: "Andhra Pradesh",
        image: "/images/crafts/woodcraft/kondapalli.webp",
        description:
          "Lightweight wooden toys traditionally carved and painted by artisans of Kondapalli.",
      },
      {
        name: "Channapatna Toys",
        slug: "channapatna-toys",
        region: "Karnataka",
        image: "/images/crafts/woodcraft/channapatna.webp",
        description:
          "Colourful wooden toys known for smooth shapes, traditional craftsmanship and natural finishes.",
      },
      {
        name: "Saharanpur Woodcraft",
        slug: "saharanpur-woodcraft",
        region: "Uttar Pradesh",
        image: "/images/crafts/woodcraft/saharanpur.webp",
        description:
          "Intricately carved wooden furniture and decorative objects made by skilled artisans.",
      },
      {
        name: "Rajasthan Wood Carving",
        slug: "rajasthan-wood-carving",
        region: "Rajasthan",
        image: "/images/crafts/woodcraft/rajasthan.webp",
        description:
          "Traditional carving techniques used to create furniture, doors, panels and decorative objects.",
      },
      {
        name: "Kerala Wood Carving",
        slug: "kerala-wood-carving",
        region: "Kerala",
        image: "/images/crafts/woodcraft/kerala.webp",
        description:
          "A traditional craft featuring detailed carving inspired by architecture, mythology and nature.",
      },
      {
        name: "Wooden Masks",
        slug: "wooden-masks",
        region: "Across India",
        image: "/images/crafts/woodcraft/masks.webp",
        description:
          "Hand-carved masks used in performances, rituals and decorative traditions across different regions.",
      },
    ],
  },

  "jewellery-metalwork": {
    eyebrow: "INDIAN JEWELLERY & METALWORK",
    title: "Metal shaped into art, identity and ornament.",
    text:
      "Discover India's traditional jewellery and metalworking traditions created through generations of skilled craftsmanship.",

    items: [
      {
        name: "Dhokra",
        slug: "dhokra",
        region: "Central & Eastern India",
        image: "/images/crafts/jewellery/dhokra.webp",
        description:
          "An ancient metal-casting tradition known for handcrafted figures and textured decorative objects.",
      },
      {
        name: "Kundan",
        slug: "kundan",
        region: "Rajasthan",
        image: "/images/crafts/jewellery/kundan.webp",
        description:
          "A traditional jewellery technique known for carefully set gemstones and elaborate ornamentation.",
      },
      {
        name: "Meenakari",
        slug: "meenakari",
        region: "Rajasthan",
        image: "/images/crafts/jewellery/meenakari.webp",
        description:
          "A decorative metalwork tradition involving colourful enamel designs applied to jewellery and objects.",
      },
      {
        name: "Thewa",
        slug: "thewa",
        region: "Rajasthan",
        image: "/images/crafts/jewellery/thewa.webp",
        description:
          "A distinctive jewellery craft combining intricate gold work with coloured glass.",
      },
      {
        name: "Bidriware",
        slug: "bidriware",
        region: "Karnataka",
        image: "/images/crafts/jewellery/bidriware.webp",
        description:
          "A traditional metal craft recognised for dark surfaces decorated with contrasting inlay work.",
      },
      {
        name: "Filigree",
        slug: "filigree",
        region: "Odisha",
        image: "/images/crafts/jewellery/filigree.webp",
        description:
          "A delicate metalworking technique involving fine wires shaped into intricate jewellery and decorative designs.",
      },
    ],
  },

  "bamboo-cane": {
    eyebrow: "INDIAN BAMBOO & CANE CRAFT",
    title: "Natural materials shaped into everyday art.",
    text:
      "Explore sustainable traditions using bamboo, cane and other natural materials across India's regions.",

    items: [
      {
        name: "Bamboo Baskets",
        slug: "bamboo-baskets",
        region: "Northeast India",
        image: "/images/crafts/bamboo/baskets.webp",
        description:
          "Handwoven baskets made from bamboo and natural fibres for storage, farming and everyday use.",
      },
      {
        name: "Cane Furniture",
        slug: "cane-furniture",
        region: "Assam",
        image: "/images/crafts/bamboo/furniture.webp",
        description:
          "Traditional furniture crafted from flexible cane using regional weaving techniques.",
      },
      {
        name: "Bamboo Weaving",
        slug: "bamboo-weaving",
        region: "Northeast India",
        image: "/images/crafts/bamboo/weaving.webp",
        description:
          "Skilled weaving techniques used to transform bamboo into useful and decorative objects.",
      },
      {
        name: "Bamboo Instruments",
        slug: "bamboo-instruments",
        region: "Across India",
        image: "/images/crafts/bamboo/instruments.webp",
        description:
          "Traditional musical instruments created from bamboo and other natural materials.",
      },
      {
        name: "Cane Baskets",
        slug: "cane-baskets",
        region: "Northeast India",
        image: "/images/crafts/bamboo/cane-baskets.webp",
        description:
          "Handwoven cane products combining practical everyday use with regional craftsmanship.",
      },
      {
        name: "Bamboo Decor",
        slug: "bamboo-decor",
        region: "Across India",
        image: "/images/crafts/bamboo/decor.webp",
        description:
          "Decorative handmade objects created from bamboo using traditional artisan techniques.",
      },
    ],
  },
};

/* -------------------------------------------------------
   CATEGORY ALIASES
   ------------------------------------------------------- */

const categoryAliases = {
  jewellery: "jewellery-metalwork",
  jewelry: "jewellery-metalwork",
  "jewellery-metalwork": "jewellery-metalwork",

  pottery: "pottery",

  textiles: "handloom-textiles",
  handloom: "handloom-textiles",
  "handloom-textiles": "handloom-textiles",

  "folk-art": "folk-art",
  folkart: "folk-art",

  woodcraft: "woodcraft",
  wood: "woodcraft",

  "bamboo-cane": "bamboo-cane",
  bamboo: "bamboo-cane",
  cane: "bamboo-cane",
};

export default function CraftDetail() {
  const { slug } = useParams();

  /*
    Resolve the actual category using aliases.
    This allows:
      /crafts/jewellery
      /crafts/jewelry
      /crafts/jewellery-metalwork

    to open the same category.
  */
  const categoryKey = categoryAliases[slug] || slug;
  const category = craftCategories[categoryKey];

  if (!category) {
    return (
      <section className="section center">
        <h1>Craft category not found.</h1>

        <p>
          We couldn't find the craft category you're looking for.
        </p>

        <Link to="/crafts" className="secondary">
          ← Back to Crafts
        </Link>
      </section>
    );
  }

  return (
    <section className="section page">

      {/* BACK */}
      <Link to="/crafts" className="backLink">
        ← Back to Crafts
      </Link>

      {/* HEADER */}
      <SectionHeading
        eyebrow={category.eyebrow}
        title={category.title}
        text={category.text}
      />

      {/* CRAFT ITEMS */}
      <div className="monumentGrid">

        {category.items.map((item) => (
          <article
            className="monumentCard"
            key={item.slug}
          >

            {/* CLICKABLE IMAGE */}
            <Link
              to={`/crafts/${categoryKey}/${item.slug}`}
              className="craftImageLink"
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

              {/* EXPLORE STORY */}
              <Link
                to={`/crafts/${categoryKey}/${item.slug}`}
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