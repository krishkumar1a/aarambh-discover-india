// crafts.js

const crafts = {
  en: {
    "textiles-weaving": {
      eyebrow: "TEXTILES & WEAVING",
      title: "Threads that carry India's stories.",
      text:
        "Discover India's extraordinary handlooms, weaving traditions and textiles shaped by generations of skilled artisans.",

      items: {
        "banarasi-silk": {
          name: "Banarasi Silk",
          region: "Varanasi, Uttar Pradesh",
          tagline: "Lustrous. Regal. Timeless.",
          description:
            "A celebrated handwoven silk tradition known for intricate patterns, zari work and luxurious sarees.",
          history:
            "Banarasi weaving developed over centuries in Varanasi and became closely associated with India's royal and ceremonial textile traditions.",
          culture:
            "Banarasi silk remains an important part of weddings, festivals and traditional Indian clothing.",
          details: [
            { title: "Region", value: "Varanasi, Uttar Pradesh" },
            { title: "Type", value: "Handwoven Textile" },
            { title: "Known For", value: "Silk & Zari" },
            { title: "Common Product", value: "Sarees" },
          ],
        },

        "kanjivaram-silk": {
          name: "Kanjivaram Silk",
          region: "Tamil Nadu",
          tagline: "Rich. Traditional. Exquisite.",
          description:
            "A prestigious South Indian silk tradition recognised for its rich colours, elaborate borders and traditional motifs.",
          history:
            "Kanjivaram silk developed around Kanchipuram and became strongly associated with South Indian ceremonial clothing.",
          culture:
            "Kanjivaram sarees are especially important in weddings, festivals and religious occasions.",
          details: [
            { title: "Region", value: "Kanchipuram, Tamil Nadu" },
            { title: "Type", value: "Handwoven Silk" },
            { title: "Known For", value: "Rich Borders & Motifs" },
            { title: "Common Product", value: "Sarees" },
          ],
        },

        "chanderi-weaving": {
          name: "Chanderi Weaving",
          region: "Madhya Pradesh",
          tagline: "Light. Elegant. Delicate.",
          description:
            "A refined handloom tradition known for lightweight fabrics, subtle motifs and elegant transparency.",
          history:
            "Chanderi has a long weaving history associated with the historic town of Chanderi in Madhya Pradesh.",
          culture:
            "Chanderi textiles are valued for their elegance and remain an important part of India's handloom heritage.",
          details: [
            { title: "Region", value: "Madhya Pradesh" },
            { title: "Type", value: "Handloom Textile" },
            { title: "Known For", value: "Lightweight Fabric" },
            { title: "Products", value: "Sarees & Fabrics" },
          ],
        },

        "patola-weaving": {
          name: "Patola",
          region: "Gujarat",
          tagline: "Precise. Vibrant. Legendary.",
          description:
            "A highly intricate textile tradition famous for its geometric patterns, vivid colours and double ikat technique.",
          history:
            "Patola weaving became strongly associated with Gujarat and the historic weaving traditions of Patan.",
          culture:
            "Patola textiles have traditionally been valued as prestigious garments and important ceremonial textiles.",
          details: [
            { title: "Region", value: "Patan, Gujarat" },
            { title: "Type", value: "Double Ikat" },
            { title: "Known For", value: "Geometric Patterns" },
            { title: "Products", value: "Sarees & Textiles" },
          ],
        },

        "phulkari": {
          name: "Phulkari",
          region: "Punjab",
          tagline: "Colourful. Floral. Joyful.",
          description:
            "A traditional embroidery style characterised by colourful floral patterns stitched onto fabric.",
          history:
            "Phulkari developed as an important embroidery tradition of Punjab and was traditionally practised within households.",
          culture:
            "It is closely associated with weddings, celebrations and the textile traditions of Punjabi communities.",
          details: [
            { title: "Region", value: "Punjab" },
            { title: "Type", value: "Embroidery" },
            { title: "Known For", value: "Floral Patterns" },
            { title: "Common Product", value: "Dupattas & Shawls" },
          ],
        },

        "kalamkari-textiles": {
          name: "Kalamkari",
          region: "Andhra Pradesh & Telangana",
          tagline: "Hand-drawn. Natural. Storytelling.",
          description:
            "A traditional textile art involving hand-drawn or block-printed designs using natural dyes.",
          history:
            "Kalamkari developed in southern India and became known for narrative religious and floral textile designs.",
          culture:
            "Its storytelling imagery connects textile craft with India's painting, mythology and devotional traditions.",
          details: [
            { title: "Region", value: "Andhra Pradesh & Telangana" },
            { title: "Type", value: "Textile Painting" },
            { title: "Known For", value: "Natural Dyes & Narratives" },
            { title: "Products", value: "Fabrics & Sarees" },
          ],
        },
      },
    },

    "painting-folk-art": {
      eyebrow: "PAINTING & FOLK ART",
      title: "Stories painted by hand.",
      text:
        "Explore India's vibrant painting traditions where mythology, nature, community life and storytelling come alive through colour.",

      items: {
        madhubani: {
          name: "Madhubani Painting",
          region: "Bihar",
          tagline: "Bold. Symbolic. Folk.",
          description:
            "A vibrant folk painting tradition known for detailed patterns, symbolic imagery and scenes from mythology and everyday life.",
          history:
            "Madhubani painting developed in the Mithila region of Bihar and was traditionally practised by women on household walls and floors.",
          culture:
            "The art remains closely connected with festivals, ceremonies, mythology and community traditions.",
          details: [
            { title: "Region", value: "Mithila, Bihar" },
            { title: "Type", value: "Folk Painting" },
            { title: "Known For", value: "Geometric & Floral Patterns" },
            { title: "Themes", value: "Mythology & Daily Life" },
          ],
        },

        warli: {
          name: "Warli Art",
          region: "Maharashtra",
          tagline: "Simple. Rhythmic. Life-filled.",
          description:
            "A distinctive tribal painting tradition using simple geometric figures to depict people, nature, rituals and community life.",
          history:
            "Warli art developed among the Warli communities of Maharashtra and has deep roots in their visual traditions.",
          culture:
            "Its imagery reflects farming, hunting, dancing, ceremonies, animals and the relationship between people and nature.",
          details: [
            { title: "Region", value: "Maharashtra" },
            { title: "Type", value: "Tribal Folk Art" },
            { title: "Known For", value: "Geometric Figures" },
            { title: "Themes", value: "Community & Nature" },
          ],
        },

        pattachitra: {
          name: "Pattachitra",
          region: "Odisha",
          tagline: "Detailed. Devotional. Timeless.",
          description:
            "A traditional painted cloth art known for intricate lines, decorative borders and stories from Hindu mythology.",
          history:
            "Pattachitra developed as a traditional painting practice in Odisha and became closely connected with the Jagannath tradition.",
          culture:
            "Its paintings frequently depict deities, mythology and religious narratives and remain important to Odia cultural identity.",
          details: [
            { title: "Region", value: "Odisha" },
            { title: "Type", value: "Traditional Painting" },
            { title: "Known For", value: "Fine Lines & Borders" },
            { title: "Themes", value: "Mythology & Devotion" },
          ],
        },

        "gond-art": {
          name: "Gond Art",
          region: "Madhya Pradesh",
          tagline: "Nature-filled. Rhythmic. Imaginative.",
          description:
            "A vibrant tribal art tradition using intricate patterns and dots to depict animals, trees, nature and stories.",
          history:
            "Gond painting developed among Gond communities of central India and evolved from traditional wall and floor decoration.",
          culture:
            "The art expresses a close relationship between people, animals, forests and the natural world.",
          details: [
            { title: "Region", value: "Central India" },
            { title: "Type", value: "Tribal Art" },
            { title: "Known For", value: "Dots & Patterns" },
            { title: "Themes", value: "Nature & Community" },
          ],
        },

        "kalighat-painting": {
          name: "Kalighat Painting",
          region: "West Bengal",
          tagline: "Bold. Expressive. Urban.",
          description:
            "A distinctive painting tradition known for bold outlines, expressive figures and scenes drawn from religious and everyday life.",
          history:
            "Kalighat painting developed around the Kalighat temple area of Kolkata during the nineteenth century.",
          culture:
            "The tradition combined devotional subjects with observations of contemporary society and everyday life.",
          details: [
            { title: "Region", value: "Kolkata, West Bengal" },
            { title: "Type", value: "Folk Painting" },
            { title: "Known For", value: "Bold Brushwork" },
            { title: "Themes", value: "Religion & Society" },
          ],
        },

        "pichwai-art": {
          name: "Pichwai Art",
          region: "Rajasthan",
          tagline: "Devotional. Ornate. Rich.",
          description:
            "Intricate devotional paintings traditionally created as decorative backdrops for temple worship.",
          history:
            "Pichwai developed around the temple traditions of Nathdwara in Rajasthan.",
          culture:
            "Its imagery is closely associated with Krishna worship, festivals, temple rituals and devotional storytelling.",
          details: [
            { title: "Region", value: "Nathdwara, Rajasthan" },
            { title: "Type", value: "Devotional Painting" },
            { title: "Known For", value: "Ornate Detail" },
            { title: "Themes", value: "Krishna & Temple Life" },
          ],
        },
      },
    },

    "pottery-ceramics": {
      eyebrow: "POTTERY & CERAMICS",
      title: "Earth shaped by skilled hands.",
      text:
        "Discover India's ceramic traditions, from everyday terracotta vessels to highly refined decorative pottery.",

      items: {
        "blue-pottery": {
          name: "Blue Pottery",
          region: "Jaipur, Rajasthan",
          tagline: "Turquoise. Delicate. Distinctive.",
          description:
            "A distinctive decorative craft known for blue, turquoise and white patterns on ceramic objects.",
          history:
            "Blue pottery became strongly associated with Jaipur and developed through craft traditions influenced by Central Asian and Persian techniques.",
          culture:
            "It remains one of Jaipur's best-known handicrafts and is widely used for decorative and household objects.",
          details: [
            { title: "Region", value: "Jaipur, Rajasthan" },
            { title: "Type", value: "Decorative Ceramic Craft" },
            { title: "Known For", value: "Blue & Turquoise Patterns" },
            { title: "Products", value: "Bowls, Plates & Decor" },
          ],
        },

        terracotta: {
          name: "Terracotta Craft",
          region: "India",
          tagline: "Earthy. Handmade. Ancient.",
          description:
            "A traditional craft using fired clay to create vessels, sculptures, figurines and decorative objects.",
          history:
            "Terracotta has an ancient history across the Indian subcontinent and remains part of many regional craft traditions.",
          culture:
            "Clay objects are connected with household use, rituals, religious traditions and village craftsmanship.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Clay Craft" },
            { title: "Material", value: "Natural Clay" },
            { title: "Products", value: "Pottery & Figurines" },
          ],
        },

        "khurja-pottery": {
          name: "Khurja Pottery",
          region: "Uttar Pradesh",
          tagline: "Colourful. Ceramic. Traditional.",
          description:
            "A celebrated ceramic tradition known for colourful glazes, painted patterns and functional household ware.",
          history:
            "Khurja developed into an important pottery centre in Uttar Pradesh with a long tradition of ceramic production.",
          culture:
            "Its pottery combines traditional craft knowledge with everyday household and decorative use.",
          details: [
            { title: "Region", value: "Khurja, Uttar Pradesh" },
            { title: "Type", value: "Ceramic Craft" },
            { title: "Known For", value: "Glazed Patterns" },
            { title: "Products", value: "Tableware & Decor" },
          ],
        },

        "bankura-horses": {
          name: "Bankura Terracotta",
          region: "West Bengal",
          tagline: "Sculptural. Earthy. Iconic.",
          description:
            "A distinctive terracotta tradition famous for stylised horses, elephants and other traditional forms.",
          history:
            "Bankura terracotta developed in West Bengal and became particularly recognised for its sculptural horse figures.",
          culture:
            "Terracotta figures are associated with folk traditions, village decoration and ritual practices.",
          details: [
            { title: "Region", value: "Bankura, West Bengal" },
            { title: "Type", value: "Terracotta Sculpture" },
            { title: "Known For", value: "Stylised Horses" },
            { title: "Material", value: "Fired Clay" },
          ],
        },
      },
    },

    "wood-metal-craft": {
      eyebrow: "WOOD & METAL CRAFT",
      title: "Strength, detail and tradition.",
      text:
        "Explore India's remarkable traditions of carving, metalwork and handcrafted objects shaped by generations of artisans.",

      items: {
        "dokra-art": {
          name: "Dokra Art",
          region: "Eastern & Central India",
          tagline: "Ancient. Rustic. Sculptural.",
          description:
            "A traditional metal casting craft known for distinctive figurines, animals and decorative objects.",
          history:
            "Dokra uses the ancient lost-wax casting technique and has been practised by artisan communities across eastern and central India.",
          culture:
            "Its handmade forms often depict people, animals, folk life and traditional motifs.",
          details: [
            { title: "Region", value: "Eastern & Central India" },
            { title: "Type", value: "Metal Casting" },
            { title: "Technique", value: "Lost-Wax Casting" },
            { title: "Known For", value: "Handmade Figurines" },
          ],
        },

        "dilli-metalwork": {
          name: "Brass & Bell Metal Craft",
          region: "India",
          tagline: "Metallic. Detailed. Enduring.",
          description:
            "Traditional metalworking practices producing vessels, lamps, ritual objects, figurines and decorative pieces.",
          history:
            "Brass and bell-metal traditions have developed across many regions of India with specialised local techniques.",
          culture:
            "Metal objects have long been used in homes, temples, ceremonies and everyday life.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Metal Craft" },
            { title: "Materials", value: "Brass & Bell Metal" },
            { title: "Products", value: "Vessels, Lamps & Decor" },
          ],
        },

        "sandalwood-carving": {
          name: "Sandalwood Carving",
          region: "Karnataka",
          tagline: "Fragrant. Precise. Exquisite.",
          description:
            "A refined carving tradition known for delicate floral, religious and ornamental designs.",
          history:
            "Sandalwood carving became especially associated with Karnataka's long-standing woodcraft traditions.",
          culture:
            "Carved sandalwood objects have traditionally been valued for religious, decorative and ceremonial purposes.",
          details: [
            { title: "Region", value: "Karnataka" },
            { title: "Type", value: "Wood Carving" },
            { title: "Material", value: "Sandalwood" },
            { title: "Known For", value: "Fine Ornamental Detail" },
          ],
        },

        "wooden-toys": {
          name: "Channapatna Toys",
          region: "Karnataka",
          tagline: "Bright. Playful. Handmade.",
          description:
            "Colourful wooden toys and objects traditionally turned, polished and decorated by skilled artisans.",
          history:
            "Channapatna developed into a renowned toy-making centre in Karnataka with generations of specialised craftsmanship.",
          culture:
            "The toys represent India's living tradition of handmade children's objects and sustainable woodcraft.",
          details: [
            { title: "Region", value: "Channapatna, Karnataka" },
            { title: "Type", value: "Wood Craft" },
            { title: "Known For", value: "Colourful Wooden Toys" },
            { title: "Technique", value: "Wood Turning" },
          ],
        },

        "kashmiri-wood-carving": {
          name: "Kashmiri Wood Carving",
          region: "Kashmir",
          tagline: "Intricate. Floral. Elegant.",
          description:
            "A detailed wood-carving tradition known for floral motifs, geometric patterns and intricate craftsmanship.",
          history:
            "Wood carving has been an important part of Kashmir's traditional decorative arts and architecture.",
          culture:
            "Carved wood appears in furniture, household objects, interiors and traditional architectural details.",
          details: [
            { title: "Region", value: "Kashmir" },
            { title: "Type", value: "Wood Carving" },
            { title: "Known For", value: "Floral & Geometric Motifs" },
            { title: "Products", value: "Furniture & Decor" },
          ],
        },
      },
    },

    "jewellery-ornaments": {
      eyebrow: "JEWELLERY & ORNAMENTS",
      title: "Crafted to celebrate identity.",
      text:
        "Discover India's diverse jewellery traditions, where metal, gemstones and craftsmanship express regional identity and celebration.",

      items: {
        meenakari: {
          name: "Meenakari",
          region: "Rajasthan",
          tagline: "Colourful. Ornate. Regal.",
          description:
            "A decorative enamel technique used to create vibrant coloured surfaces on jewellery and metal objects.",
          history:
            "Meenakari became strongly associated with royal jewellery traditions in Rajasthan and northern India.",
          culture:
            "It remains an important part of traditional Indian jewellery and ceremonial adornment.",
          details: [
            { title: "Region", value: "Rajasthan" },
            { title: "Type", value: "Enamel Craft" },
            { title: "Known For", value: "Bright Enamel Colours" },
            { title: "Used For", value: "Jewellery & Decorative Objects" },
          ],
        },

        kundan: {
          name: "Kundan Jewellery",
          region: "Rajasthan",
          tagline: "Regal. Gem-rich. Timeless.",
          description:
            "A traditional jewellery style known for carefully set gemstones and elaborate gold craftsmanship.",
          history:
            "Kundan jewellery developed through royal jewellery traditions and became particularly associated with Rajasthan.",
          culture:
            "It remains popular for weddings, festivals and ceremonial Indian clothing.",
          details: [
            { title: "Region", value: "Rajasthan" },
            { title: "Type", value: "Jewellery Craft" },
            { title: "Known For", value: "Gemstone Setting" },
            { title: "Common Use", value: "Bridal & Ceremonial Jewellery" },
          ],
        },

        "lac-bangles": {
          name: "Lac Bangles",
          region: "Rajasthan",
          tagline: "Bright. Traditional. Festive.",
          description:
            "Colourful bangles made using lac and decorated with patterns, stones, beads and other embellishments.",
          history:
            "Lac bangle-making developed as an important craft in Rajasthan and several other parts of India.",
          culture:
            "Bangles play an important role in Indian adornment, weddings, festivals and regional traditions.",
          details: [
            { title: "Region", value: "Rajasthan" },
            { title: "Type", value: "Bangle Craft" },
            { title: "Material", value: "Lac" },
            { title: "Known For", value: "Bright Colours & Decoration" },
          ],
        },

        "silver-jewellery": {
          name: "Indian Silver Jewellery",
          region: "Pan India",
          tagline: "Bold. Detailed. Regional.",
          description:
            "Traditional silver jewellery varies widely across India, from tribal ornaments to elaborate ceremonial pieces.",
          history:
            "Silver jewellery has long been used across Indian communities for adornment, ceremony and cultural expression.",
          culture:
            "Designs often communicate regional identity, community traditions and social occasions.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Jewellery Craft" },
            { title: "Material", value: "Silver" },
            { title: "Known For", value: "Regional Designs" },
          ],
        },
      },
    },

    "basketry-natural-fibres": {
      eyebrow: "BASKETRY & NATURAL FIBRES",
      title: "Crafted from nature.",
      text:
        "Explore India's sustainable traditions of bamboo, cane, grass, coir and other natural-fibre crafts.",

      items: {
        "bamboo-craft": {
          name: "Bamboo Craft",
          region: "Northeast India",
          tagline: "Natural. Flexible. Sustainable.",
          description:
            "A versatile craft tradition using bamboo to create baskets, furniture, household objects and decorative pieces.",
          history:
            "Bamboo craft has deep roots in the everyday life and material culture of communities across Northeast India.",
          culture:
            "Bamboo is closely connected with local architecture, agriculture, household life and community traditions.",
          details: [
            { title: "Region", value: "Northeast India" },
            { title: "Type", value: "Natural Fibre Craft" },
            { title: "Material", value: "Bamboo" },
            { title: "Products", value: "Baskets, Furniture & Utility Objects" },
          ],
        },

        "cane-craft": {
          name: "Cane Craft",
          region: "Northeast India",
          tagline: "Light. Strong. Handwoven.",
          description:
            "A traditional craft using flexible cane to create furniture, baskets, containers and decorative objects.",
          history:
            "Cane craft developed alongside bamboo craftsmanship in many northeastern communities.",
          culture:
            "Cane objects remain part of traditional homes and everyday life, combining utility with skilled weaving.",
          details: [
            { title: "Region", value: "Northeast India" },
            { title: "Type", value: "Natural Fibre Craft" },
            { title: "Material", value: "Cane" },
            { title: "Products", value: "Furniture & Baskets" },
          ],
        },

        "coir-craft": {
          name: "Coir Craft",
          region: "Kerala",
          tagline: "Coconut. Sustainable. Traditional.",
          description:
            "A traditional craft using coconut fibre to make mats, ropes, baskets and decorative products.",
          history:
            "Coir craftsmanship developed alongside Kerala's long-standing coconut-growing and coastal economy.",
          culture:
            "It reflects Kerala's practical use of locally available natural materials.",
          details: [
            { title: "Region", value: "Kerala" },
            { title: "Type", value: "Natural Fibre Craft" },
            { title: "Material", value: "Coconut Fibre" },
            { title: "Products", value: "Mats, Ropes & Baskets" },
          ],
        },

        "grass-basketry": {
          name: "Grass Basketry",
          region: "India",
          tagline: "Simple. Sustainable. Handwoven.",
          description:
            "Traditional weaving practices using grasses and plant fibres to create baskets, mats and household objects.",
          history:
            "Grass basketry has developed independently across many Indian communities according to local materials and needs.",
          culture:
            "These crafts reflect sustainable everyday practices and the close relationship between craft and local environments.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Basketry" },
            { title: "Materials", value: "Grass & Plant Fibres" },
            { title: "Products", value: "Baskets & Mats" },
          ],
        },
      },
    },
  },
};

export default crafts;