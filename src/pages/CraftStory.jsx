import { Link, useParams } from "react-router-dom";
import PlaceCommunity from "../components/PlaceCommunity";

const craftStories = {
  // =====================================================
  // POTTERY & CERAMICS
  // =====================================================

  "blue-pottery": {
    category: "Pottery & Ceramics",
    eyebrow: "RAJASTHAN",
    name: "Blue Pottery",
    image: "/images/crafts/pottery/blue-pottery.webp",
    tagline:
      "A distinctive craft of colour, glaze and delicate craftsmanship.",
    description:
      "Blue Pottery is a decorative craft strongly associated with Jaipur, known for its vibrant colours, floral patterns and glazed surfaces.",
    history:
      "The craft developed into an important part of Jaipur's artistic identity and has been preserved through generations of skilled artisans.",
    culture:
      "Artisans create plates, bowls, tiles, vases and decorative objects featuring floral and geometric designs. The craft is valued for its distinctive appearance and detailed handwork.",
    details: [
      { title: "Region", value: "Jaipur, Rajasthan" },
      { title: "Type", value: "Decorative Craft" },
      { title: "Known For", value: "Blue Glaze" },
      { title: "Design", value: "Floral & Geometric" },
    ],
  },

  terracotta: {
    category: "Pottery & Ceramics",
    eyebrow: "ACROSS INDIA",
    name: "Terracotta",
    image: "/images/crafts/pottery/terracotta.webp",
    tagline:
      "Earth transformed into vessels, figures and everyday objects.",
    description:
      "Terracotta is a traditional craft made by shaping and firing natural clay into pottery, sculptures and decorative objects.",
    history:
      "The tradition has ancient roots in the Indian subcontinent and has developed into distinctive regional forms across India.",
    culture:
      "Artisans create lamps, vessels, figurines, toys and decorative pieces. Terracotta is closely connected with village life, festivals and traditional artistic expression.",
    details: [
      { title: "Region", value: "Across India" },
      { title: "Type", value: "Clay Craft" },
      { title: "Material", value: "Natural Clay" },
      { title: "Known For", value: "Handcrafted Forms" },
    ],
  },

  "khurja-pottery": {
    category: "Pottery & Ceramics",
    eyebrow: "UTTAR PRADESH",
    name: "Khurja Pottery",
    image: "/images/crafts/pottery/khurja.webp",
    tagline:
      "Colourful ceramics shaped by generations of skilled potters.",
    description:
      "Khurja pottery is a celebrated ceramic tradition known for colourful vessels, painted patterns and glazed surfaces.",
    history:
      "Khurja developed as an important pottery centre and its ceramic traditions have been carried forward by generations of artisans.",
    culture:
      "Plates, cups, vases and decorative objects are decorated with colourful floral and geometric patterns, giving the craft its distinctive identity.",
    details: [
      { title: "Region", value: "Khurja, Uttar Pradesh" },
      { title: "Type", value: "Ceramic Craft" },
      { title: "Known For", value: "Colourful Designs" },
      { title: "Craft", value: "Pottery & Glazing" },
    ],
  },

  "bankura-horse": {
    category: "Pottery & Ceramics",
    eyebrow: "WEST BENGAL",
    name: "Bankura Horse",
    image: "/images/crafts/pottery/bankura.webp",
    tagline:
      "A striking terracotta form representing Bengal's artistic heritage.",
    description:
      "The Bankura horse is a famous terracotta craft of West Bengal, recognised for its elongated form and stylised features.",
    history:
      "The craft developed among artisan communities of Bengal and became an important symbol of the region's terracotta tradition.",
    culture:
      "Traditionally associated with folk and ritual practices, the horse is now also widely appreciated as a decorative representation of Bengal's craft heritage.",
    details: [
      { title: "Region", value: "Bankura, West Bengal" },
      { title: "Type", value: "Terracotta Craft" },
      { title: "Known For", value: "Horse Figures" },
      { title: "Material", value: "Fired Clay" },
    ],
  },

  "longpi-pottery": {
    category: "Pottery & Ceramics",
    eyebrow: "MANIPUR",
    name: "Longpi Pottery",
    image: "/images/crafts/pottery/longpi.webp",
    tagline:
      "A distinctive pottery tradition shaped without the conventional potter's wheel.",
    description:
      "Longpi pottery is a traditional craft from Manipur known for its dark, naturally textured surfaces and distinctive handmade forms.",
    history:
      "The craft has been preserved by artisan communities of Manipur and remains an important part of the state's traditional craftsmanship.",
    culture:
      "Cooking vessels, plates and other objects are created using traditional techniques and valued for both their practical and artistic qualities.",
    details: [
      { title: "Region", value: "Manipur" },
      { title: "Type", value: "Traditional Pottery" },
      { title: "Known For", value: "Dark Finish" },
      { title: "Craft", value: "Hand Shaping" },
    ],
  },

  "black-pottery": {
    category: "Pottery & Ceramics",
    eyebrow: "UTTAR PRADESH",
    name: "Black Pottery",
    image: "/images/crafts/pottery/black-pottery.webp",
    tagline:
      "Dark polished surfaces decorated with delicate traditional patterns.",
    description:
      "Black pottery is a traditional ceramic craft recognised for its dark polished surface and detailed decorative designs.",
    history:
      "The craft has been practised by artisan communities for generations and developed distinctive regional techniques.",
    culture:
      "Artisans create vessels and decorative objects using carefully controlled firing and finishing techniques.",
    details: [
      { title: "Region", value: "Uttar Pradesh" },
      { title: "Type", value: "Pottery" },
      { title: "Known For", value: "Black Finish" },
      { title: "Technique", value: "Traditional Firing" },
    ],
  },

  // =====================================================
  // HANDLOOM & TEXTILES
  // =====================================================

  "banarasi-weaving": {
    category: "Handloom & Textiles",
    eyebrow: "VARANASI, UTTAR PRADESH",
    name: "Banarasi Weaving",
    image: "/images/crafts/textiles/banarasi.webp",
    tagline:
      "Fine weaving where silk, pattern and craftsmanship meet.",
    description:
      "Banarasi weaving is a celebrated textile tradition from Varanasi known for intricate designs, silk fabrics and detailed weaving.",
    history:
      "The weaving tradition developed over generations among the skilled artisan communities of Varanasi.",
    culture:
      "Banarasi textiles are especially associated with sarees, weddings and celebrations and remain an important part of India's handloom heritage.",
    details: [
      { title: "Region", value: "Varanasi, Uttar Pradesh" },
      { title: "Type", value: "Handloom Textile" },
      { title: "Known For", value: "Silk & Designs" },
      { title: "Craft", value: "Traditional Weaving" },
    ],
  },

  "kanjivaram-weaving": {
    category: "Handloom & Textiles",
    eyebrow: "TAMIL NADU",
    name: "Kanjivaram Weaving",
    image: "/images/crafts/textiles/kanjivaram.webp",
    tagline:
      "Rich silk, bold colours and intricate South Indian craftsmanship.",
    description:
      "Kanjivaram weaving is a traditional silk textile craft associated with Kanchipuram and known for rich colours and detailed borders.",
    history:
      "The weaving tradition developed around Kanchipuram and became closely connected with ceremonial clothing in South India.",
    culture:
      "Kanjivaram sarees are traditionally worn during weddings, festivals and important occasions and are valued for their craftsmanship.",
    details: [
      { title: "Region", value: "Kanchipuram, Tamil Nadu" },
      { title: "Type", value: "Silk Weaving" },
      { title: "Known For", value: "Rich Borders" },
      { title: "Craft", value: "Handloom" },
    ],
  },

  "phulkari-embroidery": {
    category: "Handloom & Textiles",
    eyebrow: "PUNJAB",
    name: "Phulkari Embroidery",
    image: "/images/crafts/textiles/phulkari.webp",
    tagline:
      "Colourful embroidery carrying generations of Punjabi tradition.",
    description:
      "Phulkari is a traditional embroidery craft from Punjab, known for vibrant floral patterns and detailed handwork.",
    history:
      "The tradition developed within Punjabi communities and was traditionally passed from one generation to another.",
    culture:
      "Phulkari textiles have traditionally been connected with weddings, celebrations and important family occasions.",
    details: [
      { title: "Region", value: "Punjab" },
      { title: "Type", value: "Embroidery" },
      { title: "Known For", value: "Floral Patterns" },
      { title: "Craft", value: "Hand Embroidery" },
    ],
  },

  chikankari: {
    category: "Handloom & Textiles",
    eyebrow: "LUCKNOW, UTTAR PRADESH",
    name: "Chikankari",
    image: "/images/crafts/textiles/chikankari.webp",
    tagline:
      "Delicate hand embroidery known for elegance and intricate detail.",
    description:
      "Chikankari is a traditional embroidery craft associated with Lucknow, recognised for delicate stitches and graceful patterns.",
    history:
      "The craft developed into an important part of Lucknow's textile heritage and has been practised by generations of artisans.",
    culture:
      "Floral motifs, fine stitching and detailed patterns are commonly used on garments and textiles, giving Chikankari its distinctive character.",
    details: [
      { title: "Region", value: "Lucknow, Uttar Pradesh" },
      { title: "Type", value: "Embroidery" },
      { title: "Known For", value: "Fine Stitching" },
      { title: "Style", value: "Floral Motifs" },
    ],
  },

  ikat: {
    category: "Handloom & Textiles",
    eyebrow: "ODISHA & TELANGANA",
    name: "Ikat",
    image: "/images/crafts/textiles/ikat.webp",
    tagline:
      "Patterns created through the meeting of dye, thread and loom.",
    description:
      "Ikat is a textile technique in which threads are resist-dyed before weaving to create distinctive geometric and patterned designs.",
    history:
      "The technique has been practised in several regions of India and developed into distinctive regional weaving traditions.",
    culture:
      "Ikat textiles are known for bold geometric patterns and are used to create sarees, fabrics and other traditional garments.",
    details: [
      { title: "Region", value: "Odisha & Telangana" },
      { title: "Type", value: "Textile Technique" },
      { title: "Known For", value: "Geometric Patterns" },
      { title: "Technique", value: "Resist Dyeing" },
    ],
  },

  pochampally: {
    category: "Handloom & Textiles",
    eyebrow: "TELANGANA",
    name: "Pochampally",
    image: "/images/crafts/textiles/pochampally.webp",
    tagline:
      "A celebrated handloom tradition of colour, geometry and Ikat weaving.",
    description:
      "Pochampally is a renowned textile tradition from Telangana, particularly known for its colourful Ikat fabrics.",
    history:
      "The weaving tradition developed in the Pochampally region and became an important part of Telangana's handloom heritage.",
    culture:
      "Sarees and fabrics feature distinctive geometric patterns created through traditional resist-dyeing and weaving techniques.",
    details: [
      { title: "Region", value: "Telangana" },
      { title: "Type", value: "Handloom" },
      { title: "Known For", value: "Ikat Patterns" },
      { title: "Craft", value: "Traditional Weaving" },
    ],
  },

  // =====================================================
  // FOLK ART
  // =====================================================

  madhubani: {
    category: "Folk Art",
    eyebrow: "BIHAR",
    name: "Madhubani",
    image: "/images/crafts/folk-art/madhubani.webp",
    tagline:
      "A vibrant painting tradition where every pattern tells a story.",
    description:
      "Madhubani painting is a distinctive folk art tradition from the Mithila region of Bihar, known for bold patterns and symbolic imagery.",
    history:
      "The tradition developed within Mithila communities and was traditionally practised in homes and community spaces.",
    culture:
      "Artists depict nature, mythology, festivals and everyday life using strong lines, geometric patterns and symbolic forms.",
    details: [
      { title: "Region", value: "Mithila, Bihar" },
      { title: "Type", value: "Folk Painting" },
      { title: "Known For", value: "Bold Patterns" },
      { title: "Themes", value: "Nature & Mythology" },
    ],
  },

  warli: {
    category: "Folk Art",
    eyebrow: "MAHARASHTRA",
    name: "Warli",
    image: "/images/crafts/folk-art/warli.webp",
    tagline:
      "Simple geometric forms telling stories of community and nature.",
    description:
      "Warli is a tribal painting tradition known for simple geometric figures representing people, animals, nature and everyday activities.",
    history:
      "The art tradition developed among Warli communities of Maharashtra and has been passed through generations.",
    culture:
      "Traditional paintings depict farming, festivals, dancing, hunting and community life using circles, triangles and rhythmic compositions.",
    details: [
      { title: "Region", value: "Maharashtra" },
      { title: "Type", value: "Tribal Art" },
      { title: "Known For", value: "Geometric Figures" },
      { title: "Themes", value: "Community & Nature" },
    ],
  },

  pattachitra: {
    category: "Folk Art",
    eyebrow: "ODISHA",
    name: "Pattachitra",
    image: "/images/crafts/folk-art/pattachitra.webp",
    tagline:
      "Detailed paintings rooted in stories, mythology and devotion.",
    description:
      "Pattachitra is a traditional painting style from Odisha known for detailed compositions, strong outlines and mythological themes.",
    history:
      "The tradition developed around temple and religious culture in Odisha and has been preserved by generations of artists.",
    culture:
      "Artists traditionally depict deities, mythological stories and religious themes using carefully prepared surfaces and traditional colours.",
    details: [
      { title: "Region", value: "Odisha" },
      { title: "Type", value: "Folk Painting" },
      { title: "Known For", value: "Detailed Artwork" },
      { title: "Themes", value: "Mythology & Devotion" },
    ],
  },

  "gond-art": {
    category: "Folk Art",
    eyebrow: "MADHYA PRADESH",
    name: "Gond Art",
    image: "/images/crafts/folk-art/gond.webp",
    tagline:
      "Nature and imagination brought alive through intricate patterns.",
    description:
      "Gond art is a tribal painting tradition known for colourful depictions of animals, plants, nature and everyday life.",
    history:
      "The tradition developed among Gond communities of central India and has been passed through generations.",
    culture:
      "Artists use dots, lines and intricate patterns to create colourful representations of animals, trees, myths and natural surroundings.",
    details: [
      { title: "Region", value: "Madhya Pradesh" },
      { title: "Type", value: "Tribal Art" },
      { title: "Known For", value: "Intricate Patterns" },
      { title: "Themes", value: "Nature & Animals" },
    ],
  },

  kalamkari: {
    category: "Folk Art",
    eyebrow: "SOUTH INDIA",
    name: "Kalamkari",
    image: "/images/crafts/folk-art/kalamkari.webp",
    tagline:
      "Hand-drawn textile art inspired by stories and nature.",
    description:
      "Kalamkari is a traditional textile art involving hand-drawn designs, natural dyes and narrative themes.",
    history:
      "The craft developed in South India and became closely connected with temple traditions and textile production.",
    culture:
      "Artists create elaborate scenes, floral patterns and mythological narratives through drawing, painting and dyeing techniques.",
    details: [
      { title: "Region", value: "South India" },
      { title: "Type", value: "Textile Art" },
      { title: "Known For", value: "Hand Drawing" },
      { title: "Themes", value: "Stories & Nature" },
    ],
  },

  "phad-painting": {
    category: "Folk Art",
    eyebrow: "RAJASTHAN",
    name: "Phad Painting",
    image: "/images/crafts/folk-art/phad.webp",
    tagline:
      "A painted scroll tradition where art becomes visual storytelling.",
    description:
      "Phad is a traditional scroll-painting tradition from Rajasthan used to narrate stories through a sequence of painted scenes.",
    history:
      "The tradition developed alongside oral storytelling and performance traditions in Rajasthan.",
    culture:
      "Large painted scrolls depict stories of local heroes, deities and community traditions using vivid colours and detailed compositions.",
    details: [
      { title: "Region", value: "Rajasthan" },
      { title: "Type", value: "Scroll Painting" },
      { title: "Known For", value: "Visual Storytelling" },
      { title: "Themes", value: "Legends & Heroes" },
    ],
  },

  // =====================================================
  // WOODCRAFT
  // =====================================================

  "kondapalli-toys": {
    category: "Woodcraft",
    eyebrow: "ANDHRA PRADESH",
    name: "Kondapalli Toys",
    image: "/images/crafts/woodcraft/kondapalli.webp",
    tagline:
      "Lightweight wooden figures bringing village life to colour.",
    description:
      "Kondapalli toys are traditional wooden toys made by artisans of Andhra Pradesh and known for colourful hand-painted figures.",
    history:
      "The craft has been practised by generations of artisans in the Kondapalli region.",
    culture:
      "Figures often depict village scenes, animals, occupations and traditional characters, turning everyday life into colourful handmade art.",
    details: [
      { title: "Region", value: "Andhra Pradesh" },
      { title: "Type", value: "Wooden Toy" },
      { title: "Known For", value: "Hand Painting" },
      { title: "Material", value: "Soft Wood" },
    ],
  },

  "channapatna-toys": {
    category: "Woodcraft",
    eyebrow: "KARNATAKA",
    name: "Channapatna Toys",
    image: "/images/crafts/woodcraft/channapatna.webp",
    tagline:
      "Colourful wooden toys shaped with traditional craftsmanship.",
    description:
      "Channapatna toys are traditional wooden toys known for smooth shapes, vibrant colours and handcrafted finishes.",
    history:
      "The craft developed around Channapatna and became an important part of Karnataka's traditional toy-making heritage.",
    culture:
      "Artisans turn locally sourced wood into toys and decorative objects using traditional turning and colouring techniques.",
    details: [
      { title: "Region", value: "Karnataka" },
      { title: "Type", value: "Wooden Toy" },
      { title: "Known For", value: "Smooth Finishes" },
      { title: "Craft", value: "Wood Turning" },
    ],
  },

  "saharanpur-woodcraft": {
    category: "Woodcraft",
    eyebrow: "UTTAR PRADESH",
    name: "Saharanpur Woodcraft",
    image: "/images/crafts/woodcraft/saharanpur.webp",
    tagline:
      "Intricate carving transformed into furniture and decorative art.",
    description:
      "Saharanpur woodcraft is known for detailed carving on furniture, decorative objects and wooden panels.",
    history:
      "The craft developed into an important artisan tradition in Saharanpur and has been passed through generations.",
    culture:
      "Floral, geometric and traditional motifs are carved into wood to create furniture and decorative objects.",
    details: [
      { title: "Region", value: "Saharanpur, Uttar Pradesh" },
      { title: "Type", value: "Wood Carving" },
      { title: "Known For", value: "Intricate Carving" },
      { title: "Craft", value: "Hand Carving" },
    ],
  },

  "rajasthan-wood-carving": {
    category: "Woodcraft",
    eyebrow: "RAJASTHAN",
    name: "Rajasthan Wood Carving",
    image: "/images/crafts/woodcraft/rajasthan.webp",
    tagline:
      "Traditional carving reflecting the decorative heritage of Rajasthan.",
    description:
      "Rajasthan wood carving includes intricate craftsmanship used in furniture, doors, panels and decorative objects.",
    history:
      "Wood carving developed alongside Rajasthan's architectural and decorative traditions.",
    culture:
      "Artisans use floral, geometric and traditional motifs to create detailed wooden surfaces and objects.",
    details: [
      { title: "Region", value: "Rajasthan" },
      { title: "Type", value: "Woodcraft" },
      { title: "Known For", value: "Decorative Carving" },
      { title: "Craft", value: "Hand Carving" },
    ],
  },

  "kerala-wood-carving": {
    category: "Woodcraft",
    eyebrow: "KERALA",
    name: "Kerala Wood Carving",
    image: "/images/crafts/woodcraft/kerala.webp",
    tagline:
      "Detailed wooden craftsmanship inspired by architecture and tradition.",
    description:
      "Kerala wood carving is a traditional craft featuring detailed designs inspired by architecture, mythology and nature.",
    history:
      "Wood carving has long been connected with Kerala's architectural and temple traditions.",
    culture:
      "Artisans create carved panels, furniture, decorative objects and architectural elements using traditional motifs.",
    details: [
      { title: "Region", value: "Kerala" },
      { title: "Type", value: "Wood Carving" },
      { title: "Known For", value: "Detailed Motifs" },
      { title: "Themes", value: "Architecture & Nature" },
    ],
  },

  "wooden-masks": {
    category: "Woodcraft",
    eyebrow: "ACROSS INDIA",
    name: "Wooden Masks",
    image: "/images/crafts/woodcraft/masks.webp",
    tagline:
      "Carved faces carrying stories of performance and tradition.",
    description:
      "Wooden masks are handcrafted objects used in performances, rituals and decorative traditions across different regions of India.",
    history:
      "Mask-making traditions developed alongside regional theatre, dance and ritual practices.",
    culture:
      "Masks represent characters, deities, animals and symbolic figures and are often painted and decorated by hand.",
    details: [
      { title: "Region", value: "Across India" },
      { title: "Type", value: "Woodcraft" },
      { title: "Known For", value: "Hand Carving" },
      { title: "Use", value: "Performance & Ritual" },
    ],
  },

  // =====================================================
  // JEWELLERY & METALWORK
  // =====================================================

  dhokra: {
    category: "Jewellery & Metalwork",
    eyebrow: "CENTRAL & EASTERN INDIA",
    name: "Dhokra",
    image: "/images/crafts/jewellery/dhokra.webp",
    tagline:
      "Ancient metal craftsmanship shaped through the lost-wax tradition.",
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

  kundan: {
    category: "Jewellery & Metalwork",
    eyebrow: "RAJASTHAN",
    name: "Kundan",
    image: "/images/crafts/jewellery/kundan.webp",
    tagline:
      "Traditional jewellery where gemstones meet intricate craftsmanship.",
    description:
      "Kundan is a traditional jewellery style known for carefully set gemstones and elaborate ornamental designs.",
    history:
      "The craft became strongly associated with royal and courtly jewellery traditions in Rajasthan.",
    culture:
      "Kundan jewellery is often created for weddings, celebrations and ceremonial occasions and remains an important part of traditional ornamentation.",
    details: [
      { title: "Region", value: "Rajasthan" },
      { title: "Type", value: "Jewellery" },
      { title: "Known For", value: "Gemstone Setting" },
      { title: "Style", value: "Traditional Ornamentation" },
    ],
  },

  meenakari: {
    category: "Jewellery & Metalwork",
    eyebrow: "RAJASTHAN",
    name: "Meenakari",
    image: "/images/crafts/jewellery/meenakari.webp",
    tagline:
      "Brilliant enamel colours bringing metalwork to life.",
    description:
      "Meenakari is a decorative metalwork tradition involving colourful enamel designs applied to jewellery and other objects.",
    history:
      "The craft became an important part of Rajasthan's jewellery and decorative arts traditions.",
    culture:
      "Artisans fill carefully prepared metal surfaces with colourful enamel to create floral and geometric designs.",
    details: [
      { title: "Region", value: "Rajasthan" },
      { title: "Type", value: "Metalwork" },
      { title: "Known For", value: "Colourful Enamel" },
      { title: "Craft", value: "Jewellery Decoration" },
    ],
  },

  thewa: {
    category: "Jewellery & Metalwork",
    eyebrow: "RAJASTHAN",
    name: "Thewa",
    image: "/images/crafts/jewellery/thewa.webp",
    tagline:
      "Delicate gold work fused with colourful glass.",
    description:
      "Thewa is a distinctive jewellery craft combining intricate gold work with coloured glass to create decorative designs.",
    history:
      "The craft developed in Rajasthan and has been preserved by specialised artisan families.",
    culture:
      "Traditional pieces often feature nature-inspired motifs and are valued for their delicate craftsmanship.",
    details: [
      { title: "Region", value: "Rajasthan" },
      { title: "Type", value: "Jewellery Craft" },
      { title: "Known For", value: "Gold & Glass" },
      { title: "Craft", value: "Fine Metalwork" },
    ],
  },

  bidriware: {
    category: "Jewellery & Metalwork",
    eyebrow: "KARNATAKA",
    name: "Bidriware",
    image: "/images/crafts/jewellery/bidriware.webp",
    tagline:
      "Dark metal surfaces highlighted by delicate contrasting inlay.",
    description:
      "Bidriware is a traditional metal craft recognised for its dark surface and contrasting inlay work.",
    history:
      "The craft became strongly associated with Bidar and developed through generations of skilled metalworkers.",
    culture:
      "Artisans create decorative vessels, boxes, jewellery and other objects featuring intricate inlaid patterns.",
    details: [
      { title: "Region", value: "Bidar, Karnataka" },
      { title: "Type", value: "Metal Craft" },
      { title: "Known For", value: "Inlay Work" },
      { title: "Style", value: "Dark Metal Finish" },
    ],
  },

  filigree: {
    category: "Jewellery & Metalwork",
    eyebrow: "ODISHA",
    name: "Filigree",
    image: "/images/crafts/jewellery/filigree.webp",
    tagline:
      "Fine metal wires transformed into intricate works of art.",
    description:
      "Filigree is a delicate metalworking technique involving fine wires shaped into intricate jewellery and decorative designs.",
    history:
      "The craft has been practised in Odisha for generations and became an important part of the region's metalworking heritage.",
    culture:
      "Artisans carefully twist and shape thin metal wires to create jewellery, ornaments and decorative objects.",
    details: [
      { title: "Region", value: "Odisha" },
      { title: "Type", value: "Metalwork" },
      { title: "Known For", value: "Fine Wirework" },
      { title: "Craft", value: "Handcrafted Jewellery" },
    ],
  },

  // =====================================================
  // BAMBOO & CANE
  // =====================================================

  "bamboo-baskets": {
    category: "Bamboo & Cane",
    eyebrow: "NORTHEAST INDIA",
    name: "Bamboo Baskets",
    image: "/images/crafts/bamboo/baskets.webp",
    tagline:
      "Everyday objects woven from one of India's most versatile natural materials.",
    description:
      "Bamboo baskets are traditional handmade products created through weaving and shaping bamboo strips.",
    history:
      "Bamboo craftsmanship has been an important part of community life across Northeast India for generations.",
    culture:
      "Baskets are used for storage, farming, carrying goods and household activities while also reflecting local weaving patterns.",
    details: [
      { title: "Region", value: "Northeast India" },
      { title: "Type", value: "Bamboo Craft" },
      { title: "Material", value: "Bamboo" },
      { title: "Known For", value: "Hand Weaving" },
    ],
  },

  "cane-furniture": {
    category: "Bamboo & Cane",
    eyebrow: "ASSAM",
    name: "Cane Furniture",
    image: "/images/crafts/bamboo/furniture.webp",
    tagline:
      "Natural cane transformed into practical and elegant furniture.",
    description:
      "Cane furniture is a traditional craft involving the shaping and weaving of flexible cane into chairs, tables and other household objects.",
    history:
      "Cane craftsmanship has long been practised across Assam and other parts of Northeast India.",
    culture:
      "Artisans combine strength and flexibility to create lightweight furniture suited to everyday life and regional conditions.",
    details: [
      { title: "Region", value: "Assam" },
      { title: "Type", value: "Cane Craft" },
      { title: "Material", value: "Natural Cane" },
      { title: "Known For", value: "Hand Weaving" },
    ],
  },

  "bamboo-weaving": {
    category: "Bamboo & Cane",
    eyebrow: "NORTHEAST INDIA",
    name: "Bamboo Weaving",
    image: "/images/crafts/bamboo/weaving.webp",
    tagline:
      "Flexible bamboo transformed into useful and beautiful forms.",
    description:
      "Bamboo weaving is a traditional craft in which carefully prepared bamboo strips are woven into practical and decorative objects.",
    history:
      "The technique has been passed through generations and remains an important part of traditional craftsmanship in Northeast India.",
    culture:
      "Artisans create baskets, mats, containers and household objects using regional weaving patterns and techniques.",
    details: [
      { title: "Region", value: "Northeast India" },
      { title: "Type", value: "Bamboo Craft" },
      { title: "Material", value: "Bamboo" },
      { title: "Technique", value: "Hand Weaving" },
    ],
  },

  "bamboo-instruments": {
    category: "Bamboo & Cane",
    eyebrow: "ACROSS INDIA",
    name: "Bamboo Instruments",
    image: "/images/crafts/bamboo/instruments.webp",
    tagline:
      "Natural materials turned into instruments of music and tradition.",
    description:
      "Bamboo has traditionally been used to create a variety of musical instruments across India's regions.",
    history:
      "Communities across India developed different instruments using bamboo and other locally available natural materials.",
    culture:
      "Bamboo instruments are connected with folk music, festivals, performances and traditional musical practices.",
    details: [
      { title: "Region", value: "Across India" },
      { title: "Type", value: "Musical Craft" },
      { title: "Material", value: "Bamboo" },
      { title: "Known For", value: "Folk Music" },
    ],
  },

  "cane-baskets": {
    category: "Bamboo & Cane",
    eyebrow: "NORTHEAST INDIA",
    name: "Cane Baskets",
    image: "/images/crafts/bamboo/cane-baskets.webp",
    tagline:
      "Handwoven baskets combining utility with regional craftsmanship.",
    description:
      "Cane baskets are traditional handmade products created by weaving flexible cane into strong and lightweight forms.",
    history:
      "Basket weaving has been practised by communities across Northeast India for generations.",
    culture:
      "Cane baskets are used for storage, carrying goods and household activities and often feature distinctive regional patterns.",
    details: [
      { title: "Region", value: "Northeast India" },
      { title: "Type", value: "Cane Craft" },
      { title: "Material", value: "Cane" },
      { title: "Known For", value: "Hand Weaving" },
    ],
  },

  "bamboo-decor": {
    category: "Bamboo & Cane",
    eyebrow: "ACROSS INDIA",
    name: "Bamboo Decor",
    image: "/images/crafts/bamboo/decor.webp",
    tagline:
      "Natural bamboo transformed into beautiful decorative objects.",
    description:
      "Bamboo decor includes handmade decorative objects created using traditional cutting, shaping and weaving techniques.",
    history:
      "Bamboo has been used for decorative and practical purposes across Indian communities for generations.",
    culture:
      "Artisans create lamps, wall decorations, baskets and other objects that combine natural materials with traditional craftsmanship.",
    details: [
      { title: "Region", value: "Across India" },
      { title: "Type", value: "Decorative Craft" },
      { title: "Material", value: "Bamboo" },
      { title: "Known For", value: "Natural Craftsmanship" },
    ],
  },
};


// =========================================================
// COMPONENT
// =========================================================

export default function CraftStory() {
  const { categorySlug, storySlug } = useParams();

  const craft = craftStories[storySlug];

  // =====================================================
  // STORY NOT FOUND
  // =====================================================

  if (!craft) {
    return (
      <section className="section center">
        <h1>Craft story not found.</h1>

        <p>
          We couldn't find the craft story you're looking for.
        </p>

        <Link
          to={`/crafts/${categorySlug}`}
          className="secondary"
        >
          ← Back to Crafts
        </Link>
      </section>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <>
      {/* =================================================
          HERO
      ================================================= */}

      <section className="heritageDetailHero">
        <img
          src={craft.image}
          alt={craft.name}
        />

        <div className="heritageDetailOverlay">
          <span>{craft.eyebrow}</span>

          <h1>{craft.name}</h1>

          <p>{craft.tagline}</p>
        </div>
      </section>


      {/* =================================================
          CONTENT
      ================================================= */}

      <section className="heritageDetailContent">

        {/* =================================================
            TOP NAVIGATION
        ================================================= */}

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

          <Link
            to={`/crafts/${categorySlug}`}
            className="backLink"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            ← Back to {craft.category}
          </Link>


          <Link
            to={`/living-heritage/craft/${storySlug}`}
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
            ✦ Explore Living Heritage of {craft.name} →
          </Link>

        </div>


        {/* =================================================
            STORY LAYOUT
        ================================================= */}

        <div className="heritageDetailLayout">

          {/* MAIN STORY */}

          <main>

            <span className="detailEyebrow">
              THE STORY
            </span>

            <h2>
              Discover {craft.name}.
            </h2>

            <p>
              {craft.description}
            </p>


            <h3>
              History
            </h3>

            <p>
              {craft.history}
            </p>


            <h3>
              Craft & Tradition
            </h3>

            <p>
              {craft.culture}
            </p>

          </main>


          {/* =================================================
              AT A GLANCE
          ================================================= */}

          <aside className="heritageDetailAside">

            <h3>
              At a glance
            </h3>

            {craft.details.map((detail) => (
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
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >

          <Link
            to={`/crafts/${categorySlug}`}
            className="secondary"
          >
            ← Explore {craft.category}
          </Link>


          <Link
            to="/crafts"
            className="secondary"
          >
            Explore All Crafts →
          </Link>

        </div>


        <PlaceCommunity
          placeName={craft.name}
          placeId={`craft-${storySlug}`}
          placeType="Craft Tradition"
        />
      </section>
    </>
  );
}
