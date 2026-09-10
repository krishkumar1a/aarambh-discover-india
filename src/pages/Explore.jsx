import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

import { destinations } from "../data/destinations";
import { heritageData } from "../data/heritageData";

// =========================================================
// EXPLORE DATA
// =========================================================

// ---------------------------------------------------------
// CULTURE
// Data taken from the existing CultureDetail categories
// ---------------------------------------------------------

const cultureItems = [
  // Festivals
  {
    name: "Holi",
    slug: "holi",
    categorySlug: "festivals",
    region: "North India",
    image: "/images/culture/festivals/holi.webp",
    description:
      "The festival of colours celebrated with music, joy, food and communities coming together.",
  },
  {
    name: "Diwali",
    slug: "diwali",
    categorySlug: "festivals",
    region: "Pan India",
    image: "/images/culture/festivals/diwali.webp",
    description:
      "The festival of lights celebrated with lamps, prayers, sweets and family gatherings.",
  },
  {
    name: "Durga Puja",
    slug: "durga-puja",
    categorySlug: "festivals",
    region: "West Bengal",
    image: "/images/culture/festivals/durga-puja.webp",
    description:
      "A grand cultural celebration featuring artistic pandals, music, rituals and community gatherings.",
  },
  {
    name: "Onam",
    slug: "onam",
    categorySlug: "festivals",
    region: "Kerala",
    image: "/images/culture/festivals/onam.webp",
    description:
      "Kerala's harvest festival known for floral designs, traditional celebrations and Onam Sadya.",
  },
  {
    name: "Pongal",
    slug: "pongal",
    categorySlug: "festivals",
    region: "Tamil Nadu",
    image: "/images/culture/festivals/pongal.webp",
    description:
      "A harvest celebration honouring nature, agriculture, prosperity and family traditions.",
  },
  {
    name: "Bihu",
    slug: "bihu",
    categorySlug: "festivals",
    region: "Assam",
    image: "/images/culture/festivals/bihu.webp",
    description:
      "An Assamese festival connected with agriculture, traditional music, dance and community celebrations.",
  },

  // Dance & Music
  {
    name: "Bharatanatyam",
    slug: "bharatanatyam",
    categorySlug: "dance-music",
    region: "Tamil Nadu",
    image: "/images/culture/dance-music/bharatanatyam.webp",
    description:
      "A classical dance tradition known for precise movements and expressive storytelling.",
  },
  {
    name: "Kathak",
    slug: "kathak",
    categorySlug: "dance-music",
    region: "North India",
    image: "/images/culture/dance-music/kathak.webp",
    description:
      "A classical dance tradition known for intricate footwork, spins and storytelling.",
  },
  {
    name: "Kathakali",
    slug: "kathakali",
    categorySlug: "dance-music",
    region: "Kerala",
    image: "/images/culture/dance-music/kathakali.webp",
    description:
      "A dramatic dance tradition recognised for elaborate costumes, makeup and expressive performance.",
  },
  {
    name: "Hindustani Music",
    slug: "hindustani-music",
    categorySlug: "dance-music",
    region: "North India",
    image: "/images/culture/dance-music/hindustani.webp",
    description:
      "A classical musical tradition built around ragas, rhythm and improvisation.",
  },
  {
    name: "Carnatic Music",
    slug: "carnatic-music",
    categorySlug: "dance-music",
    region: "South India",
    image: "/images/culture/dance-music/carnatic.webp",
    description:
      "The classical music tradition of South India known for complex compositions and rhythms.",
  },
  {
    name: "Bihu Dance",
    slug: "bihu-dance",
    categorySlug: "dance-music",
    region: "Assam",
    image: "/images/culture/dance-music/bihu-dance.webp",
    description:
      "An energetic Assamese folk dance traditionally associated with Bihu celebrations.",
  },

  // Clothing
  {
    name: "Banarasi Silk",
    slug: "banarasi-silk",
    categorySlug: "clothing",
    region: "Uttar Pradesh",
    image: "/images/culture/clothing/banarasi.webp",
    description:
      "Luxurious silk textiles from Varanasi known for intricate weaving and rich designs.",
  },
  {
    name: "Kanchipuram Silk",
    slug: "kanchipuram-silk",
    categorySlug: "clothing",
    region: "Tamil Nadu",
    image: "/images/culture/clothing/kanchipuram.webp",
    description:
      "Traditional silk sarees recognised for rich colours and detailed borders.",
  },
  {
    name: "Phulkari",
    slug: "phulkari",
    categorySlug: "clothing",
    region: "Punjab",
    image: "/images/culture/clothing/phulkari.webp",
    description:
      "A colourful embroidery tradition featuring intricate floral patterns.",
  },
  {
    name: "Bandhani",
    slug: "bandhani",
    categorySlug: "clothing",
    region: "Rajasthan & Gujarat",
    image: "/images/culture/clothing/bandhani.webp",
    description:
      "A traditional tie-and-dye textile technique creating distinctive patterns.",
  },
  {
    name: "Kasavu",
    slug: "kasavu",
    categorySlug: "clothing",
    region: "Kerala",
    image: "/images/culture/clothing/kasavu.webp",
    description:
      "Kerala's traditional textile style often recognised by its elegant gold border.",
  },
  {
    name: "Pashmina",
    slug: "pashmina",
    categorySlug: "clothing",
    region: "Kashmir",
    image: "/images/culture/clothing/pashmina.webp",
    description:
      "A fine wool textile tradition known for softness and detailed craftsmanship.",
  },

  // Art & Storytelling
  {
    name: "Madhubani",
    slug: "madhubani",
    categorySlug: "art-storytelling",
    region: "Bihar",
    image: "/images/culture/art-storytelling/madhubani.webp",
    description:
      "A distinctive painting tradition known for bold patterns, natural themes and storytelling.",
  },
  {
    name: "Warli",
    slug: "warli",
    categorySlug: "art-storytelling",
    region: "Maharashtra",
    image: "/images/culture/art-storytelling/warli.webp",
    description:
      "A tribal painting tradition characterised by simple geometric human and animal figures.",
  },
  {
    name: "Pattachitra",
    slug: "pattachitra",
    categorySlug: "art-storytelling",
    region: "Odisha",
    image: "/images/culture/art-storytelling/pattachitra.webp",
    description:
      "A traditional painting style known for detailed compositions and mythological themes.",
  },
  {
    name: "Kalamkari",
    slug: "kalamkari",
    categorySlug: "art-storytelling",
    region: "South India",
    image: "/images/culture/art-storytelling/kalamkari.webp",
    description:
      "A textile and painting tradition featuring hand-drawn and naturally dyed designs.",
  },
  {
    name: "Blue Pottery",
    slug: "blue-pottery",
    categorySlug: "art-storytelling",
    region: "Rajasthan",
    image: "/images/culture/art-storytelling/blue-pottery.webp",
    description:
      "A decorative craft associated with Jaipur and known for colourful glazed designs.",
  },
  {
    name: "Dhokra",
    slug: "dhokra",
    categorySlug: "art-storytelling",
    region: "Central & Eastern India",
    image: "/images/culture/art-storytelling/dhokra.webp",
    description:
      "An ancient metal-casting tradition using the lost-wax technique.",
  },

  // Traditions & Lifestyle
  {
    name: "Family Traditions",
    slug: "family-traditions",
    categorySlug: "traditions-lifestyle",
    region: "Pan India",
    image: "/images/culture/traditions-lifestyle/family.webp",
    description:
      "Family gatherings, ceremonies, weddings and rituals remain an important part of Indian social life.",
  },
  {
    name: "Village Life",
    slug: "village-life",
    categorySlug: "traditions-lifestyle",
    region: "Rural India",
    image: "/images/culture/traditions-lifestyle/village.webp",
    description:
      "Traditional communities continue to preserve agricultural practices, crafts and local customs.",
  },
  {
    name: "Spiritual Traditions",
    slug: "spiritual-traditions",
    categorySlug: "traditions-lifestyle",
    region: "Pan India",
    image: "/images/culture/traditions-lifestyle/spiritual.webp",
    description:
      "Pilgrimage, prayer, meditation and community rituals form an important part of life.",
  },
  {
    name: "Local Markets",
    slug: "local-markets",
    categorySlug: "traditions-lifestyle",
    region: "Pan India",
    image: "/images/culture/traditions-lifestyle/markets.webp",
    description:
      "Traditional bazaars bring together food, textiles, crafts, spices and community life.",
  },
  {
    name: "Indian Hospitality",
    slug: "hospitality",
    categorySlug: "traditions-lifestyle",
    region: "Pan India",
    image: "/images/culture/traditions-lifestyle/hospitality.webp",
    description:
      "Welcoming guests and sharing food are deeply valued traditions across Indian communities.",
  },
  {
    name: "Regional Identity",
    slug: "regional-identity",
    categorySlug: "traditions-lifestyle",
    region: "Across India",
    image: "/images/culture/traditions-lifestyle/regional.webp",
    description:
      "Language, clothing, cuisine and customs create distinctive identities across India's regions.",
  },

  // Languages & Literature
  {
    name: "Hindi Literature",
    slug: "hindi-literature",
    categorySlug: "languages-literature",
    region: "North & Central India",
    image: "/images/culture/languages-literature/hindi.webp",
    description:
      "A rich literary tradition spanning poetry, novels, stories and regional voices.",
  },
  {
    name: "Bengali Literature",
    slug: "bengali-literature",
    categorySlug: "languages-literature",
    region: "West Bengal",
    image: "/images/culture/languages-literature/bengali.webp",
    description:
      "A celebrated literary tradition known for poetry, novels, theatre and intellectual writing.",
  },
  {
    name: "Tamil Literature",
    slug: "tamil-literature",
    categorySlug: "languages-literature",
    region: "Tamil Nadu",
    image: "/images/culture/languages-literature/tamil.webp",
    description:
      "One of India's oldest literary traditions with a long history of poetry and classical works.",
  },
  {
    name: "Sanskrit Literature",
    slug: "sanskrit-literature",
    categorySlug: "languages-literature",
    region: "Pan India",
    image: "/images/culture/languages-literature/sanskrit.webp",
    description:
      "An ancient literary tradition containing philosophical, poetic and scholarly works.",
  },
  {
    name: "Urdu Poetry",
    slug: "urdu-poetry",
    categorySlug: "languages-literature",
    region: "North India",
    image: "/images/culture/languages-literature/urdu.webp",
    description:
      "A poetic tradition celebrated for its expressive language, ghazals and literary culture.",
  },
  {
    name: "Folk Storytelling",
    slug: "folk-storytelling",
    categorySlug: "languages-literature",
    region: "Across India",
    image: "/images/culture/languages-literature/folk.webp",
    description:
      "Oral storytelling traditions preserve local legends, myths, values and community memories.",
  },
];


