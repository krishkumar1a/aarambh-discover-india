import { Link, useParams } from "react-router-dom";
import PlaceCommunity from "../components/PlaceCommunity";

const cultureStories = {
  // =====================================================
  // FESTIVALS & CELEBRATIONS
  // =====================================================

  holi: {
    category: "Festivals & Celebrations",
    eyebrow: "NORTH INDIA",
    name: "Holi",
    image: "/images/culture/festivals & celebrations/holi.webp",
    tagline: "A vibrant celebration of colour, joy and togetherness.",
    description:
      "Holi is one of India's most vibrant festivals, celebrated with colours, music, traditional food and gatherings of family and friends.",
    history:
      "Holi has ancient roots and is associated with the arrival of spring. Its traditions have developed across generations and vary between different regions of India.",
    culture:
      "People gather to play with colours, exchange sweets and visit friends and relatives. Bonfires associated with Holika Dahan are also an important part of the celebration.",
    details: [
      { title: "Region", value: "North India & Pan India" },
      { title: "Season", value: "Spring" },
      { title: "Type", value: "Festival" },
      { title: "Known For", value: "Colours & Celebration" },
    ],
  },

  diwali: {
    category: "Festivals & Celebrations",
    eyebrow: "PAN INDIA",
    name: "Diwali",
    image: "/images/culture/festivals & celebrations/diwali.webp",
    tagline: "The festival of lights that fills homes with warmth and hope.",
    description:
      "Diwali is one of India's most widely celebrated festivals, marked by lamps, decorations, prayers, sweets and family gatherings.",
    history:
      "Diwali traditions have developed over centuries and carry different stories and meanings across Indian regions and communities.",
    culture:
      "Homes are decorated with diyas and rangoli, families gather together and festive meals and sweets are shared. The lighting of lamps symbolises light, hope and renewal.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Season", value: "Autumn" },
      { title: "Type", value: "Festival of Lights" },
      { title: "Known For", value: "Diyas & Celebrations" },
    ],
  },

  "durga-puja": {
    category: "Festivals & Celebrations",
    eyebrow: "WEST BENGAL",
    name: "Durga Puja",
    image: "/images/culture/festivals & celebrations/durga.webp",
    tagline: "A spectacular celebration of art, devotion and community.",
    description:
      "Durga Puja is a major cultural celebration in West Bengal, known for elaborate pandals, artistic idols, music and community gatherings.",
    history:
      "The celebration has evolved over centuries and became deeply connected with the cultural identity of Bengal.",
    culture:
      "Temporary pandals are created across cities and towns, often featuring elaborate artistic themes. Cultural performances, rituals, food and community gatherings form an important part of the celebration.",
    details: [
      { title: "Region", value: "West Bengal" },
      { title: "Duration", value: "Several Days" },
      { title: "Type", value: "Cultural Festival" },
      { title: "Known For", value: "Pandals & Idols" },
    ],
  },

  onam: {
    category: "Festivals & Celebrations",
    eyebrow: "KERALA",
    name: "Onam",
    image: "/images/culture/festivals & celebrations/onam.webp",
    tagline: "Kerala's harvest festival of flowers, food and togetherness.",
    description:
      "Onam is Kerala's celebrated harvest festival, bringing families and communities together through traditional food, decorations and cultural activities.",
    history:
      "Onam developed as an important seasonal and cultural celebration in Kerala and is associated with the traditional story of King Mahabali.",
    culture:
      "Pookkalam floral designs, traditional games, cultural performances and the elaborate Onam Sadya are central features of the festival.",
    details: [
      { title: "Region", value: "Kerala" },
      { title: "Type", value: "Harvest Festival" },
      { title: "Known For", value: "Pookkalam & Sadya" },
      { title: "Culture", value: "Malayali Tradition" },
    ],
  },

  pongal: {
    category: "Festivals & Celebrations",
    eyebrow: "TAMIL NADU",
    name: "Pongal",
    image: "/images/culture/festivals & celebrations/pongal.webp",
    tagline: "A harvest celebration honouring nature, farmers and family.",
    description:
      "Pongal is a major harvest festival of Tamil Nadu that expresses gratitude for nature, agriculture and prosperity.",
    history:
      "The festival has deep agricultural roots and has been celebrated by Tamil communities for generations.",
    culture:
      "Families prepare traditional Pongal dishes, decorate their homes and celebrate with relatives and communities. Cattle and agriculture also have an important place in the festivities.",
    details: [
      { title: "Region", value: "Tamil Nadu" },
      { title: "Type", value: "Harvest Festival" },
      { title: "Duration", value: "Four Days" },
      { title: "Known For", value: "Pongal & Kolam" },
    ],
  },

  bihu: {
    category: "Festivals & Celebrations",
    eyebrow: "ASSAM",
    name: "Bihu",
    image: "/images/culture/festivals & celebrations/bihu.webp",
    tagline: "Assam's celebration of agriculture, music and community.",
    description:
      "Bihu represents an important part of Assamese cultural identity, combining agricultural traditions with music, dance, food and community celebrations.",
    history:
      "Bihu developed around the agricultural calendar and remains deeply connected with the seasonal rhythms of Assamese life.",
    culture:
      "Traditional Bihu songs and dances, festive food, new clothes and community gatherings are important parts of the celebrations.",
    details: [
      { title: "Region", value: "Assam" },
      { title: "Type", value: "Cultural Festival" },
      { title: "Connection", value: "Agriculture" },
      { title: "Known For", value: "Dance & Music" },
    ],
  },

  // =====================================================
  // DANCE & MUSIC
  // =====================================================

  bharatanatyam: {
    category: "Dance & Music",
    eyebrow: "TAMIL NADU",
    name: "Bharatanatyam",
    image: "/images/culture/dance & music/bharatnatyam.webp",
    tagline: "A classical dance of precise movement and expressive storytelling.",
    description:
      "Bharatanatyam is one of India's major classical dance traditions, recognised for its precise movements, expressive gestures and rhythmic footwork.",
    history:
      "The tradition developed in South India and has been preserved and developed through generations of teachers and performers.",
    culture:
      "Performances combine rhythm, facial expression, hand gestures and storytelling. Traditional music and carefully designed costumes complete the performance.",
    details: [
      { title: "Region", value: "Tamil Nadu" },
      { title: "Type", value: "Classical Dance" },
      { title: "Tradition", value: "South Indian" },
      { title: "Known For", value: "Expression & Footwork" },
    ],
  },

  kathak: {
    category: "Dance & Music",
    eyebrow: "NORTH INDIA",
    name: "Kathak",
    image: "/images/culture/dance & music/kathak.webp",
    tagline: "Stories brought alive through rhythm, spins and expression.",
    description:
      "Kathak is a classical Indian dance tradition known for intricate footwork, rhythmic patterns, spins and storytelling.",
    history:
      "Kathak evolved through storytelling traditions in North India and developed through different cultural and royal environments.",
    culture:
      "Performers use rhythmic footwork, expressive gestures and rapid spins to communicate stories and emotions, often accompanied by classical music.",
    details: [
      { title: "Region", value: "North India" },
      { title: "Type", value: "Classical Dance" },
      { title: "Known For", value: "Footwork & Spins" },
      { title: "Expression", value: "Storytelling" },
    ],
  },

  kathakali: {
    category: "Dance & Music",
    eyebrow: "KERALA",
    name: "Kathakali",
    image: "/images/culture/dance & music/kathakali.webp",
    tagline: "A dramatic theatre tradition of movement, colour and expression.",
    description:
      "Kathakali is a classical performance tradition from Kerala recognised for elaborate costumes, makeup, gestures and dramatic storytelling.",
    history:
      "Kathakali developed in Kerala through earlier performance and theatre traditions and became an important part of the region's cultural heritage.",
    culture:
      "Performers communicate through highly expressive facial movements, hand gestures and body language. Music and percussion accompany the dramatic performances.",
    details: [
      { title: "Region", value: "Kerala" },
      { title: "Type", value: "Dance Theatre" },
      { title: "Known For", value: "Makeup & Costumes" },
      { title: "Style", value: "Expressive Storytelling" },
    ],
  },

  "hindustani-music": {
    category: "Dance & Music",
    eyebrow: "NORTH INDIA",
    name: "Hindustani Music",
    image: "/images/culture/dance & music/hindustani.webp",
    tagline: "A classical tradition built around raga, rhythm and improvisation.",
    description:
      "Hindustani classical music is a major musical tradition of North India, centred around melodic ragas, rhythm and improvisation.",
    history:
      "The tradition developed over centuries through interactions between different musical cultures and courtly traditions.",
    culture:
      "Performances can feature vocalists and instruments such as sitar, sarod, tabla and harmonium, with musicians exploring the structure and mood of a raga.",
    details: [
      { title: "Region", value: "North India" },
      { title: "Type", value: "Classical Music" },
      { title: "Core", value: "Raga & Tala" },
      { title: "Known For", value: "Improvisation" },
    ],
  },

  "carnatic-music": {
    category: "Dance & Music",
    eyebrow: "SOUTH INDIA",
    name: "Carnatic Music",
    image: "/images/culture/dance & music/carnatic.webp",
    tagline: "A rich classical tradition of melody, composition and rhythm.",
    description:
      "Carnatic music is the classical music tradition of South India, known for structured compositions, intricate rhythms and devotional themes.",
    history:
      "The tradition developed over centuries in South India through generations of composers, performers and teachers.",
    culture:
      "Performances often feature vocals accompanied by instruments such as violin and mridangam, with musicians exploring melodies and rhythmic patterns.",
    details: [
      { title: "Region", value: "South India" },
      { title: "Type", value: "Classical Music" },
      { title: "Core", value: "Raga & Tala" },
      { title: "Known For", value: "Compositions & Rhythm" },
    ],
  },

  "bihu-dance": {
    category: "Dance & Music",
    eyebrow: "ASSAM",
    name: "Bihu Dance",
    image: "/images/culture/dance & music/bihu.webp",
    tagline: "An energetic folk dance celebrating Assamese life and youth.",
    description:
      "Bihu Dance is an energetic Assamese folk dance traditionally associated with Bihu celebrations.",
    history:
      "The dance developed alongside Bihu celebrations and reflects the agricultural and social traditions of Assam.",
    culture:
      "Energetic movements, traditional clothing, music and group performances create the lively character of Bihu dance.",
    details: [
      { title: "Region", value: "Assam" },
      { title: "Type", value: "Folk Dance" },
      { title: "Festival", value: "Bihu" },
      { title: "Known For", value: "Energy & Rhythm" },
    ],
  },

  // =====================================================
  // CLOTHING & TEXTILES
  // =====================================================

  "banarasi-silk": {
    category: "Traditional Clothing",
    eyebrow: "VARANASI, UTTAR PRADESH",
    name: "Banarasi Silk",
    image: "/images/culture/clothing/banarasi.webp",
    tagline: "Luxurious silk woven with centuries of craftsmanship.",
    description:
      "Banarasi silk is a celebrated textile tradition from Varanasi, known for intricate weaving, rich colours and elaborate designs.",
    history:
      "The weaving tradition has developed over centuries and became especially associated with the skilled artisans of Varanasi.",
    culture:
      "Banarasi textiles are particularly valued for traditional sarees and are often associated with weddings, celebrations and special occasions.",
    details: [
      { title: "Region", value: "Varanasi, Uttar Pradesh" },
      { title: "Type", value: "Silk Textile" },
      { title: "Known For", value: "Intricate Weaving" },
      { title: "Craft", value: "Handloom Tradition" },
    ],
  },

  "kanchipuram-silk": {
    category: "Traditional Clothing",
    eyebrow: "TAMIL NADU",
    name: "Kanchipuram Silk",
    image: "/images/culture/clothing/kanchipuram.webp",
    tagline: "South India's celebrated silk tradition of colour and craftsmanship.",
    description:
      "Kanchipuram silk is known for richly coloured sarees, detailed borders and traditional weaving techniques.",
    history:
      "The weaving tradition developed around Kanchipuram and became closely associated with South Indian ceremonial clothing.",
    culture:
      "Kanchipuram sarees are widely worn during weddings, festivals and important celebrations and are valued for their craftsmanship.",
    details: [
      { title: "Region", value: "Kanchipuram, Tamil Nadu" },
      { title: "Type", value: "Silk Saree" },
      { title: "Known For", value: "Rich Borders" },
      { title: "Craft", value: "Traditional Weaving" },
    ],
  },

  phulkari: {
    category: "Traditional Clothing",
    eyebrow: "PUNJAB",
    name: "Phulkari",
    image: "/images/culture/clothing/phulkari.webp",
    tagline: "Colourful embroidery carrying the warmth of Punjabi tradition.",
    description:
      "Phulkari is a traditional embroidery style from Punjab, recognised for colourful floral patterns and detailed handwork.",
    history:
      "Phulkari developed within Punjabi communities and was traditionally passed from one generation to another.",
    culture:
      "Embroidered textiles have traditionally been associated with celebrations, weddings and important family occasions.",
    details: [
      { title: "Region", value: "Punjab" },
      { title: "Type", value: "Embroidery" },
      { title: "Known For", value: "Floral Patterns" },
      { title: "Craft", value: "Hand Embroidery" },
    ],
  },

  bandhani: {
    category: "Traditional Clothing",
    eyebrow: "RAJASTHAN & GUJARAT",
    name: "Bandhani",
    image: "/images/culture/clothing/bandhani.webp",
    tagline: "A colourful tie-and-dye tradition of tiny patterns and vibrant colour.",
    description:
      "Bandhani is a traditional tie-and-dye textile technique that creates distinctive dotted and patterned designs.",
    history:
      "The craft has been practiced for generations in western India and remains an important textile tradition of Rajasthan and Gujarat.",
    culture:
      "Bandhani textiles are commonly used for sarees, dupattas, turbans and festive clothing.",
    details: [
      { title: "Region", value: "Rajasthan & Gujarat" },
      { title: "Type", value: "Tie & Dye" },
      { title: "Known For", value: "Dotted Patterns" },
      { title: "Craft", value: "Textile Art" },
    ],
  },

  kasavu: {
    category: "Traditional Clothing",
    eyebrow: "KERALA",
    name: "Kasavu",
    image: "/images/culture/clothing/kasavu.webp",
    tagline: "Kerala's elegant white-and-gold textile tradition.",
    description:
      "Kasavu is a traditional Kerala textile style recognised by its simple elegance, white or cream fabric and distinctive gold border.",
    history:
      "The style has been part of Kerala's traditional clothing culture for generations.",
    culture:
      "Kasavu clothing is especially associated with festivals, weddings and cultural celebrations in Kerala.",
    details: [
      { title: "Region", value: "Kerala" },
      { title: "Type", value: "Traditional Textile" },
      { title: "Known For", value: "Gold Border" },
      { title: "Style", value: "White & Gold" },
    ],
  },

  pashmina: {
    category: "Traditional Clothing",
    eyebrow: "KASHMIR",
    name: "Pashmina",
    image: "/images/culture/clothing/paschmina.webp",
    tagline: "A fine textile tradition celebrated for softness and craftsmanship.",
    description:
      "Pashmina is a fine wool textile tradition associated with Kashmir and known for its softness, warmth and craftsmanship.",
    history:
      "Pashmina weaving and embroidery have developed over generations in Kashmir and became an important part of the region's textile heritage.",
    culture:
      "Shawls and other Pashmina textiles are valued for their warmth, detailed embroidery and artistic craftsmanship.",
    details: [
      { title: "Region", value: "Kashmir" },
      { title: "Type", value: "Fine Wool Textile" },
      { title: "Known For", value: "Softness & Warmth" },
      { title: "Craft", value: "Weaving & Embroidery" },
    ],
  },

  // =====================================================
  // ART & STORYTELLING
  // =====================================================

  madhubani: {
    category: "Art & Storytelling",
    eyebrow: "BIHAR",
    name: "Madhubani",
    image: "/images/culture/art-storytelling/madhubani.webp",
    tagline: "A vibrant painting tradition where art becomes storytelling.",
    description:
      "Madhubani painting is a distinctive folk art tradition from Bihar, known for bold patterns, natural themes and storytelling.",
    history:
      "The tradition developed in the Mithila region and was traditionally practiced within communities and households.",
    culture:
      "Artists use strong lines, geometric patterns and symbolic imagery to depict nature, mythology, festivals and everyday life.",
    details: [
      { title: "Region", value: "Mithila, Bihar" },
      { title: "Type", value: "Folk Painting" },
      { title: "Known For", value: "Bold Patterns" },
      { title: "Themes", value: "Nature & Mythology" },
    ],
  },

  warli: {
    category: "Art & Storytelling",
    eyebrow: "MAHARASHTRA",
    name: "Warli",
    image: "/images/culture/art-storytelling/warli.webp",
    tagline: "Simple geometric forms telling stories of tribal life.",
    description:
      "Warli is a tribal painting tradition known for simple geometric figures representing people, animals, nature and everyday activities.",
    history:
      "The art tradition developed among Warli communities of Maharashtra and has been passed through generations.",
    culture:
      "Traditional paintings often depict farming, festivals, dancing, hunting and community life using simple shapes and rhythmic compositions.",
    details: [
      { title: "Region", value: "Maharashtra" },
      { title: "Type", value: "Tribal Art" },
      { title: "Known For", value: "Geometric Figures" },
      { title: "Themes", value: "Community & Nature" },
    ],
  },

  pattachitra: {
    category: "Art & Storytelling",
    eyebrow: "ODISHA",
    name: "Pattachitra",
    image: "/images/culture/art-storytelling/pattachitra.webp",
    tagline: "Detailed traditional paintings rooted in stories and devotion.",
    description:
      "Pattachitra is a traditional painting style from Odisha known for detailed compositions, strong outlines and mythological themes.",
    history:
      "The tradition developed around temple and religious culture in Odisha and has been preserved by generations of artists.",
    culture:
      "Artists traditionally depict stories connected with Hindu mythology, deities and religious traditions using carefully prepared surfaces and natural colours.",
    details: [
      { title: "Region", value: "Odisha" },
      { title: "Type", value: "Folk Painting" },
      { title: "Known For", value: "Detailed Artwork" },
      { title: "Themes", value: "Mythology & Devotion" },
    ],
  },

  kalamkari: {
    category: "Art & Storytelling",
    eyebrow: "SOUTH INDIA",
    name: "Kalamkari",
    image: "/images/culture/art-storytelling/kalamkari.webp",
    tagline: "Hand-drawn textile art inspired by stories and nature.",
    description:
      "Kalamkari is a traditional textile and painting tradition involving hand-drawn designs and naturally dyed fabrics.",
    history:
      "The craft developed in South India and became closely connected with temple traditions and textile production.",
    culture:
      "Artists create elaborate scenes, floral patterns and mythological narratives using a combination of drawing, dyeing and painting techniques.",
    details: [
      { title: "Region", value: "South India" },
      { title: "Type", value: "Textile Art" },
      { title: "Known For", value: "Hand Drawing" },
      { title: "Themes", value: "Stories & Nature" },
    ],
  },

  "blue-pottery": {
    category: "Art & Storytelling",
    eyebrow: "JAIPUR, RAJASTHAN",
    name: "Blue Pottery",
    image: "/images/culture/art-storytelling/blue-pottery.webp",
    tagline: "A distinctive craft known for delicate blue designs and glazed surfaces.",
    description:
      "Blue Pottery is a decorative craft strongly associated with Jaipur and recognised for its colourful glazed designs.",
    history:
      "The craft became established in Jaipur and developed into an important part of the city's artistic identity.",
    culture:
      "Decorative plates, bowls, tiles and other objects feature floral and geometric designs in distinctive colours.",
    details: [
      { title: "Region", value: "Jaipur, Rajasthan" },
      { title: "Type", value: "Decorative Craft" },
      { title: "Known For", value: "Blue Glaze" },
      { title: "Design", value: "Floral & Geometric" },
    ],
  },

  dhokra: {
    category: "Art & Storytelling",
    eyebrow: "CENTRAL & EASTERN INDIA",
    name: "Dhokra",
    image: "/images/culture/art-storytelling/dhokra.webp",
    tagline: "Ancient metal craftsmanship shaped through the lost-wax tradition.",
    description:
      "Dhokra is a traditional metal-casting craft known for handmade figures, decorative objects and distinctive textured surfaces.",
    history:
      "The lost-wax casting tradition has ancient roots in the Indian subcontinent and continues among artisan communities.",
    culture:
      "Artists create animals, human figures, ritual objects and decorative pieces using traditional casting techniques.",
    details: [
      { title: "Region", value: "Central & Eastern India" },
      { title: "Type", value: "Metal Craft" },
      { title: "Technique", value: "Lost-Wax Casting" },
      { title: "Known For", value: "Handcrafted Figures" },
    ],
  },

  // =====================================================
  // TRADITIONS & LIFESTYLE
  // =====================================================

  "family-traditions": {
    category: "Traditions & Lifestyle",
    eyebrow: "PAN INDIA",
    name: "Family Traditions",
    image: "/images/culture/traditions-lifestyle/family.webp",
    tagline: "Family, rituals and celebrations at the heart of everyday life.",
    description:
      "Family traditions remain an important part of Indian social life, connecting generations through ceremonies, celebrations and shared customs.",
    history:
      "Many family customs have been passed from one generation to another, changing and adapting while retaining their cultural significance.",
    culture:
      "Weddings, festivals, family gatherings, rituals and shared meals create opportunities for generations to come together and preserve traditions.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Type", value: "Social Tradition" },
      { title: "Core", value: "Family & Community" },
      { title: "Known For", value: "Rituals & Gatherings" },
    ],
  },

  "village-life": {
    category: "Traditions & Lifestyle",
    eyebrow: "RURAL INDIA",
    name: "Village Life",
    image: "/images/culture/traditions-lifestyle/village.webp",
    tagline: "Everyday life shaped by land, community and traditional knowledge.",
    description:
      "Village life continues to preserve agricultural practices, crafts, local customs and strong community connections across many parts of India.",
    history:
      "Rural communities have developed distinctive ways of living around agriculture, natural resources and local traditions over generations.",
    culture:
      "Farming, local markets, festivals, crafts, food traditions and community gatherings remain important parts of rural cultural life.",
    details: [
      { title: "Region", value: "Rural India" },
      { title: "Lifestyle", value: "Community Based" },
      { title: "Core", value: "Agriculture" },
      { title: "Known For", value: "Local Traditions" },
    ],
  },

  "spiritual-traditions": {
    category: "Traditions & Lifestyle",
    eyebrow: "PAN INDIA",
    name: "Spiritual Traditions",
    image: "/images/culture/traditions-lifestyle/spiritual.webp",
    tagline: "Faith, reflection and rituals woven into everyday life.",
    description:
      "Spiritual traditions in India include pilgrimage, prayer, meditation, rituals and community practices across many regions and traditions.",
    history:
      "India's spiritual traditions have developed over thousands of years through diverse philosophical and religious movements.",
    culture:
      "Temples, mosques, monasteries, shrines, pilgrimage centres and household rituals all contribute to India's diverse spiritual landscape.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Type", value: "Spiritual Tradition" },
      { title: "Practices", value: "Prayer & Meditation" },
      { title: "Known For", value: "Pilgrimage & Rituals" },
    ],
  },

  "local-markets": {
    category: "Traditions & Lifestyle",
    eyebrow: "PAN INDIA",
    name: "Local Markets",
    image: "/images/culture/traditions-lifestyle/markets.webp",
    tagline: "Colourful spaces where food, craft and community meet.",
    description:
      "Traditional markets bring together food, textiles, crafts, spices and everyday community life.",
    history:
      "Local bazaars have long played an important role in trade and social life across Indian towns and cities.",
    culture:
      "Markets are places where regional foods, handmade goods, clothing, spices and local products are exchanged while communities interact.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Type", value: "Community Space" },
      { title: "Known For", value: "Food & Crafts" },
      { title: "Role", value: "Trade & Social Life" },
    ],
  },

  hospitality: {
    category: "Traditions & Lifestyle",
    eyebrow: "PAN INDIA",
    name: "Indian Hospitality",
    image: "/images/culture/traditions-lifestyle/hospitality.webp",
    tagline: "The tradition of welcoming guests with warmth and generosity.",
    description:
      "Welcoming guests and sharing food are deeply valued traditions across many Indian communities.",
    history:
      "Hospitality has long been connected with family, community and cultural traditions throughout India.",
    culture:
      "Guests are often welcomed with food, refreshments and conversation, with regional customs adding their own unique character.",
    details: [
      { title: "Region", value: "Pan India" },
      { title: "Type", value: "Social Tradition" },
      { title: "Core", value: "Welcoming Guests" },
      { title: "Known For", value: "Food & Warmth" },
    ],
  },

  "regional-identity": {
    category: "Traditions & Lifestyle",
    eyebrow: "ACROSS INDIA",
    name: "Regional Identity",
    image: "/images/culture/traditions-lifestyle/regional.webp",
    tagline: "Many regional identities forming one remarkably diverse India.",
    description:
      "Language, clothing, cuisine, music and customs create distinctive cultural identities across India's regions.",
    history:
      "India's regional cultures have developed through centuries of local history, geography, migration and interaction between communities.",
    culture:
      "From food and language to festivals, architecture and clothing, each region contributes its own traditions to India's wider cultural identity.",
    details: [
      { title: "Region", value: "Across India" },
      { title: "Type", value: "Cultural Identity" },
      { title: "Defined By", value: "Language & Customs" },
      { title: "Known For", value: "Regional Diversity" },
    ],
  },

  // =====================================================
  // LANGUAGES & LITERATURE
  // =====================================================

  "hindi-literature": {
    category: "Languages & Literature",
    eyebrow: "NORTH & CENTRAL INDIA",
    name: "Hindi Literature",
    image: "/images/culture/languages-literature/hindi.webp",
    tagline: "A rich literary tradition of poetry, stories, novels and ideas.",
    description:
      "Hindi literature represents a wide literary tradition spanning poetry, novels, short stories, theatre and modern writing.",
    history:
      "Hindi developed through centuries of linguistic and literary evolution, with different regional forms and literary movements contributing to its growth.",
    culture:
      "Hindi literature includes devotional poetry, modern poetry, novels, short stories, drama and other forms of creative expression that continue to shape India's cultural landscape.",
    details: [
      { title: "Region", value: "North & Central India" },
      { title: "Language Family", value: "Indo-Aryan" },
      { title: "Script", value: "Devanagari" },
      { title: "Known For", value: "Poetry & Literature" },
    ],
  },

  "bengali-literature": {
    category: "Languages & Literature",
    eyebrow: "WEST BENGAL & EASTERN INDIA",
    name: "Bengali Literature",
    image: "/images/culture/languages-literature/bengali.webp",
    tagline: "A celebrated literary tradition of poetry, fiction, theatre and song.",
    description:
      "Bengali literature has made major contributions to poetry, novels, theatre, songs and intellectual writing.",
    history:
      "The Bengali language and its literary tradition developed over centuries in eastern South Asia, growing through different literary and cultural movements.",
    culture:
      "Poetry, fiction, theatre and music remain important forms of Bengali cultural expression, with literature playing a major role in regional cultural life.",
    details: [
      { title: "Region", value: "West Bengal & Eastern India" },
      { title: "Language Family", value: "Indo-Aryan" },
      { title: "Script", value: "Bengali Script" },
      { title: "Known For", value: "Poetry & Literature" },
    ],
  },

  "tamil-literature": {
    category: "Languages & Literature",
    eyebrow: "TAMIL NADU",
    name: "Tamil Literature",
    image: "/images/culture/languages-literature/tamil.webp",
    tagline: "An ancient literary tradition with a living cultural presence.",
    description:
      "Tamil literature is one of India's major classical literary traditions, with a long history of poetry, devotional works, epics and modern writing.",
    history:
      "Tamil literature has roots stretching back many centuries, with the Sangam tradition forming an important part of its early literary history.",
    culture:
      "Tamil literary expression includes classical poetry, devotional works, epics, modern novels and contemporary writing.",
    details: [
      { title: "Region", value: "Tamil Nadu" },
      { title: "Language Family", value: "Dravidian" },
      { title: "Script", value: "Tamil Script" },
      { title: "Known For", value: "Classical Literature" },
    ],
  },

  "sanskrit-literature": {
    category: "Languages & Literature",
    eyebrow: "ANCIENT INDIA",
    name: "Sanskrit Literature",
    image: "/images/culture/languages-literature/sanskrit.webp",
    tagline: "An ancient literary tradition at the heart of India's intellectual heritage.",
    description:
      "Sanskrit literature forms a major part of India's classical intellectual heritage, including philosophical, poetic, religious and scholarly works.",
    history:
      "Sanskrit literature developed over thousands of years and includes a vast body of philosophical, religious, scientific and literary writing.",
    culture:
      "The tradition encompasses classical poetry, epics, philosophical texts, scholarly works and other forms of traditional knowledge.",
    details: [
      { title: "Origin", value: "Ancient India" },
      { title: "Language Family", value: "Indo-Aryan" },
      { title: "Tradition", value: "Classical Language" },
      { title: "Known For", value: "Philosophy & Literature" },
    ],
  },

  "urdu-poetry": {
    category: "Languages & Literature",
    eyebrow: "NORTH INDIA",
    name: "Urdu Poetry",
    image: "/images/culture/languages-literature/urdu.webp",
    tagline: "A poetic tradition celebrated for expression, emotion and literary elegance.",
    description:
      "Urdu poetry is a major part of India's literary culture, particularly known for forms such as ghazal and nazm.",
    history:
      "Urdu developed through linguistic and cultural interaction in the Indian subcontinent and evolved into a major literary language.",
    culture:
      "Poetry, ghazals, nazms and prose have contributed significantly to Indian literary and cultural life, with poetry remaining an important form of artistic expression.",
    details: [
      { title: "Region", value: "North India & Beyond" },
      { title: "Language Family", value: "Indo-Aryan" },
      { title: "Script", value: "Perso-Arabic" },
      { title: "Known For", value: "Poetry & Ghazal" },
    ],
  },

  "folk-storytelling": {
    category: "Languages & Literature",
    eyebrow: "ACROSS INDIA",
    name: "Folk Storytelling",
    image: "/images/culture/languages-literature/folk.webp",
    tagline: "Stories passed from generation to generation through voice and memory.",
    description:
      "Folk storytelling preserves local legends, myths, values, beliefs and community memories through oral traditions.",
    history:
      "Oral storytelling traditions have existed across Indian communities for generations, often preserving stories long before they were written down.",
    culture:
      "Folk tales are shared through spoken narratives, songs, performances and community gatherings. Different regions have their own characters, legends, themes and storytelling styles.",
    details: [
      { title: "Region", value: "Across India" },
      { title: "Type", value: "Oral Tradition" },
      { title: "Medium", value: "Stories & Songs" },
      { title: "Known For", value: "Local Legends & Myths" },
    ],
  },
};


