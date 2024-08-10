import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  className?: string;
};

function PageTitle({ title, className }: Props) {
  return <h1 className={cn("text-xl font-semibold", className)}>{title}</h1>;
}

export default PageTitle;
