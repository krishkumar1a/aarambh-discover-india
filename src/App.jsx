import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AutoTranslate from "./components/AutoTranslate";
import MapLocation from "./components/MapLocation";

// =========================================================
// MAIN PAGES
// =========================================================

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Destination from "./pages/Destination";
import Planner from "./pages/Planner";
import Heritage from "./pages/Heritage";
import MapPage from "./pages/MapPage";
import Saved from "./pages/Saved";
import LivingHeritage from "./pages/LivingHeritage";
import Community from "./pages/Community";
import Profile from "./pages/Profile";

// =========================================================
// HERITAGE CATEGORY PAGES
// =========================================================

import Monuments from "./pages/Monuments";
import Forts from "./pages/Forts";
import Temples from "./pages/Temples";
import HistoricCities from "./pages/HistoricCities";
import UNESCO from "./pages/UNESCO";
import HiddenGems from "./pages/HiddenGems";

// =========================================================
// HERITAGE DETAIL PAGES
// =========================================================

import HeritageDetail from "./pages/HeritageDetail";
import HiddenGemDetail from "./pages/HiddenGemDetail";

// =========================================================
// CULTURE / FOOD / CRAFTS
// =========================================================

import Culture from "./pages/Culture";
import Food from "./pages/Food";
import Crafts from "./pages/Crafts";

// =========================================================
// CULTURE CATEGORY + STORY
// =========================================================

import CultureDetail from "./pages/CultureDetail";
import CultureStory from "./pages/CultureStory";

// =========================================================
// FOOD CATEGORY + STORY
// =========================================================

import FoodDetail from "./pages/FoodDetail";
import FoodStory from "./pages/FoodStory";

// =========================================================
// CRAFTS CATEGORY + STORY
// =========================================================

import CraftDetail from "./pages/CraftDetail";
import CraftStory from "./pages/CraftStory";

// =========================================================
// SCROLL TO TOP
// =========================================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// =========================================================
// APP
// =========================================================

function RouteLocationMap() {
  const { pathname } = useLocation();
  if (["/", "/explore", "/community", "/saved", "/profile"].includes(pathname)) return null;
  const raw = decodeURIComponent(pathname.split("/").filter(Boolean).pop() || "India").replace(/-/g, " ");
  const title = raw.replace(/\b\w/g, (c) => c.toUpperCase());
  return <MapLocation name={title} description="Discover the location, region and cultural context of this place." />;
}

export default function App() {
  useEffect(() => {
    const onError = (event) => {
      const img = event.target;
      if (img?.tagName === "IMG" && !img.dataset.fallback) { img.dataset.fallback = "1"; img.src = "/images/placeholder.svg"; }
    };
    window.addEventListener("error", onError, true);
    return () => window.removeEventListener("error", onError, true);
  }, []);

  return (
    <>
      <ScrollToTop />

      <Navbar />
      <AutoTranslate />

      <Routes>

        {/* =================================================
            MAIN PAGES
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/destination/:slug"
          element={<Destination />}
        />

        <Route
          path="/planner"
          element={<Planner />}
        />

        <Route
          path="/heritage"
          element={<Heritage />}
        />

        <Route
          path="/map"
          element={<MapPage />}
        />

        <Route
          path="/saved"
          element={<Saved />}
        />

        <Route
          path="/living-heritage"
          element={<LivingHeritage />}
        />

        <Route
          path="/living-heritage/:type/:slug"
          element={<LivingHeritage />}
        />

        <Route
          path="/community"
          element={<Community />}
        />

        <Route path="/profile" element={<Profile />} />


        {/* =================================================
            CULTURE
        ================================================= */}

        {/* Main Culture Page */}

        <Route
          path="/culture"
          element={<Culture />}
        />


        {/* Culture Category Page

            /culture/festivals
            /culture/dance-music
            /culture/clothing
            /culture/art-storytelling
            /culture/traditions-lifestyle
            /culture/languages-literature

        */}

        <Route
          path="/culture/:slug"
          element={<CultureDetail />}
        />


        {/* Culture Story / Item Detail

            /culture/festivals/holi
            /culture/festivals/diwali
            /culture/dance-music/kathak
            /culture/clothing/banarasi-silk
            etc.

        */}

        <Route
          path="/culture/:categorySlug/:storySlug"
          element={<CultureStory />}
        />


        {/* =================================================
            FOOD
        ================================================= */}

        {/* Main Food Page */}

        <Route
          path="/food"
          element={<Food />}
        />


        {/* Food Category Page

            /food/north-indian
            /food/south-indian
            /food/east-indian
            /food/west-indian
            /food/northeast-indian
            /food/street-food

        */}

        <Route
          path="/food/:slug"
          element={<FoodDetail />}
        />


        {/* Food Story / Dish Detail

            /food/north-indian/butter-chicken
            /food/south-indian/dosa
            /food/east-indian/rosogolla
            etc.

        */}

        <Route
          path="/food/:categorySlug/:storySlug"
          element={<FoodStory />}
        />


        {/* =================================================
            CRAFTS
        ================================================= */}

        {/* Main Crafts Page */}

        <Route
          path="/crafts"
          element={<Crafts />}
        />


        {/* Crafts Category Page

            /crafts/pottery
            /crafts/handloom-textiles
            /crafts/folk-art
            /crafts/woodcraft
            /crafts/jewellery
            /crafts/bamboo-cane

        */}

        <Route
          path="/crafts/:slug"
          element={<CraftDetail />}
        />


        {/* Crafts Story / Craft Detail

            /crafts/pottery/blue-pottery
            /crafts/handloom-textiles/banarasi-silk
            /crafts/folk-art/madhubani
            etc.

        */}

        <Route
          path="/crafts/:categorySlug/:storySlug"
          element={<CraftStory />}
        />


        {/* =================================================
            HERITAGE CATEGORY PAGES
        ================================================= */}

        <Route
          path="/heritage/monuments"
          element={<Monuments />}
        />

        <Route
          path="/heritage/forts"
          element={<Forts />}
        />

        <Route
          path="/heritage/temples"
          element={<Temples />}
        />

        <Route
          path="/heritage/cities"
          element={<HistoricCities />}
        />

        <Route
          path="/heritage/unesco"
          element={<UNESCO />}
        />

        <Route
          path="/heritage/hidden-gems"
          element={<HiddenGems />}
        />


        {/* =================================================
            HERITAGE DETAIL PAGES
        ================================================= */}

        <Route
          path="/heritage/monuments/:slug"
          element={<HeritageDetail />}
        />

        <Route
          path="/heritage/forts/:slug"
          element={<HeritageDetail />}
        />

        <Route
          path="/heritage/temples/:slug"
          element={<HeritageDetail />}
        />

        <Route
          path="/heritage/cities/:slug"
          element={<HeritageDetail />}
        />

        <Route
          path="/heritage/unesco/:slug"
          element={<HeritageDetail />}
        />


        {/* =================================================
            HIDDEN GEMS DETAIL
        ================================================= */}

        <Route
          path="/heritage/hidden-gems/:slug"
          element={<HiddenGemDetail />}
        />

      </Routes>

      <RouteLocationMap />
      <Footer />
    </>
  );
}