import { Link } from "react-router-dom";

export default function DestinationCard({ d }) {
  // Heritage items → Heritage Detail page
  const heritageTypes = [
    "Monument",
    "Fort",
    "Palace",
    "Temple",
    "Historic City",
    "UNESCO World Heritage",
    "World Heritage",
  ];

  const isHeritage =
    d.category?.toLowerCase() === "heritage" ||
    heritageTypes.some(
      (type) => d.type?.toLowerCase() === type.toLowerCase()
    ) ||
    d.isHeritage === true;

  const link = isHeritage
    ? `/heritage/monuments/${d.slug}`
    : `/destination/${d.slug}`;

  return (
    <article className="card">
      <img src={d.image} alt={d.name} />

      <div>
        <small>
          {d.type} • {d.state}
        </small>

        <h3>{d.name}</h3>

        <p>{d.short}</p>

        <Link to={link}>
          {isHeritage ? "Explore Heritage →" : "Discover story →"}
        </Link>
      </div>
    </article>
  );
}