// ---------------------------------------------------------
// FOOD
// ---------------------------------------------------------

const foodItems = [
  {
    name: "Litti Chokha",
    slug: "litti-chokha",
    categorySlug: "east-india",
    region: "Bihar",
    image: "/images/food/east-india/litti-chokha.webp",
    description:
      "A beloved Bihari dish of roasted wheat balls served with spiced mashed vegetables.",
  },
  {
    name: "Rosogolla",
    slug: "rosogolla",
    categorySlug: "east-india",
    region: "West Bengal",
    image: "/images/food/east-india/rosogolla.webp",
    description:
      "Soft chhena dumplings soaked in light sugar syrup and celebrated as one of Bengal's iconic sweets.",
  },
  {
    name: "Machher Jhol",
    slug: "machher-jhol",
    categorySlug: "east-india",
    region: "West Bengal",
    image: "/images/food/east-india/machher-jhol.webp",
    description:
      "A traditional Bengali fish curry prepared with spices and a light, flavourful gravy.",
  },
  {
    name: "Dalma",
    slug: "dalma",
    categorySlug: "east-india",
    region: "Odisha",
    image: "/images/food/east-india/dalma.webp",
    description:
      "A traditional Odia preparation combining lentils and vegetables with gentle spices.",
  },
  {
    name: "Pakhala Bhata",
    slug: "pakhala-bhata",
    categorySlug: "east-india",
    region: "Odisha",
    image: "/images/food/east-india/pakhala-bhata.webp",
    description:
      "A traditional fermented rice dish especially enjoyed in Odisha during warmer months.",
  },
  {
    name: "Khar",
    slug: "khar",
    categorySlug: "east-india",
    region: "Assam",
    image: "/images/food/east-india/khar.webp",
    description:
      "A distinctive Assamese preparation known for its unique alkaline ingredient and simple flavours.",
  },

  {
    name: "Butter Chicken",
    slug: "butter-chicken",
    categorySlug: "north-india",
    region: "Punjab",
    image: "/images/food/north-india/butter-chicken.webp",
    description:
      "A rich and creamy chicken preparation known for its buttery tomato-based gravy.",
  },
  {
    name: "Rajma Chawal",
    slug: "rajma-chawal",
    categorySlug: "north-india",
    region: "North India",
    image: "/images/food/north-india/rajma-chawal.webp",
    description:
      "A comforting combination of spiced kidney bean curry served with steamed rice.",
  },
  {
    name: "Chole Bhature",
    slug: "chole-bhature",
    categorySlug: "north-india",
    region: "Punjab & North India",
    image: "/images/food/north-india/chole-bhature.webp",
    description:
      "Spiced chickpea curry served with deep-fried, fluffy bhature.",
  },
  {
    name: "Rogan Josh",
    slug: "rogan-josh",
    categorySlug: "north-india",
    region: "Kashmir",
    image: "/images/food/north-india/rogan-josh.webp",
    description:
      "A celebrated Kashmiri curry known for aromatic spices and tender meat.",
  },
  {
    name: "Dal Baati Churma",
    slug: "dal-baati-churma",
    categorySlug: "north-india",
    region: "Rajasthan",
    image: "/images/food/north-india/dal-baati-churma.webp",
    description:
      "A traditional Rajasthani meal combining baked baati, lentils and sweet churma.",
  },
  {
    name: "Kadhi Pakora",
    slug: "kadhi-pakora",
    categorySlug: "north-india",
    region: "North India",
    image: "/images/food/north-india/kadhi-pakora.webp",
    description:
      "A yogurt-based curry with gram-flour fritters, traditionally served with rice.",
  },

  {
    name: "Masala Dosa",
    slug: "masala-dosa",
    categorySlug: "south-india",
    region: "South India",
    image: "/images/food/south-india/masala-dosa.webp",
    description:
      "A crisp fermented rice-and-lentil crepe traditionally filled with spiced potato.",
  },
  {
    name: "Idli Sambar",
    slug: "idli-sambar",
    categorySlug: "south-india",
    region: "South India",
    image: "/images/food/south-india/idli-sambar.webp",
    description:
      "Soft steamed rice cakes served with lentil-based sambar and traditional chutneys.",
  },
  {
    name: "Hyderabadi Biryani",
    slug: "hyderabadi-biryani",
    categorySlug: "south-india",
    region: "Telangana",
    image: "/images/food/south-india/hyderabadi-biryani.png",
    description:
      "A fragrant rice dish layered with meat, aromatic spices and herbs.",
  },
  {
    name: "Appam & Stew",
    slug: "appam-stew",
    categorySlug: "south-india",
    region: "Kerala",
    image: "/images/food/south-india/appam-stew.png",
    description:
      "Soft, lacy rice pancakes traditionally paired with a gently spiced coconut-based stew.",
  },
  {
    name: "Pongal",
    slug: "pongal",
    categorySlug: "south-india",
    region: "Tamil Nadu",
    image: "/images/food/south-india/pongal.webp",
    description:
      "A traditional rice and lentil preparation enjoyed in both savoury and festive forms.",
  },
  {
    name: "Mysore Pak",
    slug: "mysore-pak",
    categorySlug: "south-india",
    region: "Karnataka",
    image: "/images/food/south-india/mysore-pak.webp",
    description:
      "A rich traditional sweet made from gram flour, ghee and sugar.",
  },

  {
    name: "Vada Pav",
    slug: "vada-pav",
    categorySlug: "west-india",
    region: "Maharashtra",
    image: "/images/food/west-india/vada-pav.webp",
    description:
      "A spiced potato fritter served inside a bread roll with chutneys and spices.",
  },
  {
    name: "Pav Bhaji",
    slug: "pav-bhaji",
    categorySlug: "west-india",
    region: "Maharashtra",
    image: "/images/food/west-india/pav-bhaji.webp",
    description:
      "A rich vegetable mash served with buttered pav and fresh garnishes.",
  },
  {
    name: "Dhokla",
    slug: "dhokla",
    categorySlug: "west-india",
    region: "Gujarat",
    image: "/images/food/west-india/dhokla.webp",
    description:
      "A soft and savoury steamed preparation made primarily from fermented gram batter.",
  },
  {
    name: "Undhiyu",
    slug: "undhiyu",
    categorySlug: "west-india",
    region: "Gujarat",
    image: "/images/food/west-india/undhiyu.webp",
    description:
      "A traditional mixed vegetable preparation associated with Gujarati cuisine.",
  },
  {
    name: "Goan Fish Curry",
    slug: "goan-fish-curry",
    categorySlug: "west-india",
    region: "Goa",
    image: "/images/food/west-india/goan-fish-curry.webp",
    description:
      "A coastal curry combining fish with coconut, spices and tangy flavours.",
  },
  {
    name: "Puran Poli",
    slug: "puran-poli",
    categorySlug: "west-india",
    region: "Maharashtra",
    image: "/images/food/west-india/puran-poli.webp",
    description:
      "A traditional sweet flatbread filled with a spiced lentil and jaggery mixture.",
  },

  {
    name: "Pani Puri",
    slug: "pani-puri",
    categorySlug: "street-food",
    region: "Across India",
    image: "/images/food/street-food/pani-puri.webp",
    description:
      "Crispy hollow puris filled with spiced water, chutneys and flavourful fillings.",
  },
  {
    name: "Samosa",
    slug: "samosa",
    categorySlug: "street-food",
    region: "Pan India",
    image: "/images/food/street-food/samosa.webp",
    description:
      "A crisp pastry filled traditionally with spiced potatoes and peas.",
  },
  {
    name: "Aloo Tikki",
    slug: "aloo-tikki",
    categorySlug: "street-food",
    region: "North India",
    image: "/images/food/street-food/aloo-tikki.webp",
    description:
      "Crispy potato patties commonly served with chutneys, yogurt and spices.",
  },
  {
    name: "Kathi Roll",
    slug: "kathi-roll",
    categorySlug: "street-food",
    region: "Kolkata",
    image: "/images/food/street-food/kathi-roll.webp",
    description:
      "A popular Kolkata street food consisting of fillings wrapped in a flaky paratha.",
  },
  {
    name: "Vada Pav",
    slug: "street-vada-pav",
    categorySlug: "street-food",
    region: "Mumbai",
    image: "/images/food/street-food/vada-pav.webp",
    description:
      "Mumbai's iconic street snack combining a spiced potato fritter with pav and chutneys.",
  },
  {
    name: "Jhalmuri",
    slug: "jhalmuri",
    categorySlug: "street-food",
    region: "West Bengal",
    image: "/images/food/street-food/jhalmuri.webp",
    description:
      "A crunchy Bengali snack made with puffed rice, spices, vegetables and mustard oil.",
  },

  {
    name: "Jalebi",
    slug: "jalebi",
    categorySlug: "sweets-drinks",
    region: "Pan India",
    image: "/images/food/sweets-drinks/jalebi.png",
    description:
      "Crispy spiral-shaped sweets soaked in fragrant sugar syrup.",
  },
  {
    name: "Gulab Jamun",
    slug: "gulab-jamun",
    categorySlug: "sweets-drinks",
    region: "Pan India",
    image: "/images/food/sweets-drinks/gulab-jamun.png",
    description:
      "Soft fried milk-solid dumplings soaked in sweet aromatic syrup.",
  },
  {
    name: "Rasgulla",
    slug: "rasgulla",
    categorySlug: "sweets-drinks",
    region: "West Bengal & Odisha",
    image: "/images/food/sweets-drinks/rasgulla.png",
    description:
      "Soft chhena-based dumplings cooked and served in light sugar syrup.",
  },
  {
    name: "Lassi",
    slug: "lassi",
    categorySlug: "sweets-drinks",
    region: "Punjab & North India",
    image: "/images/food/sweets-drinks/lassi.png",
    description:
      "A refreshing yogurt-based drink enjoyed in sweet and savoury varieties.",
  },
  {
    name: "Masala Chai",
    slug: "masala-chai",
    categorySlug: "sweets-drinks",
    region: "Pan India",
    image: "/images/food/sweets-drinks/masala-chai.png",
    description:
      "A comforting tea prepared with milk, tea leaves and aromatic spices.",
  },
  {
    name: "Filter Coffee",
    slug: "filter-coffee",
    categorySlug: "sweets-drinks",
    region: "South India",
    image: "/images/food/sweets-drinks/filter-coffee.png",
    description:
      "A strong and aromatic South Indian coffee traditionally prepared using a filter.",
  },
];