// =========================================================
// COMPONENT
// =========================================================

export default function CultureStory() {
  const { categorySlug, storySlug } = useParams();

  const culture = cultureStories[storySlug];

  if (!culture) {
    return (
      <section className="section center">
        <h1>Culture story not found.</h1>

        <p>
          We couldn't find the cultural story you're looking for.
        </p>

        <Link
          to={`/culture/${categorySlug}`}
          className="secondary"
        >
          ← Back to Culture
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
          src={culture.image}
          alt={culture.name}
        />

        <div className="heritageDetailOverlay">
          <span>{culture.eyebrow}</span>

          <h1>{culture.name}</h1>

          <p>{culture.tagline}</p>
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
            to={`/culture/${categorySlug}`}
            className="backLink"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ← Back to {culture.category}
          </Link>


          {/* LIVING HERITAGE CTA */}
          <Link
            to={`/living-heritage/culture/${storySlug}`}
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
            ✦ Explore Living Heritage of {culture.name} →
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
              Discover {culture.name}.
            </h2>

            <p>
              {culture.description}
            </p>


            <h3>
              History
            </h3>

            <p>
              {culture.history}
            </p>


            <h3>
              Culture & Tradition
            </h3>

            <p>
              {culture.culture}
            </p>

          </main>


          {/* =====================================================
              AT A GLANCE
          ===================================================== */}

          <aside className="heritageDetailAside">

            <h3>
              At a glance
            </h3>

            {culture.details.map((detail) => (
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
            to={`/culture/${categorySlug}`}
            className="secondary"
          >
            ← Explore {culture.category}
          </Link>

          <Link
            to="/culture"
            className="secondary"
          >
            Explore All Culture →
          </Link>

        </div>


        <PlaceCommunity
          placeName={culture.name}
          placeId={`culture-${storySlug}`}
          placeType="Cultural Tradition"
        />
      </section>
    </>
  );
}
