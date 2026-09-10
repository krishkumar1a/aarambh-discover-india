import { Link, useParams } from "react-router-dom";
import PlaceCommunity from "../components/PlaceCommunity";

const gems = {
  "tawang-monastery": {
    name: "Tawang Monastery",
    state: "Arunachal Pradesh",
    location: "Tawang",
    image: "/images/heritage/hiddengems/tawang.webp",
    category: "BUDDHIST HERITAGE",
    intro:
      "High in the mountains of Arunachal Pradesh, Tawang Monastery stands as one of the most remarkable centres of Tibetan Buddhist culture in India.",

    story: [
      {
        title: "A Monastery in the Mountains",
        text:
          "Surrounded by the dramatic landscapes of the Eastern Himalayas, Tawang is a place where spirituality and nature exist side by side. The monastery overlooks the town and surrounding valleys, creating a striking cultural landscape.",
      },
      {
        title: "A Living Tradition",
        text:
          "The monastery continues to play an important role in Buddhist religious life. Monks, prayer rituals, festivals and traditional practices make Tawang more than a historical monument — it remains a living centre of culture.",
      },
      {
        title: "Why Visit",
        text:
          "The combination of Himalayan scenery, Buddhist architecture and peaceful surroundings makes Tawang one of India's most memorable lesser-known cultural destinations.",
      },
    ],

    facts: [
      ["STATE", "Arunachal Pradesh"],
      ["LOCATION", "Tawang"],
      ["TYPE", "Buddhist Heritage"],
      ["KNOWN FOR", "Monastery & Himalayan Culture"],
    ],
  },

  "majuli": {
    name: "Majuli",
    state: "Assam",
    location: "Brahmaputra River",
    image: "/images/heritage/hiddengems/majuli.webp",
    category: "LIVING CULTURE",

    intro:
      "Majuli is a culturally distinctive river island in Assam, celebrated for its monasteries, traditional arts, festivals and unique way of life.",

    story: [
      {
        title: "An Island Shaped by the River",
        text:
          "Majuli's identity is deeply connected with the Brahmaputra. The river has shaped the island's landscape and influenced the lives, traditions and communities that have developed here.",
      },
      {
        title: "Sattras and Culture",
        text:
          "The island is known for its sattra institutions, which preserve Assamese religious traditions, music, dance, theatre and handicrafts.",
      },
      {
        title: "A Different Side of Assam",
        text:
          "Visitors can experience a slower rhythm of life, traditional villages, cultural performances and the distinctive landscape of the Brahmaputra.",
      },
    ],

    facts: [
      ["STATE", "Assam"],
      ["LOCATION", "Brahmaputra River"],
      ["TYPE", "Cultural Landscape"],
      ["KNOWN FOR", "Sattras & Assamese Culture"],
    ],
  },

  "champaner-pavagadh": {
    name: "Champaner-Pavagadh",
    state: "Gujarat",
    location: "Panchmahal",
    image: "/images/heritage/hiddengems/champaner.webp",
    category: "ARCHAEOLOGICAL HERITAGE",

    intro:
      "Champaner-Pavagadh preserves an extraordinary combination of archaeological remains, religious architecture, fortifications and historic urban spaces.",

    story: [
      {
        title: "A City of Many Layers",
        text:
          "The landscape around Champaner contains monuments representing different periods of Indian history. Fortifications, temples, mosques, gateways and water structures exist across the historic site.",
      },
      {
        title: "Pavagadh Hill",
        text:
          "The historic settlement is closely connected with Pavagadh Hill, an important religious and cultural landmark that dominates the surrounding landscape.",
      },
      {
        title: "Architecture in Stone",
        text:
          "The surviving structures demonstrate the craftsmanship and architectural traditions that developed in western India over centuries.",
      },
    ],

    facts: [
      ["STATE", "Gujarat"],
      ["LOCATION", "Panchmahal"],
      ["TYPE", "Archaeological Heritage"],
      ["KNOWN FOR", "Historic Architecture"],
    ],
  },

  "dholavira": {
    name: "Dholavira",
    state: "Gujarat",
    location: "Kutch",
    image: "/images/heritage/hiddengems/dholavira.webp",
    category: "ANCIENT CIVILISATION",

    intro:
      "Dholavira is one of the most remarkable archaeological sites associated with the Indus Valley Civilisation, revealing an advanced ancient urban settlement.",

    story: [
      {
        title: "A City from the Ancient World",
        text:
          "Located in the landscape of the Rann of Kutch, Dholavira preserves the remains of an ancient settlement that flourished thousands of years ago.",
      },
      {
        title: "Remarkable Water Management",
        text:
          "The site is particularly notable for its sophisticated water-management structures, reservoirs and channels, demonstrating the importance of planning in the ancient settlement.",
      },
      {
        title: "Understanding the Harappan World",
        text:
          "Dholavira provides valuable insight into the urban organisation, technology, craftsmanship and everyday life of the people of the Indus Valley Civilisation.",
      },
    ],

    facts: [
      ["STATE", "Gujarat"],
      ["LOCATION", "Kutch"],
      ["TYPE", "Archaeological Site"],
      ["KNOWN FOR", "Harappan Civilisation"],
    ],
  },

  "mandu": {
    name: "Mandu",
    state: "Madhya Pradesh",
    location: "Dhar District",
    image: "/images/heritage/hiddengems/mandu.webp",
    category: "MEDIEVAL HERITAGE",

    intro:
      "Perched on a historic plateau, Mandu is a city of grand monuments, romantic legends and extraordinary medieval architecture.",

    story: [
      {
        title: "A City of Monuments",
        text:
          "Mandu is filled with palaces, mosques, gateways, pavilions and other historic structures spread across a dramatic landscape.",
      },
      {
        title: "Architecture and Romance",
        text:
          "The city's monuments are closely associated with stories of royal life and the famous legend of Baz Bahadur and Rani Roopmati.",
      },
      {
        title: "The Landscape of Mandu",
        text:
          "Its combination of architecture, lakes, hills and seasonal greenery gives Mandu a distinctive character that sets it apart from many other historic cities.",
      },
    ],

    facts: [
      ["STATE", "Madhya Pradesh"],
      ["LOCATION", "Dhar District"],
      ["TYPE", "Medieval Heritage"],
      ["KNOWN FOR", "Palaces & Architecture"],
    ],
  },

  "chettinad": {
    name: "Chettinad",
    state: "Tamil Nadu",
    location: "Sivaganga & Pudukottai region",
    image: "/images/heritage/hiddengems/chetinad.webp",
    category: "ARCHITECTURAL & CULTURAL HERITAGE",

    intro:
      "Chettinad is a distinctive cultural region known for its magnificent mansions, traditional architecture, craftsmanship and celebrated cuisine.",

    story: [
      {
        title: "The Grand Mansions",
        text:
          "Chettinad's historic houses are famous for their spacious courtyards, decorative interiors, carved wooden elements and use of locally and internationally sourced materials.",
      },
      {
        title: "A Distinctive Community Heritage",
        text:
          "The region reflects the history and cultural identity of the Chettiar community, whose trade networks influenced architecture, lifestyle and material culture.",
      },
      {
        title: "More Than Architecture",
        text:
          "Chettinad's identity also lives through its food, crafts, festivals and traditional ways of life, making it an important example of living cultural heritage.",
      },
    ],

    facts: [
      ["STATE", "Tamil Nadu"],
      ["LOCATION", "Chettinad Region"],
      ["TYPE", "Cultural Heritage"],
      ["KNOWN FOR", "Mansions & Cuisine"],
    ],
  },
};

