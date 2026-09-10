import { useEffect, useMemo, useState } from "react";

const defaultItems = [
  "Tickets & transport confirmed",
  "Accommodation booked",
  "ID and travel documents packed",
  "Medicines & first-aid essentials",
  "Phone charger / power bank",
  "Cash, cards & digital payments ready",
  "Offline maps downloaded",
  "Weather-appropriate clothing packed",
];

export default function TravelChecklist({ destination }) {
  const storageKey = `aarambh-checklist-${(destination || "trip").toLowerCase()}`;
  const [items, setItems] = useState(defaultItems.map((text) => ({ text, done: false })));
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setItems(saved ? JSON.parse(saved) : defaultItems.map((text) => ({ text, done: false })));
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, storageKey]);

  const completed = useMemo(() => items.filter((item) => item.done).length, [items]);
  const progress = items.length ? Math.round((completed / items.length) * 100) : 0;

  const toggle = (index) => setItems((prev) => prev.map((item, i) => i === index ? { ...item, done: !item.done } : item));
  const addItem = (event) => {
    event.preventDefault();
    const text = newItem.trim();
    if (!text) return;
    setItems((prev) => [...prev, { text, done: false }]);
    setNewItem("");
  };
  const removeItem = (index) => setItems((prev) => prev.filter((_, i) => i !== index));

  return (
    <section className="travel-checklist">
      <div className="checklist-header">
        <div>
          <span>🧳 TRAVEL READY</span>
          <h2>Your {destination || "journey"} checklist</h2>
          <p>{completed} of {items.length} essentials completed.</p>
        </div>
        <div className="checklist-progress"><strong>{progress}%</strong><div><span style={{ width: `${progress}%` }} /></div></div>
      </div>

      <div className="checklist-items">
        {items.map((item, index) => (
          <div className={`checklist-item ${item.done ? "done" : ""}`} key={`${item.text}-${index}`}>
            <button className="check-toggle" onClick={() => toggle(index)} aria-label={`Toggle ${item.text}`}>{item.done ? "✓" : ""}</button>
            <span>{item.text}</span>
            <button className="remove-check-item" onClick={() => removeItem(index)} aria-label={`Remove ${item.text}`}>×</button>
          </div>
        ))}
      </div>

      <form className="add-checklist-item" onSubmit={addItem}>
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add your own travel item..." />
        <button type="submit">Add +</button>
      </form>
    </section>
  );
}
