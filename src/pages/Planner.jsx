import { useState } from "react";
import SafetyIntelligence from "../components/SafetyIntelligence";
import MapLocation from "../components/MapLocation";
import HeritageHighlights from "../components/HeritageHighlights";
import TravelChecklist from "../components/TravelChecklist";

const interests = [
  {
    id: "heritage",
    icon: "🏛️",
    title: "Heritage",
    text: "Monuments, forts & history",
  },
  {
    id: "food",
    icon: "🍛",
    title: "Food",
    text: "Local flavours & cuisine",
  },
  {
    id: "culture",
    icon: "🎭",
    title: "Culture",
    text: "Traditions, art & stories",
  },
  {
    id: "nature",
    icon: "🌿",
    title: "Nature",
    text: "Rivers, hills & landscapes",
  },
  {
    id: "crafts",
    icon: "🪔",
    title: "Crafts",
    text: "Handmade art & local skills",
  },
  {
    id: "spiritual",
    icon: "🛕",
    title: "Spiritual",
    text: "Temples, rituals & peace",
  },
];

const itinerary = [
  {
    day: "DAY 01",
    title: "Arrival & First Impressions",
    places: [
      ["09:00 AM", "Arrival & hotel check-in"],
      ["11:00 AM", "Old City Heritage Walk"],
      ["01:30 PM", "Traditional Local Lunch"],
      ["04:00 PM", "Explore local markets & crafts"],
      ["07:00 PM", "Evening cultural experience"],
    ],
  },
  {
    day: "DAY 02",
    title: "History, Culture & Flavours",
    places: [
      ["08:00 AM", "Visit an iconic heritage site"],
      ["10:30 AM", "Explore historic neighbourhoods"],
      ["01:00 PM", "Authentic regional food experience"],
      ["04:00 PM", "Local art & craft discovery"],
      ["07:00 PM", "Sunset / evening cultural experience"],
    ],
  },
  {
    day: "DAY 03",
    title: "A Slower Side of the City",
    places: [
      ["08:00 AM", "Morning nature / spiritual experience"],
      ["11:00 AM", "Hidden local gem"],
      ["01:00 PM", "Lunch at a local favourite"],
      ["03:30 PM", "Free exploration"],
      ["06:30 PM", "Farewell evening experience"],
    ],
  },
];