// ---------------------------------------------------------
// CRAFTS
// ---------------------------------------------------------

const craftItems = [
  {
    name: "Blue Pottery",
    slug: "blue-pottery",
    categorySlug: "pottery",
    region: "Rajasthan",
    image: "/images/crafts/pottery/blue-pottery.webp",
    description:
      "A distinctive decorative pottery tradition known for colourful glazed surfaces and intricate floral and geometric designs.",
  },
  {
    name: "Terracotta",
    slug: "terracotta",
    categorySlug: "pottery",
    region: "Across India",
    image: "/images/crafts/pottery/terracotta.webp",
    description:
      "Traditional fired clay craft used to create pottery, sculptures, lamps and decorative objects.",
  },
  {
    name: "Khurja Pottery",
    slug: "khurja-pottery",
    categorySlug: "pottery",
    region: "Uttar Pradesh",
    image: "/images/crafts/pottery/khurja.webp",
    description:
      "A celebrated pottery tradition known for colourful ceramic vessels, painted patterns and glazed surfaces.",
  },
  {
    name: "Bankura Horse",
    slug: "bankura-horse",
    categorySlug: "pottery",
    region: "West Bengal",
    image: "/images/crafts/pottery/bankura.webp",
    description:
      "A famous terracotta craft of Bengal recognised for its stylised horse figures and distinctive form.",
  },
  {
    name: "Longpi Pottery",
    slug: "longpi-pottery",
    categorySlug: "pottery",
    region: "Manipur",
    image: "/images/crafts/pottery/longpi.webp",
    description:
      "A traditional pottery style from Manipur made using distinctive natural materials and handcrafting techniques.",
  },
  {
    name: "Black Pottery",
    slug: "black-pottery",
    categorySlug: "pottery",
    region: "Uttar Pradesh",
    image: "/images/crafts/pottery/black-pottery.webp",
    description:
      "Traditional black pottery known for its dark polished surface and detailed decorative patterns.",
  },

  {
    name: "Banarasi Weaving",
    slug: "banarasi-weaving",
    categorySlug: "handloom-textiles",
    region: "Uttar Pradesh",
    image: "/images/crafts/textiles/banarasi.webp",
    description:
      "A luxurious weaving tradition from Varanasi known for intricate patterns, silk fabrics and detailed designs.",
  },
  {
    name: "Kanjivaram Weaving",
    slug: "kanjivaram-weaving",
    categorySlug: "handloom-textiles",
    region: "Tamil Nadu",
    image: "/images/crafts/textiles/kanjivaram.webp",
    description:
      "A celebrated South Indian silk weaving tradition known for rich colours and elaborate borders.",
  },
  {
    name: "Phulkari Embroidery",
    slug: "phulkari-embroidery",
    categorySlug: "handloom-textiles",
    region: "Punjab",
    image: "/images/crafts/textiles/phulkari.webp",
    description:
      "A vibrant embroidery tradition featuring colourful floral patterns and detailed handwork.",
  },
  {
    name: "Chikankari",
    slug: "chikankari",
    categorySlug: "handloom-textiles",
    region: "Uttar Pradesh",
    image: "/images/crafts/textiles/chikankari.webp",
    description:
      "A delicate embroidery tradition from Lucknow known for elegant patterns and fine hand stitching.",
  },
  {
    name: "Ikat",
    slug: "ikat",
    categorySlug: "handloom-textiles",
    region: "Odisha & Telangana",
    image: "/images/crafts/textiles/ikat.webp",
    description:
      "A resist-dyeing and weaving technique that creates distinctive geometric and blurred patterns.",
  },
  {
    name: "Pochampally",
    slug: "pochampally",
    categorySlug: "handloom-textiles",
    region: "Telangana",
    image: "/images/crafts/textiles/pochampally.webp",
    description:
      "A renowned handloom tradition known for colourful Ikat textiles and geometric patterns.",
  },

  {
    name: "Madhubani",
    slug: "madhubani",
    categorySlug: "folk-art",
    region: "Bihar",
    image: "/images/crafts/folk-art/madhubani.webp",
    description:
      "A vibrant folk painting tradition known for bold lines, geometric patterns and themes from nature and mythology.",
  },
  {
    name: "Warli",
    slug: "warli",
    categorySlug: "folk-art",
    region: "Maharashtra",
    image: "/images/crafts/folk-art/warli.webp",
    description:
      "A tribal art tradition using simple geometric figures to depict community life, nature and celebrations.",
  },
  {
    name: "Pattachitra",
    slug: "pattachitra",
    categorySlug: "folk-art",
    region: "Odisha",
    image: "/images/crafts/folk-art/pattachitra.webp",
    description:
      "A detailed traditional painting style known for strong outlines and mythological storytelling.",
  },
  {
    name: "Gond Art",
    slug: "gond-art",
    categorySlug: "folk-art",
    region: "Madhya Pradesh",
    image: "/images/crafts/folk-art/gond.webp",
    description:
      "A colourful tribal art tradition featuring nature, animals and intricate patterns.",
  },
  {
    name: "Kalamkari",
    slug: "kalamkari",
    categorySlug: "folk-art",
    region: "South India",
    image: "/images/crafts/folk-art/kalamkari.webp",
    description:
      "A traditional textile art involving hand-drawn designs, natural dyes and narrative themes.",
  },
  {
    name: "Phad Painting",
    slug: "phad-painting",
    categorySlug: "folk-art",
    region: "Rajasthan",
    image: "/images/crafts/folk-art/phad.webp",
    description:
      "A traditional scroll-painting style used to visually narrate stories of local heroes and traditions.",
  },

  {
    name: "Kondapalli Toys",
    slug: "kondapalli-toys",
    categorySlug: "woodcraft",
    region: "Andhra Pradesh",
    image: "/images/crafts/woodcraft/kondapalli.webp",
    description:
      "Lightweight wooden toys traditionally carved and painted by artisans of Kondapalli.",
  },
  {
    name: "Channapatna Toys",
    slug: "channapatna-toys",
    categorySlug: "woodcraft",
    region: "Karnataka",
    image: "/images/crafts/woodcraft/channapatna.webp",
    description:
      "Colourful wooden toys known for smooth shapes, traditional craftsmanship and natural finishes.",
  },
  {
    name: "Saharanpur Woodcraft",
    slug: "saharanpur-woodcraft",
    categorySlug: "woodcraft",
    region: "Uttar Pradesh",
    image: "/images/crafts/woodcraft/saharanpur.webp",
    description:
      "Intricately carved wooden furniture and decorative objects made by skilled artisans.",
  },
  {
    name: "Rajasthan Wood Carving",
    slug: "rajasthan-wood-carving",
    categorySlug: "woodcraft",
    region: "Rajasthan",
    image: "/images/crafts/woodcraft/rajasthan.webp",
    description:
      "Traditional carving techniques used to create furniture, doors, panels and decorative objects.",
  },
  {
    name: "Kerala Wood Carving",
    slug: "kerala-wood-carving",
    categorySlug: "woodcraft",
    region: "Kerala",
    image: "/images/crafts/woodcraft/kerala.webp",
    description:
      "A traditional craft featuring detailed carving inspired by architecture, mythology and nature.",
  },
  {
    name: "Wooden Masks",
    slug: "wooden-masks",
    categorySlug: "woodcraft",
    region: "Across India",
    image: "/images/crafts/woodcraft/masks.webp",
    description:
      "Hand-carved masks used in performances, rituals and decorative traditions across different regions.",
  },

  {
    name: "Dhokra",
    slug: "dhokra",
    categorySlug: "jewellery-metalwork",
    region: "Central & Eastern India",
    image: "/images/crafts/jewellery/dhokra.webp",
    description:
      "An ancient metal-casting tradition known for handcrafted figures and textured decorative objects.",
  },
  {
    name: "Kundan",
    slug: "kundan",
    categorySlug: "jewellery-metalwork",
    region: "Rajasthan",
    image: "/images/crafts/jewellery/kundan.webp",
    description:
      "A traditional jewellery technique known for carefully set gemstones and elaborate ornamentation.",
  },
  {
    name: "Meenakari",
    slug: "meenakari",
    categorySlug: "jewellery-metalwork",
    region: "Rajasthan",
    image: "/images/crafts/jewellery/meenakari.webp",
    description:
      "A decorative metalwork tradition involving colourful enamel designs applied to jewellery and objects.",
  },
  {
    name: "Thewa",
    slug: "thewa",
    categorySlug: "jewellery-metalwork",
    region: "Rajasthan",
    image: "/images/crafts/jewellery/thewa.webp",
    description:
      "A distinctive jewellery craft combining intricate gold work with coloured glass.",
  },
  {
    name: "Bidriware",
    slug: "bidriware",
    categorySlug: "jewellery-metalwork",
    region: "Karnataka",
    image: "/images/crafts/jewellery/bidriware.webp",
    description:
      "A traditional metal craft recognised for dark surfaces decorated with contrasting inlay work.",
  },
  {
    name: "Filigree",
    slug: "filigree",
    categorySlug: "jewellery-metalwork",
    region: "Odisha",
    image: "/images/crafts/jewellery/filigree.webp",
    description:
      "A delicate metalworking technique involving fine wires shaped into intricate jewellery and decorative designs.",
  },

  {
    name: "Bamboo Baskets",
    slug: "bamboo-baskets",
    categorySlug: "bamboo-cane",
    region: "Northeast India",
    image: "/images/crafts/bamboo/baskets.webp",
    description:
      "Handwoven baskets made from bamboo and natural fibres for storage, farming and everyday use.",
  },
  {
    name: "Cane Furniture",
    slug: "cane-furniture",
    categorySlug: "bamboo-cane",
    region: "Assam",
    image: "/images/crafts/bamboo/furniture.webp",
    description:
      "Traditional furniture crafted from flexible cane using regional weaving techniques.",
  },
  {
    name: "Bamboo Weaving",
    slug: "bamboo-weaving",
    categorySlug: "bamboo-cane",
    region: "Northeast India",
    image: "/images/crafts/bamboo/weaving.webp",
    description:
      "Skilled weaving techniques used to transform bamboo into useful and decorative objects.",
  },
  {
    name: "Bamboo Instruments",
    slug: "bamboo-instruments",
    categorySlug: "bamboo-cane",
    region: "Across India",
    image: "/images/crafts/bamboo/instruments.webp",
    description:
      "Traditional musical instruments created from bamboo and other natural materials.",
  },
  {
    name: "Cane Baskets",
    slug: "cane-baskets",
    categorySlug: "bamboo-cane",
    region: "Northeast India",
    image: "/images/crafts/bamboo/cane-baskets.webp",
    description:
      "Handwoven cane products combining practical everyday use with regional craftsmanship.",
  },
  {
    name: "Bamboo Decor",
    slug: "bamboo-decor",
    categorySlug: "bamboo-cane",
    region: "Across India",
    image: "/images/crafts/bamboo/decor.webp",
    description:
      "Decorative handmade objects created from bamboo using traditional artisan techniques.",
  },
];


