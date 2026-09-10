import { MapPin } from "lucide-react";

const LOCATIONS = {
  varanasi: [25.3176, 82.9739], jaipur: [26.9124, 75.7873], coorg: [12.3375, 75.8069], manali: [32.2432, 77.1892], munnar: [10.0889, 77.0595], kolkata: [22.5726, 88.3639], patna: [25.5941, 85.1376], bodh: [24.6961, 84.9913], delhi: [28.6139, 77.2090], agra: [27.1767, 78.0081], udaipur: [24.5854, 73.7125], mysore: [12.2958, 76.6394], madurai: [9.9252, 78.1198], kerala: [10.8505, 76.2711], rajasthan: [27.0238, 74.2179], tamil: [11.1271, 78.6569], assam: [26.2006, 92.9376], punjab: [31.1471, 75.3412]
};

function resolveCoords(name = "", lat, lng) {
  if (Number.isFinite(Number(lat)) && Number.isFinite(Number(lng))) return [Number(lat), Number(lng)];
  const key = name.toLowerCase().replace(/[^a-z]+/g, " ").trim();
  const match = Object.keys(LOCATIONS).find((k) => key.includes(k));
  return LOCATIONS[match] || [22.9734, 78.6569];
}

export default function MapLocation({ name = "India", description = "Explore this location", lat, lng, markers = [] }) {
  const points = markers.length ? markers : [{ name, lat, lng }];
  const [centerLat, centerLng] = resolveCoords(name, lat, lng);
  const delta = points.length > 1 ? 1.8 : 0.35;
  const bbox = `${centerLng - delta},${centerLat - delta},${centerLng + delta},${centerLat + delta}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${centerLat}%2C${centerLng}`;
  return (
    <section className="map-location" aria-label={`Map for ${name}`}>
      <div className="map-location-copy"><span><MapPin size={16} /> LOCATION</span><h3>{name}</h3><p>{description}</p><small>OpenStreetMap · prototype map</small></div>
      <div className="map-frame"><iframe title={`Map showing ${name}`} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
    </section>
  );
}
