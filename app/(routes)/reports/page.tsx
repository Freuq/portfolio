import ContainerPage from "@/components/container"
import TransitionPage from "@/components/transition-page";
import PowerBIEmbed from "@/components/PowerBIEmbed";
import TableauEmbed from "@/components/TableauEmbed";
import { powerBIReports } from "@/data";

const EmbeddedReportsPage = () => {
    return (
      <ContainerPage>
        <TransitionPage />
  
        <div className="flex flex-col justify-center items-center h-full text-center pb-20">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Dashboards de <span className="text-secondary">Power BI</span>
          </h1>
  
          <div className="w-full max-w-5xl space-y-10 px-4">
            {/* Power BI Reports */}
            {powerBIReports.map((report) => (
              <PowerBIEmbed key={report.id} url={report.url} title={report.title} />
            ))}
          </div>
          <div className="h-16"></div>
        </div>
        
      </ContainerPage>

    );
  };
  
  export default EmbeddedReportsPage;
