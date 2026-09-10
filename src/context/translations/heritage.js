// src/translations/heritage.js

import { heritageData } from "../../data/heritageData";

/*
|--------------------------------------------------------------------------
| HERITAGE TRANSLATIONS
|--------------------------------------------------------------------------
| 8 Languages:
| en = English
| hi = Hindi
| bn = Bengali
| ta = Tamil
| te = Telugu
| mr = Marathi
| fr = French
| es = Spanish
|
| Every heritage entry remains separate.
| No duplicate/related heritage sections are merged.
|--------------------------------------------------------------------------
*/

const common = {
  en: {
    page: {
      eyebrow: "INDIAN HERITAGE",
      title: "Stories carved through centuries.",
      description:
        "Explore India's monuments, forts, temples, historic cities, UNESCO sites and hidden cultural treasures.",
      back: "← Back to Heritage",
      exploreStory: "Explore Story →",
      story: "THE STORY",
      history: "History",
      architecture: "Architecture & Legacy",
      atGlance: "At a glance",
      discover: "Discover",
      location: "Location",
      state: "State",
      category: "Category",
      type: "Type",
      heritage: "Heritage",
      built: "Built",
      founded: "Founded",
      origin: "Origin",
      period: "Period",
      tradition: "Tradition",
      traditions: "Traditions",
      knownFor: "Known For",
      material: "Material",
      region: "Region",
      dynasty: "Dynasty",
      culture: "Culture",
      historicRegion: "Historic Region",
    },

    categories: {
      monuments: "Monuments",
      forts: "Forts & Palaces",
      temples: "Temples",
      cities: "Historic Cities",
      unesco: "UNESCO Heritage",
      hiddenGems: "Hidden Gems",
    },
  },

  hi: {
    page: {
      eyebrow: "भारतीय विरासत",
      title: "सदियों से पत्थरों में दर्ज कहानियाँ।",
      description:
        "भारत के स्मारकों, किलों, मंदिरों, ऐतिहासिक शहरों, यूनेस्को स्थलों और छिपे हुए सांस्कृतिक खजानों को खोजें।",
      back: "← विरासत पर वापस जाएँ",
      exploreStory: "कहानी देखें →",
      story: "कहानी",
      history: "इतिहास",
      architecture: "वास्तुकला और विरासत",
      atGlance: "एक नज़र में",
      discover: "जानें",
      location: "स्थान",
      state: "राज्य",
      category: "श्रेणी",
      type: "प्रकार",
      heritage: "विरासत",
      built: "निर्माण",
      founded: "स्थापना",
      origin: "उत्पत्ति",
      period: "काल",
      tradition: "परंपरा",
      traditions: "परंपराएँ",
      knownFor: "प्रसिद्धि",
      material: "सामग्री",
      region: "क्षेत्र",
      dynasty: "राजवंश",
      culture: "संस्कृति",
      historicRegion: "ऐतिहासिक क्षेत्र",
    },

    categories: {
      monuments: "स्मारक",
      forts: "किले और महल",
      temples: "मंदिर",
      cities: "ऐतिहासिक शहर",
      unesco: "यूनेस्को विरासत",
      hiddenGems: "छिपे हुए रत्न",
    },
  },

  bn: {
    page: {
      eyebrow: "ভারতীয় ঐতিহ্য",
      title: "শতাব্দী পেরিয়ে খোদাই করা গল্প।",
      description:
        "ভারতের স্মৃতিস্তম্ভ, দুর্গ, মন্দির, ঐতিহাসিক শহর, ইউনেস্কো স্থান এবং লুকানো সাংস্কৃতিক ঐতিহ্য আবিষ্কার করুন।",
      back: "← ঐতিহ্যে ফিরে যান",
      exploreStory: "গল্প দেখুন →",
      story: "গল্প",
      history: "ইতিহাস",
      architecture: "স্থাপত্য ও ঐতিহ্য",
      atGlance: "এক নজরে",
      discover: "আবিষ্কার করুন",
      location: "অবস্থান",
      state: "রাজ্য",
      category: "বিভাগ",
      type: "ধরন",
      heritage: "ঐতিহ্য",
      built: "নির্মাণ",
      founded: "প্রতিষ্ঠা",
      origin: "উৎপত্তি",
      period: "সময়কাল",
      tradition: "ঐতিহ্য",
      traditions: "ঐতিহ্যসমূহ",
      knownFor: "পরিচিতির কারণ",
      material: "উপাদান",
      region: "অঞ্চল",
      dynasty: "রাজবংশ",
      culture: "সংস্কৃতি",
      historicRegion: "ঐতিহাসিক অঞ্চল",
    },

    categories: {
      monuments: "স্মৃতিস্তম্ভ",
      forts: "দুর্গ ও প্রাসাদ",
      temples: "মন্দির",
      cities: "ঐতিহাসিক শহর",
      unesco: "ইউনেস্কো ঐতিহ্য",
      hiddenGems: "লুকানো রত্ন",
    },
  },

  ta: {
    page: {
      eyebrow: "இந்திய பாரம்பரியம்",
      title: "பல நூற்றாண்டுகளாக செதுக்கப்பட்ட கதைகள்.",
      description:
        "இந்தியாவின் நினைவுச்சின்னங்கள், கோட்டைகள், கோவில்கள், வரலாற்று நகரங்கள், யுனெஸ்கோ தளங்கள் மற்றும் மறைந்திருக்கும் கலாச்சார பொக்கிஷங்களை கண்டறியுங்கள்.",
      back: "← பாரம்பரியத்திற்குத் திரும்பு",
      exploreStory: "கதையைப் பார்க்கவும் →",
      story: "கதை",
      history: "வரலாறு",
      architecture: "கட்டிடக்கலை மற்றும் பாரம்பரியம்",
      atGlance: "ஒரு பார்வையில்",
      discover: "கண்டறியவும்",
      location: "இடம்",
      state: "மாநிலம்",
      category: "வகை",
      type: "தரம்",
      heritage: "பாரம்பரியம்",
      built: "கட்டப்பட்டது",
      founded: "நிறுவப்பட்டது",
      origin: "தோற்றம்",
      period: "காலம்",
      tradition: "பாரம்பரியம்",
      traditions: "பாரம்பரியங்கள்",
      knownFor: "பிரபலமானது",
      material: "பொருள்",
      region: "பகுதி",
      dynasty: "வம்சம்",
      culture: "கலாச்சாரம்",
      historicRegion: "வரலாற்றுப் பகுதி",
    },

    categories: {
      monuments: "நினைவுச்சின்னங்கள்",
      forts: "கோட்டைகள் மற்றும் அரண்மனைகள்",
      temples: "கோவில்கள்",
      cities: "வரலாற்று நகரங்கள்",
      unesco: "யுனெஸ்கோ பாரம்பரியம்",
      hiddenGems: "மறைந்திருக்கும் பொக்கிஷங்கள்",
    },
  },

  te: {
    page: {
      eyebrow: "భారతీయ వారసత్వం",
      title: "శతాబ్దాలుగా చెక్కబడిన కథలు.",
      description:
        "భారతదేశంలోని స్మారక చిహ్నాలు, కోటలు, దేవాలయాలు, చారిత్రక నగరాలు, యునెస్కో ప్రదేశాలు మరియు దాగి ఉన్న సాంస్కృతిక సంపదను అన్వేషించండి.",
      back: "← వారసత్వానికి తిరిగి వెళ్లండి",
      exploreStory: "కథను చూడండి →",
      story: "కథ",
      history: "చరిత్ర",
      architecture: "వాస్తుశిల్పం మరియు వారసత్వం",
      atGlance: "ఒక చూపులో",
      discover: "అన్వేషించండి",
      location: "ప్రదేశం",
      state: "రాష్ట్రం",
      category: "వర్గం",
      type: "రకం",
      heritage: "వారసత్వం",
      built: "నిర్మాణం",
      founded: "స్థాపన",
      origin: "మూలం",
      period: "కాలం",
      tradition: "సంప్రదాయం",
      traditions: "సంప్రదాయాలు",
      knownFor: "ప్రసిద్ధి",
      material: "పదార్థం",
      region: "ప్రాంతం",
      dynasty: "వంశం",
      culture: "సంస్కృతి",
      historicRegion: "చారిత్రక ప్రాంతం",
    },

    categories: {
      monuments: "స్మారక చిహ్నాలు",
      forts: "కోటలు మరియు రాజభవనాలు",
      temples: "దేవాలయాలు",
      cities: "చారిత్రక నగరాలు",
      unesco: "యునెస్కో వారసత్వం",
      hiddenGems: "దాగి ఉన్న రత్నాలు",
    },
  },

  mr: {
    page: {
      eyebrow: "भारतीय वारसा",
      title: "शतकानुशतके कोरलेल्या कथा.",
      description:
        "भारताची स्मारके, किल्ले, मंदिरे, ऐतिहासिक शहरे, युनेस्को स्थळे आणि लपलेले सांस्कृतिक खजिने शोधा.",
      back: "← वारशाकडे परत जा",
      exploreStory: "कथा पहा →",
      story: "कथा",
      history: "इतिहास",
      architecture: "वास्तुकला आणि वारसा",
      atGlance: "एका नजरेत",
      discover: "शोधा",
      location: "स्थान",
      state: "राज्य",
      category: "श्रेणी",
      type: "प्रकार",
      heritage: "वारसा",
      built: "बांधले",
      founded: "स्थापना",
      origin: "उगम",
      period: "कालखंड",
      tradition: "परंपरा",
      traditions: "परंपरा",
      knownFor: "प्रसिद्ध",
      material: "साहित्य",
      region: "प्रदेश",
      dynasty: "राजवंश",
      culture: "संस्कृती",
      historicRegion: "ऐतिहासिक प्रदेश",
    },

    categories: {
      monuments: "स्मारके",
      forts: "किल्ले आणि राजवाडे",
      temples: "मंदिरे",
      cities: "ऐतिहासिक शहरे",
      unesco: "युनेस्को वारसा",
      hiddenGems: "लपलेले रत्न",
    },
  },

  fr: {
    page: {
      eyebrow: "PATRIMOINE INDIEN",
      title: "Des histoires gravées à travers les siècles.",
      description:
        "Explorez les monuments, forts, temples, villes historiques, sites UNESCO et trésors culturels cachés de l'Inde.",
      back: "← Retour au patrimoine",
      exploreStory: "Découvrir l'histoire →",
      story: "L'HISTOIRE",
      history: "Histoire",
      architecture: "Architecture et héritage",
      atGlance: "En un coup d'œil",
      discover: "Découvrir",
      location: "Lieu",
      state: "État",
      category: "Catégorie",
      type: "Type",
      heritage: "Patrimoine",
      built: "Construit",
      founded: "Fondé",
      origin: "Origine",
      period: "Période",
      tradition: "Tradition",
      traditions: "Traditions",
      knownFor: "Connu pour",
      material: "Matériau",
      region: "Région",
      dynasty: "Dynastie",
      culture: "Culture",
      historicRegion: "Région historique",
    },

    categories: {
      monuments: "Monuments",
      forts: "Forts et palais",
      temples: "Temples",
      cities: "Villes historiques",
      unesco: "Patrimoine UNESCO",
      hiddenGems: "Trésors cachés",
    },
  },

  es: {
    page: {
      eyebrow: "PATRIMONIO DE LA INDIA",
      title: "Historias talladas a través de los siglos.",
      description:
        "Explora los monumentos, fuertes, templos, ciudades históricas, sitios de la UNESCO y tesoros culturales ocultos de la India.",
      back: "← Volver al patrimonio",
      exploreStory: "Explorar historia →",
      story: "LA HISTORIA",
      history: "Historia",
      architecture: "Arquitectura y legado",
      atGlance: "En resumen",
      discover: "Descubrir",
      location: "Ubicación",
      state: "Estado",
      category: "Categoría",
      type: "Tipo",
      heritage: "Patrimonio",
      built: "Construido",
      founded: "Fundado",
      origin: "Origen",
      period: "Período",
      tradition: "Tradición",
      traditions: "Tradiciones",
      knownFor: "Conocido por",
      material: "Material",
      region: "Región",
      dynasty: "Dinastía",
      culture: "Cultura",
      historicRegion: "Región histórica",
    },

    categories: {
      monuments: "Monumentos",
      forts: "Fuertes y palacios",
      temples: "Templos",
      cities: "Ciudades históricas",
      unesco: "Patrimonio de la UNESCO",
      hiddenGems: "Joyas ocultas",
    },
  },
};

