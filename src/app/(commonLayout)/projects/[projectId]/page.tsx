import DetailsCard from "@/src/components/UI/DetailsCard";
import React from "react";

interface IProps {
  params: {
    projectId: string;
  };
}

export default function ProjectDetails({ params }: IProps) {
  const { projectId } = params;
  return (
    <div>
      <DetailsCard />
    </div>
  );
}
