import { Link, useParams } from "react-router-dom";
import PlaceCommunity from "../components/PlaceCommunity";

const foodStories = {
  // =====================================================
  // EAST INDIA
  // =====================================================

  "litti-chokha": {
    category: "East Indian Cuisine",
    eyebrow: "BIHAR",
    name: "Litti Chokha",
    image: "/images/food/east-india/litti-chokha.webp",
    tagline: "A rustic Bihari classic built around roasted wheat and smoky flavours.",
    description:
      "Litti Chokha is one of Bihar's best-known traditional dishes, combining roasted wheat litti with a rustic mixture of mashed vegetables and spices.",
    history:
      "The dish has long been associated with the food traditions of Bihar and neighbouring regions, where simple ingredients and cooking methods created hearty meals suited to everyday life.",
    culture:
      "Litti is traditionally roasted over heat and served with chokha, often made from mashed potato, eggplant or tomato. The combination represents the simple and distinctive character of Bihari cuisine.",
    details: [
      { title: "Region", value: "Bihar" },
      { title: "Type", value: "Traditional Dish" },
      { title: "Main Ingredient", value: "Wheat & Sattu" },
      { title: "Known For", value: "Litti & Chokha" },
    ],
  },

  rosogolla: {
    category: "East Indian Cuisine",
    eyebrow: "WEST BENGAL",
    name: "Rosogolla",
    image: "/images/food/east-india/rosogolla.webp",
    tagline: "Soft, delicate sweets soaked in fragrant sugar syrup.",
    description:
      "Rosogolla is a famous Bengali sweet made from chhena, shaped into soft balls and cooked in sugar syrup.",
    history:
      "The sweet became closely associated with Bengal's culinary culture during the nineteenth century and developed into one of the region's most recognised sweets.",
    culture:
      "Rosogolla is enjoyed during festivals, celebrations, family gatherings and everyday occasions. It represents the importance of sweets in Bengali food culture.",
    details: [
      { title: "Region", value: "West Bengal" },
      { title: "Type", value: "Sweet" },
      { title: "Main Ingredient", value: "Chhena" },
      { title: "Known For", value: "Soft Texture & Syrup" },
    ],
  },

  "machher-jhol": {
    category: "East Indian Cuisine",
    eyebrow: "WEST BENGAL",
    name: "Machher Jhol",
    image: "/images/food/east-india/machher-jhol.webp",
    tagline: "A light and aromatic fish curry at the heart of Bengali cuisine.",
    description:
      "Machher Jhol is a traditional Bengali fish curry prepared with fish, spices and a light flavourful gravy.",
    history:
      "Fish has long been an important part of Bengali cuisine because of the region's rivers, wetlands and coastal environment.",
    culture:
      "Machher Jhol is commonly served with rice and remains an important part of Bengali home cooking and everyday meals.",
    details: [
      { title: "Region", value: "West Bengal" },
      { title: "Type", value: "Fish Curry" },
      { title: "Served With", value: "Rice" },
      { title: "Known For", value: "Light Spiced Gravy" },
    ],
  },

  dalma: {
    category: "East Indian Cuisine",
    eyebrow: "ODISHA",
    name: "Dalma",
    image: "/images/food/east-india/dalma.webp",
    tagline: "A comforting combination of lentils, vegetables and gentle spices.",
    description:
      "Dalma is a traditional Odia preparation made by cooking lentils with vegetables and aromatic spices.",
    history:
      "The dish has been part of Odisha's home-style food traditions for generations and reflects the region's preference for simple, nutritious meals.",
    culture:
      "Dalma is commonly enjoyed with rice and forms part of the everyday culinary traditions of Odisha.",
    details: [
      { title: "Region", value: "Odisha" },
      { title: "Type", value: "Lentil Dish" },
      { title: "Main Ingredients", value: "Dal & Vegetables" },
      { title: "Known For", value: "Simple Flavours" },
    ],
  },

  "pakhala-bhata": {
    category: "East Indian Cuisine",
    eyebrow: "ODISHA",
    name: "Pakhala Bhata",
    image: "/images/food/east-india/pakhala-bhata.webp",
    tagline: "A refreshing fermented rice tradition deeply rooted in Odisha.",
    description:
      "Pakhala Bhata is a traditional fermented rice preparation that is especially popular during the warmer months.",
    history:
      "The dish developed as part of Odisha's everyday food culture, where fermented rice provided a practical and refreshing meal in hot weather.",
    culture:
      "Pakhala is often served with vegetables, fried items, curd and other accompaniments, creating a complete traditional meal.",
    details: [
      { title: "Region", value: "Odisha" },
      { title: "Type", value: "Fermented Rice Dish" },
      { title: "Season", value: "Summer" },
      { title: "Known For", value: "Refreshing & Fermented" },
    ],
  },

  khar: {
    category: "East Indian Cuisine",
    eyebrow: "ASSAM",
    name: "Khar",
    image: "/images/food/east-india/khar.webp",
    tagline: "A distinctive Assamese preparation with a flavour unlike most Indian dishes.",
    description:
      "Khar is a traditional Assamese preparation known for its characteristic alkaline ingredient and simple, balanced flavours.",
    history:
      "Khar has been preserved as an important part of Assamese food traditions and is often associated with traditional home cooking.",
    culture:
      "It is commonly enjoyed as part of an Assamese meal and reflects the region's distinctive ingredients and culinary practices.",
    details: [
      { title: "Region", value: "Assam" },
      { title: "Type", value: "Traditional Dish" },
      { title: "Cuisine", value: "Assamese" },
      { title: "Known For", value: "Distinctive Flavour" },
    ],
  },

  // =====================================================
  // NORTH INDIA
  // =====================================================

  "butter-chicken": {
    category: "North Indian Cuisine",
    eyebrow: "PUNJAB",
    name: "Butter Chicken",
    image: "/images/food/north-india/butter-chicken.webp",
    tagline: "A rich and creamy curry that became a global favourite.",
    description:
      "Butter Chicken is a popular North Indian dish featuring chicken cooked in a rich tomato-based gravy with butter and aromatic spices.",
    history:
      "The dish became associated with the culinary traditions of Delhi and Punjab and grew into one of India's most internationally recognised dishes.",
    culture:
      "It is commonly served with naan, roti or rice and is enjoyed during celebrations, family meals and restaurant dining.",
    details: [
      { title: "Region", value: "Punjab & Delhi" },
      { title: "Type", value: "Chicken Curry" },
      { title: "Known For", value: "Creamy Tomato Gravy" },
      { title: "Served With", value: "Naan & Rice" },
    ],
  },

  "rajma-chawal": {
    category: "North Indian Cuisine",
    eyebrow: "NORTH INDIA",
    name: "Rajma Chawal",
    image: "/images/food/north-india/rajma-chawal.webp",
    tagline: "A comforting combination of spiced kidney beans and rice.",
    description:
      "Rajma Chawal combines slow-cooked kidney bean curry with steamed rice and is especially associated with home-style North Indian cooking.",
    history:
      "The dish became deeply established in North Indian food culture and developed into a popular everyday comfort food.",
    culture:
      "Families commonly prepare rajma as a hearty weekend or home meal, often serving it hot with rice.",
    details: [
      { title: "Region", value: "North India" },
      { title: "Type", value: "Vegetarian Meal" },
      { title: "Main Ingredient", value: "Kidney Beans" },
      { title: "Served With", value: "Rice" },
    ],
  },

  "chole-bhature": {
    category: "North Indian Cuisine",
    eyebrow: "NORTH INDIA",
    name: "Chole Bhature",
    image: "/images/food/north-india/chole-bhature.webp",
    tagline: "Spiced chickpeas paired with fluffy fried bread.",
    description:
      "Chole Bhature is a popular North Indian combination of spiced chickpea curry and deep-fried bhature.",
    history:
      "The dish became particularly popular across Punjab, Delhi and northern urban food cultures.",
    culture:
      "Chole Bhature is commonly enjoyed as a breakfast, lunch or celebratory meal and is also a favourite street and restaurant food.",
    details: [
      { title: "Region", value: "North India" },
      { title: "Type", value: "Vegetarian Dish" },
      { title: "Main Ingredient", value: "Chickpeas" },
      { title: "Known For", value: "Chole & Bhature" },
    ],
  },

  "rogan-josh": {
    category: "North Indian Cuisine",
    eyebrow: "KASHMIR",
    name: "Rogan Josh",
    image: "/images/food/north-india/rogan-josh.webp",
    tagline: "An aromatic Kashmiri curry of spices and tender meat.",
    description:
      "Rogan Josh is a celebrated Kashmiri preparation known for its aromatic spices, rich colour and tender meat.",
    history:
      "The dish became an important part of Kashmiri culinary traditions through centuries of cultural influences in the region.",
    culture:
      "Rogan Josh forms part of traditional Kashmiri meals and is particularly associated with festive and ceremonial cuisine.",
    details: [
      { title: "Region", value: "Kashmir" },
      { title: "Type", value: "Meat Curry" },
      { title: "Cuisine", value: "Kashmiri" },
      { title: "Known For", value: "Aromatic Spices" },
    ],
  },

  "dal-baati-churma": {
    category: "North Indian Cuisine",
    eyebrow: "RAJASTHAN",
    name: "Dal Baati Churma",
    image: "/images/food/north-india/dal-baati-churma.webp",
    tagline: "A traditional Rajasthani meal built around baked baati and lentils.",
    description:
      "Dal Baati Churma is a traditional Rajasthani meal combining baked wheat baati, lentils and sweet churma.",
    history:
      "The dish developed as part of Rajasthan's traditional food culture, where durable ingredients and cooking methods suited the region's environment.",
    culture:
      "Baati is commonly broken and served with dal and ghee, while churma provides a sweet element to the meal.",
    details: [
      { title: "Region", value: "Rajasthan" },
      { title: "Type", value: "Traditional Meal" },
      { title: "Components", value: "Dal, Baati & Churma" },
      { title: "Known For", value: "Rustic Flavours" },
    ],
  },

  "kadhi-pakora": {
    category: "North Indian Cuisine",
    eyebrow: "NORTH INDIA",
    name: "Kadhi Pakora",
    image: "/images/food/north-india/kadhi-pakora.webp",
    tagline: "Tangy yogurt curry paired with soft gram-flour fritters.",
    description:
      "Kadhi Pakora is a yogurt-based curry containing gram-flour fritters and is commonly served with rice.",
    history:
      "Different versions of kadhi developed across northern and western parts of India, each reflecting local ingredients and cooking styles.",
    culture:
      "The dish is especially popular as a comforting home-cooked meal and has many regional variations.",
    details: [
      { title: "Region", value: "North India" },
      { title: "Type", value: "Vegetarian Curry" },
      { title: "Main Ingredient", value: "Yogurt & Besan" },
      { title: "Served With", value: "Rice" },
    ],
  },

  // =====================================================
  // SOUTH INDIA
  // =====================================================

  "masala-dosa": {
    category: "South Indian Cuisine",
    eyebrow: "SOUTH INDIA",
    name: "Masala Dosa",
    image: "/images/food/south-india/masala-dosa.webp",
    tagline: "A crisp fermented crepe filled with spiced potato.",
    description:
      "Masala Dosa is a popular South Indian dish made from fermented rice and lentil batter and filled with a spiced potato mixture.",
    history:
      "Dosa has been part of South Indian culinary traditions for generations and developed into many regional varieties.",
    culture:
      "Masala dosa is commonly served with sambar and chutneys and is enjoyed for breakfast, lunch and dinner.",
    details: [
      { title: "Region", value: "South India" },
      { title: "Type", value: "Traditional Dish" },
      { title: "Main Ingredient", value: "Rice & Lentils" },
      { title: "Known For", value: "Crisp Texture" },
    ],
  },

  "idli-sambar": {
    category: "South Indian Cuisine",
    eyebrow: "SOUTH INDIA",
    name: "Idli Sambar",
    image: "/images/food/south-india/idli-sambar.webp",
    tagline: "Soft steamed rice cakes served with flavourful lentil stew.",
    description:
      "Idli is a soft steamed preparation made from fermented rice and lentil batter, traditionally served with sambar and chutneys.",
    history:
      "Idli has become one of the best-known foods associated with South Indian cuisine and has spread throughout India.",
    culture:
      "It is a popular breakfast and everyday meal, often served alongside coconut chutney, tomato chutney and sambar.",
    details: [
      { title: "Region", value: "South India" },
      { title: "Type", value: "Steamed Dish" },
      { title: "Main Ingredient", value: "Rice & Lentils" },
      { title: "Served With", value: "Sambar & Chutney" },
    ],
  },

  "hyderabadi-biryani": {
    category: "South Indian Cuisine",
    eyebrow: "HYDERABAD, TELANGANA",
    name: "Hyderabadi Biryani",
    image: "/images/food/south-india/hyderabadi-biryani.png",
    tagline: "Fragrant rice layered with spices, herbs and rich flavours.",
    description:
      "Hyderabadi Biryani is a famous rice dish known for aromatic spices, fragrant basmati rice and carefully layered ingredients.",
    history:
      "The dish developed in Hyderabad through the interaction of local culinary traditions and influences from royal kitchens.",
    culture:
      "Biryani is strongly associated with celebrations, gatherings and special meals and remains an important part of Hyderabad's food identity.",
    details: [
      { title: "Region", value: "Hyderabad" },
      { title: "Type", value: "Rice Dish" },
      { title: "Known For", value: "Aromatic Spices" },
      { title: "Cuisine", value: "Hyderabadi" },
    ],
  },

  "appam-stew": {
    category: "South Indian Cuisine",
    eyebrow: "KERALA",
    name: "Appam & Stew",
    image: "/images/food/south-india/appam-stew.png",
    tagline: "Soft, lacy rice pancakes paired with a gentle coconut-based stew.",
    description:
      "Appam is a soft and lacy fermented rice pancake traditionally served with a lightly spiced coconut-based stew.",
    history:
      "Appam became an important part of Kerala's food traditions and developed alongside the region's rice and coconut-based cuisine.",
    culture:
      "It is commonly enjoyed for breakfast or special meals and can be paired with vegetable, chicken or other regional stews.",
    details: [
      { title: "Region", value: "Kerala" },
      { title: "Type", value: "Traditional Meal" },
      { title: "Main Ingredient", value: "Rice & Coconut" },
      { title: "Known For", value: "Soft & Lacy Appam" },
    ],
  },

  pongal: {
    category: "South Indian Cuisine",
    eyebrow: "TAMIL NADU",
    name: "Pongal",
    image: "/images/food/south-india/pongal.webp",
    tagline: "A comforting rice and lentil dish deeply connected with Tamil food culture.",
    description:
      "Pongal is a traditional Tamil dish prepared from rice and lentils and enjoyed in both everyday and festive forms.",
    history:
      "The dish is closely connected with Tamil agricultural traditions and the Pongal harvest festival.",
    culture:
      "Ven Pongal is a popular savoury preparation, while sweet sakkarai pongal is traditionally prepared during celebrations.",
    details: [
      { title: "Region", value: "Tamil Nadu" },
      { title: "Type", value: "Rice & Lentil Dish" },
      { title: "Varieties", value: "Sweet & Savoury" },
      { title: "Known For", value: "Pongal Festival" },
    ],
  },

  "mysore-pak": {
    category: "South Indian Cuisine",
    eyebrow: "KARNATAKA",
    name: "Mysore Pak",
    image: "/images/food/south-india/mysore-pak.webp",
    tagline: "A rich traditional sweet made with gram flour, ghee and sugar.",
    description:
      "Mysore Pak is a famous Karnataka sweet known for its rich texture and combination of gram flour, ghee and sugar.",
    history:
      "The sweet is traditionally associated with the city of Mysore and developed as part of Karnataka's royal and regional food culture.",
    culture:
      "Mysore Pak is commonly prepared for festivals, celebrations and special occasions.",
    details: [
      { title: "Region", value: "Karnataka" },
      { title: "Type", value: "Sweet" },
      { title: "Main Ingredients", value: "Besan, Ghee & Sugar" },
      { title: "Known For", value: "Rich Texture" },
    ],
  },

  // =====================================================
  // WEST INDIA
  // =====================================================

  "vada-pav": {
    category: "West Indian Cuisine",
    eyebrow: "MAHARASHTRA",
    name: "Vada Pav",
    image: "/images/food/west-india/vada-pav.webp",
    tagline: "Mumbai's iconic street food built around a spiced potato fritter.",
    description:
      "Vada Pav consists of a spiced potato fritter placed inside a pav and served with chutneys and dry spices.",
    history:
      "The dish became strongly associated with Mumbai's working-class food culture and grew into one of Maharashtra's most recognisable snacks.",
    culture:
      "Vada pav is eaten throughout the day and remains a symbol of Mumbai's fast-paced street food culture.",
    details: [
      { title: "Region", value: "Maharashtra" },
      { title: "Type", value: "Street Food" },
      { title: "Main Ingredient", value: "Potato" },
      { title: "Known For", value: "Mumbai Street Food" },
    ],
  },

  "pav-bhaji": {
    category: "West Indian Cuisine",
    eyebrow: "MAHARASHTRA",
    name: "Pav Bhaji",
    image: "/images/food/west-india/pav-bhaji.webp",
    tagline: "A buttery vegetable preparation served with toasted pav.",
    description:
      "Pav Bhaji is a popular Maharashtrian dish consisting of a spiced vegetable mash served with buttered bread rolls.",
    history:
      "The dish became particularly popular in Mumbai and developed as an affordable and filling urban food.",
    culture:
      "Pav bhaji is enjoyed at street stalls, restaurants and family gatherings and is now popular across India.",
    details: [
      { title: "Region", value: "Maharashtra" },
      { title: "Type", value: "Street Food" },
      { title: "Main Ingredient", value: "Mixed Vegetables" },
      { title: "Known For", value: "Bhaji & Pav" },
    ],
  },

  dhokla: {
    category: "West Indian Cuisine",
    eyebrow: "GUJARAT",
    name: "Dhokla",
    image: "/images/food/west-india/dhokla.webp",
    tagline: "Soft, savoury and steamed with the distinctive flavours of Gujarat.",
    description:
      "Dhokla is a traditional Gujarati steamed preparation made using fermented batter and served with chutneys.",
    history:
      "Dhokla developed into an important part of Gujarat's vegetarian culinary traditions and has many regional variations.",
    culture:
      "It is enjoyed as a snack, breakfast item or light meal and is commonly served during gatherings and celebrations.",
    details: [
      { title: "Region", value: "Gujarat" },
      { title: "Type", value: "Steamed Snack" },
      { title: "Main Ingredient", value: "Gram Batter" },
      { title: "Known For", value: "Soft Texture" },
    ],
  },

  undhiyu: {
    category: "West Indian Cuisine",
    eyebrow: "GUJARAT",
    name: "Undhiyu",
    image: "/images/food/west-india/undhiyu.webp",
    tagline: "A hearty mixed-vegetable dish celebrating Gujarati seasonal produce.",
    description:
      "Undhiyu is a traditional Gujarati mixed-vegetable preparation made with seasonal vegetables, spices and herbs.",
    history:
      "The dish has long been associated with Gujarati food traditions and is particularly connected with winter cooking.",
    culture:
      "Undhiyu is commonly prepared during festivals and family gatherings and is often served with puri or other accompaniments.",
    details: [
      { title: "Region", value: "Gujarat" },
      { title: "Type", value: "Vegetarian Dish" },
      { title: "Season", value: "Winter" },
      { title: "Known For", value: "Mixed Vegetables" },
    ],
  },

  "goan-fish-curry": {
    category: "West Indian Cuisine",
    eyebrow: "GOA",
    name: "Goan Fish Curry",
    image: "/images/food/west-india/goan-fish-curry.webp",
    tagline: "A coastal curry combining fish, coconut and tangy flavours.",
    description:
      "Goan fish curry is a celebrated coastal dish combining fish with coconut, spices and a distinctive tangy flavour.",
    history:
      "The cuisine of Goa developed through centuries of coastal trade and cultural interaction, creating distinctive combinations of local ingredients and techniques.",
    culture:
      "Fish and coconut form an important part of Goan food culture, with seafood dishes commonly enjoyed alongside rice.",
    details: [
      { title: "Region", value: "Goa" },
      { title: "Type", value: "Fish Curry" },
      { title: "Main Ingredients", value: "Fish & Coconut" },
      { title: "Known For", value: "Coastal Flavours" },
    ],
  },

  "puran-poli": {
    category: "West Indian Cuisine",
    eyebrow: "MAHARASHTRA",
    name: "Puran Poli",
    image: "/images/food/west-india/puran-poli.webp",
    tagline: "A festive sweet flatbread filled with lentils and jaggery.",
    description:
      "Puran Poli is a traditional sweet flatbread filled with a mixture of cooked lentils, jaggery and spices.",
    history:
      "The dish has been part of western India's festive food traditions for generations.",
    culture:
      "Puran Poli is commonly prepared during festivals and family celebrations and is served warm with ghee or other accompaniments.",
    details: [
      { title: "Region", value: "Maharashtra" },
      { title: "Type", value: "Sweet Flatbread" },
      { title: "Filling", value: "Dal & Jaggery" },
      { title: "Known For", value: "Festive Tradition" },
    ],
  },

  // =====================================================
  // STREET FOOD
  // =====================================================

  "pani-puri": {
    category: "Street Food",
    eyebrow: "ACROSS INDIA",
    name: "Pani Puri",
    image: "/images/food/street-food/pani-puri.webp",
    tagline: "Crisp puris filled with a burst of spicy, tangy flavours.",
    description:
      "Pani Puri is one of India's most popular street foods, made with crisp hollow puris filled with spiced water, chutneys and other ingredients.",
    history:
      "The snack has developed into numerous regional versions across India, each with its own name and flavour profile.",
    culture:
      "Eating pani puri is often a social experience, with street vendors preparing each serving fresh for customers.",
    details: [
      { title: "Region", value: "Across India" },
      { title: "Type", value: "Street Food" },
      { title: "Known For", value: "Spiced Water" },
      { title: "Popular As", value: "Chaat" },
    ],
  },

  samosa: {
    category: "Street Food",
    eyebrow: "PAN INDIA",
    name: "Samosa",
    image: "/images/food/street-food/samosa.webp",
    tagline: "A crisp pastry filled with fragrant spices and comforting flavours.",
    description:
      "Samosa is a popular savoury snack made from a crisp pastry filled traditionally with spiced potatoes and peas.",
    history:
      "The samosa has a long history of movement and adaptation across Asia and became deeply established in Indian culinary culture.",
    culture:
      "It is commonly served with chutneys and enjoyed with tea, during gatherings or as an everyday snack.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Type", value: "Street Snack" },
      { title: "Traditional Filling", value: "Potato & Peas" },
      { title: "Known For", value: "Crisp Pastry" },
    ],
  },

  "aloo-tikki": {
    category: "Street Food",
    eyebrow: "NORTH INDIA",
    name: "Aloo Tikki",
    image: "/images/food/street-food/aloo-tikki.webp",
    tagline: "Crispy potato patties layered with chutneys and spices.",
    description:
      "Aloo Tikki is a popular North Indian street snack made from spiced potato patties and served with chutneys and other toppings.",
    history:
      "The dish developed into an important part of North Indian chaat culture and has many local variations.",
    culture:
      "It is commonly served hot with yogurt, chutneys, spices and other toppings.",
    details: [
      { title: "Region", value: "North India" },
      { title: "Type", value: "Chaat" },
      { title: "Main Ingredient", value: "Potato" },
      { title: "Known For", value: "Crispy Patties" },
    ],
  },

  "kathi-roll": {
    category: "Street Food",
    eyebrow: "KOLKATA",
    name: "Kathi Roll",
    image: "/images/food/street-food/kathi-roll.webp",
    tagline: "A Kolkata street food classic wrapped in flaky paratha.",
    description:
      "Kathi Roll is a popular Kolkata street food consisting of fillings wrapped inside a paratha or flatbread.",
    history:
      "The dish developed in Kolkata's street food culture and became known for its convenient handheld format.",
    culture:
      "Kathi rolls are enjoyed throughout the city and have developed into many versions featuring different fillings.",
    details: [
      { title: "Region", value: "Kolkata" },
      { title: "Type", value: "Street Food" },
      { title: "Base", value: "Paratha" },
      { title: "Known For", value: "Handheld Roll" },
    ],
  },

  "street-vada-pav": {
    category: "Street Food",
    eyebrow: "MUMBAI",
    name: "Vada Pav",
    image: "/images/food/street-food/vada-pav.webp",
    tagline: "Mumbai's legendary street snack, simple, spicy and satisfying.",
    description:
      "Vada Pav combines a spiced potato fritter with pav, chutneys and dry spices to create one of Mumbai's most iconic street foods.",
    history:
      "The snack became popular in Mumbai's urban food culture and grew into a symbol of affordable street food.",
    culture:
      "From railway stations to neighbourhood stalls, vada pav remains deeply connected with everyday life in Mumbai.",
    details: [
      { title: "Region", value: "Mumbai" },
      { title: "Type", value: "Street Food" },
      { title: "Main Ingredient", value: "Potato" },
      { title: "Known For", value: "Mumbai Street Culture" },
    ],
  },

  jhalmuri: {
    category: "Street Food",
    eyebrow: "WEST BENGAL",
    name: "Jhalmuri",
    image: "/images/food/street-food/jhalmuri.webp",
    tagline: "A crunchy Bengali snack packed with spice and freshness.",
    description:
      "Jhalmuri is a Bengali street snack made with puffed rice, spices, vegetables, chutneys and mustard oil.",
    history:
      "The snack developed as part of Bengal's vibrant street food culture and became popular for its simplicity and strong flavours.",
    culture:
      "Jhalmuri is commonly mixed fresh by street vendors and enjoyed as a quick snack across Bengal.",
    details: [
      { title: "Region", value: "West Bengal" },
      { title: "Type", value: "Street Snack" },
      { title: "Main Ingredient", value: "Puffed Rice" },
      { title: "Known For", value: "Spicy & Crunchy" },
    ],
  },

  // =====================================================
  // SWEETS & DRINKS
  // =====================================================

  jalebi: {
    category: "Sweets & Drinks",
    eyebrow: "PAN INDIA",
    name: "Jalebi",
    image: "/images/food/sweets-drinks/jalebi.jpeg",
    tagline: "Crispy golden spirals soaked in fragrant sugar syrup.",
    description:
      "Jalebi is a popular Indian sweet made by frying spiral-shaped batter and soaking it in sugar syrup.",
    history:
      "The sweet has a long history across South Asia and became deeply established in Indian festive and everyday food culture.",
    culture:
      "Jalebi is commonly enjoyed during festivals, celebrations, fairs and as a popular sweet-shop treat.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Type", value: "Sweet" },
      { title: "Known For", value: "Crisp Spirals" },
      { title: "Served", value: "Warm or Fresh" },
    ],
  },

  "gulab-jamun": {
    category: "Sweets & Drinks",
    eyebrow: "PAN INDIA",
    name: "Gulab Jamun",
    image: "/images/food/sweets-drinks/gulab-jamun.jpeg",
    tagline: "Soft golden dumplings soaked in fragrant sweet syrup.",
    description:
      "Gulab Jamun is a popular Indian sweet made from milk solids, fried and then soaked in aromatic sugar syrup.",
    history:
      "The sweet became deeply established in the Indian subcontinent and developed into many regional preparations.",
    culture:
      "Gulab Jamun is a familiar part of weddings, festivals, celebrations and Indian dessert traditions.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Type", value: "Sweet" },
      { title: "Main Ingredient", value: "Milk Solids" },
      { title: "Known For", value: "Soft Texture" },
    ],
  },

  "rasgulla": {
    category: "Sweets & Drinks",
    eyebrow: "WEST BENGAL & ODISHA",
    name: "Rasgulla",
    image: "/images/food/sweets-drinks/rasgulla.jpeg",
    tagline: "Soft chhena dumplings floating in delicate sugar syrup.",
    description:
      "Rasgulla is a soft chhena-based sweet traditionally cooked and served in light sugar syrup.",
    history:
      "Rasgulla is strongly associated with the culinary traditions of Odisha and West Bengal and has become one of India's most recognised sweets.",
    culture:
      "The sweet is commonly served during festivals, celebrations and family occasions.",
    details: [
      { title: "Region", value: "West Bengal & Odisha" },
      { title: "Type", value: "Sweet" },
      { title: "Main Ingredient", value: "Chhena" },
      { title: "Known For", value: "Soft & Spongy Texture" },
    ],
  },

  lassi: {
    category: "Sweets & Drinks",
    eyebrow: "PUNJAB & NORTH INDIA",
    name: "Lassi",
    image: "/images/food/sweets-drinks/lassi.png",
    tagline: "A refreshing yogurt drink deeply connected with North Indian food culture.",
    description:
      "Lassi is a traditional yogurt-based drink that can be prepared in sweet, savoury and flavoured varieties.",
    history:
      "Lassi has long been part of North Indian food traditions and became particularly associated with Punjab.",
    culture:
      "It is commonly enjoyed alongside meals or as a refreshing drink, especially during warmer weather.",
    details: [
      { title: "Region", value: "Punjab & North India" },
      { title: "Type", value: "Traditional Drink" },
      { title: "Main Ingredient", value: "Yogurt" },
      { title: "Varieties", value: "Sweet & Savoury" },
    ],
  },

  "masala-chai": {
    category: "Sweets & Drinks",
    eyebrow: "PAN INDIA",
    name: "Masala Chai",
    image: "/images/food/sweets-drinks/masala-chai.jpeg",
    tagline: "A warm, aromatic tea that has become part of everyday Indian life.",
    description:
      "Masala Chai combines tea with milk, sugar and aromatic spices to create one of India's most familiar beverages.",
    history:
      "Tea drinking became widespread in India during the colonial period and evolved into many local preparations.",
    culture:
      "Chai is deeply woven into everyday social life, from homes and offices to railway stations and roadside tea stalls.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Type", value: "Beverage" },
      { title: "Main Ingredients", value: "Tea, Milk & Spices" },
      { title: "Known For", value: "Everyday Chai Culture" },
    ],
  },

  "filter-coffee": {
    category: "Sweets & Drinks",
    eyebrow: "SOUTH INDIA",
    name: "Filter Coffee",
    image: "/images/food/sweets-drinks/filter-coffee.jpeg",
    tagline: "Strong, aromatic coffee poured with the warmth of South Indian tradition.",
    description:
      "South Indian filter coffee is traditionally prepared by brewing finely ground coffee through a metal filter and combining it with hot milk.",
    history:
      "Coffee cultivation and drinking became deeply established in South India, particularly in Karnataka, Tamil Nadu and neighbouring regions.",
    culture:
      "Filter coffee is closely connected with South Indian breakfast traditions, homes, cafés and everyday social life.",
    details: [
      { title: "Region", value: "South India" },
      { title: "Type", value: "Beverage" },
      { title: "Main Ingredient", value: "Coffee" },
      { title: "Known For", value: "Strong Aroma & Taste" },
    ],
  },
};


