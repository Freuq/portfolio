'use client';

import { useEffect, useRef } from "react";

const TableauEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "tableau-api";

    const embedTableau = () => {
      const divElement = document.getElementById("vizContainer");
      const vizElement = divElement?.getElementsByTagName("object")[0];

      if (!vizElement || !divElement) return;

      // Establece dimensiones en función del ancho
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = "1000px";
        vizElement.style.height = "600px";
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = "100%";
        vizElement.style.height = "600px";
      } else {
        vizElement.style.width = "100%";
        vizElement.style.height = "800px";
      }

      // Añadir script si no existe
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        script.async = true;
        vizElement.parentNode?.insertBefore(script, vizElement);
      }
    };

    embedTableau();
  }, []);

  return (
    <div
      id="vizContainer"
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        className="tableauPlaceholder"
        style={{
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <noscript>
          <a href="#">
            <img
              alt="WHY"
              src="https://public.tableau.com/static/images/Go/GoogleFiberCase/WHY_1/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="GoogleFiberCase/WHY_1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Go/GoogleFiberCase/WHY_1/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="es-ES" />
        </object>
      </div>
    </div>
  );
};

export default TableauEmbed;