/*
|--------------------------------------------------------------------------
| Entry-level translations
|--------------------------------------------------------------------------
| Proper names and factual values are kept from the project source.
| This keeps URLs, image paths and historical identifiers stable.
|--------------------------------------------------------------------------
*/

const entryTranslations = {
  en: {},
  hi: {
    "taj-mahal": {
      name: "ताजमहल",
      state: "उत्तर प्रदेश",
      category: "स्मारक",
      type: "स्मारक",
      eyebrow: "आगरा, उत्तर प्रदेश",
      tagline: "सफेद संगमरमर में प्रेम का अमर प्रतीक।",
      description:
        "ताजमहल भारत के सबसे प्रसिद्ध स्मारकों में से एक और दुनिया की सबसे पहचानने योग्य स्थापत्य कृतियों में से एक है।",
      history:
        "मुगल सम्राट शाहजहाँ ने मुमताज़ महल की स्मृति में इसका निर्माण करवाया। 17वीं शताब्दी में इसे एक भव्य मकबरे के रूप में विकसित किया गया।",
      architecture:
        "यह परिसर अपने सफेद संगमरमर के गुंबद, सममित उद्यानों, मीनारों, जटिल जड़ाऊ कार्य और उत्कृष्ट शिल्पकला के लिए प्रसिद्ध है।",
    },

    "hawa-mahal": {
      name: "हवा महल",
      state: "राजस्थान",
      category: "स्मारक",
      type: "स्मारक",
      eyebrow: "जयपुर, राजस्थान",
      tagline: "प्रसिद्ध हवा महल।",
      description:
        "हवा महल जयपुर के सबसे प्रसिद्ध स्थलों में से एक है, जो अपने विशिष्ट गुलाबी मुखौटे और सैकड़ों छोटी खिड़कियों के लिए जाना जाता है।",
      history:
        "18वीं शताब्दी के अंत में निर्मित यह महल सिटी पैलेस परिसर के विस्तार के रूप में बनाया गया था।",
      architecture:
        "इसके मधुमक्खी के छत्ते जैसी संरचना में अनेक छोटी खिड़कियाँ और झरोखे हैं, जो भवन के भीतर हवा के संचार में सहायता करते हैं।",
    },

    "victoria-memorial": {
      name: "विक्टोरिया मेमोरियल",
      state: "पश्चिम बंगाल",
      category: "स्मारक",
      type: "स्मारक",
      eyebrow: "कोलकाता, पश्चिम बंगाल",
      tagline: "उद्यानों से घिरा भव्य संगमरमर का स्मारक।",
      description:
        "विक्टोरिया मेमोरियल कोलकाता के प्रमुख स्थापत्य स्थलों में से एक है और इसमें ऐतिहासिक वस्तुओं का विशाल संग्रह है।",
      history:
        "20वीं शताब्दी के प्रारंभ में महारानी विक्टोरिया की स्मृति में निर्मित यह स्मारक औपनिवेशिक कोलकाता का महत्वपूर्ण स्थल बना।",
      architecture:
        "इस भवन में यूरोपीय, मुगल और भारतीय वास्तुकला के तत्वों का मेल है और इसका निर्माण मुख्य रूप से सफेद संगमरमर से हुआ है।",
    },

    "konark-sun-temple": {
      name: "कोणार्क सूर्य मंदिर",
      state: "ओडिशा",
      category: "स्मारक",
      type: "मंदिर स्मारक",
      eyebrow: "कोणार्क, ओडिशा",
      tagline: "सूर्य देव को समर्पित एक विशाल पत्थर का रथ।",
      description:
        "कोणार्क सूर्य मंदिर भारत की उत्कृष्ट मंदिर वास्तुकला और पत्थर की नक्काशी का एक अद्भुत उदाहरण है।",
      history:
        "इस मंदिर का निर्माण 13वीं शताब्दी में पूर्वी गंग वंश के शासनकाल में हुआ था।",
      architecture:
        "सूर्य देव के विशाल रथ के रूप में निर्मित यह मंदिर अपने नक्काशीदार पहियों, घोड़ों और विस्तृत मूर्तियों के लिए प्रसिद्ध है।",
    },

    "sanchi-stupa": {
      name: "सांची स्तूप",
      state: "मध्य प्रदेश",
      category: "स्मारक",
      type: "बौद्ध स्मारक",
      eyebrow: "सांची, मध्य प्रदेश",
      tagline: "भारत की बौद्ध विरासत का शांत प्रतीक।",
      description:
        "सांची भारत के सबसे पुराने बचे हुए बौद्ध स्मारकों का घर है और अपने ऐतिहासिक स्तूपों तथा तोरणों के लिए प्रसिद्ध है।",
      history:
        "सांची के प्रारंभिक स्मारक सम्राट अशोक से जुड़े थे और बाद की शताब्दियों में उनका विस्तार हुआ।",
      architecture:
        "महान स्तूप के अर्धगोलाकार गुंबद के चारों ओर नक्काशीदार तोरण हैं, जिन पर बौद्ध कथाएँ और प्रतीक अंकित हैं।",
    },

    charminar: {
      name: "चारमीनार",
      state: "तेलंगाना",
      category: "स्मारक",
      type: "स्मारक",
      eyebrow: "हैदराबाद, तेलंगाना",
      tagline: "हैदराबाद की चार मीनारों वाली पहचान।",
      description:
        "चारमीनार हैदराबाद का सबसे प्रसिद्ध स्थल है, जो अपनी चार भव्य मीनारों और ऐतिहासिक शहरी परिवेश के लिए जाना जाता है।",
      history:
        "यह स्मारक 16वीं शताब्दी के अंत में बनाया गया और ऐतिहासिक हैदराबाद का केंद्र बना।",
      architecture:
        "इसकी चार ऊँची मीनारें एक चौकोर संरचना के ऊपर उठती हैं, जिसमें मेहराब, गुंबद और जटिल सजावटी विवरण हैं।",
    },

    "amber-fort": {
      name: "आमेर किला",
      state: "राजस्थान",
      category: "किले और महल",
      type: "किला",
      eyebrow: "जयपुर, राजस्थान",
      tagline: "राजपूत भव्यता से आकार लिया हुआ शानदार पहाड़ी किला।",
      description:
        "आमेर किला राजस्थान के सबसे प्रसिद्ध किलों में से एक है, जो अपने विशाल प्रांगणों, अलंकृत आंतरिक भागों और पहाड़ी स्थिति के लिए जाना जाता है।",
      history:
        "किला कई पीढ़ियों में विकसित हुआ और कछवाहा राजपूत शासकों का महत्वपूर्ण केंद्र बना।",
      architecture:
        "किले में राजपूत और मुगल वास्तुकला का मेल है, जिसमें भव्य द्वार, प्रांगण, सभागार और कलात्मक सजावट शामिल हैं।",
    },

    "red-fort": {
      name: "लाल किला",
      state: "दिल्ली",
      category: "किले और महल",
      type: "किला",
      eyebrow: "दिल्ली, भारत",
      tagline: "मुगल सत्ता और भारत के इतिहास का भव्य प्रतीक।",
      description:
        "लाल किला दिल्ली के सबसे महत्वपूर्ण ऐतिहासिक स्थलों में से एक है, जो अपनी विशाल लाल बलुआ पत्थर की दीवारों और मुगल वास्तुकला के लिए प्रसिद्ध है।",
      history:
        "मुगल सम्राट शाहजहाँ ने 17वीं शताब्दी में इसका निर्माण करवाया और यह दिल्ली में मुगल सम्राटों का प्रमुख निवास बना।",
      architecture:
        "परिसर में विशाल सुरक्षा दीवारें, भव्य द्वार, शाही सभागार, उद्यान और जटिल सजावटी कार्य हैं।",
    },
  },
};