// =========================================================
// COMPONENT
// =========================================================

export default function FoodStory() {
  const { categorySlug, storySlug } = useParams();

  const food = foodStories[storySlug];

  if (!food) {
    return (
      <section className="section center">
        <h1>Food story not found.</h1>

        <p>
          We couldn't find the food story you're looking for.
        </p>

        <Link
          to={`/food/${categorySlug}`}
          className="secondary"
        >
          ← Back to Food
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="heritageDetailHero">
        <img
          src={food.image}
          alt={food.name}
        />

        <div className="heritageDetailOverlay">
          <span>{food.eyebrow}</span>

          <h1>{food.name}</h1>

          <p>{food.tagline}</p>
        </div>
      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="heritageDetailContent">

        {/* TOP NAVIGATION */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            width: "100%",
            marginBottom: "3rem",
          }}
        >

          {/* BACK LINK */}
          <Link
            to={`/food/${categorySlug}`}
            className="backLink"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ← Back to {food.category}
          </Link>


          {/* LIVING HERITAGE CTA */}
          <Link
            to={`/living-heritage/food/${storySlug}`}
            className="living-detail-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ✦ Explore Living Heritage of {food.name} →
          </Link>

        </div>


        {/* =====================================================
            STORY LAYOUT
        ===================================================== */}

        <div className="heritageDetailLayout">

          {/* MAIN STORY */}

          <main>

            <span className="detailEyebrow">
              THE STORY
            </span>

            <h2>
              Discover {food.name}.
            </h2>

            <p>
              {food.description}
            </p>


            <h3>
              History
            </h3>

            <p>
              {food.history}
            </p>


            <h3>
              Food Culture & Tradition
            </h3>

            <p>
              {food.culture}
            </p>

          </main>


          {/* =====================================================
              AT A GLANCE
          ===================================================== */}

          <aside className="heritageDetailAside">

            <h3>
              At a glance
            </h3>

            {food.details.map((detail) => (
              <div
                className="heritageDetailItem"
                key={detail.title}
              >

                <small>
                  {detail.title}
                </small>

                <strong>
                  {detail.value}
                </strong>

              </div>
            ))}

          </aside>

        </div>


        {/* =====================================================
            BOTTOM NAVIGATION
        ===================================================== */}

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >

          <Link
            to={`/food/${categorySlug}`}
            className="secondary"
          >
            ← Explore {food.category}
          </Link>

          <Link
            to="/food"
            className="secondary"
          >
            Explore All Food →
          </Link>

        </div>


        <PlaceCommunity
          placeName={food.name}
          placeId={`food-${storySlug}`}
          placeType="Food Experience"
        />
      </section>
    </>
  );
}
