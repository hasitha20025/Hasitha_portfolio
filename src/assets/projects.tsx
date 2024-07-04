import ProjectCard from "./projectCard";
import StatsCard from "./statsCard";
export default function Projects() {
  return (
    <>
      <p className="text-3xl font-bold text-center my-6 text-textPrimary">
        {/* <span className="text-lightBlue">P</span>rojects */}
        <span className="text-lightBlue">W</span>hy did you{" "}
        <span className="text-lightBlue">H</span>ire me for your{" "}
        <span className="text-lightBlue">N</span>ext Project
        <span className="text-lightBlue">?</span>
      </p>

      <div className="flex flex-row">
        <div className="basis-1/6">
          <StatsCard />
        </div>
        <div className="basis-5/6">
          <div className="container mx-auto p-4 my-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <ProjectCard
                projectName="Travel_SriLanka"
                date="January 2022"
                links="https://github.com/hasitha20025/Travel_SriLanka"
                description="Best traveling place in the Sri Lanka Blog web site."
              />
              <ProjectCard
                projectName="XENZER"
                date="February 2023"
                links="https://github.com/hasitha20025/XENZER"
                description="This is a Hotel management web application"
              />
              <ProjectCard
                projectName="APMS-System "
                date="December 2023"
                links="https://github.com/hasitha20025/APMS-System"
                description="This is a Student Progress Management System."
              />
              <ProjectCard
                projectName="UniConnect"
                date="January 2024"
                links="https://github.com/hasitha20025/UniConnect"
                description="UniConnect, Our innovative University Event Management and Product Promotion web application revolutionizes event organization and product showcasing within our university community."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