export default function HiddenGemDetail() {
  const { slug } = useParams();
  const gem = gems[slug];

  // =====================================================
  // PLACE NOT FOUND
  // =====================================================

  if (!gem) {
    return (
      <section className="section page">
        <h1>Place not found</h1>

        <Link
          to="/heritage/hidden-gems"
          className="secondary"
        >
          ← Back to Hidden Gems
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
          src={gem.image}
          alt={gem.name}
        />

        <div className="heritageDetailOverlay">
          <span>{gem.category}</span>

          <h1>{gem.name}</h1>

          <p>{gem.intro}</p>
        </div>
      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="heritageDetailContent">

        {/* =================================================
            TOP NAVIGATION ROW
        ================================================= */}

        <div className="heritageDetailTopRow">

          {/* LEFT */}
          <Link
            to="/heritage/hidden-gems"
            className="backLink"
          >
            ← Back to Hidden Gems
          </Link>


          {/* RIGHT */}
          <Link
            to={`/living-heritage/heritage/${slug}`}
            className="living-detail-cta"
          >
            ✦ Explore Living Heritage of {gem.name} →
          </Link>

        </div>


        {/* =================================================
            MAIN CONTENT + SIDEBAR
        ================================================= */}

        <div className="heritageDetailLayout">

          {/* =========================
              MAIN STORY
          ========================= */}

          <main>

            <span className="detailEyebrow">
              THE STORY
            </span>

            {gem.story.map((section) => (
              <div
                key={section.title}
                className="heritageStorySection"
              >

                <h2>
                  {section.title}
                </h2>

                <p>
                  {section.text}
                </p>

              </div>
            ))}

          </main>


          {/* =========================
              SIDE CARD
          ========================= */}

          <aside className="heritageDetailAside">

            <h3>
              At a glance
            </h3>

            {gem.facts.map(([label, value]) => (
              <div
                className="heritageDetailItem"
                key={label}
              >

                <small>
                  {label}
                </small>

                <strong>
                  {value}
                </strong>

              </div>
            ))}

          </aside>

        </div>


        <PlaceCommunity
          placeName={gem.name}
          placeId={`hidden-gem-${slug}`}
          placeType="Hidden Gem"
        />
      </section>
    </>
  );
}
