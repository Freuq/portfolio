import React from "react";

const PowerBIEmbed = () => {
  return (
    <div className="w-full h-[600px]">
      <iframe
        title="Informe Power BI"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/view?r=eyJrIjoiMmMyZjhkMDgtZWI0NS00Y2NkLThmZWItODQxNmViMTEzYzRkIiwidCI6IjAyNzYxMDQwLWRkYzYtNDU5NS05OTk2LTMyNzc0YTFmOTJmMyIsImMiOjl9"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default PowerBIEmbed;
