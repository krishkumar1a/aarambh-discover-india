// foods.js

const foods = {
  en: {
    "east-india": {
      eyebrow: "EAST INDIAN CUISINE",
      title: "Flavours shaped by rivers, rice and tradition.",
      text:
        "Discover the distinctive food traditions of Bengal, Odisha, Assam and Bihar.",

      items: {
        "litti-chokha": {
          name: "Litti Chokha",
          region: "Bihar",
          tagline: "Smoky. Earthy. Authentic.",
          description:
            "A beloved Bihari dish of roasted wheat balls served with spiced mashed vegetables.",
          history:
            "Litti has long been associated with the traditional food culture of Bihar and the wider eastern Gangetic region.",
          culture:
            "The dish reflects Bihar's rustic cooking traditions, using wheat, roasted sattu, vegetables, spices and ghee.",
          details: [
            { title: "Region", value: "Bihar" },
            { title: "Type", value: "Traditional Main Dish" },
            { title: "Known For", value: "Sattu & Roasted Flavour" },
            { title: "Served With", value: "Chokha & Ghee" },
          ],
        },

        rosogolla: {
          name: "Rosogolla",
          region: "West Bengal",
          tagline: "Soft. Sweet. Iconic.",
          description:
            "Soft chhena dumplings soaked in light sugar syrup and celebrated as one of Bengal's iconic sweets.",
          history:
            "Rosogolla became closely associated with Bengal's sweet-making tradition and remains one of the region's best-known sweets.",
          culture:
            "It is an important part of Bengali celebrations, hospitality and everyday sweet-shop culture.",
          details: [
            { title: "Region", value: "West Bengal" },
            { title: "Type", value: "Sweet" },
            { title: "Main Ingredient", value: "Chhena" },
            { title: "Known For", value: "Light Sugar Syrup" },
          ],
        },

        "machher-jhol": {
          name: "Machher Jhol",
          region: "West Bengal",
          tagline: "Light. Aromatic. Bengali.",
          description:
            "A traditional Bengali fish curry prepared with spices and a light, flavourful gravy.",
          history:
            "Fish has long been an important part of Bengali food traditions, especially in river-rich regions.",
          culture:
            "Machher Jhol represents the everyday Bengali preference for rice, fish and gently spiced gravies.",
          details: [
            { title: "Region", value: "West Bengal" },
            { title: "Type", value: "Fish Curry" },
            { title: "Served With", value: "Rice" },
            { title: "Known For", value: "Light Spiced Gravy" },
          ],
        },

        dalma: {
          name: "Dalma",
          region: "Odisha",
          tagline: "Simple. Nourishing. Traditional.",
          description:
            "A traditional Odia preparation combining lentils and vegetables with gentle spices.",
          history:
            "Dalma is deeply connected with Odisha's traditional home-style cooking and temple food traditions.",
          culture:
            "Its combination of lentils and vegetables reflects the simple, balanced character of Odia cuisine.",
          details: [
            { title: "Region", value: "Odisha" },
            { title: "Type", value: "Lentil & Vegetable Dish" },
            { title: "Main Ingredients", value: "Dal & Vegetables" },
            { title: "Style", value: "Traditional Odia" },
          ],
        },

        "pakhala-bhata": {
          name: "Pakhala Bhata",
          region: "Odisha",
          tagline: "Cool. Rustic. Refreshing.",
          description:
            "A traditional fermented rice dish especially enjoyed in Odisha during warmer months.",
          history:
            "Pakhala developed as a practical and refreshing rice preparation suited to Odisha's warm climate.",
          culture:
            "It remains strongly connected with Odia household food traditions and seasonal eating.",
          details: [
            { title: "Region", value: "Odisha" },
            { title: "Type", value: "Fermented Rice Dish" },
            { title: "Known For", value: "Cooling & Refreshing" },
            { title: "Served With", value: "Vegetables, Fish & Pickles" },
          ],
        },

        khar: {
          name: "Khar",
          region: "Assam",
          tagline: "Distinctive. Simple. Assamese.",
          description:
            "A distinctive Assamese preparation known for its unique alkaline ingredient and simple flavours.",
          history:
            "Khar represents a distinctive part of traditional Assamese cooking and its use of locally familiar ingredients.",
          culture:
            "The dish reflects Assam's preference for subtle flavours and regionally distinctive cooking techniques.",
          details: [
            { title: "Region", value: "Assam" },
            { title: "Type", value: "Traditional Preparation" },
            { title: "Style", value: "Assamese Cuisine" },
            { title: "Known For", value: "Alkaline Ingredient" },
          ],
        },
      },
    },

    "north-india": {
      eyebrow: "NORTH INDIAN CUISINE",
      title: "Rich flavours, hearty dishes and timeless traditions.",
      text:
        "Explore the diverse culinary traditions of Punjab, Kashmir, Rajasthan and the northern plains.",

      items: {
        "butter-chicken": {
          name: "Butter Chicken",
          region: "Punjab",
          tagline: "Rich. Creamy. Irresistible.",
          description:
            "A rich and creamy chicken preparation known for its buttery tomato-based gravy.",
          history:
            "Butter chicken emerged from the culinary traditions of Delhi's Punjabi food culture and became widely popular across India.",
          culture:
            "It represents the rich, restaurant-style North Indian cuisine known for creamy gravies, spices and tandoori cooking.",
          details: [
            { title: "Region", value: "Punjab / North India" },
            { title: "Type", value: "Chicken Curry" },
            { title: "Main Flavours", value: "Tomato, Butter & Cream" },
            { title: "Served With", value: "Naan or Rice" },
          ],
        },

        "rajma-chawal": {
          name: "Rajma Chawal",
          region: "North India",
          tagline: "Comforting. Homely. Hearty.",
          description:
            "A comforting combination of spiced kidney bean curry served with steamed rice.",
          history:
            "Rajma became an important part of North Indian home cooking and is particularly associated with Punjabi food culture.",
          culture:
            "The dish represents everyday comfort food and family meals across northern India.",
          details: [
            { title: "Region", value: "North India" },
            { title: "Type", value: "Bean Curry & Rice" },
            { title: "Main Ingredient", value: "Kidney Beans" },
            { title: "Known For", value: "Home-style Comfort Food" },
          ],
        },

        "chole-bhature": {
          name: "Chole Bhature",
          region: "Punjab & North India",
          tagline: "Spiced. Fluffy. Satisfying.",
          description:
            "Spiced chickpea curry served with deep-fried, fluffy bhature.",
          history:
            "Chole bhature developed within North India's rich street-food and Punjabi culinary traditions.",
          culture:
            "It is commonly enjoyed as a hearty breakfast, lunch or festive meal and is especially popular in urban food culture.",
          details: [
            { title: "Region", value: "Punjab & North India" },
            { title: "Type", value: "Curry & Fried Bread" },
            { title: "Main Ingredient", value: "Chickpeas" },
            { title: "Known For", value: "Spiced Chole & Bhature" },
          ],
        },

        "rogan-josh": {
          name: "Rogan Josh",
          region: "Kashmir",
          tagline: "Aromatic. Regal. Kashmiri.",
          description:
            "A celebrated Kashmiri curry known for aromatic spices and tender meat.",
          history:
            "Rogan Josh became an important part of the culinary traditions associated with Kashmir and its royal and regional food culture.",
          culture:
            "It is closely associated with Kashmiri feasts and the elaborate Wazwan tradition.",
          details: [
            { title: "Region", value: "Kashmir" },
            { title: "Type", value: "Meat Curry" },
            { title: "Cuisine", value: "Kashmiri" },
            { title: "Known For", value: "Aromatic Spices" },
          ],
        },

        "dal-baati-churma": {
          name: "Dal Baati Churma",
          region: "Rajasthan",
          tagline: "Rustic. Royal. Rajasthani.",
          description:
            "A traditional Rajasthani meal combining baked baati, lentils and sweet churma.",
          history:
            "Dal Baati Churma developed within Rajasthan's traditional food culture and remains a signature regional meal.",
          culture:
            "The combination reflects Rajasthan's desert-region cooking traditions, where durable ingredients and ghee play an important role.",
          details: [
            { title: "Region", value: "Rajasthan" },
            { title: "Type", value: "Traditional Meal" },
            { title: "Main Elements", value: "Dal, Baati & Churma" },
            { title: "Known For", value: "Ghee-rich Rustic Flavour" },
          ],
        },

        "kadhi-pakora": {
          name: "Kadhi Pakora",
          region: "North India",
          tagline: "Tangy. Comforting. Traditional.",
          description:
            "A yogurt-based curry with gram-flour fritters, traditionally served with rice.",
          history:
            "Kadhi has long been part of North Indian home cooking, with regional variations found across several states.",
          culture:
            "Its combination of yogurt, gram flour and spices reflects the everyday vegetarian traditions of North Indian households.",
          details: [
            { title: "Region", value: "North India" },
            { title: "Type", value: "Yogurt Curry" },
            { title: "Main Ingredients", value: "Yogurt & Gram Flour" },
            { title: "Served With", value: "Rice" },
          ],
        },
      },
    },

    "south-india": {
      eyebrow: "SOUTH INDIAN CUISINE",
      title: "A world of spice, coconut, rice and tradition.",
      text:
        "Experience the varied flavours of Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana.",

      items: {
        "masala-dosa": {
          name: "Masala Dosa",
          region: "South India",
          tagline: "Crispy. Flavorful. South Indian.",
          description:
            "A crisp fermented rice-and-lentil crepe traditionally filled with spiced potato.",
          history:
            "Dosa has a long history in South Indian cuisine and developed into many regional varieties, including the popular masala dosa.",
          culture:
            "It is closely associated with South Indian breakfast and tiffin culture and is commonly served with sambar and chutneys.",
          details: [
            { title: "Region", value: "South India" },
            { title: "Type", value: "Fermented Crepe" },
            { title: "Main Ingredients", value: "Rice & Lentils" },
            { title: "Served With", value: "Potato Masala, Sambar & Chutney" },
          ],
        },

        "idli-sambar": {
          name: "Idli Sambar",
          region: "South India",
          tagline: "Soft. Wholesome. Timeless.",
          description:
            "Soft steamed rice cakes served with lentil-based sambar and traditional chutneys.",
          history:
            "Idli is one of the best-known steamed foods of South India and forms an important part of traditional tiffin cuisine.",
          culture:
            "It is widely enjoyed for breakfast and is valued for its simple ingredients and steamed preparation.",
          details: [
            { title: "Region", value: "South India" },
            { title: "Type", value: "Steamed Rice Cake" },
            { title: "Served With", value: "Sambar & Chutney" },
            { title: "Style", value: "Traditional Tiffin" },
          ],
        },

        vada: {
          name: "Medu Vada",
          region: "South India",
          tagline: "Crispy. Savoury. Traditional.",
          description:
            "A savoury fried lentil preparation with a crisp exterior and soft centre.",
          history:
            "Vada varieties have long been part of South Indian culinary traditions and are commonly served as breakfast or tiffin.",
          culture:
            "Medu vada is traditionally enjoyed with sambar and coconut chutney.",
          details: [
            { title: "Region", value: "South India" },
            { title: "Type", value: "Fried Lentil Snack" },
            { title: "Main Ingredient", value: "Urad Dal" },
            { title: "Served With", value: "Sambar & Chutney" },
          ],
        },

        "kerala-sadya": {
          name: "Kerala Sadya",
          region: "Kerala",
          tagline: "Festive. Wholesome. Coconut-rich.",
          description:
            "A traditional Kerala feast featuring rice, vegetables, curries, pickles and desserts served on a banana leaf.",
          history:
            "Sadya developed as an important part of Kerala's festive and ceremonial food traditions.",
          culture:
            "It is especially associated with celebrations such as Onam and weddings and represents Kerala's communal dining culture.",
          details: [
            { title: "Region", value: "Kerala" },
            { title: "Type", value: "Traditional Feast" },
            { title: "Served On", value: "Banana Leaf" },
            { title: "Known For", value: "Many Vegetarian Dishes" },
          ],
        },

        "hyderabadi-biryani": {
          name: "Hyderabadi Biryani",
          region: "Telangana",
          tagline: "Aromatic. Royal. Unforgettable.",
          description:
            "A fragrant rice dish layered with aromatic spices, herbs and traditionally marinated meat.",
          history:
            "Hyderabadi biryani developed through the culinary traditions of Hyderabad and its historic Deccan court culture.",
          culture:
            "It is an important part of Hyderabad's food identity and is enjoyed at celebrations, gatherings and everyday restaurants.",
          details: [
            { title: "Region", value: "Hyderabad, Telangana" },
            { title: "Type", value: "Rice Dish" },
            { title: "Known For", value: "Aromatic Spices" },
            { title: "Style", value: "Deccan Cuisine" },
          ],
        },

        "appam-stew": {
          name: "Appam & Stew",
          region: "Kerala",
          tagline: "Soft. Fragrant. Comforting.",
          description:
            "Soft fermented rice pancakes served with a fragrant coconut-based vegetable or meat stew.",
          history:
            "Appam has long been part of Kerala's food traditions and is enjoyed across communities in the region.",
          culture:
            "The dish reflects Kerala's use of rice, coconut, spices and slow-cooked preparations.",
          details: [
            { title: "Region", value: "Kerala" },
            { title: "Type", value: "Rice Pancake & Stew" },
            { title: "Main Ingredients", value: "Rice & Coconut" },
            { title: "Known For", value: "Soft Appam & Mild Stew" },
          ],
        },
      },
    },

    "west-india": {
      eyebrow: "WEST INDIAN CUISINE",
      title: "Vibrant. Spiced. Soulful.",
      text:
        "Explore the distinctive culinary traditions of Maharashtra, Gujarat, Goa and the western regions of India.",

      items: {
        "pav-bhaji": {
          name: "Pav Bhaji",
          region: "Maharashtra",
          tagline: "Spicy. Buttered. Street-born.",
          description:
            "A richly spiced vegetable mash served with toasted buttery pav and fresh garnishes.",
          history:
            "Pav bhaji developed as a convenient and filling food in Mumbai's working-city and street-food culture.",
          culture:
            "It remains one of Maharashtra's most recognisable street foods and is closely connected with Mumbai's food identity.",
          details: [
            { title: "Region", value: "Maharashtra" },
            { title: "Type", value: "Street Food" },
            { title: "Main Ingredients", value: "Mixed Vegetables" },
            { title: "Served With", value: "Buttered Pav" },
          ],
        },

        dhokla: {
          name: "Dhokla",
          region: "Gujarat",
          tagline: "Light. Tangy. Gujarati.",
          description:
            "A soft steamed savoury cake traditionally prepared from fermented gram or rice-based batter.",
          history:
            "Dhokla is deeply associated with Gujarat's vegetarian food traditions and has developed into many regional varieties.",
          culture:
            "It is commonly served as breakfast, a snack or part of Gujarati meals.",
          details: [
            { title: "Region", value: "Gujarat" },
            { title: "Type", value: "Steamed Savoury Snack" },
            { title: "Known For", value: "Soft & Spongy Texture" },
            { title: "Cuisine", value: "Gujarati" },
          ],
        },

        "poha-jalebi": {
          name: "Poha Jalebi",
          region: "Madhya Pradesh & Western India",
          tagline: "Simple. Sweet. Comforting.",
          description:
            "A popular combination of savoury flattened rice and crisp syrupy jalebi.",
          history:
            "Poha and jalebi became a familiar breakfast combination in parts of western and central India.",
          culture:
            "The pairing reflects the Indian tradition of combining savoury breakfast dishes with a sweet accompaniment.",
          details: [
            { title: "Region", value: "Western & Central India" },
            { title: "Type", value: "Breakfast Combination" },
            { title: "Main Dish", value: "Poha" },
            { title: "Sweet", value: "Jalebi" },
          ],
        },

        "goan-fish-curry": {
          name: "Goan Fish Curry",
          region: "Goa",
          tagline: "Tangy. Coastal. Coconut-rich.",
          description:
            "A coastal fish curry combining fresh fish with coconut, spices and a distinctive tangy flavour.",
          history:
            "Goan fish curry reflects centuries of coastal food traditions shaped by local ingredients and cultural exchange.",
          culture:
            "Fish, coconut and spices form an important part of Goa's coastal culinary identity.",
          details: [
            { title: "Region", value: "Goa" },
            { title: "Type", value: "Fish Curry" },
            { title: "Main Ingredients", value: "Fish & Coconut" },
            { title: "Style", value: "Coastal Cuisine" },
          ],
        },

        "misal-pav": {
          name: "Misal Pav",
          region: "Maharashtra",
          tagline: "Fiery. Crunchy. Full of character.",
          description:
            "A spicy sprouted-legume curry topped with farsan, onions and coriander and served with pav.",
          history:
            "Misal developed as a popular Maharashtrian food with many regional variations across the state.",
          culture:
            "It is an important part of Maharashtra's breakfast and street-food culture.",
          details: [
            { title: "Region", value: "Maharashtra" },
            { title: "Type", value: "Street Food" },
            { title: "Main Ingredient", value: "Sprouted Legumes" },
            { title: "Served With", value: "Pav & Farsan" },
          ],
        },

        "undhiyu": {
          name: "Undhiyu",
          region: "Gujarat",
          tagline: "Seasonal. Rustic. Celebratory.",
          description:
            "A traditional Gujarati mixed-vegetable preparation made with seasonal vegetables, spices and herbs.",
          history:
            "Undhiyu is strongly associated with Gujarat's seasonal winter food traditions.",
          culture:
            "It is especially important during festive occasions and celebrations and represents Gujarat's vegetable-rich cuisine.",
          details: [
            { title: "Region", value: "Gujarat" },
            { title: "Type", value: "Mixed Vegetable Dish" },
            { title: "Known For", value: "Seasonal Vegetables" },
            { title: "Cuisine", value: "Gujarati" },
          ],
        },
      },
    },

    "street-food": {
      eyebrow: "INDIAN STREET FOOD",
      title: "Bold flavours. Everyday joy.",
      text:
        "Discover India's irresistible street-food culture, from spicy chaats to famous regional favourites.",

      items: {
        "pani-puri": {
          name: "Pani Puri",
          region: "Pan India",
          tagline: "Crispy. Tangy. Irresistible.",
          description:
            "Crisp hollow puris filled with spiced water, chutneys, potatoes and other regional fillings.",
          history:
            "Pani puri has developed into one of India's most recognisable street foods with many regional names and variations.",
          culture:
            "It is strongly connected with bustling markets, roadside stalls and social street-food experiences.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Street Food" },
            { title: "Main Elements", value: "Puri, Pani & Chutneys" },
            { title: "Known For", value: "Tangy Spicy Flavour" },
          ],
        },

        samosa: {
          name: "Samosa",
          region: "Pan India",
          tagline: "Crispy. Spiced. Beloved.",
          description:
            "A crisp triangular pastry filled with spiced potatoes, peas or other regional fillings.",
          history:
            "Samosa became deeply established in Indian food culture through centuries of culinary exchange and regional adaptation.",
          culture:
            "It is now a familiar snack at tea stalls, celebrations, markets and homes across India.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Fried Snack" },
            { title: "Common Filling", value: "Potato & Peas" },
            { title: "Served With", value: "Chutney" },
          ],
        },

        "aloo-tikki": {
          name: "Aloo Tikki",
          region: "North India",
          tagline: "Crispy. Tangy. Chaat-style.",
          description:
            "Crisp potato patties served with chutneys, yogurt, spices and crunchy toppings.",
          history:
            "Aloo tikki became a popular part of North Indian chaat and street-food traditions.",
          culture:
            "It is commonly enjoyed at street stalls and chaat shops with a variety of regional toppings.",
          details: [
            { title: "Region", value: "North India" },
            { title: "Type", value: "Chaat / Street Food" },
            { title: "Main Ingredient", value: "Potato" },
            { title: "Toppings", value: "Chutney, Yogurt & Sev" },
          ],
        },

        "pav-bhaji-street": {
          name: "Pav Bhaji",
          region: "Mumbai, Maharashtra",
          tagline: "Buttery. Spicy. Street-born.",
          description:
            "Spiced mashed vegetables served with buttered pav, onions and lemon.",
          history:
            "Pav bhaji became closely associated with Mumbai's fast-moving street-food culture.",
          culture:
            "It represents the city's informal food culture and is enjoyed across generations.",
          details: [
            { title: "Region", value: "Mumbai, Maharashtra" },
            { title: "Type", value: "Street Food" },
            { title: "Served With", value: "Pav" },
            { title: "Known For", value: "Spiced Vegetable Bhaji" },
          ],
        },

        bhel: {
          name: "Bhel Puri",
          region: "Maharashtra",
          tagline: "Crunchy. Tangy. Fresh.",
          description:
            "A light chaat made with puffed rice, vegetables, chutneys, sev and fresh herbs.",
          history:
            "Bhel puri became strongly associated with Mumbai's beaches and street-food culture.",
          culture:
            "It reflects the lively, quick and highly adaptable nature of Indian chaat.",
          details: [
            { title: "Region", value: "Maharashtra" },
            { title: "Type", value: "Chaat" },
            { title: "Main Ingredient", value: "Puffed Rice" },
            { title: "Known For", value: "Sweet, Sour & Spicy Chutneys" },
          ],
        },

        "dahi-puri": {
          name: "Dahi Puri",
          region: "Western India",
          tagline: "Creamy. Tangy. Crunchy.",
          description:
            "Crisp puris filled with potato, chutneys, yogurt, sev and fresh garnishes.",
          history:
            "Dahi puri developed within India's rich chaat traditions and became especially popular in western Indian cities.",
          culture:
            "The dish combines multiple textures and flavours in the lively style of Indian street chaat.",
          details: [
            { title: "Region", value: "Western India" },
            { title: "Type", value: "Chaat" },
            { title: "Main Elements", value: "Puri, Yogurt & Chutneys" },
            { title: "Known For", value: "Multiple Textures" },
          ],
        },
      },
    },

    "sweets-drinks": {
      eyebrow: "INDIAN SWEETS & DRINKS",
      title: "Sweet traditions. Refreshing moments.",
      text:
        "Taste India's beloved sweets, traditional desserts and refreshing drinks enjoyed across generations.",

      items: {
        "gulab-jamun": {
          name: "Gulab Jamun",
          region: "Pan India",
          tagline: "Warm. Soft. Syrupy.",
          description:
            "Soft fried milk-solid dumplings soaked in fragrant sugar syrup.",
          history:
            "Gulab jamun became deeply established in the Indian subcontinent's sweet-making traditions.",
          culture:
            "It is commonly served at weddings, festivals, celebrations and family gatherings.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Sweet" },
            { title: "Main Ingredient", value: "Milk Solids" },
            { title: "Known For", value: "Sugar Syrup" },
          ],
        },

        jalebi: {
          name: "Jalebi",
          region: "Pan India",
          tagline: "Crispy. Syrupy. Golden.",
          description:
            "Crisp spiral-shaped sweets fried and soaked in fragrant sugar syrup.",
          history:
            "Jalebi became an established part of Indian sweet traditions through centuries of culinary exchange and regional adaptation.",
          culture:
            "It is enjoyed at festivals, celebrations, breakfast stalls and sweet shops across India.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Fried Sweet" },
            { title: "Known For", value: "Crisp Spiral Shape" },
            { title: "Served", value: "Warm or Fresh" },
          ],
        },

        rasmalai: {
          name: "Rasmalai",
          region: "Eastern India",
          tagline: "Soft. Creamy. Delicate.",
          description:
            "Soft chhena discs served in sweetened, saffron-infused milk.",
          history:
            "Rasmalai became an important sweet of eastern India's chhena-based dessert traditions.",
          culture:
            "It is commonly served during celebrations and festive occasions.",
          details: [
            { title: "Region", value: "Eastern India" },
            { title: "Type", value: "Milk-based Sweet" },
            { title: "Main Ingredient", value: "Chhena & Milk" },
            { title: "Known For", value: "Creamy Saffron Milk" },
          ],
        },

        lassi: {
          name: "Lassi",
          region: "Punjab & North India",
          tagline: "Cool. Creamy. Refreshing.",
          description:
            "A traditional yogurt-based drink that can be served sweet, salted or flavoured.",
          history:
            "Lassi has long been part of North Indian dairy and refreshment traditions.",
          culture:
            "It is especially associated with Punjabi food culture and is commonly enjoyed alongside meals.",
          details: [
            { title: "Region", value: "Punjab & North India" },
            { title: "Type", value: "Traditional Drink" },
            { title: "Main Ingredient", value: "Yogurt" },
            { title: "Variations", value: "Sweet, Salted & Flavoured" },
          ],
        },

        "masala-chai": {
          name: "Masala Chai",
          region: "Pan India",
          tagline: "Warm. Aromatic. Comforting.",
          description:
            "Tea brewed with milk, spices and sugar, enjoyed throughout India.",
          history:
            "Tea became widely integrated into Indian everyday life during the modern development of India's tea industry and urban food culture.",
          culture:
            "Masala chai is deeply connected with homes, roadside tea stalls, offices and social conversations.",
          details: [
            { title: "Region", value: "Pan India" },
            { title: "Type", value: "Tea Beverage" },
            { title: "Main Ingredients", value: "Tea, Milk & Spices" },
            { title: "Known For", value: "Aromatic Spice Blend" },
          ],
        },

        "filter-coffee": {
          name: "South Indian Filter Coffee",
          region: "South India",
          tagline: "Rich. Aromatic. Timeless.",
          description:
            "A strong, fragrant coffee traditionally brewed through a South Indian metal filter and served with hot milk.",
          history:
            "Filter coffee became deeply established in South India's urban and household food culture.",
          culture:
            "It is closely associated with homes, cafés and everyday social life across the southern states.",
          details: [
            { title: "Region", value: "South India" },
            { title: "Type", value: "Traditional Beverage" },
            { title: "Main Ingredients", value: "Coffee & Milk" },
            { title: "Served In", value: "Steel Tumbler & Dabara" },
          ],
        },
      },
    },
  },
};

export default foods;