export const locationHeritage = {
  varanasi: {
    iconic: [
      { name: "Kashi Vishwanath Temple", tag: "Sacred heritage", description: "One of India's most important living spiritual traditions." },
      { name: "Dashashwamedh Ghat", tag: "Living heritage", description: "A historic Ganga ghat known for its evening aarti." },
      { name: "Sarnath", tag: "Buddhist heritage", description: "An important site connected with the Buddha's first sermon." },
    ],
    hidden: [
      { name: "Manikarnika Ghat Lanes", tag: "Ancient neighbourhood", description: "Explore the layered stories and narrow lanes around one of Varanasi's oldest riverfront areas." },
      { name: "Ramnagar Fort", tag: "Royal heritage", description: "A riverside fort and museum with a quieter view of the region's history." },
      { name: "Alamgir Mosque Area", tag: "Architectural layers", description: "A striking part of Varanasi's built heritage overlooking the Ganga." },
    ],
  },
  jaipur: {
    iconic: [
      { name: "Amber Fort", tag: "Rajput architecture", description: "A grand hill fort combining Rajput and Mughal architectural traditions." },
      { name: "Hawa Mahal", tag: "Pink City icon", description: "Jaipur's famous palace façade built for royal women to observe city life." },
      { name: "Jantar Mantar", tag: "UNESCO heritage", description: "A monumental astronomical observatory from the eighteenth century." },
    ],
    hidden: [
      { name: "Galtaji Temple Complex", tag: "Hidden valley", description: "Historic temples and sacred kunds tucked into the Aravalli hills." },
      { name: "Sisodia Rani Garden", tag: "Royal garden", description: "A peaceful terraced garden with murals and palace architecture." },
      { name: "Panna Meena ka Kund", tag: "Stepwell", description: "A photogenic geometric stepwell near Amer with striking symmetry." },
    ],
  },
  kolkata: {
    iconic: [
      { name: "Victoria Memorial", tag: "Colonial heritage", description: "A landmark museum and memorial surrounded by expansive gardens." },
      { name: "Indian Museum", tag: "Cultural history", description: "One of India's oldest museums with remarkable historical collections." },
      { name: "Howrah Bridge", tag: "City icon", description: "An engineering landmark and an enduring symbol of Kolkata." },
    ],
    hidden: [
      { name: "Marble Palace", tag: "Historic residence", description: "A nineteenth-century mansion known for its eclectic art and architecture." },
      { name: "Jorasanko Thakur Bari", tag: "Literary heritage", description: "The ancestral home associated with Rabindranath Tagore and Bengal's cultural renaissance." },
      { name: "South Park Street Cemetery", tag: "Colonial history", description: "A remarkable eighteenth-century cemetery with atmospheric monuments." },
    ],
  },
  patna: {
    iconic: [
      { name: "Golghar", tag: "Historic landmark", description: "A distinctive eighteenth-century granary and city landmark." },
      { name: "Bihar Museum", tag: "Regional heritage", description: "A modern gateway to Bihar's archaeological and cultural history." },
      { name: "Takht Sri Harmandir Sahib", tag: "Sikh heritage", description: "A major Sikh pilgrimage site in the historic city." },
    ],
    hidden: [
      { name: "Kumhrar Archaeological Park", tag: "Ancient Patliputra", description: "Explore remains connected with the ancient Mauryan capital." },
      { name: "Agam Kuan", tag: "Ancient mystery", description: "A historic well surrounded by legends and links to ancient Patna." },
      { name: "Begumpur Mosque Area", tag: "Historic layers", description: "A quieter glimpse into the city's architectural past." },
    ],
  },
  "bodh gaya": {
    iconic: [
      { name: "Mahabodhi Temple", tag: "UNESCO heritage", description: "The sacred complex associated with the Buddha's enlightenment." },
      { name: "Bodhi Tree", tag: "Sacred landmark", description: "A living symbol at the heart of the Buddhist pilgrimage landscape." },
      { name: "Great Buddha Statue", tag: "Modern icon", description: "A prominent landmark overlooking the spiritual town." },
    ],
    hidden: [
      { name: "Dungeshwari Hills", tag: "Meditation heritage", description: "Caves associated with the Buddha's period of severe ascetic practice." },
      { name: "Sujata Stupa", tag: "Ancient story", description: "A peaceful site connected with the story of Sujata's offering." },
      { name: "Traditional Monastery Trails", tag: "Global Buddhist culture", description: "Discover quieter monasteries representing Buddhist communities from around the world." },
    ],
  },
};

export function getLocationHeritage(location) {
  const key = location.trim().toLowerCase();
  return locationHeritage[key] || null;
}
