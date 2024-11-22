import Card from "@/src/components/UI/Card";
import { getProjects } from "@/src/services/ProjectServices";

export default async function Projects() {
  const { data: projects } = await getProjects();

  return (
    <>
      <div className="mt-3 lg:mt-20 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-accent">
          Projects
        </h2>
        <div className="w-full lg:flex  gap-12 justify-center items-center mt-8 lg:mt-8">
          {projects.map((project: any) => (
            <Card key={project._id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
