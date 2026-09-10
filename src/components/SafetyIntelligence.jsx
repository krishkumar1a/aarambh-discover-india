import { AlertTriangle, CloudRain, Droplets, Mountain, ShieldCheck, Wind } from "lucide-react";

export const SAFETY_DATA = {
  Coorg: { state: "Karnataka", overallSafety: 87, rainProbability: 22, weatherRisk: 18, floodRisk: 12, landslideRisk: 14, cycloneRisk: 4, disasterRisk: 10, terrainRisk: 16, seasonalRisk: 13, advisory: "Normal travel recommended", status: "SAFE" },
  Jaipur: { state: "Rajasthan", overallSafety: 92, rainProbability: 8, weatherRisk: 10, floodRisk: 4, landslideRisk: 2, cycloneRisk: 3, disasterRisk: 6, terrainRisk: 5, seasonalRisk: 8, advisory: "Normal travel recommended", status: "SAFE" },
  Varanasi: { state: "Uttar Pradesh", overallSafety: 89, rainProbability: 18, weatherRisk: 16, floodRisk: 13, landslideRisk: 2, cycloneRisk: 3, disasterRisk: 9, terrainRisk: 5, seasonalRisk: 11, advisory: "Normal travel recommended", status: "SAFE" },
  Manali: { state: "Himachal Pradesh", overallSafety: 72, rainProbability: 42, weatherRisk: 31, floodRisk: 28, landslideRisk: 34, cycloneRisk: 1, disasterRisk: 27, terrainRisk: 39, seasonalRisk: 32, advisory: "Check mountain road and weather advisories", status: "MODERATE" },
  Munnar: { state: "Kerala", overallSafety: 81, rainProbability: 35, weatherRisk: 24, floodRisk: 18, landslideRisk: 23, cycloneRisk: 5, disasterRisk: 16, terrainRisk: 22, seasonalRisk: 20, advisory: "Travel normally; monitor heavy-rain alerts", status: "SAFE" },
  Kolkata: { state: "West Bengal", overallSafety: 78, rainProbability: 29, weatherRisk: 22, floodRisk: 25, landslideRisk: 2, cycloneRisk: 16, disasterRisk: 19, terrainRisk: 3, seasonalRisk: 21, advisory: "Monitor rainfall and coastal weather updates", status: "MODERATE" },
};

const normalize = (value = "") => value.toLowerCase().trim();
export function getSafety(destination = "") {
  const key = Object.keys(SAFETY_DATA).find((name) => normalize(name) === normalize(destination)) ||
    Object.keys(SAFETY_DATA).find((name) => normalize(destination).includes(normalize(name)));
  return SAFETY_DATA[key] || { state: "India", overallSafety: 84, rainProbability: 20, weatherRisk: 17, floodRisk: 10, landslideRisk: 8, cycloneRisk: 5, disasterRisk: 9, terrainRisk: 10, seasonalRisk: 12, advisory: "Demo intelligence available; verify local advisories before travel", status: "SAFE" };
}

function riskLabel(value) {
  if (value >= 60) return "HIGH RISK";
  if (value >= 40) return "CAUTION";
  if (value >= 20) return "MODERATE";
  return "LOW";
}

const metrics = [
  ["Rain probability", "rainProbability", CloudRain],
  ["Weather risk", "weatherRisk", Wind],
  ["Flood risk", "floodRisk", Droplets],
  ["Landslide risk", "landslideRisk", Mountain],
  ["Cyclone risk", "cycloneRisk", Wind],
  ["Natural disaster risk", "disasterRisk", AlertTriangle],
];

export default function SafetyIntelligence({ destination }) {
  const data = getSafety(destination);
  return (
    <section className="safety-intelligence" aria-labelledby="safety-title">
      <div className="safety-head">
        <div>
          <span className="safety-kicker"><ShieldCheck size={16} /> TRAVEL SAFETY INTELLIGENCE · DEMO</span>
          <h2 id="safety-title">Real-time Travel Safety Intelligence</h2>
          <p>Use this prototype signal before you travel. Values are demonstration data and are not live government or weather alerts.</p>
        </div>
        <div className={`safety-score safety-${data.status.toLowerCase()}`}>
          <strong>{data.overallSafety}%</strong><span>{data.status}</span>
        </div>
      </div>
      <div className="safety-destination"><b>{destination || "Your destination"}</b><span>{data.state}</span></div>
      <div className="safety-grid">
        {metrics.map(([label, key, Icon]) => (
          <div className="safety-metric" key={key}>
            <div className="safety-metric-top"><span><Icon size={17} /> {label}</span><b>{data[key]}%</b></div>
            <div className="safety-bar"><i style={{ width: `${Math.min(data[key], 100)}%` }} /></div>
            <small>{riskLabel(data[key])}</small>
          </div>
        ))}
      </div>
      <div className="safety-advisory"><ShieldCheck size={20} /><div><b>Travel advisory: {data.advisory}</b><span>Prototype guidance · Always verify official local alerts before departure.</span></div></div>
    </section>
  );
}
