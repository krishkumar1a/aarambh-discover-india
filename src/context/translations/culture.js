// culture.js

const culture = {
  en: {
    page: {
      eyebrow: "INDIA'S CULTURE",
      title: "A culture as diverse as the land itself.",
      description:
        "Discover the festivals, music, clothing, art, traditions and languages that bring India's cultural identity to life.",
      back: "← Back to Culture",
      explore: "Explore Story →",
      location: "📍",
    },

    categories: {
      festivals: {
        eyebrow: "INDIA'S FESTIVALS",
        title: "Celebrations that bring communities together.",
        text:
          "Explore India's vibrant festivals, colourful celebrations and traditions passed through generations.",
        items: [
          {
            name: "Holi",
            slug: "holi",
            region: "North India",
            image: "/images/culture/festivals/holi.webp",
            description:
              "The festival of colours celebrated with music, joy, food and communities coming together.",
          },
          {
            name: "Diwali",
            slug: "diwali",
            region: "Pan India",
            image: "/images/culture/festivals/diwali.webp",
            description:
              "The festival of lights celebrated with lamps, prayers, sweets and family gatherings.",
          },
          {
            name: "Durga Puja",
            slug: "durga-puja",
            region: "West Bengal",
            image: "/images/culture/festivals/durga-puja.webp",
            description:
              "A grand cultural celebration featuring artistic pandals, music, rituals and community gatherings.",
          },
          {
            name: "Onam",
            slug: "onam",
            region: "Kerala",
            image: "/images/culture/festivals/onam.webp",
            description:
              "Kerala's harvest festival known for floral designs, traditional celebrations and Onam Sadya.",
          },
          {
            name: "Pongal",
            slug: "pongal",
            region: "Tamil Nadu",
            image: "/images/culture/festivals/pongal.webp",
            description:
              "A harvest celebration honouring nature, agriculture, prosperity and family traditions.",
          },
          {
            name: "Bihu",
            slug: "bihu",
            region: "Assam",
            image: "/images/culture/festivals/bihu.webp",
            description:
              "An Assamese festival connected with agriculture, traditional music, dance and community celebrations.",
          },
        ],
      },

      "dance-music": {
        eyebrow: "INDIAN DANCE & MUSIC",
        title: "Stories told through rhythm and expression.",
        text: "Discover India's classical and folk dance and music traditions.",
        items: [
          {
            name: "Bharatanatyam",
            slug: "bharatanatyam",
            region: "Tamil Nadu",
            image: "/images/culture/dance-music/bharatanatyam.webp",
            description:
              "A classical dance tradition known for precise movements and expressive storytelling.",
          },
          {
            name: "Kathak",
            slug: "kathak",
            region: "North India",
            image: "/images/culture/dance-music/kathak.webp",
            description:
              "A classical dance tradition known for intricate footwork, spins and storytelling.",
          },
          {
            name: "Kathakali",
            slug: "kathakali",
            region: "Kerala",
            image: "/images/culture/dance-music/kathakali.webp",
            description:
              "A dramatic dance tradition recognised for elaborate costumes, makeup and expressive performance.",
          },
          {
            name: "Hindustani Music",
            slug: "hindustani-music",
            region: "North India",
            image: "/images/culture/dance-music/hindustani.webp",
            description:
              "A classical musical tradition built around ragas, rhythm and improvisation.",
          },
          {
            name: "Carnatic Music",
            slug: "carnatic-music",
            region: "South India",
            image: "/images/culture/dance-music/carnatic.webp",
            description:
              "A major classical music tradition known for compositions, rhythm and devotional expression.",
          },
          {
            name: "Folk Music",
            slug: "folk-music",
            region: "Across India",
            image: "/images/culture/dance & music/dance.webp",
            description:
              "Regional musical traditions that preserve local stories, celebrations, communities and everyday life.",
          },
        ],
      },

      clothing: {
        eyebrow: "INDIAN TEXTILES & CLOTHING",
        title: "Threads that carry stories of India's regions.",
        text:
          "Explore India's traditional clothing, textiles and weaving traditions.",
        items: [
          {
            name: "Banarasi Silk",
            slug: "banarasi-silk",
            region: "Uttar Pradesh",
            image: "/images/culture/clothing/banarasi.webp",
            description:
              "Luxurious silk textiles from Varanasi known for intricate weaving and rich designs.",
          },
          {
            name: "Kanchipuram Silk",
            slug: "kanchipuram-silk",
            region: "Tamil Nadu",
            image: "/images/culture/clothing/kanchipuram.webp",
            description:
              "Traditional silk sarees recognised for rich colours and detailed borders.",
          },
          {
            name: "Phulkari",
            slug: "phulkari",
            region: "Punjab",
            image: "/images/culture/clothing/phulkari.webp",
            description:
              "A colourful embroidery tradition featuring intricate floral patterns.",
          },
          {
            name: "Bandhani",
            slug: "bandhani",
            region: "Rajasthan & Gujarat",
            image: "/images/culture/clothing/bandhani.webp",
            description:
              "A traditional tie-and-dye textile technique creating distinctive patterns.",
          },
          {
            name: "Kasavu",
            slug: "kasavu",
            region: "Kerala",
            image: "/images/culture/clothing/kasavu.webp",
            description:
              "Kerala's traditional textile style often recognised by its elegant gold border.",
          },
          {
            name: "Pashmina",
            slug: "pashmina",
            region: "Kashmir",
            image: "/images/culture/clothing/pashmina.webp",
            description:
              "A fine wool textile tradition known for softness and detailed craftsmanship.",
          },
        ],
      },

      "art-storytelling": {
        eyebrow: "INDIAN ART & STORYTELLING",
        title: "Artistic traditions shaped by generations.",
        text:
          "Discover India's folk paintings, crafts and storytelling traditions.",
        items: [
          {
            name: "Madhubani",
            slug: "madhubani",
            region: "Bihar",
            image: "/images/culture/art-storytelling/madhubani.webp",
            description:
              "A distinctive painting tradition known for bold patterns, natural themes and storytelling.",
          },
          {
            name: "Warli",
            slug: "warli",
            region: "Maharashtra",
            image: "/images/culture/art-storytelling/warli.webp",
            description:
              "A tribal painting tradition characterised by simple geometric human and animal figures.",
          },
          {
            name: "Pattachitra",
            slug: "pattachitra",
            region: "Odisha",
            image: "/images/culture/art-storytelling/pattachitra.webp",
            description:
              "A traditional painting style known for detailed compositions and mythological themes.",
          },
          {
            name: "Kalamkari",
            slug: "kalamkari",
            region: "South India",
            image: "/images/culture/art-storytelling/kalamkari.webp",
            description:
              "A textile and painting tradition featuring hand-drawn and naturally dyed designs.",
          },
          {
            name: "Blue Pottery",
            slug: "blue-pottery",
            region: "Rajasthan",
            image: "/images/culture/art-storytelling/blue-pottery.webp",
            description:
              "A decorative craft associated with Jaipur and known for colourful glazed designs.",
          },
          {
            name: "Dhokra",
            slug: "dhokra",
            region: "Central & Eastern India",
            image: "/images/culture/art-storytelling/dhokra.webp",
            description:
              "An ancient metal-casting tradition using the lost-wax technique.",
          },
        ],
      },

      "traditions-lifestyle": {
        eyebrow: "LIVING INDIA",
        title: "The everyday traditions that make India unique.",
        text:
          "Discover the customs, communities and ways of life that shape India's cultural identity.",
        items: [
          {
            name: "Family Traditions",
            slug: "family-traditions",
            region: "Pan India",
            image: "/images/culture/traditions-lifestyle/family.webp",
            description:
              "Family gatherings, ceremonies, weddings and rituals remain an important part of Indian social life.",
          },
          {
            name: "Village Life",
            slug: "village-life",
            region: "Rural India",
            image: "/images/culture/traditions-lifestyle/village.webp",
            description:
              "Traditional communities continue to preserve agricultural practices, crafts and local customs.",
          },
          {
            name: "Spiritual Traditions",
            slug: "spiritual-traditions",
            region: "Pan India",
            image: "/images/culture/traditions-lifestyle/spiritual.webp",
            description:
              "Pilgrimage, prayer, meditation and community rituals form an important part of life.",
          },
          {
            name: "Local Markets",
            slug: "local-markets",
            region: "Pan India",
            image: "/images/culture/traditions-lifestyle/markets.webp",
            description:
              "Traditional bazaars bring together food, textiles, crafts, spices and community life.",
          },
          {
            name: "Indian Hospitality",
            slug: "hospitality",
            region: "Pan India",
            image: "/images/culture/traditions-lifestyle/hospitality.webp",
            description:
              "Welcoming guests and sharing food are deeply valued traditions across Indian communities.",
          },
          {
            name: "Regional Identity",
            slug: "regional-identity",
            region: "Across India",
            image: "/images/culture/traditions-lifestyle/regional.webp",
            description:
              "Language, clothing, cuisine and customs create distinctive identities across India's regions.",
          },
        ],
      },

      "languages-literature": {
        eyebrow: "INDIAN LANGUAGES & LITERATURE",
        title: "Many languages, countless stories.",
        text:
          "Discover India's linguistic diversity, literature, poetry and storytelling traditions.",
        items: [
          {
            name: "Hindi Literature",
            slug: "hindi-literature",
            region: "North & Central India",
            image: "/images/culture/languages-literature/hindi.webp",
            description:
              "A rich literary tradition spanning poetry, novels, stories and regional voices.",
          },
          {
            name: "Bengali Literature",
            slug: "bengali-literature",
            region: "West Bengal",
            image: "/images/culture/languages-literature/bengali.webp",
            description:
              "A celebrated literary tradition known for poetry, novels, theatre and intellectual writing.",
          },
          {
            name: "Tamil Literature",
            slug: "tamil-literature",
            region: "Tamil Nadu",
            image: "/images/culture/languages-literature/tamil.webp",
            description:
              "One of India's oldest literary traditions with a long history of poetry and classical works.",
          },
          {
            name: "Sanskrit Literature",
            slug: "sanskrit-literature",
            region: "Pan India",
            image: "/images/culture/languages-literature/sanskrit.webp",
            description:
              "An ancient literary tradition containing philosophical, poetic and scholarly works.",
          },
          {
            name: "Urdu Poetry",
            slug: "urdu-poetry",
            region: "North India",
            image: "/images/culture/languages-literature/urdu.webp",
            description:
              "A poetic tradition celebrated for its expressive language, ghazals and literary culture.",
          },
          {
            name: "Folk Storytelling",
            slug: "folk-storytelling",
            region: "Across India",
            image: "/images/culture/languages-literature/folk.webp",
            description:
              "Oral storytelling traditions preserve local legends, myths, values and community memories.",
          },
        ],
      },
    },
  },

  hi: {
    page: {
      eyebrow: "भारत की संस्कृति",
      title: "भारत की धरती जितनी विविध, उतनी ही विविध इसकी संस्कृति।",
      description:
        "भारत की सांस्कृतिक पहचान को जीवंत बनाने वाले त्योहारों, संगीत, परिधानों, कला, परंपराओं और भाषाओं को जानें।",
      back: "← संस्कृति पर वापस जाएँ",
      explore: "कहानी देखें →",
      location: "📍",
    },

    categories: {
      festivals: {
        eyebrow: "भारत के त्योहार",
        title: "उत्सव जो समुदायों को साथ लाते हैं।",
        text:
          "भारत के जीवंत त्योहारों, रंगीन उत्सवों और पीढ़ियों से चली आ रही परंपराओं को जानें।",
        items: [
          {
            name: "होली",
            slug: "holi",
            region: "उत्तर भारत",
            image: "/images/culture/festivals/holi.webp",
            description:
              "रंगों का त्योहार, जो संगीत, आनंद, भोजन और समुदायों के मिलन के साथ मनाया जाता है।",
          },
          {
            name: "दीवाली",
            slug: "diwali",
            region: "पूरे भारत में",
            image: "/images/culture/festivals/diwali.webp",
            description:
              "दीपों का त्योहार, जिसे दीपों, प्रार्थनाओं, मिठाइयों और पारिवारिक मिलन के साथ मनाया जाता है।",
          },
          {
            name: "दुर्गा पूजा",
            slug: "durga-puja",
            region: "पश्चिम बंगाल",
            image: "/images/culture/festivals/durga-puja.webp",
            description:
              "कलात्मक पंडालों, संगीत, अनुष्ठानों और सामुदायिक उत्सवों से जुड़ा भव्य सांस्कृतिक पर्व।",
          },
          {
            name: "ओणम",
            slug: "onam",
            region: "केरल",
            image: "/images/culture/festivals/onam.webp",
            description:
              "केरल का फसल उत्सव, जो फूलों की सजावट, पारंपरिक उत्सव और ओणम सद्या के लिए प्रसिद्ध है।",
          },
          {
            name: "पोंगल",
            slug: "pongal",
            region: "तमिलनाडु",
            image: "/images/culture/festivals/pongal.webp",
            description:
              "प्रकृति, कृषि, समृद्धि और पारिवारिक परंपराओं को समर्पित फसल उत्सव।",
          },
          {
            name: "बिहू",
            slug: "bihu",
            region: "असम",
            image: "/images/culture/festivals/bihu.webp",
            description:
              "कृषि, पारंपरिक संगीत, नृत्य और सामुदायिक उत्सवों से जुड़ा असमिया पर्व।",
          },
        ],
      },

      "dance-music": {
        eyebrow: "भारतीय नृत्य और संगीत",
        title: "लय और अभिव्यक्ति के माध्यम से कही गई कहानियाँ।",
        text: "भारत की शास्त्रीय और लोक नृत्य तथा संगीत परंपराओं को जानें।",
        items: [
          {
            name: "भरतनाट्यम",
            slug: "bharatanatyam",
            region: "तमिलनाडु",
            image: "/images/culture/dance-music/bharatanatyam.webp",
            description:
              "सटीक मुद्राओं और भावपूर्ण कहानी कहने के लिए प्रसिद्ध शास्त्रीय नृत्य परंपरा।",
          },
          {
            name: "कथक",
            slug: "kathak",
            region: "उत्तर भारत",
            image: "/images/culture/dance-music/kathak.webp",
            description:
              "जटिल पदचालन, घूमर और कहानी कहने के लिए प्रसिद्ध शास्त्रीय नृत्य परंपरा।",
          },
          {
            name: "कथकली",
            slug: "kathakali",
            region: "केरल",
            image: "/images/culture/dance-music/kathakali.webp",
            description:
              "भव्य वेशभूषा, मेकअप और भावपूर्ण अभिनय के लिए प्रसिद्ध नृत्य-नाट्य परंपरा।",
          },
          {
            name: "हिंदुस्तानी संगीत",
            slug: "hindustani-music",
            region: "उत्तर भारत",
            image: "/images/culture/dance-music/hindustani.webp",
            description:
              "राग, ताल और तात्कालिक रचनात्मकता पर आधारित शास्त्रीय संगीत परंपरा।",
          },
          {
            name: "कर्नाटक संगीत",
            slug: "carnatic-music",
            region: "दक्षिण भारत",
            image: "/images/culture/dance-music/carnatic.webp",
            description:
              "रचनाओं, ताल और भक्ति भाव के लिए प्रसिद्ध प्रमुख शास्त्रीय संगीत परंपरा।",
          },
          {
            name: "लोक संगीत",
            slug: "folk-music",
            region: "पूरे भारत में",
            image: "/images/culture/dance & music/dance.webp",
            description:
              "स्थानीय कहानियों, उत्सवों, समुदायों और दैनिक जीवन को संजोने वाली क्षेत्रीय संगीत परंपराएँ।",
          },
        ],
      },

      clothing: {
        eyebrow: "भारतीय वस्त्र और परिधान",
        title: "भारत के क्षेत्रों की कहानियाँ समेटे धागे।",
        text: "भारत के पारंपरिक परिधानों, वस्त्रों और बुनाई परंपराओं को जानें।",
        items: [
          {
            name: "बनारसी सिल्क",
            slug: "banarasi-silk",
            region: "उत्तर प्रदेश",
            image: "/images/culture/clothing/banarasi.webp",
            description:
              "वाराणसी के शानदार रेशमी वस्त्र, जो जटिल बुनाई और समृद्ध डिजाइनों के लिए प्रसिद्ध हैं।",
          },
          {
            name: "कांचीपुरम सिल्क",
            slug: "kanchipuram-silk",
            region: "तमिलनाडु",
            image: "/images/culture/clothing/kanchipuram.webp",
            description:
              "समृद्ध रंगों और सुंदर किनारों वाली पारंपरिक रेशमी साड़ियों की परंपरा।",
          },
          {
            name: "फुलकारी",
            slug: "phulkari",
            region: "पंजाब",
            image: "/images/culture/clothing/phulkari.webp",
            description:
              "जटिल फूलों के पैटर्न वाली रंगीन कढ़ाई परंपरा।",
          },
          {
            name: "बंधनी",
            slug: "bandhani",
            region: "राजस्थान और गुजरात",
            image: "/images/culture/clothing/bandhani.webp",
            description:
              "विशिष्ट पैटर्न बनाने वाली पारंपरिक टाई-एंड-डाई वस्त्र तकनीक।",
          },
          {
            name: "कसावु",
            slug: "kasavu",
            region: "केरल",
            image: "/images/culture/clothing/kasavu.webp",
            description:
              "केरल की पारंपरिक वस्त्र शैली, जो अपने सुंदर सुनहरे किनारे के लिए प्रसिद्ध है।",
          },
          {
            name: "पश्मीना",
            slug: "pashmina",
            region: "कश्मीर",
            image: "/images/culture/clothing/pashmina.webp",
            description:
              "मुलायमपन और बारीक कारीगरी के लिए प्रसिद्ध महीन ऊन की वस्त्र परंपरा।",
          },
        ],
      },

      "art-storytelling": {
        eyebrow: "भारतीय कला और कहानी-कथन",
        title: "पीढ़ियों से आकार लेती कलात्मक परंपराएँ।",
        text:
          "भारत की लोक चित्रकला, शिल्प और कहानी-कथन की परंपराओं को जानें।",
        items: [
          {
            name: "मधुबनी",
            slug: "madhubani",
            region: "बिहार",
            image: "/images/culture/art-storytelling/madhubani.webp",
            description:
              "सशक्त पैटर्न, प्राकृतिक विषयों और कहानी कहने के लिए प्रसिद्ध विशिष्ट चित्रकला परंपरा।",
          },
          {
            name: "वारली",
            slug: "warli",
            region: "महाराष्ट्र",
            image: "/images/culture/art-storytelling/warli.webp",
            description:
              "सरल ज्यामितीय मानव और पशु आकृतियों वाली जनजातीय चित्रकला परंपरा।",
          },
          {
            name: "पट्टचित्र",
            slug: "pattachitra",
            region: "ओडिशा",
            image: "/images/culture/art-storytelling/pattachitra.webp",
            description:
              "विस्तृत रचनाओं और पौराणिक विषयों के लिए प्रसिद्ध पारंपरिक चित्रकला शैली।",
          },
          {
            name: "कलमकारी",
            slug: "kalamkari",
            region: "दक्षिण भारत",
            image: "/images/culture/art-storytelling/kalamkari.webp",
            description:
              "हाथ से बनाए गए और प्राकृतिक रंगों से रंगे डिजाइनों वाली वस्त्र एवं चित्रकला परंपरा।",
          },
          {
            name: "ब्लू पॉटरी",
            slug: "blue-pottery",
            region: "राजस्थान",
            image: "/images/culture/art-storytelling/blue-pottery.webp",
            description:
              "जयपुर से जुड़ी सजावटी कला, जो रंगीन चमकदार डिजाइनों के लिए प्रसिद्ध है।",
          },
          {
            name: "ढोकरा",
            slug: "dhokra",
            region: "मध्य और पूर्वी भारत",
            image: "/images/culture/art-storytelling/dhokra.webp",
            description:
              "लॉस्ट-वैक्स तकनीक से की जाने वाली प्राचीन धातु ढलाई परंपरा।",
          },
        ],
      },

      "traditions-lifestyle": {
        eyebrow: "जीवंत भारत",
        title: "दैनिक परंपराएँ जो भारत को विशिष्ट बनाती हैं।",
        text:
          "भारत की सांस्कृतिक पहचान को आकार देने वाले रीति-रिवाजों, समुदायों और जीवनशैली को जानें।",
        items: [
          {
            name: "पारिवारिक परंपराएँ",
            slug: "family-traditions",
            region: "पूरे भारत में",
            image: "/images/culture/traditions-lifestyle/family.webp",
            description:
              "पारिवारिक मिलन, समारोह, विवाह और रीति-रिवाज भारतीय सामाजिक जीवन का महत्वपूर्ण हिस्सा हैं।",
          },
          {
            name: "गाँव का जीवन",
            slug: "village-life",
            region: "ग्रामीण भारत",
            image: "/images/culture/traditions-lifestyle/village.webp",
            description:
              "पारंपरिक समुदाय कृषि पद्धतियों, शिल्प और स्थानीय रीति-रिवाजों को संरक्षित करते हैं।",
          },
          {
            name: "आध्यात्मिक परंपराएँ",
            slug: "spiritual-traditions",
            region: "पूरे भारत में",
            image: "/images/culture/traditions-lifestyle/spiritual.webp",
            description:
              "तीर्थयात्रा, प्रार्थना, ध्यान और सामुदायिक अनुष्ठान जीवन का महत्वपूर्ण हिस्सा हैं।",
          },
          {
            name: "स्थानीय बाजार",
            slug: "local-markets",
            region: "पूरे भारत में",
            image: "/images/culture/traditions-lifestyle/markets.webp",
            description:
              "पारंपरिक बाजार भोजन, वस्त्र, शिल्प, मसालों और सामुदायिक जीवन को एक साथ लाते हैं।",
          },
          {
            name: "भारतीय आतिथ्य",
            slug: "hospitality",
            region: "पूरे भारत में",
            image: "/images/culture/traditions-lifestyle/hospitality.webp",
            description:
              "मेहमानों का स्वागत करना और भोजन साझा करना भारतीय समुदायों की गहरी परंपराएँ हैं।",
          },
          {
            name: "क्षेत्रीय पहचान",
            slug: "regional-identity",
            region: "पूरे भारत में",
            image: "/images/culture/traditions-lifestyle/regional.webp",
            description:
              "भाषा, परिधान, भोजन और रीति-रिवाज भारत के क्षेत्रों की विशिष्ट पहचान बनाते हैं।",
          },
        ],
      },

      "languages-literature": {
        eyebrow: "भारतीय भाषाएँ और साहित्य",
        title: "अनेक भाषाएँ, अनगिनत कहानियाँ।",
        text:
          "भारत की भाषाई विविधता, साहित्य, कविता और कहानी-कथन की परंपराओं को जानें।",
        items: [
          {
            name: "हिंदी साहित्य",
            slug: "hindi-literature",
            region: "उत्तर और मध्य भारत",
            image: "/images/culture/languages-literature/hindi.webp",
            description:
              "कविता, उपन्यास, कहानियों और क्षेत्रीय आवाजों से समृद्ध साहित्यिक परंपरा।",
          },
          {
            name: "बंगाली साहित्य",
            slug: "bengali-literature",
            region: "पश्चिम बंगाल",
            image: "/images/culture/languages-literature/bengali.webp",
            description:
              "कविता, उपन्यास, रंगमंच और बौद्धिक लेखन के लिए प्रसिद्ध साहित्यिक परंपरा।",
          },
          {
            name: "तमिल साहित्य",
            slug: "tamil-literature",
            region: "तमिलनाडु",
            image: "/images/culture/languages-literature/tamil.webp",
            description:
              "कविता और शास्त्रीय रचनाओं के लंबे इतिहास वाली भारत की प्राचीन साहित्यिक परंपराओं में से एक।",
          },
          {
            name: "संस्कृत साहित्य",
            slug: "sanskrit-literature",
            region: "पूरे भारत में",
            image: "/images/culture/languages-literature/sanskrit.webp",
            description:
              "दार्शनिक, काव्यात्मक और विद्वतापूर्ण रचनाओं वाली प्राचीन साहित्यिक परंपरा।",
          },
          {
            name: "उर्दू शायरी",
            slug: "urdu-poetry",
            region: "उत्तर भारत",
            image: "/images/culture/languages-literature/urdu.webp",
            description:
              "अभिव्यक्तिपूर्ण भाषा, ग़ज़ल और साहित्यिक संस्कृति के लिए प्रसिद्ध काव्य परंपरा।",
          },
          {
            name: "लोक कहानी-कथन",
            slug: "folk-storytelling",
            region: "पूरे भारत में",
            image: "/images/culture/languages-literature/folk.webp",
            description:
              "मौखिक कहानी-कथन स्थानीय किंवदंतियों, मिथकों, मूल्यों और सामुदायिक स्मृतियों को संरक्षित करता है।",
          },
        ],
      },
    },
  },
};

export default culture;