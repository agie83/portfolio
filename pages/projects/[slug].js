/* eslint-disable @next/next/no-img-element */
import { projectList } from "../../lib/projectList";

export default function Project({ projectData }) {
  const { title, desc, bgImg, technologies } = projectData;
  function createMarkup() {
    return { __html: desc };
  }
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-8 pt-20 md:py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="pr-0 md:pr-8">
          <h2 className="py-4">{title}</h2>
          <p className="text-main-color">{technologies.join(", ")}</p>
          <div
            className="mt-5 py-2 text-gray-600 project-desc"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
        <div className="w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-sm shadow-lg"
            src={`http://aeweb.hu/portfolio-images/${bgImg}`}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const projectData = projectList.filter(
    (project) => project.projectUrl === params.slug
  );
  return {
    props: { projectData: projectData[0] },
  };
}

export async function getStaticPaths() {
  const projectPaths = projectList.map((project) => project.projectUrl);
  const paths = projectPaths.map((prPath) => ({
    params: { slug: prPath },
  }));

  return { paths, fallback: false };
}
