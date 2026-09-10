import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import PlaceCommunity from "../components/PlaceCommunity";

export default function Destination() {
  const { slug } = useParams();

  const d = destinations.find((x) => x.slug === slug);

  // Destination not found
  if (!d) {
    return (
      <section className="section center">
        <h1>Destination not found.</h1>

        <p>
          We couldn't find the destination you're looking for.
        </p>

        <Link to="/explore" className="secondary">
          ← Back to Explore
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="destHero">

        <img
          src={d.image}
          alt={d.name}
        />

        <div className="destHeroContent">

          <span>{d.type}</span>

          <h1>{d.name}</h1>

          <p>📍 {d.state}, India</p>

        </div>

      </section>


      {/* =====================================================
          DESTINATION CONTENT
      ===================================================== */}

      <section className="destContent">

        {/* MAIN STORY */}

        <main>

          <Link
            to="/explore"
            className="backLink"
          >
            ← Back to Explore
          </Link>

          <span className="detailEyebrow">
            THE STORY
          </span>

          <h2>
            Discover {d.name}.
          </h2>

          <p>
            {d.short}
          </p>

          <p>
            Aarambh helps you understand the place before you
            experience it — from its heritage and culture to
            local food, traditions and everyday life.
          </p>


          {/* =================================================
              EXPERIENCES
          ================================================= */}

          <div className="detailGrid">

            <div className="feature">
              <b>🏛️</b>

              <h3>Heritage</h3>

              <p>
                Discover historic landmarks, monuments and
                architectural stories that shaped {d.name}.
              </p>
            </div>


            <div className="feature">
              <b>🎭</b>

              <h3>Culture</h3>

              <p>
                Experience the traditions, festivals, art and
                everyday culture that make this place unique.
              </p>
            </div>


            <div className="feature">
              <b>🍛</b>

              <h3>Local Food</h3>

              <p>
                Explore authentic flavours, traditional dishes
                and local food experiences.
              </p>
            </div>


            <div className="feature">
              <b>🎨</b>

              <h3>Crafts</h3>

              <p>
                Discover local craftsmanship, handmade art and
                traditions passed through generations.
              </p>
            </div>

          </div>

        </main>


        {/* =================================================
            SIDE PANEL
        ================================================= */}

        <aside>

          <span className="detailEyebrow">
            PLAN YOUR VISIT
          </span>

          <h3>
            Make {d.name} part of your journey.
          </h3>

          <p>
            Build a personalized itinerary based on your
            available time, budget and interests.
          </p>

          <Link
            className="primary full"
            to="/planner"
          >
            Plan This Trip →
          </Link>

          <button className="secondary full">
            ♡ Save Destination
          </button>

        </aside>


        <PlaceCommunity
          placeName={d.name}
          placeId={`destination-${d.slug}`}
          placeType="Destination"
        />
      </section>
    </>
  );
}
