import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footer = t?.footer || {};

  return (
    <footer className="footer">

      {/* Brand */}
      <div className="footerBrand">
        <strong>Aarambh</strong>

        <p>
          {footer.description ||
            "Discover the heritage, culture, crafts and traditions of India."}
        </p>
      </div>

      {/* Categories */}
      <div className="footerCategories">
        <span>
          {footer.heritage || "Heritage"}
        </span>

        <span>•</span>

        <span>
          {footer.culture || "Culture"}
        </span>

        <span>•</span>

        <span>
          {footer.smartTourism || "Smart Tourism"}
        </span>
      </div>

      {/* Copyright */}
      <small>
        {footer.copyright || "© 2026 Aarambh. All rights reserved."}
      </small>

    </footer>
  );
}