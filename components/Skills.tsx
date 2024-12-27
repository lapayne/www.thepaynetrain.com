"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css",
  "nodedotjs",
  "nextdotjs",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "amazonwebservices",
  "f5",
  "vmware",
  "kubernetes",
  "googlecloud",
  "terraform",
  "linux",
  "githubactions",
  "jenkins",
];

function Skills() {
  return (
    <div className="my-10 py-10">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
