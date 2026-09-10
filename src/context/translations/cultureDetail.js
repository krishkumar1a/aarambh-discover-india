// cultureDetail.js

const cultureDetail = {
  // =========================================================
  // ENGLISH
  // =========================================================
  en: {
    common: {
      back: "← Back to Culture",
      location: "📍",
      exploreStory: "Explore Story",
    },

    errors: {
      notFoundTitle: "Culture category not found.",
      notFoundText:
        "We couldn't find the culture category you're looking for.",
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
            image: "/images/culture/festivals & celebrations/holi.webp",
            description:
              "The festival of colours celebrated with music, joy, food and communities coming together.",
          },
          {
            name: "Diwali",
            slug: "diwali",
            region: "Pan India",
            image: "/images/culture/festivals & celebrations/diwali.webp",
            description:
              "The festival of lights celebrated with lamps, prayers, sweets and family gatherings.",
          },
          {
            name: "Durga Puja",
            slug: "durga-puja",
            region: "West Bengal",
            image: "/images/culture/festivals & celebrations/durga.webp",
            description:
              "A grand cultural celebration featuring artistic pandals, music, rituals and community gatherings.",
          },
          {
            name: "Onam",
            slug: "onam",
            region: "Kerala",
            image: "/images/culture/festivals & celebrations/onam.webp",
            description:
              "Kerala's harvest festival known for floral designs, traditional celebrations and Onam Sadya.",
          },
          {
            name: "Pongal",
            slug: "pongal",
            region: "Tamil Nadu",
            image: "/images/culture/festivals & celebrations/pongal.webp",
            description:
              "A harvest celebration honouring nature, agriculture, prosperity and family traditions.",
          },
          {
            name: "Bihu",
            slug: "bihu",
            region: "Assam",
            image: "/images/culture/festivals & celebrations/bihu.webp",
            description:
              "An Assamese festival connected with agriculture, traditional music, dance and community celebrations.",
          },
        ],
      },

      "dance-music": {
        eyebrow: "INDIAN DANCE & MUSIC",
        title: "Stories told through rhythm and expression.",
        text:
          "Discover India's classical and folk dance and music traditions.",

        items: [
          {
            name: "Bharatanatyam",
            slug: "bharatanatyam",
            region: "Tamil Nadu",
            image: "/images/culture/dance & music/bharatnatyam.webp",
            description:
              "A classical dance tradition known for precise movements and expressive storytelling.",
          },
          {
            name: "Kathak",
            slug: "kathak",
            region: "North India",
            image: "/images/culture/dance & music/kathak.webp",
            description:
              "A classical dance tradition known for intricate footwork, spins and storytelling.",
          },
          {
            name: "Kathakali",
            slug: "kathakali",
            region: "Kerala",
            image: "/images/culture/dance & music/kathakali.webp",
            description:
              "A dramatic dance tradition recognised for elaborate costumes, makeup and expressive performance.",
          },
          {
            name: "Hindustani Music",
            slug: "hindustani-music",
            region: "North India",
            image: "/images/culture/dance & music/hindustani.webp",
            description:
              "A classical musical tradition built around ragas, rhythm and improvisation.",
          },
          {
            name: "Carnatic Music",
            slug: "carnatic-music",
            region: "South India",
            image: "/images/culture/dance & music/carnatic.webp",
            description:
              "The classical music tradition of South India known for complex compositions and rhythms.",
          },
          {
            name: "Bihu Dance",
            slug: "bihu-dance",
            region: "Assam",
            image: "/images/culture/dance & music/bihu.webp",
            description:
              "An energetic Assamese folk dance traditionally associated with Bihu celebrations.",
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
            image: "/images/culture/clothing/paschmina.webp",
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

  // =========================================================
  // HINDI
  // =========================================================
  hi: {
    common: {
      back: "← संस्कृति पर वापस जाएँ",
      location: "📍",
      exploreStory: "कहानी देखें",
    },

    errors: {
      notFoundTitle: "संस्कृति श्रेणी नहीं मिली।",
      notFoundText:
        "हमें वह संस्कृति श्रेणी नहीं मिली जिसे आप खोज रहे हैं।",
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
            image: "/images/culture/festivals & celebrations/holi.webp",
            description:
              "रंगों का त्योहार, जो संगीत, आनंद, भोजन और समुदायों के मिलन के साथ मनाया जाता है।",
          },
          {
            name: "दीवाली",
            slug: "diwali",
            region: "पूरे भारत में",
            image: "/images/culture/festivals & celebrations/diwali.webp",
            description:
              "दीपों का त्योहार, जिसे दीपों, प्रार्थनाओं, मिठाइयों और पारिवारिक मिलन के साथ मनाया जाता है।",
          },
          {
            name: "दुर्गा पूजा",
            slug: "durga-puja",
            region: "पश्चिम बंगाल",
            image: "/images/culture/festivals & celebrations/durga.webp",
            description:
              "कलात्मक पंडालों, संगीत, अनुष्ठानों और सामुदायिक उत्सवों से जुड़ा भव्य सांस्कृतिक पर्व।",
          },
          {
            name: "ओणम",
            slug: "onam",
            region: "केरल",
            image: "/images/culture/festivals & celebrations/onam.webp",
            description:
              "केरल का फसल उत्सव, जो फूलों की सजावट, पारंपरिक उत्सव और ओणम सद्या के लिए प्रसिद्ध है।",
          },
          {
            name: "पोंगल",
            slug: "pongal",
            region: "तमिलनाडु",
            image: "/images/culture/festivals & celebrations/pongal.webp",
            description:
              "प्रकृति, कृषि, समृद्धि और पारिवारिक परंपराओं को समर्पित फसल उत्सव।",
          },
          {
            name: "बिहू",
            slug: "bihu",
            region: "असम",
            image: "/images/culture/festivals & celebrations/bihu.webp",
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
            image: "/images/culture/dance & music/bharatnatyam.webp",
            description:
              "सटीक मुद्राओं और भावपूर्ण कहानी कहने के लिए प्रसिद्ध शास्त्रीय नृत्य परंपरा।",
          },
          {
            name: "कथक",
            slug: "kathak",
            region: "उत्तर भारत",
            image: "/images/culture/dance & music/kathak.webp",
            description:
              "जटिल पदचालन, घूमर और कहानी कहने के लिए प्रसिद्ध शास्त्रीय नृत्य परंपरा।",
          },
          {
            name: "कथकली",
            slug: "kathakali",
            region: "केरल",
            image: "/images/culture/dance & music/kathakali.webp",
            description:
              "भव्य वेशभूषा, मेकअप और भावपूर्ण अभिनय के लिए प्रसिद्ध नृत्य-नाट्य परंपरा।",
          },
          {
            name: "हिंदुस्तानी संगीत",
            slug: "hindustani-music",
            region: "उत्तर भारत",
            image: "/images/culture/dance & music/hindustani.webp",
            description:
              "राग, ताल और तात्कालिक रचनात्मकता पर आधारित शास्त्रीय संगीत परंपरा।",
          },
          {
            name: "कर्नाटक संगीत",
            slug: "carnatic-music",
            region: "दक्षिण भारत",
            image: "/images/culture/dance & music/carnatic.webp",
            description:
              "दक्षिण भारत की शास्त्रीय संगीत परंपरा, जो जटिल रचनाओं और ताल के लिए प्रसिद्ध है।",
          },
          {
            name: "बिहू नृत्य",
            slug: "bihu-dance",
            region: "असम",
            image: "/images/culture/dance & music/bihu.webp",
            description:
              "बिहू उत्सवों से जुड़ा असम का ऊर्जावान लोक नृत्य।",
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
            description: "जटिल फूलों के पैटर्न वाली रंगीन कढ़ाई परंपरा।",
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
            image: "/images/culture/clothing/paschmina.webp",
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

  // =========================================================
  // BENGALI
  // =========================================================
  bn: {
    common: {
      back: "← সংস্কৃতিতে ফিরে যান",
      location: "📍",
      exploreStory: "গল্প দেখুন",
    },

    errors: {
      notFoundTitle: "সংস্কৃতির বিভাগ পাওয়া যায়নি।",
      notFoundText: "আপনি যে সংস্কৃতির বিভাগটি খুঁজছেন তা আমরা খুঁজে পাইনি।",
    },

    categories: {
      festivals: {
        eyebrow: "ভারতের উৎসব",
        title: "উৎসব যা সম্প্রদায়কে একত্রিত করে।",
        text:
          "ভারতের প্রাণবন্ত উৎসব, রঙিন উদযাপন এবং প্রজন্মের পর প্রজন্ম ধরে চলে আসা ঐতিহ্য আবিষ্কার করুন।",
        items: [
          {
            name: "হোলি",
            slug: "holi",
            region: "উত্তর ভারত",
            image: "/images/culture/festivals & celebrations/holi.webp",
            description:
              "রং, আনন্দ, সংগীত, খাবার এবং মানুষের মিলনের মাধ্যমে উদযাপিত রঙের উৎসব।",
          },
          {
            name: "দীপাবলি",
            slug: "diwali",
            region: "সমগ্র ভারত",
            image: "/images/culture/festivals & celebrations/diwali.webp",
            description:
              "দীপ, প্রার্থনা, মিষ্টি এবং পারিবারিক মিলনের মাধ্যমে উদযাপিত আলোর উৎসব।",
          },
          {
            name: "দুর্গাপূজা",
            slug: "durga-puja",
            region: "পশ্চিমবঙ্গ",
            image: "/images/culture/festivals & celebrations/durga.webp",
            description:
              "শিল্পসমৃদ্ধ প্যান্ডেল, সংগীত, আচার ও সামাজিক মিলনকে কেন্দ্র করে এক মহৎ সাংস্কৃতিক উৎসব।",
          },
          {
            name: "ওনাম",
            slug: "onam",
            region: "কেরালা",
            image: "/images/culture/festivals & celebrations/onam.webp",
            description:
              "ফুলের নকশা, ঐতিহ্যবাহী উদযাপন এবং ওনাম সদ্যার জন্য পরিচিত কেরালার ফসল উৎসব।",
          },
          {
            name: "পোঙ্গল",
            slug: "pongal",
            region: "তামিলনাড়ু",
            image: "/images/culture/festivals & celebrations/pongal.webp",
            description:
              "প্রকৃতি, কৃষি, সমৃদ্ধি ও পারিবারিক ঐতিহ্যকে সম্মান জানানো ফসল উৎসব।",
          },
          {
            name: "বিহু",
            slug: "bihu",
            region: "অসম",
            image: "/images/culture/festivals & celebrations/bihu.webp",
            description:
              "কৃষি, ঐতিহ্যবাহী সংগীত, নৃত্য ও সামাজিক উদযাপনের সঙ্গে যুক্ত অসমীয়া উৎসব।",
          },
        ],
      },

      "dance-music": {
        eyebrow: "ভারতীয় নৃত্য ও সংগীত",
        title: "ছন্দ ও অভিব্যক্তির মাধ্যমে বলা গল্প।",
        text: "ভারতের শাস্ত্রীয় ও লোকনৃত্য এবং সংগীতের ঐতিহ্য আবিষ্কার করুন।",
        items: [
          {
            name: "ভরতনাট্যম",
            slug: "bharatanatyam",
            region: "তামিলনাড়ু",
            image: "/images/culture/dance & music/bharatnatyam.webp",
            description:
              "নিখুঁত অঙ্গভঙ্গি ও আবেগপূর্ণ গল্প বলার জন্য পরিচিত শাস্ত্রীয় নৃত্যধারা।",
          },
          {
            name: "কথক",
            slug: "kathak",
            region: "উত্তর ভারত",
            image: "/images/culture/dance & music/kathak.webp",
            description:
              "জটিল পদচারণা, ঘূর্ণন ও গল্প বলার জন্য পরিচিত শাস্ত্রীয় নৃত্যধারা।",
          },
          {
            name: "কথাকলি",
            slug: "kathakali",
            region: "কেরালা",
            image: "/images/culture/dance & music/kathakali.webp",
            description:
              "জাঁকজমকপূর্ণ পোশাক, মেকআপ ও অভিব্যক্তিপূর্ণ অভিনয়ের জন্য পরিচিত নৃত্যনাট্য।",
          },
          {
            name: "হিন্দুস্তানি সংগীত",
            slug: "hindustani-music",
            region: "উত্তর ভারত",
            image: "/images/culture/dance & music/hindustani.webp",
            description:
              "রাগ, তাল ও তাৎক্ষণিক সৃষ্টিশীলতার ওপর ভিত্তি করে গড়ে ওঠা শাস্ত্রীয় সংগীতধারা।",
          },
          {
            name: "কর্ণাটক সংগীত",
            slug: "carnatic-music",
            region: "দক্ষিণ ভারত",
            image: "/images/culture/dance & music/carnatic.webp",
            description:
              "জটিল রচনা ও ছন্দের জন্য পরিচিত দক্ষিণ ভারতের শাস্ত্রীয় সংগীতধারা।",
          },
          {
            name: "বিহু নৃত্য",
            slug: "bihu-dance",
            region: "অসম",
            image: "/images/culture/dance & music/bihu.webp",
            description:
              "বিহু উৎসবের সঙ্গে যুক্ত একটি প্রাণবন্ত অসমীয়া লোকনৃত্য।",
          },
        ],
      },

      clothing: {
        eyebrow: "ভারতীয় বস্ত্র ও পোশাক",
        title: "ভারতের অঞ্চলগুলির গল্প বহন করে এমন সুতো।",
        text: "ভারতের ঐতিহ্যবাহী পোশাক, বস্ত্র ও বয়ন ঐতিহ্য আবিষ্কার করুন।",
        items: [
          {
            name: "বেনারসি সিল্ক",
            slug: "banarasi-silk",
            region: "উত্তরপ্রদেশ",
            image: "/images/culture/clothing/banarasi.webp",
            description:
              "বারাণসীর বিলাসবহুল রেশমি বস্ত্র, যা সূক্ষ্ম বয়ন ও সমৃদ্ধ নকশার জন্য পরিচিত।",
          },
          {
            name: "কাঞ্চিপুরম সিল্ক",
            slug: "kanchipuram-silk",
            region: "তামিলনাড়ু",
            image: "/images/culture/clothing/kanchipuram.webp",
            description:
              "সমৃদ্ধ রং ও সূক্ষ্ম পাড়ের জন্য পরিচিত ঐতিহ্যবাহী রেশমি শাড়ির ধারা।",
          },
          {
            name: "ফুলকারি",
            slug: "phulkari",
            region: "পাঞ্জাব",
            image: "/images/culture/clothing/phulkari.webp",
            description:
              "জটিল ফুলের নকশায় সজ্জিত রঙিন সূচিকর্মের ঐতিহ্য।",
          },
          {
            name: "বান্ধনী",
            slug: "bandhani",
            region: "রাজস্থান ও গুজরাট",
            image: "/images/culture/clothing/bandhani.webp",
            description:
              "স্বতন্ত্র নকশা তৈরির ঐতিহ্যবাহী টাই-অ্যান্ড-ডাই বস্ত্রপ্রযুক্তি।",
          },
          {
            name: "কাসাভু",
            slug: "kasavu",
            region: "কেরালা",
            image: "/images/culture/clothing/kasavu.webp",
            description:
              "সুন্দর সোনালি পাড়ের জন্য পরিচিত কেরালার ঐতিহ্যবাহী বস্ত্রশৈলী।",
          },
          {
            name: "পশমিনা",
            slug: "pashmina",
            region: "কাশ্মীর",
            image: "/images/culture/clothing/paschmina.webp",
            description:
              "নরমতা ও সূক্ষ্ম কারুকার্যের জন্য পরিচিত মিহি উলের বস্ত্র ঐতিহ্য।",
          },
        ],
      },

      "art-storytelling": {
        eyebrow: "ভারতীয় শিল্প ও গল্প বলা",
        title: "প্রজন্মের হাতে গড়ে ওঠা শিল্প ঐতিহ্য।",
        text: "ভারতের লোকচিত্র, কারুশিল্প ও গল্প বলার ঐতিহ্য আবিষ্কার করুন।",
        items: [
          {
            name: "মধুবনী",
            slug: "madhubani",
            region: "বিহার",
            image: "/images/culture/art-storytelling/madhubani.webp",
            description:
              "সাহসী নকশা, প্রাকৃতিক বিষয় ও গল্প বলার জন্য পরিচিত একটি স্বতন্ত্র চিত্রশিল্প ধারা।",
          },
          {
            name: "ওয়ারলি",
            slug: "warli",
            region: "মহারাষ্ট্র",
            image: "/images/culture/art-storytelling/warli.webp",
            description:
              "সরল জ্যামিতিক মানব ও প্রাণীর আকৃতির জন্য পরিচিত আদিবাসী চিত্রশিল্প ধারা।",
          },
          {
            name: "পটচিত্র",
            slug: "pattachitra",
            region: "ওড়িশা",
            image: "/images/culture/art-storytelling/pattachitra.webp",
            description:
              "বিস্তারিত রচনা ও পৌরাণিক বিষয়ের জন্য পরিচিত ঐতিহ্যবাহী চিত্রশৈলী।",
          },
          {
            name: "কলমকারি",
            slug: "kalamkari",
            region: "দক্ষিণ ভারত",
            image: "/images/culture/art-storytelling/kalamkari.webp",
            description:
              "হাতে আঁকা ও প্রাকৃতিক রঙে তৈরি নকশার বস্ত্র ও চিত্রশিল্প ঐতিহ্য।",
          },
          {
            name: "ব্লু পটারি",
            slug: "blue-pottery",
            region: "রাজস্থান",
            image: "/images/culture/art-storytelling/blue-pottery.webp",
            description:
              "জয়পুরের সঙ্গে যুক্ত একটি সজ্জামূলক শিল্প, যা রঙিন চকচকে নকশার জন্য পরিচিত।",
          },
          {
            name: "ঢোকরা",
            slug: "dhokra",
            region: "মধ্য ও পূর্ব ভারত",
            image: "/images/culture/art-storytelling/dhokra.webp",
            description:
              "লস্ট-ওয়াক্স পদ্ধতিতে তৈরি প্রাচীন ধাতু ঢালাইয়ের ঐতিহ্য।",
          },
        ],
      },

      "traditions-lifestyle": {
        eyebrow: "জীবন্ত ভারত",
        title: "দৈনন্দিন ঐতিহ্য যা ভারতকে অনন্য করে তোলে।",
        text:
          "ভারতের সাংস্কৃতিক পরিচয় গড়ে তোলা রীতি, সম্প্রদায় ও জীবনধারা আবিষ্কার করুন।",
        items: [
          {
            name: "পারিবারিক ঐতিহ্য",
            slug: "family-traditions",
            region: "সমগ্র ভারত",
            image: "/images/culture/traditions-lifestyle/family.webp",
            description:
              "পারিবারিক মিলন, অনুষ্ঠান, বিবাহ ও আচার ভারতীয় সামাজিক জীবনের গুরুত্বপূর্ণ অংশ।",
          },
          {
            name: "গ্রামীণ জীবন",
            slug: "village-life",
            region: "গ্রামীণ ভারত",
            image: "/images/culture/traditions-lifestyle/village.webp",
            description:
              "ঐতিহ্যবাহী সম্প্রদায়গুলি কৃষিকাজ, কারুশিল্প ও স্থানীয় রীতিনীতি সংরক্ষণ করে চলেছে।",
          },
          {
            name: "আধ্যাত্মিক ঐতিহ্য",
            slug: "spiritual-traditions",
            region: "সমগ্র ভারত",
            image: "/images/culture/traditions-lifestyle/spiritual.webp",
            description:
              "তীর্থযাত্রা, প্রার্থনা, ধ্যান ও সামাজিক আচার জীবনের গুরুত্বপূর্ণ অংশ।",
          },
          {
            name: "স্থানীয় বাজার",
            slug: "local-markets",
            region: "সমগ্র ভারত",
            image: "/images/culture/traditions-lifestyle/markets.webp",
            description:
              "ঐতিহ্যবাহী বাজার খাবার, বস্ত্র, কারুশিল্প, মশলা ও সামাজিক জীবনকে একত্র করে।",
          },
          {
            name: "ভারতীয় আতিথেয়তা",
            slug: "hospitality",
            region: "সমগ্র ভারত",
            image: "/images/culture/traditions-lifestyle/hospitality.webp",
            description:
              "অতিথিকে স্বাগত জানানো এবং খাবার ভাগ করে নেওয়া ভারতীয় সম্প্রদায়গুলির গভীর ঐতিহ্য।",
          },
          {
            name: "আঞ্চলিক পরিচয়",
            slug: "regional-identity",
            region: "সমগ্র ভারত",
            image: "/images/culture/traditions-lifestyle/regional.webp",
            description:
              "ভাষা, পোশাক, খাবার ও রীতিনীতি ভারতের বিভিন্ন অঞ্চলের স্বতন্ত্র পরিচয় তৈরি করে।",
          },
        ],
      },

      "languages-literature": {
        eyebrow: "ভারতীয় ভাষা ও সাহিত্য",
        title: "অনেক ভাষা, অসংখ্য গল্প।",
        text:
          "ভারতের ভাষাগত বৈচিত্র্য, সাহিত্য, কবিতা ও গল্প বলার ঐতিহ্য আবিষ্কার করুন।",
        items: [
          {
            name: "হিন্দি সাহিত্য",
            slug: "hindi-literature",
            region: "উত্তর ও মধ্য ভারত",
            image: "/images/culture/languages-literature/hindi.webp",
            description:
              "কবিতা, উপন্যাস, গল্প ও আঞ্চলিক কণ্ঠে সমৃদ্ধ একটি সাহিত্যিক ঐতিহ্য।",
          },
          {
            name: "বাংলা সাহিত্য",
            slug: "bengali-literature",
            region: "পশ্চিমবঙ্গ",
            image: "/images/culture/languages-literature/bengali.webp",
            description:
              "কবিতা, উপন্যাস, নাটক ও বুদ্ধিবৃত্তিক লেখার জন্য পরিচিত সাহিত্যিক ঐতিহ্য।",
          },
          {
            name: "তামিল সাহিত্য",
            slug: "tamil-literature",
            region: "তামিলনাড়ু",
            image: "/images/culture/languages-literature/tamil.webp",
            description:
              "কবিতা ও ধ্রুপদি রচনার দীর্ঘ ইতিহাসসমৃদ্ধ ভারতের প্রাচীনতম সাহিত্যিক ঐতিহ্যগুলির একটি।",
          },
          {
            name: "সংস্কৃত সাহিত্য",
            slug: "sanskrit-literature",
            region: "সমগ্র ভারত",
            image: "/images/culture/languages-literature/sanskrit.webp",
            description:
              "দার্শনিক, কাব্যিক ও পাণ্ডিত্যপূর্ণ রচনায় সমৃদ্ধ প্রাচীন সাহিত্যিক ঐতিহ্য।",
          },
          {
            name: "উর্দু কবিতা",
            slug: "urdu-poetry",
            region: "উত্তর ভারত",
            image: "/images/culture/languages-literature/urdu.webp",
            description:
              "অভিব্যক্তিপূর্ণ ভাষা, গজল ও সাহিত্যিক সংস্কৃতির জন্য পরিচিত কাব্যিক ঐতিহ্য।",
          },
          {
            name: "লোকগল্প বলা",
            slug: "folk-storytelling",
            region: "সমগ্র ভারত",
            image: "/images/culture/languages-literature/folk.webp",
            description:
              "মৌখিক গল্প বলার ঐতিহ্য স্থানীয় কিংবদন্তি, পুরাণ, মূল্যবোধ ও সামাজিক স্মৃতি সংরক্ষণ করে।",
          },
        ],
      },
    },
  },

  // =========================================================
  // TAMIL
  // =========================================================
  ta: {
    common: {
      back: "← கலாச்சாரத்திற்குத் திரும்பு",
      location: "📍",
      exploreStory: "கதையைப் பார்க்கவும்",
    },

    errors: {
      notFoundTitle: "கலாச்சாரப் பிரிவு கிடைக்கவில்லை.",
      notFoundText:
        "நீங்கள் தேடும் கலாச்சாரப் பிரிவை எங்களால் கண்டுபிடிக்க முடியவில்லை.",
    },

    categories: {
      festivals: {
        eyebrow: "இந்தியாவின் திருவிழாக்கள்",
        title: "சமூகங்களை ஒன்றிணைக்கும் கொண்டாட்டங்கள்.",
        text:
          "இந்தியாவின் வண்ணமயமான திருவிழாக்கள், கொண்டாட்டங்கள் மற்றும் தலைமுறைகள் கடந்து வந்த மரபுகளை அறிந்து கொள்ளுங்கள்.",
        items: [
          {
            name: "ஹோலி",
            slug: "holi",
            region: "வட இந்தியா",
            image: "/images/culture/festivals & celebrations/holi.webp",
            description:
              "இசை, மகிழ்ச்சி, உணவு மற்றும் மக்கள் ஒன்றுகூடும் நிகழ்வுகளுடன் கொண்டாடப்படும் வண்ணங்களின் திருவிழா.",
          },
          {
            name: "தீபாவளி",
            slug: "diwali",
            region: "இந்தியா முழுவதும்",
            image: "/images/culture/festivals & celebrations/diwali.webp",
            description:
              "விளக்குகள், பிரார்த்தனைகள், இனிப்புகள் மற்றும் குடும்ப ஒன்றுகூடலுடன் கொண்டாடப்படும் ஒளித் திருவிழா.",
          },
          {
            name: "துர்கா பூஜை",
            slug: "durga-puja",
            region: "மேற்கு வங்காளம்",
            image: "/images/culture/festivals & celebrations/durga.webp",
            description:
              "கலைநயமிக்க பந்தல்கள், இசை, சடங்குகள் மற்றும் சமூக ஒன்றுகூடல்களைக் கொண்ட பிரம்மாண்டமான கலாச்சார விழா.",
          },
          {
            name: "ஓணம்",
            slug: "onam",
            region: "கேரளா",
            image: "/images/culture/festivals & celebrations/onam.webp",
            description:
              "மலர் அலங்காரங்கள், பாரம்பரிய கொண்டாட்டங்கள் மற்றும் ஓணம் சദ്യாவிற்குப் புகழ்பெற்ற கேரள அறுவடைத் திருவிழா.",
          },
          {
            name: "பொங்கல்",
            slug: "pongal",
            region: "தமிழ்நாடு",
            image: "/images/culture/festivals & celebrations/pongal.webp",
            description:
              "இயற்கை, விவசாயம், செழிப்பு மற்றும் குடும்ப மரபுகளை மதிக்கும் அறுவடைத் திருவிழா.",
          },
          {
            name: "பிஹூ",
            slug: "bihu",
            region: "அசாம்",
            image: "/images/culture/festivals & celebrations/bihu.webp",
            description:
              "விவசாயம், பாரம்பரிய இசை, நடனம் மற்றும் சமூக கொண்டாட்டங்களுடன் தொடர்புடைய அசாமிய விழா.",
          },
        ],
      },

      "dance-music": {
        eyebrow: "இந்திய நடனம் மற்றும் இசை",
        title: "தாளமும் வெளிப்பாடும் மூலம் சொல்லப்படும் கதைகள்.",
        text:
          "இந்தியாவின் பாரம்பரிய மற்றும் நாட்டுப்புற நடனம் மற்றும் இசை மரபுகளை அறிந்து கொள்ளுங்கள்.",
        items: [
          {
            name: "பரதநாட்டியம்",
            slug: "bharatanatyam",
            region: "தமிழ்நாடு",
            image: "/images/culture/dance & music/bharatnatyam.webp",
            description:
              "துல்லியமான அசைவுகள் மற்றும் உணர்வுப்பூர்வமான கதைசொல்லலுக்குப் புகழ்பெற்ற பாரம்பரிய நடனம்.",
          },
          {
            name: "கதக்",
            slug: "kathak",
            region: "வட இந்தியா",
            image: "/images/culture/dance & music/kathak.webp",
            description:
              "சிக்கலான காலடி அசைவுகள், சுழற்சிகள் மற்றும் கதைசொல்லலுக்குப் புகழ்பெற்ற பாரம்பரிய நடனம்.",
          },
          {
            name: "கதகளி",
            slug: "kathakali",
            region: "கேரளா",
            image: "/images/culture/dance & music/kathakali.webp",
            description:
              "பிரம்மாண்டமான உடைகள், அலங்காரம் மற்றும் வெளிப்படையான நடிப்பிற்குப் புகழ்பெற்ற நடன நாடகம்.",
          },
          {
            name: "இந்துஸ்தானி இசை",
            slug: "hindustani-music",
            region: "வட இந்தியா",
            image: "/images/culture/dance & music/hindustani.webp",
            description:
              "ராகங்கள், தாளம் மற்றும் தன்னிச்சையான படைப்பாற்றலை அடிப்படையாகக் கொண்ட பாரம்பரிய இசை மரபு.",
          },
          {
            name: "கர்நாடக இசை",
            slug: "carnatic-music",
            region: "தென் இந்தியா",
            image: "/images/culture/dance & music/carnatic.webp",
            description:
              "சிக்கலான இசை அமைப்புகள் மற்றும் தாளங்களுக்குப் புகழ்பெற்ற தென்னிந்திய பாரம்பரிய இசை மரபு.",
          },
          {
            name: "பிஹூ நடனம்",
            slug: "bihu-dance",
            region: "அசாம்",
            image: "/images/culture/dance & music/bihu.webp",
            description:
              "பிஹூ கொண்டாட்டங்களுடன் பாரம்பரியமாக தொடர்புடைய உற்சாகமான அசாமிய நாட்டுப்புற நடனம்.",
          },
        ],
      },

      clothing: {
        eyebrow: "இந்திய பாரம்பரிய ஆடைகள்",
        title: "இந்தியாவின் பிராந்தியங்களின் கதைகளைச் சொல்லும் நூல்கள்.",
        text:
          "இந்தியாவின் பாரம்பரிய ஆடைகள், துணிகள் மற்றும் நெசவு மரபுகளை அறிந்து கொள்ளுங்கள்.",
        items: [
          {
            name: "பனாரசி பட்டு",
            slug: "banarasi-silk",
            region: "உத்தரப் பிரதேசம்",
            image: "/images/culture/clothing/banarasi.webp",
            description:
              "நுணுக்கமான நெசவு மற்றும் செழுமையான வடிவமைப்புகளுக்குப் புகழ்பெற்ற வாரணாசியின் பட்டு துணிகள்.",
          },
          {
            name: "காஞ்சிபுரம் பட்டு",
            slug: "kanchipuram-silk",
            region: "தமிழ்நாடு",
            image: "/images/culture/clothing/kanchipuram.webp",
            description:
              "செழுமையான நிறங்கள் மற்றும் அழகான ஓரங்களுக்குப் புகழ்பெற்ற பாரம்பரிய பட்டு சேலை மரபு.",
          },
          {
            name: "புல்காரி",
            slug: "phulkari",
            region: "பஞ்சாப்",
            image: "/images/culture/clothing/phulkari.webp",
            description:
              "சிக்கலான மலர் வடிவங்களைக் கொண்ட வண்ணமயமான எம்பிராய்டரி மரபு.",
          },
          {
            name: "பந்தனி",
            slug: "bandhani",
            region: "ராஜஸ்தான் மற்றும் குஜராத்",
            image: "/images/culture/clothing/bandhani.webp",
            description:
              "தனித்துவமான வடிவங்களை உருவாக்கும் பாரம்பரிய டை-அண்ட்-டை துணி நுட்பம்.",
          },
          {
            name: "கசவு",
            slug: "kasavu",
            region: "கேரளா",
            image: "/images/culture/clothing/kasavu.webp",
            description:
              "அழகிய தங்க நிற ஓரத்திற்குப் புகழ்பெற்ற கேரளாவின் பாரம்பரிய துணி பாணி.",
          },
          {
            name: "பஷ்மினா",
            slug: "pashmina",
            region: "காஷ்மீர்",
            image: "/images/culture/clothing/paschmina.webp",
            description:
              "மென்மை மற்றும் நுணுக்கமான கைவினைக்குப் புகழ்பெற்ற மெல்லிய கம்பளி துணி மரபு.",
          },
        ],
      },

      "art-storytelling": {
        eyebrow: "இந்திய கலை மற்றும் கதைசொல்லல்",
        title: "தலைமுறைகளால் வடிவமைக்கப்பட்ட கலை மரபுகள்.",
        text:
          "இந்தியாவின் நாட்டுப்புற ஓவியங்கள், கைவினைகள் மற்றும் கதைசொல்லல் மரபுகளை அறிந்து கொள்ளுங்கள்.",
        items: [
          {
            name: "மதுபனி",
            slug: "madhubani",
            region: "பீகார்",
            image: "/images/culture/art-storytelling/madhubani.webp",
            description:
              "துணிச்சலான வடிவங்கள், இயற்கை கருப்பொருள்கள் மற்றும் கதைசொல்லலுக்குப் புகழ்பெற்ற ஓவிய மரபு.",
          },
          {
            name: "வார்லி",
            slug: "warli",
            region: "மகாராஷ்டிரா",
            image: "/images/culture/art-storytelling/warli.webp",
            description:
              "எளிய வடிவியல் மனித மற்றும் விலங்கு உருவங்களைக் கொண்ட பழங்குடியின ஓவிய மரபு.",
          },
          {
            name: "பட்டச்சித்ரா",
            slug: "pattachitra",
            region: "ஒடிசா",
            image: "/images/culture/art-storytelling/pattachitra.webp",
            description:
              "விரிவான அமைப்புகள் மற்றும் புராணக் கருப்பொருள்களுக்குப் புகழ்பெற்ற பாரம்பரிய ஓவிய பாணி.",
          },
          {
            name: "கலம்காரி",
            slug: "kalamkari",
            region: "தென் இந்தியா",
            image: "/images/culture/art-storytelling/kalamkari.webp",
            description:
              "கையால் வரையப்பட்ட மற்றும் இயற்கை வண்ணங்களால் உருவாக்கப்பட்ட வடிவங்களைக் கொண்ட துணி மற்றும் ஓவிய மரபு.",
          },
          {
            name: "நீல மட்பாண்டம்",
            slug: "blue-pottery",
            region: "ராஜஸ்தான்",
            image: "/images/culture/art-storytelling/blue-pottery.webp",
            description:
              "ஜெய்ப்பூருடன் தொடர்புடைய அலங்காரக் கைவினை, வண்ணமயமான மெருகூட்டப்பட்ட வடிவங்களுக்குப் புகழ்பெற்றது.",
          },
          {
            name: "டோக்ரா",
            slug: "dhokra",
            region: "மத்திய மற்றும் கிழக்கு இந்தியா",
            image: "/images/culture/art-storytelling/dhokra.webp",
            description:
              "லாஸ்ட்-வாக்ஸ் முறையைப் பயன்படுத்தும் பழமையான உலோக வார்ப்பு மரபு.",
          },
        ],
      },

      "traditions-lifestyle": {
        eyebrow: "உயிரோட்டமான இந்தியா",
        title: "இந்தியாவை தனித்துவமாக்கும் அன்றாட மரபுகள்.",
        text:
          "இந்தியாவின் கலாச்சார அடையாளத்தை வடிவமைக்கும் பழக்கவழக்கங்கள், சமூகங்கள் மற்றும் வாழ்க்கை முறைகளை அறிந்து கொள்ளுங்கள்.",
        items: [
          {
            name: "குடும்ப மரபுகள்",
            slug: "family-traditions",
            region: "இந்தியா முழுவதும்",
            image: "/images/culture/traditions-lifestyle/family.webp",
            description:
              "குடும்ப ஒன்றுகூடல்கள், விழாக்கள், திருமணங்கள் மற்றும் சடங்குகள் இந்திய சமூக வாழ்க்கையின் முக்கிய பகுதியாகும்.",
          },
          {
            name: "கிராம வாழ்க்கை",
            slug: "village-life",
            region: "கிராமப்புற இந்தியா",
            image: "/images/culture/traditions-lifestyle/village.webp",
            description:
              "பாரம்பரிய சமூகங்கள் விவசாய முறைகள், கைவினைகள் மற்றும் உள்ளூர் பழக்கவழக்கங்களை தொடர்ந்து பாதுகாத்து வருகின்றன.",
          },
          {
            name: "ஆன்மீக மரபுகள்",
            slug: "spiritual-traditions",
            region: "இந்தியா முழுவதும்",
            image: "/images/culture/traditions-lifestyle/spiritual.webp",
            description:
              "யாத்திரை, பிரார்த்தனை, தியானம் மற்றும் சமூக சடங்குகள் வாழ்க்கையின் முக்கிய பகுதியாகும்.",
          },
          {
            name: "உள்ளூர் சந்தைகள்",
            slug: "local-markets",
            region: "இந்தியா முழுவதும்",
            image: "/images/culture/traditions-lifestyle/markets.webp",
            description:
              "பாரம்பரிய சந்தைகள் உணவு, துணிகள், கைவினைகள், மசாலாப் பொருட்கள் மற்றும் சமூக வாழ்க்கையை ஒன்றிணைக்கின்றன.",
          },
          {
            name: "இந்திய விருந்தோம்பல்",
            slug: "hospitality",
            region: "இந்தியா முழுவதும்",
            image: "/images/culture/traditions-lifestyle/hospitality.webp",
            description:
              "விருந்தினர்களை வரவேற்பதும் உணவைப் பகிர்வதும் இந்திய சமூகங்களின் ஆழமான மரபுகளாகும்.",
          },
          {
            name: "பிராந்திய அடையாளம்",
            slug: "regional-identity",
            region: "இந்தியா முழுவதும்",
            image: "/images/culture/traditions-lifestyle/regional.webp",
            description:
              "மொழி, ஆடை, உணவு மற்றும் பழக்கவழக்கங்கள் இந்தியாவின் பல்வேறு பிராந்தியங்களின் தனித்துவமான அடையாளங்களை உருவாக்குகின்றன.",
          },
        ],
      },

      "languages-literature": {
        eyebrow: "இந்திய மொழிகள் மற்றும் இலக்கியம்",
        title: "பல மொழிகள், எண்ணற்ற கதைகள்.",
        text:
          "இந்தியாவின் மொழியியல் பன்முகத்தன்மை, இலக்கியம், கவிதை மற்றும் கதைசொல்லல் மரபுகளை அறிந்து கொள்ளுங்கள்.",
        items: [
          {
            name: "இந்தி இலக்கியம்",
            slug: "hindi-literature",
            region: "வட மற்றும் மத்திய இந்தியா",
            image: "/images/culture/languages-literature/hindi.webp",
            description:
              "கவிதை, நாவல்கள், கதைகள் மற்றும் பிராந்திய குரல்களை உள்ளடக்கிய செழுமையான இலக்கிய மரபு.",
          },
          {
            name: "வங்காள இலக்கியம்",
            slug: "bengali-literature",
            region: "மேற்கு வங்காளம்",
            image: "/images/culture/languages-literature/bengali.webp",
            description:
              "கவிதை, நாவல்கள், நாடகம் மற்றும் அறிவுசார் எழுத்துக்குப் புகழ்பெற்ற இலக்கிய மரபு.",
          },
          {
            name: "தமிழ் இலக்கியம்",
            slug: "tamil-literature",
            region: "தமிழ்நாடு",
            image: "/images/culture/languages-literature/tamil.webp",
            description:
              "நீண்டகால கவிதை மற்றும் செம்மொழிப் படைப்புகளின் வரலாற்றைக் கொண்ட இந்தியாவின் பழமையான இலக்கிய மரபுகளில் ஒன்று.",
          },
          {
            name: "சமஸ்கிருத இலக்கியம்",
            slug: "sanskrit-literature",
            region: "இந்தியா முழுவதும்",
            image: "/images/culture/languages-literature/sanskrit.webp",
            description:
              "தத்துவ, கவிதை மற்றும் அறிஞர் படைப்புகளை உள்ளடக்கிய பண்டைய இலக்கிய மரபு.",
          },
          {
            name: "உருது கவிதை",
            slug: "urdu-poetry",
            region: "வட இந்தியா",
            image: "/images/culture/languages-literature/urdu.webp",
            description:
              "வெளிப்பாட்டுமிக்க மொழி, கஜல் மற்றும் இலக்கிய கலாச்சாரத்திற்குப் புகழ்பெற்ற கவிதை மரபு.",
          },
          {
            name: "நாட்டுப்புற கதைசொல்லல்",
            slug: "folk-storytelling",
            region: "இந்தியா முழுவதும்",
            image: "/images/culture/languages-literature/folk.webp",
            description:
              "வாய்மொழிக் கதைசொல்லல் உள்ளூர் புராணங்கள், மதிப்புகள் மற்றும் சமூக நினைவுகளைப் பாதுகாக்கிறது.",
          },
        ],
      },
    },
  },

  // =========================================================
  // TELUGU
  // =========================================================
  te: {
    common: {
      back: "← సంస్కృతికి తిరిగి వెళ్లండి",
      location: "📍",
      exploreStory: "కథను చూడండి",
    },

    errors: {
      notFoundTitle: "సంస్కృతి విభాగం కనుగొనబడలేదు.",
      notFoundText:
        "మీరు వెతుకుతున్న సంస్కృతి విభాగాన్ని మేము కనుగొనలేకపోయాము.",
    },

    categories: {
      festivals: {
        eyebrow: "భారతదేశ పండుగలు",
        title: "సమాజాలను ఒక్కటిగా చేసే వేడుకలు.",
        text:
          "భారతదేశంలోని ఉత్సాహభరితమైన పండుగలు, రంగురంగుల వేడుకలు మరియు తరతరాలుగా కొనసాగుతున్న సంప్రదాయాలను తెలుసుకోండి.",
        items: [
          {
            name: "హోలీ",
            slug: "holi",
            region: "ఉత్తర భారతదేశం",
            image: "/images/culture/festivals & celebrations/holi.webp",
            description:
              "సంగీతం, ఆనందం, ఆహారం మరియు ప్రజల కలయికతో జరుపుకునే రంగుల పండుగ.",
          },
          {
            name: "దీపావళి",
            slug: "diwali",
            region: "భారతదేశం అంతటా",
            image: "/images/culture/festivals & celebrations/diwali.webp",
            description:
              "దీపాలు, ప్రార్థనలు, మిఠాయిలు మరియు కుటుంబ సమావేశాలతో జరుపుకునే వెలుగుల పండుగ.",
          },
          {
            name: "దుర్గా పూజ",
            slug: "durga-puja",
            region: "పశ్చిమ బెంగాల్",
            image: "/images/culture/festivals & celebrations/durga.webp",
            description:
              "కళాత్మక పండాళ్లు, సంగీతం, ఆచారాలు మరియు సామాజిక సమావేశాలతో కూడిన గొప్ప సాంస్కృతిక వేడుక.",
          },
          {
            name: "ఓణం",
            slug: "onam",
            region: "కేరళ",
            image: "/images/culture/festivals & celebrations/onam.webp",
            description:
              "పూల అలంకరణలు, సంప్రదాయ వేడుకలు మరియు ఓణం సദ്യకు ప్రసిద్ధి చెందిన కేరళ పంట పండుగ.",
          },
          {
            name: "పొంగల్",
            slug: "pongal",
            region: "తమిళనాడు",
            image: "/images/culture/festivals & celebrations/pongal.webp",
            description:
              "ప్రకృతి, వ్యవసాయం, సంపద మరియు కుటుంబ సంప్రదాయాలను గౌరవించే పంట పండుగ.",
          },
          {
            name: "బిహు",
            slug: "bihu",
            region: "అస్సాం",
            image: "/images/culture/festivals & celebrations/bihu.webp",
            description:
              "వ్యవసాయం, సంప్రదాయ సంగీతం, నృత్యం మరియు సామూహిక వేడుకలతో అనుబంధం ఉన్న అస్సామీ పండుగ.",
          },
        ],
      },

      "dance-music": {
        eyebrow: "భారతీయ నృత్యం మరియు సంగీతం",
        title: "లయ మరియు భావవ్యక్తీకరణ ద్వారా చెప్పబడే కథలు.",
        text:
          "భారతదేశంలోని శాస్త్రీయ మరియు జానపద నృత్య, సంగీత సంప్రదాయాలను తెలుసుకోండి.",
        items: [
          {
            name: "భరతనాట్యం",
            slug: "bharatanatyam",
            region: "తమిళనాడు",
            image: "/images/culture/dance & music/bharatnatyam.webp",
            description:
              "ఖచ్చితమైన కదలికలు మరియు భావోద్వేగ కథనానికి ప్రసిద్ధి చెందిన శాస్త్రీయ నృత్య సంప్రదాయం.",
          },
          {
            name: "కథక్",
            slug: "kathak",
            region: "ఉత్తర భారతదేశం",
            image: "/images/culture/dance & music/kathak.webp",
            description:
              "సంక్లిష్టమైన పాద కదలికలు, తిరుగుళ్లు మరియు కథనానికి ప్రసిద్ధి చెందిన శాస్త్రీయ నృత్య సంప్రదాయం.",
          },
          {
            name: "కథకళి",
            slug: "kathakali",
            region: "కేరళ",
            image: "/images/culture/dance & music/kathakali.webp",
            description:
              "అద్భుతమైన దుస్తులు, మేకప్ మరియు భావవ్యక్తీకరణకు ప్రసిద్ధి చెందిన నృత్య నాటకం.",
          },
          {
            name: "హిందుస్తానీ సంగీతం",
            slug: "hindustani-music",
            region: "ఉత్తర భారతదేశం",
            image: "/images/culture/dance & music/hindustani.webp",
            description:
              "రాగాలు, తాళం మరియు స్వేచ్ఛా సృజనాత్మకతపై ఆధారపడిన శాస్త్రీయ సంగీత సంప్రదాయం.",
          },
          {
            name: "కర్ణాటక సంగీతం",
            slug: "carnatic-music",
            region: "దక్షిణ భారతదేశం",
            image: "/images/culture/dance & music/carnatic.webp",
            description:
              "సంక్లిష్టమైన కూర్పులు మరియు లయలకు ప్రసిద్ధి చెందిన దక్షిణ భారత శాస్త్రీయ సంగీత సంప్రదాయం.",
          },
          {
            name: "బిహు నృత్యం",
            slug: "bihu-dance",
            region: "అస్సాం",
            image: "/images/culture/dance & music/bihu.webp",
            description:
              "బిహు వేడుకలతో సంప్రదాయంగా అనుబంధం ఉన్న ఉత్సాహభరితమైన అస్సామీ జానపద నృత్యం.",
          },
        ],
      },

      clothing: {
        eyebrow: "భారతీయ వస్త్రాలు మరియు దుస్తులు",
        title: "భారత ప్రాంతాల కథలను మోసే దారాలు.",
        text:
          "భారతదేశంలోని సంప్రదాయ దుస్తులు, వస్త్రాలు మరియు నేయు సంప్రదాయాలను తెలుసుకోండి.",
        items: [
          {
            name: "బనారసీ సిల్క్",
            slug: "banarasi-silk",
            region: "ఉత్తరప్రదేశ్",
            image: "/images/culture/clothing/banarasi.webp",
            description:
              "సూక్ష్మమైన నేయడం మరియు సంపన్నమైన డిజైన్లకు ప్రసిద్ధి చెందిన వారణాసి పట్టు వస్త్రాలు.",
          },
          {
            name: "కాంచీపురం సిల్క్",
            slug: "kanchipuram-silk",
            region: "తమిళనాడు",
            image: "/images/culture/clothing/kanchipuram.webp",
            description:
              "సంపన్నమైన రంగులు మరియు అందమైన అంచులకు ప్రసిద్ధి చెందిన సంప్రదాయ పట్టు చీరల సంప్రదాయం.",
          },
          {
            name: "ఫుల్కారీ",
            slug: "phulkari",
            region: "పంజాబ్",
            image: "/images/culture/clothing/phulkari.webp",
            description:
              "సంక్లిష్టమైన పూల నమూనాలతో కూడిన రంగురంగుల ఎంబ్రాయిడరీ సంప్రదాయం.",
          },
          {
            name: "బంధనీ",
            slug: "bandhani",
            region: "రాజస్థాన్ మరియు గుజరాత్",
            image: "/images/culture/clothing/bandhani.webp",
            description:
              "ప్రత్యేకమైన నమూనాలను సృష్టించే సంప్రదాయ టై-అండ్-డై వస్త్ర సాంకేతికత.",
          },
          {
            name: "కసావు",
            slug: "kasavu",
            region: "కేరళ",
            image: "/images/culture/clothing/kasavu.webp",
            description:
              "అందమైన బంగారు అంచుకు ప్రసిద్ధి చెందిన కేరళ సంప్రదాయ వస్త్ర శైలి.",
          },
          {
            name: "పష్మీనా",
            slug: "pashmina",
            region: "కాశ్మీర్",
            image: "/images/culture/clothing/paschmina.webp",
            description:
              "మృదుత్వం మరియు సూక్ష్మమైన కళాకృతికి ప్రసిద్ధి చెందిన మెత్తని ఉన్ని వస్త్ర సంప్రదాయం.",
          },
        ],
      },

      "art-storytelling": {
        eyebrow: "భారతీయ కళ మరియు కథ చెప్పడం",
        title: "తరతరాలుగా రూపుదిద్దుకున్న కళా సంప్రదాయాలు.",
        text:
          "భారతదేశంలోని జానపద చిత్రాలు, హస్తకళలు మరియు కథ చెప్పే సంప్రదాయాలను తెలుసుకోండి.",
        items: [
          {
            name: "మధుబని",
            slug: "madhubani",
            region: "బీహార్",
            image: "/images/culture/art-storytelling/madhubani.webp",
            description:
              "ధైర్యమైన నమూనాలు, సహజ అంశాలు మరియు కథనానికి ప్రసిద్ధి చెందిన ప్రత్యేక చిత్రకళా సంప్రదాయం.",
          },
          {
            name: "వార్లీ",
            slug: "warli",
            region: "మహారాష్ట్ర",
            image: "/images/culture/art-storytelling/warli.webp",
            description:
              "సరళమైన రేఖాగణిత మానవ మరియు జంతు ఆకృతులతో కూడిన గిరిజన చిత్రకళా సంప్రదాయం.",
          },
          {
            name: "పటాచిత్ర",
            slug: "pattachitra",
            region: "ఒడిశా",
            image: "/images/culture/art-storytelling/pattachitra.webp",
            description:
              "వివరణాత్మక కూర్పులు మరియు పురాణ అంశాలకు ప్రసిద్ధి చెందిన సంప్రదాయ చిత్రకళా శైలి.",
          },
          {
            name: "కలంకారి",
            slug: "kalamkari",
            region: "దక్షిణ భారతదేశం",
            image: "/images/culture/art-storytelling/kalamkari.webp",
            description:
              "చేతితో గీసి సహజ రంగులతో తయారు చేసే వస్త్ర మరియు చిత్రకళా సంప్రదాయం.",
          },
          {
            name: "బ్లూ పాటరీ",
            slug: "blue-pottery",
            region: "రాజస్థాన్",
            image: "/images/culture/art-storytelling/blue-pottery.webp",
            description:
              "జైపూర్‌తో అనుబంధం ఉన్న అలంకార కళ, రంగురంగుల మెరుగు నమూనాలకు ప్రసిద్ధి చెందింది.",
          },
          {
            name: "ఢోక్రా",
            slug: "dhokra",
            region: "మధ్య మరియు తూర్పు భారతదేశం",
            image: "/images/culture/art-storytelling/dhokra.webp",
            description:
              "లాస్ట్-వాక్స్ పద్ధతిని ఉపయోగించే పురాతన లోహపు పోత సంప్రదాయం.",
          },
        ],
      },

      "traditions-lifestyle": {
        eyebrow: "జీవంతమైన భారతదేశం",
        title: "భారతదేశాన్ని ప్రత్యేకంగా చేసే రోజువారీ సంప్రదాయాలు.",
        text:
          "భారతదేశ సాంస్కృతిక గుర్తింపును రూపొందించే ఆచారాలు, సమాజాలు మరియు జీవన విధానాలను తెలుసుకోండి.",
        items: [
          {
            name: "కుటుంబ సంప్రదాయాలు",
            slug: "family-traditions",
            region: "భారతదేశం అంతటా",
            image: "/images/culture/traditions-lifestyle/family.webp",
            description:
              "కుటుంబ సమావేశాలు, వేడుకలు, వివాహాలు మరియు ఆచారాలు భారతీయ సామాజిక జీవితంలో ముఖ్యమైన భాగం.",
          },
          {
            name: "గ్రామీణ జీవితం",
            slug: "village-life",
            region: "గ్రామీణ భారతదేశం",
            image: "/images/culture/traditions-lifestyle/village.webp",
            description:
              "సంప్రదాయ సమాజాలు వ్యవసాయ పద్ధతులు, హస్తకళలు మరియు స్థానిక ఆచారాలను కొనసాగిస్తున్నాయి.",
          },
          {
            name: "ఆధ్యాత్మిక సంప్రదాయాలు",
            slug: "spiritual-traditions",
            region: "భారతదేశం అంతటా",
            image: "/images/culture/traditions-lifestyle/spiritual.webp",
            description:
              "యాత్రలు, ప్రార్థన, ధ్యానం మరియు సామూహిక ఆచారాలు జీవితంలో ముఖ్యమైన భాగం.",
          },
          {
            name: "స్థానిక మార్కెట్లు",
            slug: "local-markets",
            region: "భారతదేశం అంతటా",
            image: "/images/culture/traditions-lifestyle/markets.webp",
            description:
              "సంప్రదాయ బజార్లు ఆహారం, వస్త్రాలు, హస్తకళలు, మసాలాలు మరియు సామాజిక జీవితాన్ని ఒకచోటికి తీసుకువస్తాయి.",
          },
          {
            name: "భారతీయ ఆతిథ్యం",
            slug: "hospitality",
            region: "భారతదేశం అంతటా",
            image: "/images/culture/traditions-lifestyle/hospitality.webp",
            description:
              "అతిథులను ఆహ్వానించడం మరియు ఆహారాన్ని పంచుకోవడం భారతీయ సమాజాలలో లోతైన సంప్రదాయాలు.",
          },
          {
            name: "ప్రాంతీయ గుర్తింపు",
            slug: "regional-identity",
            region: "భారతదేశం అంతటా",
            image: "/images/culture/traditions-lifestyle/regional.webp",
            description:
              "భాష, దుస్తులు, ఆహారం మరియు ఆచారాలు భారతదేశంలోని ప్రాంతాలకు ప్రత్యేకమైన గుర్తింపును ఇస్తాయి.",
          },
        ],
      },

      "languages-literature": {
        eyebrow: "భారతీయ భాషలు మరియు సాహిత్యం",
        title: "అనేక భాషలు, లెక్కలేనన్ని కథలు.",
        text:
          "భారతదేశ భాషా వైవిధ్యం, సాహిత్యం, కవిత్వం మరియు కథ చెప్పే సంప్రదాయాలను తెలుసుకోండి.",
        items: [
          {
            name: "హిందీ సాహిత్యం",
            slug: "hindi-literature",
            region: "ఉత్తర మరియు మధ్య భారతదేశం",
            image: "/images/culture/languages-literature/hindi.webp",
            description:
              "కవిత్వం, నవలలు, కథలు మరియు ప్రాంతీయ స్వరాలతో కూడిన సమృద్ధమైన సాహిత్య సంప్రదాయం.",
          },
          {
            name: "బెంగాలీ సాహిత్యం",
            slug: "bengali-literature",
            region: "పశ్చిమ బెంగాల్",
            image: "/images/culture/languages-literature/bengali.webp",
            description:
              "కవిత్వం, నవలలు, నాటకం మరియు మేధో రచనలకు ప్రసిద్ధి చెందిన సాహిత్య సంప్రదాయం.",
          },
          {
            name: "తమిళ సాహిత్యం",
            slug: "tamil-literature",
            region: "తమిళనాడు",
            image: "/images/culture/languages-literature/tamil.webp",
            description:
              "కవిత్వం మరియు శాస్త్రీయ రచనల సుదీర్ఘ చరిత్ర కలిగిన భారతదేశపు పురాతన సాహిత్య సంప్రదాయాలలో ఒకటి.",
          },
          {
            name: "సంస్కృత సాహిత్యం",
            slug: "sanskrit-literature",
            region: "భారతదేశం అంతటా",
            image: "/images/culture/languages-literature/sanskrit.webp",
            description:
              "తాత్విక, కవితాత్మక మరియు పాండిత్య రచనలను కలిగి ఉన్న ప్రాచీన సాహిత్య సంప్రదాయం.",
          },
          {
            name: "ఉర్దూ కవిత్వం",
            slug: "urdu-poetry",
            region: "ఉత్తర భారతదేశం",
            image: "/images/culture/languages-literature/urdu.webp",
            description:
              "వ్యక్తీకరణాత్మక భాష, గజల్స్ మరియు సాహిత్య సంస్కృతికి ప్రసిద్ధి చెందిన కవితా సంప్రదాయం.",
          },
          {
            name: "జానపద కథ చెప్పడం",
            slug: "folk-storytelling",
            region: "భారతదేశం అంతటా",
            image: "/images/culture/languages-literature/folk.webp",
            description:
              "మౌఖిక కథ చెప్పే సంప్రదాయాలు స్థానిక పురాణాలు, విలువలు మరియు సామూహిక జ్ఞాపకాలను సంరక్షిస్తాయి.",
          },
        ],
      },
    },
  },

  // =========================================================
  // MARATHI
  // =========================================================
  mr: {
    common: {
      back: "← संस्कृतीकडे परत जा",
      location: "📍",
      exploreStory: "कथा पहा",
    },

    errors: {
      notFoundTitle: "संस्कृतीचा विभाग सापडला नाही.",
      notFoundText:
        "तुम्ही शोधत असलेला संस्कृतीचा विभाग आम्हाला सापडला नाही.",
    },

    categories: {
      festivals: {
        eyebrow: "भारताचे सण",
        title: "समुदायांना एकत्र आणणारे उत्सव.",
        text:
          "भारताचे उत्साही सण, रंगीबेरंगी उत्सव आणि पिढ्यान्‌पिढ्या चालत आलेल्या परंपरा जाणून घ्या.",
        items: [
          {
            name: "होळी",
            slug: "holi",
            region: "उत्तर भारत",
            image: "/images/culture/festivals & celebrations/holi.webp",
            description:
              "संगीत, आनंद, भोजन आणि लोकांच्या एकत्र येण्यासह साजरा केला जाणारा रंगांचा सण.",
          },
          {
            name: "दिवाळी",
            slug: "diwali",
            region: "संपूर्ण भारत",
            image: "/images/culture/festivals & celebrations/diwali.webp",
            description:
              "दिवे, प्रार्थना, मिठाई आणि कौटुंबिक भेटींसह साजरा केला जाणारा प्रकाशाचा सण.",
          },
          {
            name: "दुर्गा पूजा",
            slug: "durga-puja",
            region: "पश्चिम बंगाल",
            image: "/images/culture/festivals & celebrations/durga.webp",
            description:
              "कलात्मक पंडाल, संगीत, विधी आणि सामुदायिक सहभागाने साजरा होणारा भव्य सांस्कृतिक उत्सव.",
          },
          {
            name: "ओणम",
            slug: "onam",
            region: "केरळ",
            image: "/images/culture/festivals & celebrations/onam.webp",
            description:
              "फुलांच्या सजावटी, पारंपरिक उत्सव आणि ओणम सद्येसाठी प्रसिद्ध केरळचा पीक सण.",
          },
          {
            name: "पोंगल",
            slug: "pongal",
            region: "तमिळनाडू",
            image: "/images/culture/festivals & celebrations/pongal.webp",
            description:
              "निसर्ग, शेती, समृद्धी आणि कौटुंबिक परंपरांचा सन्मान करणारा पीक सण.",
          },
          {
            name: "बिहू",
            slug: "bihu",
            region: "आसाम",
            image: "/images/culture/festivals & celebrations/bihu.webp",
            description:
              "शेती, पारंपरिक संगीत, नृत्य आणि सामुदायिक उत्सवांशी संबंधित आसामी सण.",
          },
        ],
      },

      "dance-music": {
        eyebrow: "भारतीय नृत्य आणि संगीत",
        title: "ताल आणि अभिव्यक्तीतून सांगितलेल्या कथा.",
        text:
          "भारताच्या शास्त्रीय आणि लोकनृत्य तसेच संगीत परंपरा जाणून घ्या.",
        items: [
          {
            name: "भरतनाट्यम",
            slug: "bharatanatyam",
            region: "तमिळनाडू",
            image: "/images/culture/dance & music/bharatnatyam.webp",
            description:
              "अचूक हालचाली आणि भावपूर्ण कथाकथनासाठी प्रसिद्ध शास्त्रीय नृत्यपरंपरा.",
          },
          {
            name: "कथक",
            slug: "kathak",
            region: "उत्तर भारत",
            image: "/images/culture/dance & music/kathak.webp",
            description:
              "गुंतागुंतीच्या पावलांच्या हालचाली, गिरक्या आणि कथाकथनासाठी प्रसिद्ध शास्त्रीय नृत्यपरंपरा.",
          },
          {
            name: "कथकली",
            slug: "kathakali",
            region: "केरळ",
            image: "/images/culture/dance & music/kathakali.webp",
            description:
              "भव्य वेशभूषा, मेकअप आणि भावपूर्ण अभिनयासाठी प्रसिद्ध नृत्यनाट्य परंपरा.",
          },
          {
            name: "हिंदुस्थानी संगीत",
            slug: "hindustani-music",
            region: "उत्तर भारत",
            image: "/images/culture/dance & music/hindustani.webp",
            description:
              "राग, ताल आणि उत्स्फूर्त सर्जनशीलतेवर आधारित शास्त्रीय संगीत परंपरा.",
          },
          {
            name: "कर्नाटक संगीत",
            slug: "carnatic-music",
            region: "दक्षिण भारत",
            image: "/images/culture/dance & music/carnatic.webp",
            description:
              "गुंतागुंतीच्या रचना आणि तालांसाठी प्रसिद्ध दक्षिण भारताची शास्त्रीय संगीत परंपरा.",
          },
          {
            name: "बिहू नृत्य",
            slug: "bihu-dance",
            region: "आसाम",
            image: "/images/culture/dance & music/bihu.webp",
            description:
              "बिहू उत्सवांशी पारंपरिकरीत्या संबंधित उत्साही आसामी लोकनृत्य.",
          },
        ],
      },

      clothing: {
        eyebrow: "भारतीय वस्त्रे आणि पोशाख",
        title: "भारताच्या प्रदेशांच्या कथा सांगणारे धागे.",
        text:
          "भारताचे पारंपरिक पोशाख, वस्त्रे आणि विणकामाच्या परंपरा जाणून घ्या.",
        items: [
          {
            name: "बनारसी सिल्क",
            slug: "banarasi-silk",
            region: "उत्तर प्रदेश",
            image: "/images/culture/clothing/banarasi.webp",
            description:
              "सूक्ष्म विणकाम आणि समृद्ध डिझाइनसाठी प्रसिद्ध वाराणसीतील रेशमी वस्त्रे.",
          },
          {
            name: "कांचीपुरम सिल्क",
            slug: "kanchipuram-silk",
            region: "तमिळनाडू",
            image: "/images/culture/clothing/kanchipuram.webp",
            description:
              "समृद्ध रंग आणि सुंदर काठासाठी प्रसिद्ध पारंपरिक रेशमी साड्यांची परंपरा.",
          },
          {
            name: "फुलकारी",
            slug: "phulkari",
            region: "पंजाब",
            image: "/images/culture/clothing/phulkari.webp",
            description:
              "सुंदर फुलांच्या नमुन्यांनी सजलेली रंगीत भरतकामाची परंपरा.",
          },
          {
            name: "बंधणी",
            slug: "bandhani",
            region: "राजस्थान आणि गुजरात",
            image: "/images/culture/clothing/bandhani.webp",
            description:
              "विशिष्ट नमुने तयार करणारी पारंपरिक टाय-अँड-डाय वस्त्रतंत्र.",
          },
          {
            name: "कसावू",
            slug: "kasavu",
            region: "केरळ",
            image: "/images/culture/clothing/kasavu.webp",
            description:
              "सुंदर सोनेरी काठासाठी प्रसिद्ध केरळची पारंपरिक वस्त्रशैली.",
          },
          {
            name: "पश्मिना",
            slug: "pashmina",
            region: "काश्मीर",
            image: "/images/culture/clothing/paschmina.webp",
            description:
              "मऊपणा आणि सूक्ष्म कारागिरीसाठी प्रसिद्ध बारीक लोकरीच्या वस्त्रांची परंपरा.",
          },
        ],
      },

      "art-storytelling": {
        eyebrow: "भारतीय कला आणि कथाकथन",
        title: "पिढ्यान्‌पिढ्या आकार घेतलेल्या कलात्मक परंपरा.",
        text:
          "भारताची लोकचित्रे, हस्तकला आणि कथाकथनाच्या परंपरा जाणून घ्या.",
        items: [
          {
            name: "मधुबनी",
            slug: "madhubani",
            region: "बिहार",
            image: "/images/culture/art-storytelling/madhubani.webp",
            description:
              "ठळक नमुने, नैसर्गिक विषय आणि कथाकथनासाठी प्रसिद्ध विशिष्ट चित्रकला परंपरा.",
          },
          {
            name: "वारली",
            slug: "warli",
            region: "महाराष्ट्र",
            image: "/images/culture/art-storytelling/warli.webp",
            description:
              "साध्या भूमितीय मानवी आणि प्राण्यांच्या आकृत्यांसाठी प्रसिद्ध आदिवासी चित्रकला परंपरा.",
          },
          {
            name: "पट्टचित्र",
            slug: "pattachitra",
            region: "ओडिशा",
            image: "/images/culture/art-storytelling/pattachitra.webp",
            description:
              "तपशीलवार रचना आणि पौराणिक विषयांसाठी प्रसिद्ध पारंपरिक चित्रशैली.",
          },
          {
            name: "कलमकारी",
            slug: "kalamkari",
            region: "दक्षिण भारत",
            image: "/images/culture/art-storytelling/kalamkari.webp",
            description:
              "हाताने काढलेल्या आणि नैसर्गिक रंगांनी तयार केलेल्या नमुन्यांची वस्त्र व चित्रकला परंपरा.",
          },
          {
            name: "ब्लू पॉटरी",
            slug: "blue-pottery",
            region: "राजस्थान",
            image: "/images/culture/art-storytelling/blue-pottery.webp",
            description:
              "जयपूरशी संबंधित सजावटीची कला, रंगीत चमकदार नमुन्यांसाठी प्रसिद्ध.",
          },
          {
            name: "ढोकरा",
            slug: "dhokra",
            region: "मध्य आणि पूर्व भारत",
            image: "/images/culture/art-storytelling/dhokra.webp",
            description:
              "लॉस्ट-वॅक्स तंत्राचा वापर करणारी प्राचीन धातुकामाची परंपरा.",
          },
        ],
      },

      "traditions-lifestyle": {
        eyebrow: "जिवंत भारत",
        title: "भारताला वेगळेपण देणाऱ्या दैनंदिन परंपरा.",
        text:
          "भारताची सांस्कृतिक ओळख घडवणाऱ्या प्रथा, समुदाय आणि जीवनशैली जाणून घ्या.",
        items: [
          {
            name: "कौटुंबिक परंपरा",
            slug: "family-traditions",
            region: "संपूर्ण भारत",
            image: "/images/culture/traditions-lifestyle/family.webp",
            description:
              "कौटुंबिक भेटी, समारंभ, विवाह आणि विधी भारतीय सामाजिक जीवनाचा महत्त्वाचा भाग आहेत.",
          },
          {
            name: "गावातील जीवन",
            slug: "village-life",
            region: "ग्रामीण भारत",
            image: "/images/culture/traditions-lifestyle/village.webp",
            description:
              "पारंपरिक समुदाय शेतीच्या पद्धती, हस्तकला आणि स्थानिक प्रथा जपून ठेवतात.",
          },
          {
            name: "आध्यात्मिक परंपरा",
            slug: "spiritual-traditions",
            region: "संपूर्ण भारत",
            image: "/images/culture/traditions-lifestyle/spiritual.webp",
            description:
              "तीर्थयात्रा, प्रार्थना, ध्यान आणि सामुदायिक विधी जीवनाचा महत्त्वाचा भाग आहेत.",
          },
          {
            name: "स्थानिक बाजार",
            slug: "local-markets",
            region: "संपूर्ण भारत",
            image: "/images/culture/traditions-lifestyle/markets.webp",
            description:
              "पारंपरिक बाजारपेठा अन्न, वस्त्रे, हस्तकला, मसाले आणि सामुदायिक जीवन एकत्र आणतात.",
          },
          {
            name: "भारतीय आतिथ्य",
            slug: "hospitality",
            region: "संपूर्ण भारत",
            image: "/images/culture/traditions-lifestyle/hospitality.webp",
            description:
              "पाहुण्यांचे स्वागत करणे आणि अन्न वाटून घेणे या भारतीय समुदायांच्या खोलवर रुजलेल्या परंपरा आहेत.",
          },
          {
            name: "प्रादेशिक ओळख",
            slug: "regional-identity",
            region: "संपूर्ण भारत",
            image: "/images/culture/traditions-lifestyle/regional.webp",
            description:
              "भाषा, पोशाख, खाद्यसंस्कृती आणि प्रथा भारतातील प्रदेशांची स्वतंत्र ओळख घडवतात.",
          },
        ],
      },

      "languages-literature": {
        eyebrow: "भारतीय भाषा आणि साहित्य",
        title: "अनेक भाषा, असंख्य कथा.",
        text:
          "भारताची भाषिक विविधता, साहित्य, कविता आणि कथाकथन परंपरा जाणून घ्या.",
        items: [
          {
            name: "हिंदी साहित्य",
            slug: "hindi-literature",
            region: "उत्तर आणि मध्य भारत",
            image: "/images/culture/languages-literature/hindi.webp",
            description:
              "कविता, कादंबऱ्या, कथा आणि प्रादेशिक आवाजांनी समृद्ध साहित्यिक परंपरा.",
          },
          {
            name: "बंगाली साहित्य",
            slug: "bengali-literature",
            region: "पश्चिम बंगाल",
            image: "/images/culture/languages-literature/bengali.webp",
            description:
              "कविता, कादंबऱ्या, नाटक आणि बौद्धिक लेखनासाठी प्रसिद्ध साहित्यिक परंपरा.",
          },
          {
            name: "तमिळ साहित्य",
            slug: "tamil-literature",
            region: "तमिळनाडू",
            image: "/images/culture/languages-literature/tamil.webp",
            description:
              "कविता आणि अभिजात साहित्याचा दीर्घ इतिहास असलेल्या भारतातील प्राचीन साहित्यिक परंपरांपैकी एक.",
          },
          {
            name: "संस्कृत साहित्य",
            slug: "sanskrit-literature",
            region: "संपूर्ण भारत",
            image: "/images/culture/languages-literature/sanskrit.webp",
            description:
              "तत्त्वज्ञान, काव्य आणि विद्वत्तापूर्ण लेखन असलेली प्राचीन साहित्यिक परंपरा.",
          },
          {
            name: "उर्दू कविता",
            slug: "urdu-poetry",
            region: "उत्तर भारत",
            image: "/images/culture/languages-literature/urdu.webp",
            description:
              "अभिव्यक्तिपूर्ण भाषा, गझल आणि साहित्यिक संस्कृतीसाठी प्रसिद्ध काव्यपरंपरा.",
          },
          {
            name: "लोककथाकथन",
            slug: "folk-storytelling",
            region: "संपूर्ण भारत",
            image: "/images/culture/languages-literature/folk.webp",
            description:
              "मौखिक कथाकथनाच्या परंपरा स्थानिक दंतकथा, मूल्ये आणि सामुदायिक आठवणी जपतात.",
          },
        ],
      },
    },
  },

  // =========================================================
  // FRENCH
  // =========================================================
  fr: {
    common: {
      back: "← Retour à la culture",
      location: "📍",
      exploreStory: "Découvrir l'histoire",
    },

    errors: {
      notFoundTitle: "Catégorie culturelle introuvable.",
      notFoundText:
        "Nous n'avons pas trouvé la catégorie culturelle que vous recherchez.",
    },

    categories: {
      festivals: {
        eyebrow: "LES FESTIVALS DE L'INDE",
        title: "Des célébrations qui rassemblent les communautés.",
        text:
          "Découvrez les festivals vibrants de l'Inde, ses célébrations colorées et ses traditions transmises de génération en génération.",
        items: [
          {
            name: "Holi",
            slug: "holi",
            region: "Inde du Nord",
            image: "/images/culture/festivals & celebrations/holi.webp",
            description:
              "La fête des couleurs célébrée avec musique, joie, nourriture et rassemblements communautaires.",
          },
          {
            name: "Diwali",
            slug: "diwali",
            region: "Toute l'Inde",
            image: "/images/culture/festivals & celebrations/diwali.webp",
            description:
              "La fête des lumières célébrée avec des lampes, des prières, des douceurs et des réunions familiales.",
          },
          {
            name: "Durga Puja",
            slug: "durga-puja",
            region: "Bengale-Occidental",
            image: "/images/culture/festivals & celebrations/durga.webp",
            description:
              "Une grande célébration culturelle avec des pandals artistiques, de la musique, des rituels et des rassemblements.",
          },
          {
            name: "Onam",
            slug: "onam",
            region: "Kerala",
            image: "/images/culture/festivals & celebrations/onam.webp",
            description:
              "La fête des récoltes du Kerala, connue pour ses décorations florales, ses traditions et l'Onam Sadya.",
          },
          {
            name: "Pongal",
            slug: "pongal",
            region: "Tamil Nadu",
            image: "/images/culture/festivals & celebrations/pongal.webp",
            description:
              "Une fête des récoltes célébrant la nature, l'agriculture, la prospérité et les traditions familiales.",
          },
          {
            name: "Bihu",
            slug: "bihu",
            region: "Assam",
            image: "/images/culture/festivals & celebrations/bihu.webp",
            description:
              "Une fête assamaise liée à l'agriculture, à la musique traditionnelle, à la danse et aux célébrations communautaires.",
          },
        ],
      },

      "dance-music": {
        eyebrow: "DANSE ET MUSIQUE INDIENNES",
        title: "Des histoires racontées par le rythme et l'expression.",
        text:
          "Découvrez les traditions de danse et de musique classiques et folkloriques de l'Inde.",
        items: [
          {
            name: "Bharatanatyam",
            slug: "bharatanatyam",
            region: "Tamil Nadu",
            image: "/images/culture/dance & music/bharatnatyam.webp",
            description:
              "Une danse classique connue pour ses mouvements précis et sa narration expressive.",
          },
          {
            name: "Kathak",
            slug: "kathak",
            region: "Inde du Nord",
            image: "/images/culture/dance & music/kathak.webp",
            description:
              "Une danse classique connue pour son jeu de pieds complexe, ses tours et sa narration.",
          },
          {
            name: "Kathakali",
            slug: "kathakali",
            region: "Kerala",
            image: "/images/culture/dance & music/kathakali.webp",
            description:
              "Une tradition théâtrale dansée connue pour ses costumes, son maquillage et son expression dramatique.",
          },
          {
            name: "Musique hindoustanie",
            slug: "hindustani-music",
            region: "Inde du Nord",
            image: "/images/culture/dance & music/hindustani.webp",
            description:
              "Une tradition musicale classique fondée sur les ragas, le rythme et l'improvisation.",
          },
          {
            name: "Musique carnatique",
            slug: "carnatic-music",
            region: "Inde du Sud",
            image: "/images/culture/dance & music/carnatic.webp",
            description:
              "La tradition musicale classique du sud de l'Inde, connue pour ses compositions et ses rythmes complexes.",
          },
          {
            name: "Danse Bihu",
            slug: "bihu-dance",
            region: "Assam",
            image: "/images/culture/dance & music/bihu.webp",
            description:
              "Une danse folklorique assamaise énergique traditionnellement associée aux célébrations de Bihu.",
          },
        ],
      },

      clothing: {
        eyebrow: "TEXTILES ET VÊTEMENTS INDIENS",
        title: "Des fils qui racontent l'histoire des régions de l'Inde.",
        text:
          "Explorez les vêtements traditionnels, les textiles et les traditions de tissage de l'Inde.",
        items: [
          {
            name: "Soie de Banarasi",
            slug: "banarasi-silk",
            region: "Uttar Pradesh",
            image: "/images/culture/clothing/banarasi.webp",
            description:
              "Des textiles en soie de Varanasi connus pour leur tissage complexe et leurs motifs riches.",
          },
          {
            name: "Soie de Kanchipuram",
            slug: "kanchipuram-silk",
            region: "Tamil Nadu",
            image: "/images/culture/clothing/kanchipuram.webp",
            description:
              "Des saris traditionnels en soie connus pour leurs couleurs riches et leurs bordures détaillées.",
          },
          {
            name: "Phulkari",
            slug: "phulkari",
            region: "Pendjab",
            image: "/images/culture/clothing/phulkari.webp",
            description:
              "Une tradition de broderie colorée ornée de motifs floraux complexes.",
          },
          {
            name: "Bandhani",
            slug: "bandhani",
            region: "Rajasthan et Gujarat",
            image: "/images/culture/clothing/bandhani.webp",
            description:
              "Une technique traditionnelle de teinture par ligature créant des motifs distinctifs.",
          },
          {
            name: "Kasavu",
            slug: "kasavu",
            region: "Kerala",
            image: "/images/culture/clothing/kasavu.webp",
            description:
              "Un style textile traditionnel du Kerala reconnaissable à son élégante bordure dorée.",
          },
          {
            name: "Pashmina",
            slug: "pashmina",
            region: "Cachemire",
            image: "/images/culture/clothing/paschmina.webp",
            description:
              "Une tradition textile en laine fine connue pour sa douceur et son savoir-faire délicat.",
          },
        ],
      },

      "art-storytelling": {
        eyebrow: "ART ET NARRATION INDIENS",
        title: "Des traditions artistiques façonnées par les générations.",
        text:
          "Découvrez les peintures populaires, l'artisanat et les traditions narratives de l'Inde.",
        items: [
          {
            name: "Madhubani",
            slug: "madhubani",
            region: "Bihar",
            image: "/images/culture/art-storytelling/madhubani.webp",
            description:
              "Une tradition picturale connue pour ses motifs audacieux, ses thèmes naturels et sa narration.",
          },
          {
            name: "Warli",
            slug: "warli",
            region: "Maharashtra",
            image: "/images/culture/art-storytelling/warli.webp",
            description:
              "Une tradition picturale tribale caractérisée par de simples figures humaines et animales géométriques.",
          },
          {
            name: "Pattachitra",
            slug: "pattachitra",
            region: "Odisha",
            image: "/images/culture/art-storytelling/pattachitra.webp",
            description:
              "Un style pictural traditionnel connu pour ses compositions détaillées et ses thèmes mythologiques.",
          },
          {
            name: "Kalamkari",
            slug: "kalamkari",
            region: "Inde du Sud",
            image: "/images/culture/art-storytelling/kalamkari.webp",
            description:
              "Une tradition textile et picturale utilisant des motifs dessinés à la main et teints naturellement.",
          },
          {
            name: "Poterie bleue",
            slug: "blue-pottery",
            region: "Rajasthan",
            image: "/images/culture/art-storytelling/blue-pottery.webp",
            description:
              "Un artisanat décoratif associé à Jaipur et connu pour ses motifs colorés et émaillés.",
          },
          {
            name: "Dhokra",
            slug: "dhokra",
            region: "Inde centrale et orientale",
            image: "/images/culture/art-storytelling/dhokra.webp",
            description:
              "Une ancienne tradition de moulage du métal utilisant la technique de la cire perdue.",
          },
        ],
      },

      "traditions-lifestyle": {
        eyebrow: "L'INDE VIVANTE",
        title: "Les traditions quotidiennes qui rendent l'Inde unique.",
        text:
          "Découvrez les coutumes, les communautés et les modes de vie qui façonnent l'identité culturelle de l'Inde.",
        items: [
          {
            name: "Traditions familiales",
            slug: "family-traditions",
            region: "Toute l'Inde",
            image: "/images/culture/traditions-lifestyle/family.webp",
            description:
              "Les réunions familiales, cérémonies, mariages et rituels restent importants dans la vie sociale indienne.",
          },
          {
            name: "Vie villageoise",
            slug: "village-life",
            region: "Inde rurale",
            image: "/images/culture/traditions-lifestyle/village.webp",
            description:
              "Les communautés traditionnelles continuent de préserver les pratiques agricoles, l'artisanat et les coutumes locales.",
          },
          {
            name: "Traditions spirituelles",
            slug: "spiritual-traditions",
            region: "Toute l'Inde",
            image: "/images/culture/traditions-lifestyle/spiritual.webp",
            description:
              "Pèlerinage, prière, méditation et rituels communautaires occupent une place importante dans la vie.",
          },
          {
            name: "Marchés locaux",
            slug: "local-markets",
            region: "Toute l'Inde",
            image: "/images/culture/traditions-lifestyle/markets.webp",
            description:
              "Les bazars traditionnels réunissent nourriture, textiles, artisanat, épices et vie communautaire.",
          },
          {
            name: "Hospitalité indienne",
            slug: "hospitality",
            region: "Toute l'Inde",
            image: "/images/culture/traditions-lifestyle/hospitality.webp",
            description:
              "Accueillir les invités et partager la nourriture sont des traditions profondément valorisées en Inde.",
          },
          {
            name: "Identité régionale",
            slug: "regional-identity",
            region: "Toute l'Inde",
            image: "/images/culture/traditions-lifestyle/regional.webp",
            description:
              "La langue, les vêtements, la cuisine et les coutumes créent des identités régionales distinctes.",
          },
        ],
      },

      "languages-literature": {
        eyebrow: "LANGUES ET LITTÉRATURE INDIENNES",
        title: "De nombreuses langues, d'innombrables histoires.",
        text:
          "Découvrez la diversité linguistique de l'Inde, sa littérature, sa poésie et ses traditions narratives.",
        items: [
          {
            name: "Littérature hindi",
            slug: "hindi-literature",
            region: "Nord et centre de l'Inde",
            image: "/images/culture/languages-literature/hindi.webp",
            description:
              "Une riche tradition littéraire couvrant poésie, romans, récits et voix régionales.",
          },
          {
            name: "Littérature bengalie",
            slug: "bengali-literature",
            region: "Bengale-Occidental",
            image: "/images/culture/languages-literature/bengali.webp",
            description:
              "Une tradition littéraire reconnue pour sa poésie, ses romans, son théâtre et ses écrits intellectuels.",
          },
          {
            name: "Littérature tamoule",
            slug: "tamil-literature",
            region: "Tamil Nadu",
            image: "/images/culture/languages-literature/tamil.webp",
            description:
              "L'une des plus anciennes traditions littéraires de l'Inde, avec une longue histoire de poésie et d'œuvres classiques.",
          },
          {
            name: "Littérature sanskrite",
            slug: "sanskrit-literature",
            region: "Toute l'Inde",
            image: "/images/culture/languages-literature/sanskrit.webp",
            description:
              "Une ancienne tradition littéraire comprenant des œuvres philosophiques, poétiques et savantes.",
          },
          {
            name: "Poésie ourdoue",
            slug: "urdu-poetry",
            region: "Inde du Nord",
            image: "/images/culture/languages-literature/urdu.webp",
            description:
              "Une tradition poétique reconnue pour son langage expressif, ses ghazals et sa culture littéraire.",
          },
          {
            name: "Contes populaires",
            slug: "folk-storytelling",
            region: "Toute l'Inde",
            image: "/images/culture/languages-literature/folk.webp",
            description:
              "Les traditions orales préservent les légendes locales, les mythes, les valeurs et la mémoire collective.",
          },
        ],
      },
    },
  },

  // =========================================================
  // SPANISH
  // =========================================================
  es: {
    common: {
      back: "← Volver a Cultura",
      location: "📍",
      exploreStory: "Explorar historia",
    },

    errors: {
      notFoundTitle: "Categoría cultural no encontrada.",
      notFoundText:
        "No pudimos encontrar la categoría cultural que estás buscando.",
    },

    categories: {
      festivals: {
        eyebrow: "FESTIVALES DE LA INDIA",
        title: "Celebraciones que unen a las comunidades.",
        text:
          "Descubre los vibrantes festivales de la India, sus coloridas celebraciones y tradiciones transmitidas de generación en generación.",
        items: [
          {
            name: "Holi",
            slug: "holi",
            region: "Norte de India",
            image: "/images/culture/festivals & celebrations/holi.webp",
            description:
              "El festival de los colores, celebrado con música, alegría, comida y reuniones comunitarias.",
          },
          {
            name: "Diwali",
            slug: "diwali",
            region: "Toda la India",
            image: "/images/culture/festivals & celebrations/diwali.webp",
            description:
              "El festival de las luces, celebrado con lámparas, oraciones, dulces y reuniones familiares.",
          },
          {
            name: "Durga Puja",
            slug: "durga-puja",
            region: "Bengala Occidental",
            image: "/images/culture/festivals & celebrations/durga.webp",
            description:
              "Una gran celebración cultural con pandales artísticos, música, rituales y reuniones comunitarias.",
          },
          {
            name: "Onam",
            slug: "onam",
            region: "Kerala",
            image: "/images/culture/festivals & celebrations/onam.webp",
            description:
              "El festival de la cosecha de Kerala, conocido por sus diseños florales, celebraciones tradicionales y Onam Sadya.",
          },
          {
            name: "Pongal",
            slug: "pongal",
            region: "Tamil Nadu",
            image: "/images/culture/festivals & celebrations/pongal.webp",
            description:
              "Una celebración de la cosecha que honra la naturaleza, la agricultura, la prosperidad y las tradiciones familiares.",
          },
          {
            name: "Bihu",
            slug: "bihu",
            region: "Assam",
            image: "/images/culture/festivals & celebrations/bihu.webp",
            description:
              "Un festival de Assam relacionado con la agricultura, la música tradicional, la danza y las celebraciones comunitarias.",
          },
        ],
      },

      "dance-music": {
        eyebrow: "DANZA Y MÚSICA INDIA",
        title: "Historias contadas a través del ritmo y la expresión.",
        text:
          "Descubre las tradiciones de danza y música clásica y folclórica de la India.",
        items: [
          {
            name: "Bharatanatyam",
            slug: "bharatanatyam",
            region: "Tamil Nadu",
            image: "/images/culture/dance & music/bharatnatyam.webp",
            description:
              "Una danza clásica conocida por sus movimientos precisos y su narración expresiva.",
          },
          {
            name: "Kathak",
            slug: "kathak",
            region: "Norte de India",
            image: "/images/culture/dance & music/kathak.webp",
            description:
              "Una danza clásica conocida por su complejo trabajo de pies, giros y narración.",
          },
          {
            name: "Kathakali",
            slug: "kathakali",
            region: "Kerala",
            image: "/images/culture/dance & music/kathakali.webp",
            description:
              "Una tradición de danza dramática conocida por sus elaborados trajes, maquillaje y expresión.",
          },
          {
            name: "Música indostaní",
            slug: "hindustani-music",
            region: "Norte de India",
            image: "/images/culture/dance & music/hindustani.webp",
            description:
              "Una tradición musical clásica basada en ragas, ritmo e improvisación.",
          },
          {
            name: "Música carnática",
            slug: "carnatic-music",
            region: "Sur de India",
            image: "/images/culture/dance & music/carnatic.webp",
            description:
              "La tradición musical clásica del sur de la India, conocida por sus composiciones y ritmos complejos.",
          },
          {
            name: "Danza Bihu",
            slug: "bihu-dance",
            region: "Assam",
            image: "/images/culture/dance & music/bihu.webp",
            description:
              "Una danza folclórica asamesa enérgica tradicionalmente asociada con las celebraciones de Bihu.",
          },
        ],
      },

      clothing: {
        eyebrow: "TEXTILES Y VESTIMENTA INDIA",
        title: "Hilos que cuentan las historias de las regiones de la India.",
        text:
          "Explora la vestimenta tradicional, los textiles y las tradiciones de tejido de la India.",
        items: [
          {
            name: "Seda Banarasi",
            slug: "banarasi-silk",
            region: "Uttar Pradesh",
            image: "/images/culture/clothing/banarasi.webp",
            description:
              "Textiles de seda de Varanasi conocidos por su tejido detallado y sus ricos diseños.",
          },
          {
            name: "Seda de Kanchipuram",
            slug: "kanchipuram-silk",
            region: "Tamil Nadu",
            image: "/images/culture/clothing/kanchipuram.webp",
            description:
              "Saris tradicionales de seda conocidos por sus colores intensos y bordes detallados.",
          },
          {
            name: "Phulkari",
            slug: "phulkari",
            region: "Punjab",
            image: "/images/culture/clothing/phulkari.webp",
            description:
              "Una tradición de bordado colorido con intrincados motivos florales.",
          },
          {
            name: "Bandhani",
            slug: "bandhani",
            region: "Rajastán y Gujarat",
            image: "/images/culture/clothing/bandhani.webp",
            description:
              "Una técnica tradicional de teñido por amarre que crea patrones distintivos.",
          },
          {
            name: "Kasavu",
            slug: "kasavu",
            region: "Kerala",
            image: "/images/culture/clothing/kasavu.webp",
            description:
              "Un estilo textil tradicional de Kerala reconocido por su elegante borde dorado.",
          },
          {
            name: "Pashmina",
            slug: "pashmina",
            region: "Cachemira",
            image: "/images/culture/clothing/paschmina.webp",
            description:
              "Una tradición textil de lana fina conocida por su suavidad y delicada artesanía.",
          },
        ],
      },

      "art-storytelling": {
        eyebrow: "ARTE Y NARRACIÓN INDIA",
        title: "Tradiciones artísticas moldeadas por generaciones.",
        text:
          "Descubre las pinturas populares, artesanías y tradiciones narrativas de la India.",
        items: [
          {
            name: "Madhubani",
            slug: "madhubani",
            region: "Bihar",
            image: "/images/culture/art-storytelling/madhubani.webp",
            description:
              "Una tradición pictórica conocida por sus patrones llamativos, temas naturales y narración.",
          },
          {
            name: "Warli",
            slug: "warli",
            region: "Maharashtra",
            image: "/images/culture/art-storytelling/warli.webp",
            description:
              "Una tradición de pintura tribal caracterizada por simples figuras geométricas humanas y animales.",
          },
          {
            name: "Pattachitra",
            slug: "pattachitra",
            region: "Odisha",
            image: "/images/culture/art-storytelling/pattachitra.webp",
            description:
              "Un estilo de pintura tradicional conocido por sus composiciones detalladas y temas mitológicos.",
          },
          {
            name: "Kalamkari",
            slug: "kalamkari",
            region: "Sur de India",
            image: "/images/culture/art-storytelling/kalamkari.webp",
            description:
              "Una tradición textil y pictórica con diseños dibujados a mano y teñidos naturalmente.",
          },
          {
            name: "Cerámica azul",
            slug: "blue-pottery",
            region: "Rajastán",
            image: "/images/culture/art-storytelling/blue-pottery.webp",
            description:
              "Una artesanía decorativa asociada con Jaipur y conocida por sus diseños esmaltados y coloridos.",
          },
          {
            name: "Dhokra",
            slug: "dhokra",
            region: "India central y oriental",
            image: "/images/culture/art-storytelling/dhokra.webp",
            description:
              "Una antigua tradición de fundición de metales que utiliza la técnica de la cera perdida.",
          },
        ],
      },

      "traditions-lifestyle": {
        eyebrow: "INDIA VIVA",
        title: "Las tradiciones cotidianas que hacen única a la India.",
        text:
          "Descubre las costumbres, comunidades y formas de vida que forman la identidad cultural de la India.",
        items: [
          {
            name: "Tradiciones familiares",
            slug: "family-traditions",
            region: "Toda la India",
            image: "/images/culture/traditions-lifestyle/family.webp",
            description:
              "Las reuniones familiares, ceremonias, bodas y rituales siguen siendo una parte importante de la vida social india.",
          },
          {
            name: "Vida de pueblo",
            slug: "village-life",
            region: "India rural",
            image: "/images/culture/traditions-lifestyle/village.webp",
            description:
              "Las comunidades tradicionales continúan preservando prácticas agrícolas, artesanías y costumbres locales.",
          },
          {
            name: "Tradiciones espirituales",
            slug: "spiritual-traditions",
            region: "Toda la India",
            image: "/images/culture/traditions-lifestyle/spiritual.webp",
            description:
              "Las peregrinaciones, oraciones, meditación y rituales comunitarios forman una parte importante de la vida.",
          },
          {
            name: "Mercados locales",
            slug: "local-markets",
            region: "Toda la India",
            image: "/images/culture/traditions-lifestyle/markets.webp",
            description:
              "Los bazares tradicionales reúnen comida, textiles, artesanías, especias y vida comunitaria.",
          },
          {
            name: "Hospitalidad india",
            slug: "hospitality",
            region: "Toda la India",
            image: "/images/culture/traditions-lifestyle/hospitality.webp",
            description:
              "Recibir a los invitados y compartir comida son tradiciones profundamente valoradas en las comunidades indias.",
          },
          {
            name: "Identidad regional",
            slug: "regional-identity",
            region: "Toda la India",
            image: "/images/culture/traditions-lifestyle/regional.webp",
            description:
              "El idioma, la vestimenta, la gastronomía y las costumbres crean identidades distintivas en las regiones de la India.",
          },
        ],
      },

      "languages-literature": {
        eyebrow: "LENGUAS Y LITERATURA INDIA",
        title: "Muchas lenguas, innumerables historias.",
        text:
          "Descubre la diversidad lingüística de la India, su literatura, poesía y tradiciones narrativas.",
        items: [
          {
            name: "Literatura hindi",
            slug: "hindi-literature",
            region: "Norte y centro de India",
            image: "/images/culture/languages-literature/hindi.webp",
            description:
              "Una rica tradición literaria que incluye poesía, novelas, relatos y voces regionales.",
          },
          {
            name: "Literatura bengalí",
            slug: "bengali-literature",
            region: "Bengala Occidental",
            image: "/images/culture/languages-literature/bengali.webp",
            description:
              "Una tradición literaria conocida por su poesía, novelas, teatro y escritura intelectual.",
          },
          {
            name: "Literatura tamil",
            slug: "tamil-literature",
            region: "Tamil Nadu",
            image: "/images/culture/languages-literature/tamil.webp",
            description:
              "Una de las tradiciones literarias más antiguas de la India, con una larga historia de poesía y obras clásicas.",
          },
          {
            name: "Literatura sánscrita",
            slug: "sanskrit-literature",
            region: "Toda la India",
            image: "/images/culture/languages-literature/sanskrit.webp",
            description:
              "Una antigua tradición literaria que contiene obras filosóficas, poéticas y académicas.",
          },
          {
            name: "Poesía urdu",
            slug: "urdu-poetry",
            region: "Norte de India",
            image: "/images/culture/languages-literature/urdu.webp",
            description:
              "Una tradición poética reconocida por su lenguaje expresivo, ghazales y cultura literaria.",
          },
          {
            name: "Narración popular",
            slug: "folk-storytelling",
            region: "Toda la India",
            image: "/images/culture/languages-literature/folk.webp",
            description:
              "Las tradiciones orales preservan leyendas locales, mitos, valores y recuerdos comunitarios.",
          },
        ],
      },
    },
  },
};

export default cultureDetail;