// ---------------------------------------------------------
// HIDDEN GEMS
// ---------------------------------------------------------

const hiddenGems = [
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
    image: "/images/food/south-india.webp",
    description:
      "A fascinating region famous for grand mansions, distinctive architecture, traditional cuisine and the heritage of the Chettiar community.",
  },
];


// =========================================================
// NORMALISE HERITAGE DATA
// =========================================================

const heritageItems = heritageData.map((item) => ({
  id: `heritage-${item.slug}`,
  name: item.name,
  category: "Heritage",
  subcategory: item.category,
  region: item.state,
  image: item.image,
  description: item.description,
  keywords: item.keywords || [],
  path:
    item.category === "Monuments"
      ? `/heritage/monuments/${item.slug}`
      : item.category === "Forts & Palaces"
      ? `/heritage/forts/${item.slug}`
      : item.category === "Temples"
      ? `/heritage/temples/${item.slug}`
      : item.category === "Historic Cities"
      ? `/heritage/cities/${item.slug}`
      : item.category === "UNESCO"
      ? `/heritage/unesco/${item.slug}`
      : `/heritage/${item.slug}`,
}));


// =========================================================
// NORMALISE CULTURE / FOOD / CRAFTS
// =========================================================

const cultureSearchItems = cultureItems.map((item) => ({
  id: `culture-${item.categorySlug}-${item.slug}`,
  name: item.name,
  category: "Culture",
  subcategory: item.categorySlug,
  region: item.region,
  image: item.image,
  description: item.description,
  keywords: [
    item.name,
    item.region,
    item.categorySlug,
  ],
  path: `/culture/${item.categorySlug}/${item.slug}`,
}));


