import { Link, useParams } from "react-router-dom";
import PlaceCommunity from "../components/PlaceCommunity";

const heritageData = {
  // =====================================================
  // MONUMENTS
  // =====================================================

  "taj-mahal": {
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    image: "/images/tajmahal.webp",
    eyebrow: "AGRA, UTTAR PRADESH",
    tagline: "A timeless symbol of love in white marble.",
    description:
      "The Taj Mahal is one of India's most celebrated monuments and one of the world's most recognisable architectural masterpieces.",
    history:
      "Commissioned by Mughal emperor Shah Jahan in memory of Mumtaz Mahal, the monument was developed in the 17th century as a grand mausoleum.",
    architecture:
      "The complex is renowned for its white marble dome, symmetrical gardens, minarets, intricate inlay work and detailed craftsmanship.",
    details: [
      { title: "Built", value: "17th Century" },
      { title: "Location", value: "Agra, Uttar Pradesh" },
      { title: "Architecture", value: "Mughal" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  "hawa-mahal": {
    name: "Hawa Mahal",
    state: "Rajasthan",
    image: "/images/hawamahal.webp",
    eyebrow: "JAIPUR, RAJASTHAN",
    tagline: "The iconic Palace of Winds.",
    description:
      "Hawa Mahal is one of Jaipur's most recognisable landmarks, famous for its distinctive pink facade and hundreds of small windows.",
    history:
      "Built in the late 18th century, the palace was designed as an extension of the City Palace complex.",
    architecture:
      "Its honeycomb-like facade contains numerous small windows and balconies designed to allow air to circulate through the building.",
    details: [
      { title: "Built", value: "18th Century" },
      { title: "Location", value: "Jaipur, Rajasthan" },
      { title: "Architecture", value: "Rajput" },
      { title: "Known For", value: "Pink Facade & Windows" },
    ],
  },

  "victoria-memorial": {
    name: "Victoria Memorial",
    state: "West Bengal",
    image: "/images/victoria.webp",
    eyebrow: "KOLKATA, WEST BENGAL",
    tagline: "A grand marble landmark surrounded by gardens.",
    description:
      "Victoria Memorial is one of Kolkata's most prominent architectural landmarks and houses a large collection of historical artefacts.",
    history:
      "The memorial was built in the early 20th century in memory of Queen Victoria and became an important landmark of colonial-era Kolkata.",
    architecture:
      "The building combines elements of European, Mughal and Indian architectural traditions and is constructed primarily from white marble.",
    details: [
      { title: "Built", value: "20th Century" },
      { title: "Location", value: "Kolkata, West Bengal" },
      { title: "Material", value: "White Marble" },
      { title: "Known For", value: "Museum & Gardens" },
    ],
  },

  "konark-sun-temple": {
    name: "Konark Sun Temple",
    state: "Odisha",
    image: "/images/konark.webp",
    eyebrow: "KONARK, ODISHA",
    tagline: "A monumental stone chariot dedicated to the Sun.",
    description:
      "The Konark Sun Temple is one of India's most remarkable examples of temple architecture and stone carving.",
    history:
      "The temple was constructed in the 13th century under the Eastern Ganga dynasty.",
    architecture:
      "Designed as a colossal chariot of the Sun God, the temple is famous for its carved wheels, horses and elaborate sculptures.",
    details: [
      { title: "Built", value: "13th Century" },
      { title: "Location", value: "Konark, Odisha" },
      { title: "Architecture", value: "Kalinga" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  "sanchi-stupa": {
    name: "Sanchi Stupa",
    state: "Madhya Pradesh",
    image: "/images/sanchi.webp",
    eyebrow: "SANCHI, MADHYA PRADESH",
    tagline: "A serene symbol of India's Buddhist heritage.",
    description:
      "Sanchi is home to some of India's oldest surviving Buddhist monuments and is renowned for its historic stupas and gateways.",
    history:
      "The earliest monuments at Sanchi were associated with Emperor Ashoka and were expanded and developed over subsequent centuries.",
    architecture:
      "The Great Stupa features a hemispherical dome surrounded by carved gateways depicting Buddhist stories and symbols.",
    details: [
      { title: "Origin", value: "3rd Century BCE" },
      { title: "Location", value: "Sanchi, Madhya Pradesh" },
      { title: "Tradition", value: "Buddhist" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  charminar: {
    name: "Charminar",
    state: "Telangana",
    image: "/images/charminar.webp",
    eyebrow: "HYDERABAD, TELANGANA",
    tagline: "The four-towered icon of Hyderabad.",
    description:
      "Charminar is Hyderabad's most famous landmark, recognised for its four grand minarets and historic urban setting.",
    history:
      "The monument was built in the late 16th century and became the centrepiece of Hyderabad's historic city.",
    architecture:
      "Its four towering minarets rise above a square structure featuring arches, domes and intricate decorative details.",
    details: [
      { title: "Built", value: "16th Century" },
      { title: "Location", value: "Hyderabad, Telangana" },
      { title: "Architecture", value: "Indo-Islamic" },
      { title: "Known For", value: "Four Minarets" },
    ],
  },

  // =====================================================
  // FORTS & PALACES
  // =====================================================

  "amber-fort": {
    name: "Amber Fort",
    state: "Rajasthan",
    image: "/images/amber.webp",
    eyebrow: "JAIPUR, RAJASTHAN",
    tagline: "A magnificent hill fort shaped by Rajput grandeur.",
    description:
      "Amber Fort is one of Rajasthan's most celebrated forts, known for its grand courtyards, ornate interiors and spectacular hilltop setting.",
    history:
      "The fort developed over several generations and became an important seat of the Kachwaha Rajput rulers.",
    architecture:
      "The fort combines Rajput and Mughal influences, with grand gateways, courtyards, halls and intricate artistic details.",
    details: [
      { title: "Built", value: "16th Century" },
      { title: "Location", value: "Jaipur, Rajasthan" },
      { title: "Architecture", value: "Rajput-Mughal" },
      { title: "Known For", value: "Hilltop Fort & Palace" },
    ],
  },

  "red-fort": {
    name: "Red Fort",
    state: "Delhi",
    image: "/images/redfort.webp",
    eyebrow: "DELHI, INDIA",
    tagline: "A monumental symbol of Mughal power and India's history.",
    description:
      "The Red Fort is one of Delhi's most important historical landmarks, recognised for its massive red sandstone walls and grand Mughal architecture.",
    history:
      "Commissioned by Mughal emperor Shah Jahan in the 17th century, the fort became the principal residence of the Mughal emperors in Delhi.",
    architecture:
      "The complex features massive defensive walls, grand gateways, royal halls, gardens and intricate decorative work.",
    details: [
      { title: "Built", value: "17th Century" },
      { title: "Location", value: "Delhi" },
      { title: "Architecture", value: "Mughal" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  "mehrangarh-fort": {
    name: "Mehrangarh Fort",
    state: "Rajasthan",
    image: "/images/Mehrangarh.webp",
    eyebrow: "JODHPUR, RAJASTHAN",
    tagline: "A towering fortress overlooking the Blue City.",
    description:
      "Mehrangarh Fort rises dramatically above Jodhpur and is one of India's most impressive examples of Rajput military architecture.",
    history:
      "The fort was established in the 15th century by Rao Jodha and developed over generations as the centre of the Marwar kingdom.",
    architecture:
      "Its massive sandstone walls, imposing gates, expansive courtyards and richly decorated palaces showcase Rajput architecture.",
    details: [
      { title: "Founded", value: "15th Century" },
      { title: "Location", value: "Jodhpur, Rajasthan" },
      { title: "Architecture", value: "Rajput" },
      { title: "Known For", value: "Hilltop Fortress" },
    ],
  },

  "mysore-palace": {
    name: "Mysore Palace",
    state: "Karnataka",
    image: "/images/mysore.webp",
    eyebrow: "MYSORE, KARNATAKA",
    tagline: "A dazzling palace of royal grandeur and artistry.",
    description:
      "Mysore Palace is one of India's most spectacular royal residences, famous for its elaborate interiors, grand halls and illuminated facade.",
    history:
      "The present palace was constructed in the early 20th century after the earlier wooden palace was destroyed by fire.",
    architecture:
      "The palace blends Hindu, Muslim, Rajput and Gothic influences into an ornate architectural style.",
    details: [
      { title: "Built", value: "20th Century" },
      { title: "Location", value: "Mysore, Karnataka" },
      { title: "Architecture", value: "Indo-Saracenic" },
      { title: "Known For", value: "Royal Palace & Illumination" },
    ],
  },

  "chittorgarh-fort": {
    name: "Chittorgarh Fort",
    state: "Rajasthan",
    image: "/images/chittorgarh.webp",
    eyebrow: "CHITTORGARH, RAJASTHAN",
    tagline: "A vast fortress carrying centuries of Rajput history.",
    description:
      "Chittorgarh Fort is one of India's largest fort complexes and a powerful symbol of Rajput courage and resilience.",
    history:
      "The fort served as a major stronghold of the Mewar kingdom and witnessed several important battles.",
    architecture:
      "The hilltop complex contains gateways, palaces, towers, temples and reservoirs representing centuries of architectural development.",
    details: [
      { title: "Origin", value: "Ancient & Medieval India" },
      { title: "Location", value: "Chittorgarh, Rajasthan" },
      { title: "Tradition", value: "Rajput" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  "city-palace": {
    name: "City Palace",
    state: "Rajasthan",
    image: "/images/citypalace.webp",
    eyebrow: "UDAIPUR, RAJASTHAN",
    tagline: "A royal palace complex overlooking Lake Pichola.",
    description:
      "The City Palace of Udaipur is an expansive royal complex combining palaces, courtyards, balconies and decorative interiors.",
    history:
      "The palace complex was developed over several generations by the rulers of Mewar.",
    architecture:
      "Its architecture combines Rajput traditions with Mughal influences, featuring ornate balconies, courtyards and decorative interiors.",
    details: [
      { title: "Founded", value: "16th Century" },
      { title: "Location", value: "Udaipur, Rajasthan" },
      { title: "Architecture", value: "Rajput-Mughal" },
      { title: "Known For", value: "Lake Pichola Views" },
    ],
  },

  // =====================================================
  // TEMPLES
  // =====================================================

  "kashi-vishwanath-temple": {
    name: "Kashi Vishwanath Temple",
    state: "Uttar Pradesh",
    image: "/images/kashi.webp",
    eyebrow: "VARANASI, UTTAR PRADESH",
    tagline: "One of India's most revered temples.",
    description:
      "Kashi Vishwanath Temple is one of the most important Hindu pilgrimage sites, situated in the ancient city of Varanasi.",
    history:
      "The temple has been rebuilt and renovated multiple times throughout history and remains a major centre of devotion.",
    architecture:
      "The present temple complex is known for its distinctive golden domes and sacred architectural setting near the Ganges.",
    details: [
      { title: "Location", value: "Varanasi, Uttar Pradesh" },
      { title: "Tradition", value: "Hinduism" },
      { title: "Deity", value: "Lord Shiva" },
      { title: "Known For", value: "Jyotirlinga Temple" },
    ],
  },

  "jagannath-temple": {
    name: "Jagannath Temple",
    state: "Odisha",
    image: "/images/jagannath.webp",
    eyebrow: "PURI, ODISHA",
    tagline: "A sacred centre of devotion and the famous Rath Yatra.",
    description:
      "The Jagannath Temple at Puri is one of India's most important pilgrimage destinations and a major centre of Vaishnavite tradition.",
    history:
      "The present temple complex dates to the medieval period and has remained central to the religious and cultural life of Odisha.",
    architecture:
      "The temple is a major example of Kalinga architecture, dominated by its towering main sanctuary and surrounding structures.",
    details: [
      { title: "Location", value: "Puri, Odisha" },
      { title: "Tradition", value: "Hinduism" },
      { title: "Deities", value: "Jagannath, Balabhadra & Subhadra" },
      { title: "Known For", value: "Rath Yatra" },
    ],
  },

  "meenakshi-amman-temple": {
    name: "Meenakshi Amman Temple",
    state: "Tamil Nadu",
    image: "/images/madurai.webp",
    eyebrow: "MADURAI, TAMIL NADU",
    tagline: "A vibrant masterpiece of Dravidian temple architecture.",
    description:
      "Meenakshi Amman Temple is one of India's most visually striking temples, celebrated for its towering gopurams and colourful sculptures.",
    history:
      "The temple complex developed over many centuries and became a major religious and cultural centre of Madurai.",
    architecture:
      "Its many gopurams are covered with thousands of detailed sculptures depicting deities, mythical figures and stories.",
    details: [
      { title: "Location", value: "Madurai, Tamil Nadu" },
      { title: "Tradition", value: "Hinduism" },
      { title: "Architecture", value: "Dravidian" },
      { title: "Known For", value: "Colourful Gopurams" },
    ],
  },

  "kedarnath-temple": {
    name: "Kedarnath Temple",
    state: "Uttarakhand",
    image: "/images/kedarnath.webp",
    eyebrow: "KEDARNATH, UTTARAKHAND",
    tagline: "A sacred Himalayan temple surrounded by dramatic mountains.",
    description:
      "Kedarnath Temple is one of the most revered Shiva temples and an important pilgrimage destination in the Himalayas.",
    history:
      "The temple has a long religious history and forms an important part of the Char Dham pilgrimage tradition.",
    architecture:
      "Built largely from massive stone slabs, the temple has a simple yet powerful architectural character suited to its Himalayan surroundings.",
    details: [
      { title: "Location", value: "Kedarnath, Uttarakhand" },
      { title: "Tradition", value: "Hinduism" },
      { title: "Deity", value: "Lord Shiva" },
      { title: "Setting", value: "Himalayas" },
    ],
  },

  "brihadeeswarar-temple": {
    name: "Brihadeeswarar Temple",
    state: "Tamil Nadu",
    image: "/images/thanjavur.webp",
    eyebrow: "THANJAVUR, TAMIL NADU",
    tagline: "A monumental expression of Chola architectural brilliance.",
    description:
      "Brihadeeswarar Temple is one of the finest achievements of South Indian temple architecture and an important Chola-era monument.",
    history:
      "The temple was constructed during the reign of Chola ruler Rajaraja I in the early 11th century.",
    architecture:
      "The enormous vimana, stone construction and carefully proportioned complex demonstrate the engineering and artistic achievements of the Chola period.",
    details: [
      { title: "Built", value: "11th Century" },
      { title: "Location", value: "Thanjavur, Tamil Nadu" },
      { title: "Architecture", value: "Dravidian" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  // =====================================================
  // HISTORIC CITIES
  // =====================================================

  kolkata: {
    name: "Kolkata",
    state: "West Bengal",
    image: "/images/kolkata.webp",
    eyebrow: "WEST BENGAL, INDIA",
    tagline: "A city where colonial history meets Bengali culture.",
    description:
      "Kolkata is a historic cultural centre known for its architecture, literature, art, food and distinctive urban character.",
    history:
      "The city developed as an important centre during the colonial period and later became a major centre of India's cultural and intellectual life.",
    architecture:
      "Historic neighbourhoods feature colonial buildings, grand public institutions, traditional Bengali homes and important religious landmarks.",
    details: [
      { title: "Region", value: "Eastern India" },
      { title: "State", value: "West Bengal" },
      { title: "Known For", value: "Culture & Literature" },
      { title: "Heritage", value: "Colonial & Bengali" },
    ],
  },

  udaipur: {
    name: "Udaipur",
    state: "Rajasthan",
    image: "/images/udaipur.webp",
    eyebrow: "RAJASTHAN, INDIA",
    tagline: "The romantic city of lakes and royal palaces.",
    description:
      "Udaipur is renowned for its lakes, palaces, historic streets and the distinctive heritage of the Mewar kingdom.",
    history:
      "The city was established in the 16th century as the new capital of Mewar.",
    architecture:
      "Its landscape is defined by royal palace complexes, historic havelis, temples and traditional Rajasthani architecture surrounding its lakes.",
    details: [
      { title: "Founded", value: "16th Century" },
      { title: "State", value: "Rajasthan" },
      { title: "Known For", value: "Lakes & Palaces" },
      { title: "Historic Region", value: "Mewar" },
    ],
  },

  khajuraho: {
    name: "Khajuraho Group of Monuments",
    state: "Madhya Pradesh",
    image: "/images/khajuraho.webp",
    eyebrow: "KHAJURAHO, MADHYA PRADESH",
    tagline: "A celebrated collection of temples carved in stone.",
    description:
      "The Khajuraho Group of Monuments is renowned for its extraordinary temple architecture and detailed sculptures.",
    history:
      "The temples were constructed primarily during the Chandela dynasty between the 10th and 12th centuries.",
    architecture:
      "The temples feature soaring shikharas, intricate stone carvings and detailed sculptures representing religious, cultural and everyday themes.",
    details: [
      { title: "Built", value: "10th–12th Century" },
      { title: "Location", value: "Madhya Pradesh" },
      { title: "Dynasty", value: "Chandela" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  // =====================================================
  // UNESCO
  // =====================================================

  "ajanta-caves": {
    name: "Ajanta Caves",
    state: "Maharashtra",
    image: "/images/ajanta.webp",
    eyebrow: "MAHARASHTRA, INDIA",
    tagline: "Ancient Buddhist caves filled with extraordinary paintings.",
    description:
      "The Ajanta Caves are a remarkable collection of rock-cut Buddhist monuments famous for their paintings, sculptures and architectural details.",
    history:
      "The caves were developed over several centuries, with major phases of activity associated with ancient Buddhist communities.",
    architecture:
      "The complex contains monasteries and prayer halls carved directly into the rock, along with celebrated murals and sculptures.",
    details: [
      { title: "Period", value: "Ancient India" },
      { title: "Location", value: "Maharashtra" },
      { title: "Tradition", value: "Buddhist" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  "ellora-caves": {
    name: "Ellora Caves",
    state: "Maharashtra",
    image: "/images/ellora.webp",
    eyebrow: "MAHARASHTRA, INDIA",
    tagline: "A monumental meeting of Buddhist, Hindu and Jain traditions.",
    description:
      "Ellora is famous for its extraordinary rock-cut temples and monasteries representing multiple religious traditions.",
    history:
      "The caves were created over several centuries and demonstrate the artistic achievements of ancient Indian craftsmen.",
    architecture:
      "The complex contains Buddhist monasteries, Hindu temples and Jain monuments carved directly into the volcanic rock.",
    details: [
      { title: "Period", value: "Ancient & Medieval India" },
      { title: "Location", value: "Maharashtra" },
      { title: "Traditions", value: "Buddhist, Hindu & Jain" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  // =====================================================
  // ADDITIONAL HERITAGE DETAILS
  // =====================================================

  "sun-temple-konark": {
    name: "Sun Temple, Konark",
    state: "Odisha",
    image: "/images/suntemple.webp",
    eyebrow: "KONARK, ODISHA",
    tagline: "A magnificent stone chariot built for the Sun God.",
    description:
      "The Sun Temple at Konark is one of India's greatest architectural achievements, famous for its monumental chariot design, carved wheels and extraordinary stone sculptures.",
    history:
      "The temple was constructed in the 13th century during the reign of King Narasimhadeva I of the Eastern Ganga dynasty.",
    architecture:
      "The temple was designed as a colossal chariot of the Sun God, complete with intricately carved wheels, horses and elaborate sculptural decoration.",
    details: [
      { title: "Built", value: "13th Century" },
      { title: "Location", value: "Konark, Odisha" },
      { title: "Dynasty", value: "Eastern Ganga" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  mysore: {
    name: "Mysore",
    state: "Karnataka",
    image: "/images/mysore.webp",
    eyebrow: "MYSORE, KARNATAKA",
    tagline: "A royal city shaped by palaces, culture and tradition.",
    description:
      "Mysore is one of South India's most celebrated historic cities, known for its royal heritage, grand palace, traditional celebrations and distinctive cultural identity.",
    history:
      "Mysore developed as an important centre of the Wadiyar dynasty and became closely associated with the royal history of the Kingdom of Mysore.",
    architecture:
      "The city combines royal palaces, historic temples, colonial-era buildings and traditional architecture, with Mysore Palace standing as its most famous landmark.",
    details: [
      { title: "Region", value: "Southern India" },
      { title: "State", value: "Karnataka" },
      { title: "Known For", value: "Royal Heritage" },
      { title: "Landmark", value: "Mysore Palace" },
    ],
  },

  varanasi: {
    name: "Varanasi",
    state: "Uttar Pradesh",
    image: "/images/varanasi.webp",
    eyebrow: "VARANASI, UTTAR PRADESH",
    tagline: "An ancient city where history and spirituality meet the Ganges.",
    description:
      "Varanasi is one of India's oldest continuously inhabited cities and a major centre of spirituality, pilgrimage, music, culture and learning.",
    history:
      "The city has a history stretching back thousands of years and has remained an important religious and cultural centre along the banks of the Ganges.",
    architecture:
      "Varanasi is famous for its riverside ghats, ancient temples, narrow historic lanes and traditional neighbourhoods that create its distinctive urban character.",
    details: [
      { title: "Region", value: "Northern India" },
      { title: "State", value: "Uttar Pradesh" },
      { title: "Known For", value: "Ghats & Spirituality" },
      { title: "River", value: "Ganges" },
    ],
  },

  jaipur: {
    name: "Jaipur",
    state: "Rajasthan",
    image: "/images/jaipur.webp",
    eyebrow: "JAIPUR, RAJASTHAN",
    tagline: "The Pink City of royal architecture and vibrant streets.",
    description:
      "Jaipur is one of India's most famous historic cities, celebrated for its planned streets, royal palaces, forts, colourful markets and distinctive pink architecture.",
    history:
      "Founded in the 18th century by Maharaja Sawai Jai Singh II, Jaipur became the capital of the Kachwaha Rajput kingdom.",
    architecture:
      "The city is known for its carefully planned urban layout, grand gateways, palaces, havelis and monuments that blend Rajput and Mughal architectural influences.",
    details: [
      { title: "Founded", value: "18th Century" },
      { title: "State", value: "Rajasthan" },
      { title: "Known For", value: "Pink City" },
      { title: "Heritage", value: "Royal Rajput Architecture" },
    ],
  },

  agra: {
    name: "Agra",
    state: "Uttar Pradesh",
    image: "/images/agra.webp",
    eyebrow: "AGRA, UTTAR PRADESH",
    tagline: "A historic Mughal city filled with architectural masterpieces.",
    description:
      "Agra is one of India's most important historic cities, famous for the Taj Mahal, Agra Fort and its extraordinary Mughal architectural heritage.",
    history:
      "Agra became a major centre of the Mughal Empire and served as an important imperial capital during several periods of Mughal rule.",
    architecture:
      "The city is home to magnificent Mughal monuments featuring red sandstone, white marble, domes, gardens, intricate carvings and decorative inlay work.",
    details: [
      { title: "Region", value: "Northern India" },
      { title: "State", value: "Uttar Pradesh" },
      { title: "Known For", value: "Taj Mahal" },
      { title: "Heritage", value: "Mughal Architecture" },
    ],
  },

  "khajuraho-group-of-monuments": {
    name: "Khajuraho Group of Monuments",
    state: "Madhya Pradesh",
    image: "/images/khajuraho.webp",
    eyebrow: "KHAJURAHO, MADHYA PRADESH",
    tagline: "Temples where stone becomes a celebration of art and life.",
    description:
      "The Khajuraho Group of Monuments is a remarkable collection of medieval Hindu and Jain temples renowned for their intricate sculptures and extraordinary architectural detail.",
    history:
      "The temples were constructed mainly between the 10th and 12th centuries under the Chandela dynasty.",
    architecture:
      "The temples feature soaring shikharas, richly carved walls and detailed sculptures depicting deities, mythical figures, musicians and scenes from everyday life.",
    details: [
      { title: "Built", value: "10th–12th Century" },
      { title: "Location", value: "Madhya Pradesh" },
      { title: "Dynasty", value: "Chandela" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },

  sanchi: {
    name: "Sanchi",
    state: "Madhya Pradesh",
    image: "/images/sanchi.webp",
    eyebrow: "MADHYA PRADESH, INDIA",
    tagline: "One of India's oldest and most important Buddhist landscapes.",
    description:
      "Sanchi preserves a remarkable collection of Buddhist monuments, stupas, temples and monasteries.",
    history:
      "The site developed from the time of Emperor Ashoka and remained an important Buddhist centre for centuries.",
    architecture:
      "Its monuments include the Great Stupa, elaborately carved gateways and several historic structures spread across the hill.",
    details: [
      { title: "Origin", value: "3rd Century BCE" },
      { title: "Location", value: "Madhya Pradesh" },
      { title: "Tradition", value: "Buddhist" },
      { title: "Heritage", value: "UNESCO World Heritage Site" },
    ],
  },
};


// =========================================================
// COMPONENT
// =========================================================

export default function HeritageDetail() {
  const { slug } = useParams();

  const place = heritageData[slug];

  // =======================================================
  // STORY NOT FOUND
  // =======================================================

  if (!place) {
    return (
      <section className="section center">

        <h1>
          Heritage site not found.
        </h1>

        <p>
          We couldn't find the heritage site you're looking for.
        </p>

        <Link
          to="/heritage"
          className="secondary"
        >
          ← Back to Heritage
        </Link>

      </section>
    );
  }


  // =======================================================
  // PAGE
  // =======================================================

  return (
    <>
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="heritageDetailHero">

        <img
          src={place.image}
          alt={place.name}
        />

        <div className="heritageDetailOverlay">

          <span>
            {place.eyebrow}
          </span>

          <h1>
            {place.name}
          </h1>

          <p>
            {place.tagline}
          </p>

        </div>

      </section>


      {/* ===================================================
          CONTENT
      =================================================== */}

      <section className="heritageDetailContent">

        {/* =================================================
            TOP NAVIGATION
            BACK LEFT + LIVING HERITAGE RIGHT
        ================================================= */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3.2rem",
            flexWrap: "wrap",
          }}
        >

          {/* BACK TO HERITAGE */}

          <Link
            to="/heritage"
            className="backLink"
          >
            ← Back to Heritage
          </Link>


          {/* LIVING HERITAGE */}

          <Link
            to={`/living-heritage/heritage/${slug}`}
            className="living-detail-cta"
          >
            ✦ Explore Living Heritage of {place.name} →
          </Link>

        </div>


        {/* =================================================
            STORY + DETAILS
        ================================================= */}

        <div className="heritageDetailLayout">


          {/* =================================================
              MAIN STORY
          ================================================= */}

          <main>

            <span className="detailEyebrow">
              THE STORY
            </span>


            <h2>
              Discover {place.name}.
            </h2>


            <p>
              {place.description}
            </p>


            <h3>
              History
            </h3>


            <p>
              {place.history}
            </p>


            <h3>
              Architecture & Legacy
            </h3>


            <p>
              {place.architecture}
            </p>

          </main>


          {/* =================================================
              AT A GLANCE
          ================================================= */}

          <aside className="heritageDetailAside">

            <h3>
              At a glance
            </h3>


            {place.details.map((detail) => (
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


        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <div
          style={{
            marginTop: "3.5rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >

          <Link
            to="/heritage"
            className="secondary"
          >
            ← Explore Heritage
          </Link>


          <Link
            to="/crafts"
            className="secondary"
          >
            Explore Crafts →
          </Link>

        </div>


        <PlaceCommunity
          placeName={place.name}
          placeId={`heritage-${slug}`}
          placeType="Heritage Site"
        />
      </section>
    </>
  );
}