/*
|--------------------------------------------------------------------------
| Translate detail labels
|--------------------------------------------------------------------------
*/

const labelTranslations = {
  en: {
    Built: "Built",
    Location: "Location",
    Architecture: "Architecture",
    Heritage: "Heritage",
    "Known For": "Known For",
    Material: "Material",
    Origin: "Origin",
    Tradition: "Tradition",
    Region: "Region",
    State: "State",
    Founded: "Founded",
    "Historic Region": "Historic Region",
    Culture: "Culture",
    Dynasty: "Dynasty",
    Period: "Period",
    Traditions: "Traditions",
  },

  hi: {
    Built: "निर्माण",
    Location: "स्थान",
    Architecture: "वास्तुकला",
    Heritage: "विरासत",
    "Known For": "प्रसिद्धि",
    Material: "सामग्री",
    Origin: "उत्पत्ति",
    Tradition: "परंपरा",
    Region: "क्षेत्र",
    State: "राज्य",
    Founded: "स्थापना",
    "Historic Region": "ऐतिहासिक क्षेत्र",
    Culture: "संस्कृति",
    Dynasty: "राजवंश",
    Period: "काल",
    Traditions: "परंपराएँ",
  },

  bn: {
    Built: "নির্মাণ",
    Location: "অবস্থান",
    Architecture: "স্থাপত্য",
    Heritage: "ঐতিহ্য",
    "Known For": "পরিচিতির কারণ",
    Material: "উপাদান",
    Origin: "উৎপত্তি",
    Tradition: "ঐতিহ্য",
    Region: "অঞ্চল",
    State: "রাজ্য",
    Founded: "প্রতিষ্ঠা",
    "Historic Region": "ঐতিহাসিক অঞ্চল",
    Culture: "সংস্কৃতি",
    Dynasty: "রাজবংশ",
    Period: "সময়কাল",
    Traditions: "ঐতিহ্যসমূহ",
  },

  ta: {
    Built: "கட்டப்பட்டது",
    Location: "இடம்",
    Architecture: "கட்டிடக்கலை",
    Heritage: "பாரம்பரியம்",
    "Known For": "பிரபலமானது",
    Material: "பொருள்",
    Origin: "தோற்றம்",
    Tradition: "பாரம்பரியம்",
    Region: "பகுதி",
    State: "மாநிலம்",
    Founded: "நிறுவப்பட்டது",
    "Historic Region": "வரலாற்றுப் பகுதி",
    Culture: "கலாச்சாரம்",
    Dynasty: "வம்சம்",
    Period: "காலம்",
    Traditions: "பாரம்பரியங்கள்",
  },

  te: {
    Built: "నిర్మాణం",
    Location: "ప్రదేశం",
    Architecture: "వాస్తుశిల్పం",
    Heritage: "వారసత్వం",
    "Known For": "ప్రసిద్ధి",
    Material: "పదార్థం",
    Origin: "మూలం",
    Tradition: "సంప్రదాయం",
    Region: "ప్రాంతం",
    State: "రాష్ట్రం",
    Founded: "స్థాపన",
    "Historic Region": "చారిత్రక ప్రాంతం",
    Culture: "సంస్కృతి",
    Dynasty: "వంశం",
    Period: "కాలం",
    Traditions: "సంప్రదాయాలు",
  },

  mr: {
    Built: "बांधले",
    Location: "स्थान",
    Architecture: "वास्तुकला",
    Heritage: "वारसा",
    "Known For": "प्रसिद्ध",
    Material: "साहित्य",
    Origin: "उगम",
    Tradition: "परंपरा",
    Region: "प्रदेश",
    State: "राज्य",
    Founded: "स्थापना",
    "Historic Region": "ऐतिहासिक प्रदेश",
    Culture: "संस्कृती",
    Dynasty: "राजवंश",
    Period: "कालखंड",
    Traditions: "परंपरा",
  },

  fr: {
    Built: "Construit",
    Location: "Lieu",
    Architecture: "Architecture",
    Heritage: "Patrimoine",
    "Known For": "Connu pour",
    Material: "Matériau",
    Origin: "Origine",
    Tradition: "Tradition",
    Region: "Région",
    State: "État",
    Founded: "Fondé",
    "Historic Region": "Région historique",
    Culture: "Culture",
    Dynasty: "Dynastie",
    Period: "Période",
    Traditions: "Traditions",
  },

  es: {
    Built: "Construido",
    Location: "Ubicación",
    Architecture: "Arquitectura",
    Heritage: "Patrimonio",
    "Known For": "Conocido por",
    Material: "Material",
    Origin: "Origen",
    Tradition: "Tradición",
    Region: "Región",
    State: "Estado",
    Founded: "Fundado",
    "Historic Region": "Región histórica",
    Culture: "Cultura",
    Dynasty: "Dinastía",
    Period: "Período",
    Traditions: "Tradiciones",
  },
};