const foodSearchItems = foodItems.map((item) => ({
  id: `food-${item.categorySlug}-${item.slug}`,
  name: item.name,
  category: "Food",
  subcategory: item.categorySlug,
  region: item.region,
  image: item.image,
  description: item.description,
  keywords: [
    item.name,
    item.region,
    item.categorySlug,
  ],
  path: `/food/${item.categorySlug}/${item.slug}`,
}));


const craftSearchItems = craftItems.map((item) => ({
  id: `craft-${item.categorySlug}-${item.slug}`,
  name: item.name,
  category: "Crafts",
  subcategory: item.categorySlug,
  region: item.region,
  image: item.image,
  description: item.description,
  keywords: [
    item.name,
    item.region,
    item.categorySlug,
  ],
  path: `/crafts/${item.categorySlug}/${item.slug}`,
}));


// =========================================================
// DESTINATIONS
// =========================================================

const destinationItems = destinations.map((item) => ({
  id: `destination-${item.slug}`,
  name: item.name,
  category: "Destination",
  subcategory: item.type,
  region: item.state,
  image: item.image,
  description: item.short,
  keywords: [
    ...(item.keywords || []),
    ...(item.categories || []),
    item.type,
  ],
  path: `/destination/${item.slug}`,
}));


// =========================================================
// HIDDEN GEM ITEMS
// =========================================================