export default function Planner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState("moderate");
  const [pace, setPace] = useState("balanced");
  const [selected, setSelected] = useState(["heritage", "food"]);
  const [generated, setGenerated] = useState(false);

  const toggleInterest = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const generateJourney = () => {
    setGenerated(true);

    setTimeout(() => {
      document
        .getElementById("journey-result")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section className="planner-page">
      {/* HERO */}
      <div className="planner-hero">
        <div className="planner-hero-content">
          <span className="planner-eyebrow">✦ SMART TRIP PLANNER</span>

          <h1>
            Plan a journey
            <br />
            <em>worth remembering.</em>
          </h1>

          <p>
            Tell us what you love, how you travel and what you have in mind.
            We'll shape it into a meaningful cultural journey.
          </p>

          <div className="planner-trust">
            <span>✦ Culture-aware</span>
            <span>✦ Personalised</span>
            <span>✦ Flexible</span>
          </div>
        </div>

        <div className="hero-route-card">
          <div className="route-top">
            <span>YOUR JOURNEY</span>
            <span>01 — 03</span>
          </div>

          <div className="route-line">
            <div className="route-dot active"></div>
            <div className="route-info">
              <small>START</small>
              <strong>{destination || "Your destination"}</strong>
            </div>
          </div>

          <div className="route-line">
            <div className="route-dot"></div>
            <div className="route-info">
              <small>EXPERIENCE</small>
              <strong>
                {selected.length > 0
                  ? `${selected.length} interests selected`
                  : "Choose your interests"}
              </strong>
            </div>
          </div>

          <div className="route-line">
            <div className="route-dot"></div>
            <div className="route-info">
              <small>DURATION</small>
              <strong>
                {days} {days === 1 ? "Day" : "Days"}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* PLANNER FORM */}
      <div className="planner-builder">
        <div className="builder-header">
          <div>
            <span>BUILD YOUR JOURNEY</span>
            <h2>Start with what matters to you.</h2>
          </div>

          <div className="progress">
            <div className="progress-bar">
              <span></span>
            </div>
            <small>Almost there</small>
          </div>
        </div>

        {/* DESTINATION */}
        <div className="planner-section">
          <div className="section-number">01</div>

          <div className="planner-section-content">
            <div className="section-title">
              <h3>Where do you want to go?</h3>
              <p>Choose a destination or start exploring.</p>
            </div>

            <div className="destination-input">
              <span>⌖</span>
              <input
                type="text"
                placeholder="Enter a city or destination..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="popular-destinations">
              <span>Popular:</span>

              {["Varanasi", "Patna", "Jaipur", "Kolkata", "Bodh Gaya"].map(
                (city) => (
                  <button
                    key={city}
                    onClick={() => setDestination(city)}
                    className={destination === city ? "selected" : ""}
                  >
                    {city}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* DURATION */}
        <div className="planner-section">
          <div className="section-number">02</div>

          <div className="planner-section-content">
            <div className="section-title">
              <h3>How long are you staying?</h3>
              <p>We'll shape the experience around your time.</p>
            </div>

            <div className="duration-options">
              {[1, 2, 3, 4, 5, 7].map((number) => (
                <button
                  key={number}
                  className={days === number ? "active" : ""}
                  onClick={() => setDays(number)}
                >
                  <strong>{number}</strong>
                  <span>{number === 1 ? "Day" : "Days"}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* INTERESTS */}
        <div className="planner-section">
          <div className="section-number">03</div>

          <div className="planner-section-content">
            <div className="section-title">
              <h3>What do you want to experience?</h3>
              <p>Select everything that sounds like you.</p>
            </div>

            <div className="interest-grid">
              {interests.map((interest) => {
                const active = selected.includes(interest.id);

                return (
                  <button
                    key={interest.id}
                    className={`interest-card ${active ? "active" : ""}`}
                    onClick={() => toggleInterest(interest.id)}
                  >
                    <div className="interest-icon">{interest.icon}</div>

                    <div>
                      <strong>{interest.title}</strong>
                      <span>{interest.text}</span>
                    </div>

                    <div className="check">
                      {active ? "✓" : ""}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* BUDGET + PACE */}
        <div className="planner-split">
          <div className="mini-section">
            <span className="mini-label">04 — BUDGET</span>

            <h3>What's your travel style?</h3>

            <div className="choice-row">
              <button
                className={budget === "budget" ? "active" : ""}
                onClick={() => setBudget("budget")}
              >
                <strong>₹</strong>
                <span>Budget</span>
              </button>

              <button
                className={budget === "moderate" ? "active" : ""}
                onClick={() => setBudget("moderate")}
              >
                <strong>₹₹</strong>
                <span>Comfort</span>
              </button>

              <button
                className={budget === "premium" ? "active" : ""}
                onClick={() => setBudget("premium")}
              >
                <strong>₹₹₹</strong>
                <span>Premium</span>
              </button>
            </div>
          </div>

          <div className="mini-section">
            <span className="mini-label">05 — PACE</span>

            <h3>How do you like to travel?</h3>

            <div className="choice-row">
              <button
                className={pace === "slow" ? "active" : ""}
                onClick={() => setPace("slow")}
              >
                <strong>◌</strong>
                <span>Slow</span>
              </button>

              <button
                className={pace === "balanced" ? "active" : ""}
                onClick={() => setPace("balanced")}
              >
                <strong>◉</strong>
                <span>Balanced</span>
              </button>

              <button
                className={pace === "packed" ? "active" : ""}
                onClick={() => setPace("packed")}
              >
                <strong>✦</strong>
                <span>Packed</span>
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="planner-submit">
          <div>
            <span>Your choices are ready.</span>
            <strong>
              {destination || "Your destination"} · {days}{" "}
              {days === 1 ? "day" : "days"}
            </strong>
          </div>

          <button onClick={generateJourney}>
            Create My Journey
            <span>→</span>
          </button>
        </div>
      </div>

      <HeritageHighlights location={destination} />

      <TravelChecklist destination={destination} />

      <div className="planner-intelligence">
        <SafetyIntelligence destination={destination || "Coorg"} />
        <MapLocation name={destination || "Coorg"} description="Your selected destination on an interactive OpenStreetMap view." />
      </div>

      {/* RESULT */}
      {generated && (
        <div className="journey-result" id="journey-result">
          <div className="result-heading">
            <div>
              <span>✦ YOUR PERSONAL JOURNEY</span>

              <h2>
                {destination || "Your Destination"}
              </h2>

              <p>
                A {days}-day journey designed around your interests,
                pace and travel style.
              </p>
            </div>

            <div className="result-meta">
              <div>
                <small>DURATION</small>
                <strong>{days} Days</strong>
              </div>

              <div>
                <small>STYLE</small>
                <strong>
                  {pace.charAt(0).toUpperCase() + pace.slice(1)}
                </strong>
              </div>

              <div>
                <small>INTERESTS</small>
                <strong>{selected.length}</strong>
              </div>
            </div>
          </div>

          <div className="itinerary">
            {itinerary.slice(0, days).map((day, index) => (
              <div className="itinerary-day" key={day.day}>
                <div className="day-label">
                  <span>{day.day}</span>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                </div>

                <div className="day-content">
                  <h3>{day.title}</h3>

                  <div className="day-timeline">
                    {day.places.map(([time, place]) => (
                      <div className="timeline-item" key={time}>
                        <small>{time}</small>
                        <div className="timeline-dot"></div>
                        <strong>{place}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="result-bottom">
            <div>
              <span>TRAVEL NOTE</span>
              <p>
                Leave a little room for the unexpected. Some of the best
                memories are the ones you don't plan.
              </p>
            </div>

            <button onClick={() => setGenerated(false)}>
              ← Edit Journey
            </button>
          </div>
        </div>
      )}
    </section>
  );
}