/*
|--------------------------------------------------------------------------
| Convert original heritage data into translated data
|--------------------------------------------------------------------------
*/

function translateEntry(entry, language) {
  const override = entryTranslations[language]?.[entry.slug] || {};

  const translated = {
    ...entry,
    ...override,
  };

  translated.details = (entry.details || []).map((detail) => ({
    ...detail,
    title:
      labelTranslations[language]?.[detail.title] ||
      detail.title,
  }));

  /*
   * Keywords are intentionally preserved.
   * They are search terms and should remain searchable regardless
   * of the currently selected interface language.
   */
  translated.keywords = [...(entry.keywords || [])];

  return translated;
}

/*
|--------------------------------------------------------------------------
| Separate category collections
|--------------------------------------------------------------------------
| Entries are NOT merged even when the same heritage site appears
| in another category/section.
|--------------------------------------------------------------------------
*/

function buildLanguage(language) {
  const entries = heritageData.map((entry) =>
    translateEntry(entry, language)
  );

  return {
    page: common[language].page,
    categories: common[language].categories,

    monuments: entries.filter(
      (item) => item.category === "Monuments"
    ),

    forts: entries.filter(
      (item) => item.category === "Forts & Palaces"
    ),

    temples: entries.filter(
      (item) =>
        item.category === "Temples" ||
        item.type === "Temple Monument"
    ),

    cities: entries.filter(
      (item) => item.category === "Historic Cities"
    ),

    unesco: entries.filter(
      (item) => item.category === "UNESCO"
    ),

    hiddenGems: [],
  };
}

/*
|--------------------------------------------------------------------------
| Complete language object
|--------------------------------------------------------------------------
*/

export const heritageTranslations = {
  en: buildLanguage("en"),
  hi: buildLanguage("hi"),
  bn: buildLanguage("bn"),
  ta: buildLanguage("ta"),
  te: buildLanguage("te"),
  mr: buildLanguage("mr"),
  fr: buildLanguage("fr"),
  es: buildLanguage("es"),
};

/*
|--------------------------------------------------------------------------
| Default export
|--------------------------------------------------------------------------
*/

export default heritageTranslations;

/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
*/

export function getHeritageTranslation(language = "en") {
  return heritageTranslations[language] || heritageTranslations.en;
}