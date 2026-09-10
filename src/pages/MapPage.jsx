import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function MapPage() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const places = [
    {
      name: "Jaipur",
      state: "Rajasthan",
      slug: "jaipur",
      category: "Heritage",
      top: "34%",
      left: "31%",
      description: "Forts, palaces and royal Rajput heritage.",
    },
    {
      name: "Agra",
      state: "Uttar Pradesh",
      slug: "agra",
      category: "Heritage",
      top: "35%",
      left: "47%",
      description: "The Taj Mahal and magnificent Mughal heritage.",
    },
    {
      name: "Varanasi",
      state: "Uttar Pradesh",
      slug: "varanasi",
      category: "Culture",
      top: "43%",
      left: "58%",
      description: "Ghats, traditions, silk, music and spiritual culture.",
    },
    {
      name: "Khajuraho",
      state: "Madhya Pradesh",
      slug: "khajuraho",
      category: "Heritage",
      top: "48%",
      left: "45%",
      description: "Medieval temples and extraordinary stone sculpture.",
    },
    {
      name: "Kolkata",
      state: "West Bengal",
      slug: "kolkata",
      category: "Culture",
      top: "55%",
      left: "76%",
      description: "Bengali culture, literature, art and food.",
    },
    {
      name: "Kerala",
      state: "Kerala",
      slug: "kerala",
      category: "Food",
      top: "80%",
      left: "36%",
      description: "Backwaters, spices, seafood and traditional cuisine.",
    },
  ];

  const categories = ["All", "Heritage", "Culture", "Food"];

  const filteredPlaces = useMemo(() => {
    if (category === "All") return places;

    return places.filter(
      (place) => place.category === category
    );
  }, [category]);

  return (
    <section className="section page smartMapPage">

      {/* HEADER */}

      <div className="smartMapHeader">

        <span className="detailEyebrow">
          SMART MAP
        </span>

        <h1>
          India, mapped by experience.
        </h1>

        <p>
          Explore India's heritage, culture and food through
          destinations across the country.
        </p>

      </div>


      {/* FILTERS */}

      <div className="mapFilters">

        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "mapFilter active"
                : "mapFilter"
            }
            onClick={() => {
              setCategory(item);
              setSelected(null);
            }}
          >
            {item}
          </button>
        ))}

      </div>


      {/* MAP */}

      <div className="indiaMapContainer">

        <img
          src="/images/india-map.svg"
          alt="Map of India"
          className="indiaMap"
        />


        {/* DESTINATION MARKERS */}

        {filteredPlaces.map((place) => (

          <button
            key={place.slug}
            className="mapPlace"
            style={{
              top: place.top,
              left: place.left,
            }}
            onClick={() => setSelected(place)}
          >

            <span className="mapPin">
              ●
            </span>

            <span className="mapPlaceName">
              {place.name}
            </span>

          </button>

        ))}


        {/* INFO CARD */}

        {selected && (

          <div className="mapInfoCard">

            <button
              className="mapClose"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>

            <span className="mapInfoCategory">
              {selected.category}
            </span>

            <h3>
              {selected.name}
            </h3>

            <small>
              📍 {selected.state}, India
            </small>

            <p>
              {selected.description}
            </p>

            <Link
              to={`/destination/${selected.slug}`}
              className="primary mapExplore"
            >
              Explore {selected.name} →
            </Link>

          </div>

        )}

      </div>


      {/* LEGEND */}

      <div className="mapLegend">

        <span>
          <i></i>
          Heritage
        </span>

        <span>
          <i></i>
          Culture
        </span>

        <span>
          <i></i>
          Food
        </span>

      </div>

    </section>
  );
}