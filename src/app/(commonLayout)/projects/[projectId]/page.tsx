import React from "react";

interface IProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetails({ params }: IProps) {
  const { projectId } = params;
  return <div>Project Details {projectId}</div>;
}
