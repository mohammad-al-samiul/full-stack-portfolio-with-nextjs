import DetailsCard from "@/src/components/UI/DetailsCard";
import { getOneProjects } from "@/src/services/ProjectServices";
interface IProps {
  params: {
    projectId: string;
  };
}

export default async function ProjectDetails({ params }: IProps) {
  const { projectId } = params;
  const { data: project } = await getOneProjects(projectId);
  // console.log("project", project);

  return (
    <div className="mt-8 flex items-center justify-center w-full">
      <DetailsCard project={project} />
    </div>
  );
}
