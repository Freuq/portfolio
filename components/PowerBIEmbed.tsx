'use client';

import React, { useEffect, useRef } from "react";

interface PowerBIEmbedProps {
  url: string;
  title?: string;
}

const PowerBIEmbed = ({ url, title }: PowerBIEmbedProps) => {
  return (
    <div className="w-full aspect-[16/9] min-h-[615px] mb-20"> {/* <- margen inferior extra */}
      {title && (
        <h1 className="text-1xl md:text-4xl font-bold mb-6">
          {title}
        </h1>
      )}
      <iframe
        title={title || "Power BI Dashboard"}
        className="w-full h-full"
        src={url}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};


export default PowerBIEmbed;