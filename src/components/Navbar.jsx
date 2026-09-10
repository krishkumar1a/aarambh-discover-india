import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // =====================================================
  // LANGUAGE CHANGE
  // Changes language + immediately closes dropdown
  // =====================================================
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <header className="nav">

      {/* =====================================================
          LOGO
      ===================================================== */}

      <NavLink to="/" className="logo">
        <img src="/images/logo.png" alt="Aarambh" />
      </NavLink>


      {/* =====================================================
          MAIN NAVIGATION
      ===================================================== */}

      <nav className="navMain">

        {/* =================================================
            HERITAGE
        ================================================= */}

        <div className="navDropdown">

          <NavLink to="/heritage" className="navLink">
            {t.nav.heritage}
            <span className="dropdownArrow"></span>
          </NavLink>

          <div className="dropdownMenu">

            <NavLink to="/heritage/monuments">
              <span>🏛️</span>
              <div>
                <strong>{t.nav.monuments}</strong>
                <small>{t.nav.monumentsDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/heritage/forts">
              <span>🏰</span>
              <div>
                <strong>{t.nav.forts}</strong>
                <small>{t.nav.fortsDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/heritage/temples">
              <span>🛕</span>
              <div>
                <strong>{t.nav.temples}</strong>
                <small>{t.nav.templesDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/heritage/cities">
              <span>🏘️</span>
              <div>
                <strong>{t.nav.cities}</strong>
                <small>{t.nav.citiesDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/heritage/unesco">
              <span>🌍</span>
              <div>
                <strong>{t.nav.unesco}</strong>
                <small>{t.nav.unescoDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/heritage/hidden-gems">
              <span>💎</span>
              <div>
                <strong>{t.nav.hiddenGems}</strong>
                <small>{t.nav.hiddenGemsDesc}</small>
              </div>
            </NavLink>

          </div>
        </div>


        {/* =================================================
            CULTURE
        ================================================= */}

        <div className="navDropdown">

          <NavLink to="/culture" className="navLink">
            {t.nav.culture}
            <span className="dropdownArrow"></span>
          </NavLink>

          <div className="dropdownMenu">

            <NavLink to="/culture/festivals">
              <span>🎉</span>
              <div>
                <strong>{t.nav.festivals}</strong>
                <small>{t.nav.festivalsDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/culture/dance-music">
              <span>💃</span>
              <div>
                <strong>{t.nav.danceMusic}</strong>
                <small>{t.nav.danceMusicDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/culture/clothing">
              <span>🧵</span>
              <div>
                <strong>{t.nav.clothing}</strong>
                <small>{t.nav.clothingDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/culture/art-storytelling">
              <span>🎨</span>
              <div>
                <strong>{t.nav.artStorytelling}</strong>
                <small>{t.nav.artStorytellingDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/culture/traditions-lifestyle">
              <span>🏡</span>
              <div>
                <strong>{t.nav.traditions}</strong>
                <small>{t.nav.traditionsDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/culture/languages-literature">
              <span>📖</span>
              <div>
                <strong>{t.nav.languagesLiterature}</strong>
                <small>{t.nav.languagesLiteratureDesc}</small>
              </div>
            </NavLink>

          </div>
        </div>


        {/* =================================================
            FOOD
        ================================================= */}

        <div className="navDropdown">

          <NavLink to="/food" className="navLink">
            {t.nav.food}
            <span className="dropdownArrow"></span>
          </NavLink>

          <div className="dropdownMenu">

            <NavLink to="/food/north-india">
              <span>🫓</span>
              <div>
                <strong>{t.nav.northIndian}</strong>
                <small>{t.nav.northIndianDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/food/south-india">
              <span>🥥</span>
              <div>
                <strong>{t.nav.southIndian}</strong>
                <small>{t.nav.southIndianDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/food/east-india">
              <span>🍚</span>
              <div>
                <strong>{t.nav.eastIndian}</strong>
                <small>{t.nav.eastIndianDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/food/west-india">
              <span>🥘</span>
              <div>
                <strong>{t.nav.westIndian}</strong>
                <small>{t.nav.westIndianDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/food/northeast-india">
              <span>🌿</span>
              <div>
                <strong>{t.nav.northeastIndian}</strong>
                <small>{t.nav.northeastIndianDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/food/street-food">
              <span>🌶️</span>
              <div>
                <strong>{t.nav.streetFood}</strong>
                <small>{t.nav.streetFoodDesc}</small>
              </div>
            </NavLink>

          </div>
        </div>


        {/* =================================================
            CRAFTS
        ================================================= */}

        <div className="navDropdown">

          <NavLink to="/crafts" className="navLink">
            {t.nav.crafts}
            <span className="dropdownArrow"></span>
          </NavLink>

          <div className="dropdownMenu">

            <NavLink to="/crafts/pottery">
              <span>🏺</span>
              <div>
                <strong>{t.nav.pottery}</strong>
                <small>{t.nav.potteryDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/crafts/handloom-textiles">
              <span>🧵</span>
              <div>
                <strong>{t.nav.handloomTextiles}</strong>
                <small>{t.nav.handloomTextilesDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/crafts/folk-art">
              <span>🎨</span>
              <div>
                <strong>{t.nav.folkArt}</strong>
                <small>{t.nav.folkArtDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/crafts/woodcraft">
              <span>🪵</span>
              <div>
                <strong>{t.nav.woodcraft}</strong>
                <small>{t.nav.woodcraftDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/crafts/jewellery">
              <span>💍</span>
              <div>
                <strong>{t.nav.jewellery}</strong>
                <small>{t.nav.jewelleryDesc}</small>
              </div>
            </NavLink>

            <NavLink to="/crafts/bamboo-cane">
              <span>🧺</span>
              <div>
                <strong>{t.nav.bambooCane}</strong>
                <small>{t.nav.bambooCaneDesc}</small>
              </div>
            </NavLink>

          </div>
        </div>

      </nav>


      {/* =====================================================
          RIGHT SIDE ACTIONS
      ===================================================== */}

      <button className="mobile-menu-button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? <X size={23}/> : <Menu size={23}/>}</button>

      <div className="navActions">

        {/* LIVING HERITAGE */}

        <NavLink
          to="/living-heritage"
          className="navLink navStoriesLink"
        >
          {t.nav.livingHeritage}
        </NavLink>


        {/* COMMUNITY */}

        <NavLink
          to="/community"
          className="navLink navStoriesLink"
        >
          {t.nav.community}
        </NavLink>


        {/* PLAN TRIP */}

        <NavLink
          to="/planner"
          className="navPlan"
        >
          {t.nav.planTrip}
        </NavLink>


        {/* =================================================
            LANGUAGE
            - Click opens/closes
            - Hover opens on desktop
            - Selecting language closes immediately
        ================================================= */}

        <div
          className={`languageDropdown ${
            languageOpen ? "languageOpen" : ""
          }`}
          onMouseEnter={() => setLanguageOpen(true)}
          onMouseLeave={() => setLanguageOpen(false)}
        >

          <button
            type="button"
            className="languageButton"
            onClick={() => setLanguageOpen((prev) => !prev)}
            aria-expanded={languageOpen}
            aria-haspopup="true"
          >

            <span>🌐</span>

            <span>
              {language.toUpperCase()}
            </span>

            <span className="dropdownArrow"></span>

          </button>


          {/* =================================================
              LANGUAGE MENU
          ================================================= */}

          <div className="languageMenu">

            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => handleLanguageChange("en")}
            >
              🇬🇧 {t.nav.english}
            </button>

            <button
              type="button"
              className={language === "hi" ? "active" : ""}
              onClick={() => handleLanguageChange("hi")}
            >
              🇮🇳 {t.nav.hindi}
            </button>

            <button
              type="button"
              className={language === "bn" ? "active" : ""}
              onClick={() => handleLanguageChange("bn")}
            >
              🇮🇳 {t.nav.bengali}
            </button>

            <button
              type="button"
              className={language === "ta" ? "active" : ""}
              onClick={() => handleLanguageChange("ta")}
            >
              🇮🇳 {t.nav.tamil}
            </button>

            <button
              type="button"
              className={language === "te" ? "active" : ""}
              onClick={() => handleLanguageChange("te")}
            >
              🇮🇳 {t.nav.telugu}
            </button>

            <button
              type="button"
              className={language === "mr" ? "active" : ""}
              onClick={() => handleLanguageChange("mr")}
            >
              🇮🇳 {t.nav.marathi}
            </button>

            <button
              type="button"
              className={language === "fr" ? "active" : ""}
              onClick={() => handleLanguageChange("fr")}
            >
              🇫🇷 {t.nav.french}
            </button>

            <button
              type="button"
              className={language === "es" ? "active" : ""}
              onClick={() => handleLanguageChange("es")}
            >
              🇪🇸 {t.nav.spanish}
            </button>

          </div>

        </div>

      </div>

      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-drawer-links">
          <NavLink onClick={()=>setMobileOpen(false)} to="/">{t.nav.home || "Home"}</NavLink>
          <NavLink onClick={()=>setMobileOpen(false)} to="/explore">{t.nav.explore || "Explore"}</NavLink>
          <NavLink onClick={()=>setMobileOpen(false)} to="/heritage">{t.nav.heritage}</NavLink>
          <NavLink onClick={()=>setMobileOpen(false)} to="/culture">{t.nav.culture}</NavLink>
          <NavLink onClick={()=>setMobileOpen(false)} to="/food">{t.nav.food}</NavLink>
          <NavLink onClick={()=>setMobileOpen(false)} to="/crafts">{t.nav.crafts}</NavLink>
          <NavLink onClick={()=>setMobileOpen(false)} to="/living-heritage">{t.nav.livingHeritage}</NavLink>
          <NavLink onClick={()=>setMobileOpen(false)} to="/community">{t.nav.community}</NavLink>
          <NavLink onClick={()=>setMobileOpen(false)} to="/planner">{t.nav.planTrip}</NavLink>
        </div>
        <div className="mobile-language-grid">{["en","hi","bn","ta","te","mr","fr","es"].map(code=><button key={code} className={language===code?"active":""} onClick={()=>{setLanguage(code);setMobileOpen(false)}}>{code.toUpperCase()}</button>)}</div>
      </div>

    </header>
  );
}
