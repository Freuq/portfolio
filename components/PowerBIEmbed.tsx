'use client';

import React, { useEffect, useRef } from "react";

interface PowerBIEmbedProps {
  url: string;
  title?: string;
}

const PowerBIEmbed = ({ url, title }: PowerBIEmbedProps) => {
  return (
    <div className="w-full h-[600px]">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      <iframe
        title={title || "Power BI Dashboard"}
        width="100%"
        height="100%"
        src={url}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PowerBIEmbed;