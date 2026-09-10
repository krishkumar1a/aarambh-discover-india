import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const home = t?.home || {};

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">
        <div className="heroContent">

          <span className="heroEyebrow">
            {home.heroEyebrow || "HERITAGE • CULTURE • SMART TOURISM"}
          </span>

          <h1>
            {home.heroTitle || "Discover India."}
            <br />
            <i>
              {home.heroTitleItalic || "Beyond Places."}
            </i>
          </h1>

          <p className="heroDescription">
            {home.heroDescription ||
              "Explore the stories, traditions, food, crafts and living culture that make every destination unique."}
          </p>

          <div className="heroActions">

            <Link
              className="primary heroButton"
              to="/explore"
            >
              {home.exploreIndia || "Explore India →"}
            </Link>

            <Link
              className="secondary heroButton secondaryButton"
              to="/planner"
            >
              {home.planMyJourney || "Plan My Journey"}
            </Link>

          </div>
        </div>
      </section>

      <section className="homeJourneyStats" aria-label="Aarambh highlights">
        <div><strong>500+</strong><span>Heritage stories</span></div>
        <div><strong>28</strong><span>States to explore</span></div>
        <div><strong>∞</strong><span>Local perspectives</span></div>
      </section>


      {/* =====================================================
          EXPLORE CATEGORIES
      ===================================================== */}

      <section className="section">

        <SectionHeading
          eyebrow={home.exploreEyebrow || "START EXPLORING"}
          title={home.exploreTitle || "India, in every story."}
          text={
            home.exploreDescription ||
            "Find places through the culture, people and traditions that give them meaning."
          }
        />

        <div className="featureGrid">

          {/* HERITAGE */}

          <Link
            to="/heritage"
            className="feature"
          >
            <b>🏛️</b>

            <h3>
              {home.heritage || "Heritage"}
            </h3>

            <p>
              {home.heritageDescription ||
                "Explore India's monuments, forts, temples and historic places."}
            </p>

            <span>
              {home.discover || "Discover"} →
            </span>
          </Link>


          {/* CULTURE */}

          <Link
            to="/culture"
            className="feature"
          >
            <b>🎭</b>

            <h3>
              {home.culture || "Culture"}
            </h3>

            <p>
              {home.cultureDescription ||
                "Discover traditions, festivals, dance, music and lifestyles."}
            </p>

            <span>
              {home.discover || "Discover"} →
            </span>
          </Link>


          {/* FOOD */}

          <Link
            to="/food"
            className="feature"
          >
            <b>🍛</b>

            <h3>
              {home.food || "Food"}
            </h3>

            <p>
              {home.foodDescription ||
                "Taste India's regional cuisines and famous local dishes."}
            </p>

            <span>
              {home.discover || "Discover"} →
            </span>
          </Link>


          {/* CRAFTS */}

          <Link
            to="/crafts"
            className="feature"
          >
            <b>🎨</b>

            <h3>
              {home.crafts || "Crafts"}
            </h3>

            <p>
              {home.craftsDescription ||
                "Explore India's traditional crafts, art and craftsmanship."}
            </p>

            <span>
              {home.discover || "Discover"} →
            </span>
          </Link>

        </div>
      </section>


      {/* =====================================================
          FEATURED DESTINATIONS
      ===================================================== */}

      <section className="section muted">

        <SectionHeading
          eyebrow={
            home.featuredEyebrow ||
            "FEATURED DESTINATIONS"
          }
          title={
            home.featuredTitle ||
            "Where will your story begin?"
          }
        />

        <div className="grid">

          {destinations.slice(0, 3).map((d) => (
            <DestinationCard
              d={d}
              key={d.slug}
            />
          ))}

        </div>
      </section>


      {/* =====================================================
          SMART TRIP PLANNER
      ===================================================== */}

      <section className="darkPromo">

        <span>
          {home.plannerEyebrow ||
            "SMART TRIP PLANNER"}
        </span>

        <h2>
          {home.plannerTitle ||
            "Don't just visit."}
          <br />

          <i>
            {home.plannerTitleItalic ||
              "Experience."}
          </i>
        </h2>

        <p>
          {home.plannerDescription ||
            "Tell Aarambh your time, budget and interests. Build a culture-aware journey."}
        </p>

        <Link
          className="secondary promoButton"
          to="/planner"
        >
          {home.buildJourney ||
            "Build My Journey →"}
        </Link>

      </section>
    </>
  );
}