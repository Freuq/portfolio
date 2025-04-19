import ContainerPage from "@/components/container"
import TransitionPage from "@/components/transition-page";
import TableauEmbed from "@/components/reports";

const EmbeddedReportsPage = () => {
    return (
      <ContainerPage>
        <TransitionPage />
  
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Visualiza mis <span className="text-secondary">dashboards interactivos</span>
          </h1>
  
          <div className="w-full max-w-5xl space-y-10 px-4">
            {/* Power BI Embed */}
            <div className="w-full h-full">
              <iframe
                title="Power BI Dashboard"
                width="100%"
                height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiMmMyZjhkMDgtZWI0NS00Y2NkLThmZWItODQxNmViMTEzYzRkIiwidCI6IjAyNzYxMDQwLWRkYzYtNDU5NS05OTk2LTMyNzc0YTFmOTJmMyIsImMiOjl9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
  
            {/* Tableau Embed */}
            <div className="w-full h-[600px]">
                <TableauEmbed />
            </div>
          </div>
        </div>
      </ContainerPage>
    );
  };
  
  export default EmbeddedReportsPage;
