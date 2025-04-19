import React, { useEffect, useRef } from "react";

const TableauEmbed = () => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const initTableau = () => {
        const { tableau } = window as any;
  
        if (tableau && containerRef.current) {
          new tableau.Viz(containerRef.current, "https://public.tableau.com/views/GoogleFiberCase/WHY_1", {
            width: "100%",
            height: "100%",
            hideTabs: true,
            toolbar: "yes",
          });
        }
      };
  
      // Cargar el script de Tableau si no está presente
      const scriptId = "tableau-api";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
        script.id = scriptId;
        script.onload = initTableau;
        document.body.appendChild(script);
      } else {
        initTableau();
      }
    }, []);
  
    return (
      <div className="w-full h-[600px]" ref={containerRef}></div>
    );
  };
  
  export default TableauEmbed;