const hiddenGemItems = hiddenGems.map((item) => ({
  id: `hidden-${item.slug}`,
  name: item.name,
  category: "Heritage",
  subcategory: "Hidden Gems",
  region: item.state,
  image: item.image,
  description: item.description,
  keywords: [
    item.name,
    item.state,
    "hidden gem",
    "heritage",
  ],
  path: `/heritage/hidden-gems/${item.slug}`,
}));


// =========================================================
// COMPLETE SEARCH DATABASE
// =========================================================

const exploreData = [
  ...heritageItems,
  ...hiddenGemItems,
  ...cultureSearchItems,
  ...foodSearchItems,
  ...craftSearchItems,
  ...destinationItems,
];


// =========================================================
// COMPONENT
// =========================================================

export default function Explore() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Heritage",
    "Culture",
    "Food",
    "Crafts",
    "Monuments",
  ];


  // =======================================================
  // FILTER RESULTS
  // =======================================================

  const filteredResults = useMemo(() => {
    const searchQuery = q.trim().toLowerCase();

    return exploreData.filter((item) => {

      // ---------------------------------------------------
      // CATEGORY FILTER
      // ---------------------------------------------------

      let matchesCategory = true;

      if (category === "Heritage") {
        matchesCategory = item.category === "Heritage";
      }

      if (category === "Culture") {
        matchesCategory = item.category === "Culture";
      }

      if (category === "Food") {
        matchesCategory = item.category === "Food";
      }

      if (category === "Crafts") {
        matchesCategory = item.category === "Crafts";
      }

      if (category === "Monuments") {
        matchesCategory =
          item.category === "Heritage" &&
          item.subcategory === "Monuments";
      }


      // ---------------------------------------------------
      // SEARCH
      // ---------------------------------------------------

      const searchableText = [
        item.name,
        item.region,
        item.category,
        item.subcategory,
        item.description,
        ...(item.keywords || []),
      ]
        .join(" ")
        .toLowerCase();


      const matchesSearch =
        searchQuery === "" ||
        searchableText.includes(searchQuery);


      return matchesCategory && matchesSearch;
    });
  }, [q, category]);


  // =======================================================
  // REMOVE DUPLICATES
  // =======================================================

  const uniqueResults = useMemo(() => {
    const seen = new Set();

    return filteredResults.filter((item) => {
      const key = `${item.category}-${item.name.toLowerCase()}`;

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
  }, [filteredResults]);


  return (
    <section className="section page">

      {/* =================================================
          HEADER
      ================================================= */}

      <SectionHeading
        eyebrow="EXPLORE INDIA"
        title="Find your next story."
        text="Search across India's heritage, culture, food and crafts — all in one place."
      />


      {/* =================================================
          SEARCH
      ================================================= */}

      <input
        className="search"
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="⌕  Search India, food, culture, crafts, heritage..."
        aria-label="Search India"
      />


      {/* =================================================
          CATEGORY FILTERS
      ================================================= */}

      <div className="chips">

        {categories.map((item) => {

          const isActive = category === item;

          return (
            <button
              key={item}
              type="button"
              className={isActive ? "active" : ""}
              onClick={() => setCategory(item)}
              aria-pressed={isActive}
            >
              {item}
            </button>
          );

        })}

      </div>


      {/* =================================================
          RESULT COUNT
      ================================================= */}

      <div
        style={{
          marginTop: "24px",
          marginBottom: "18px",
          color: "var(--muted)",
          fontSize: "13px",
        }}
      >
        {uniqueResults.length}{" "}
        {uniqueResults.length === 1 ? "result" : "results"}
        {q.trim() ? ` for "${q}"` : ""}
      </div>


      {/* =================================================
          RESULTS
      ================================================= */}

      {uniqueResults.length > 0 ? (

        <div className="grid">

          {uniqueResults.map((item) => (

            <article
              className="heritageCard"
              key={item.id}
            >

              {/* IMAGE */}

              <Link
                to={item.path}
                style={{
                  display: "block",
                  textDecoration: "none",
                }}
              >

                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                    borderRadius: "inherit",
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                </div>

              </Link>


              {/* CONTENT */}

              <div
                style={{
                  padding: "20px",
                }}
              >

                <small
                  style={{
                    display: "block",
                    marginBottom: "7px",
                    color: "var(--muted)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {item.category}
                  {item.subcategory
                    ? ` · ${item.subcategory}`
                    : ""}
                </small>


                <h3
                  style={{
                    margin: "0 0 8px",
                  }}
                >
                  {item.name}
                </h3>


                <small
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    color: "var(--muted)",
                  }}
                >
                  📍 {item.region}
                </small>


                <p>
                  {item.description}
                </p>


                <Link
                  to={item.path}
                  className="secondary"
                >
                  Explore Story →
                </Link>

              </div>

            </article>

          ))}

        </div>

      ) : (

        <div className="empty center">

          <b>⌕</b>

          <h3>No results found.</h3>

          <p>
            Try another place, food, festival,
            craft, monument or cultural tradition.
          </p>

        </div>

      )}

    </section>
  );
}