import ProjectItem from "../components/ProjectItem";
import { projectList } from "../lib/projectList";

export default function Projects() {
  // import('../public/assets/projects/'+bgImg)

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-8 pt-16 md:py-20">
        <p className="text-xl tracking-widest uppercase text-main-color mt-5">
          Projects
        </p>
        <p className="py-4">
          This portfolio website was built with Next.js and tailwindcss. It is still under development.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectList.map(({ title, projectUrl, bgImg, technologies }) => (
            <div key={title}>
              <ProjectItem
                title={title}
                backgroundImg={bgImg}
                projectUrl={`projects/${projectUrl}`}
                tech={technologies.join(", ")}
                place="menuPage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
