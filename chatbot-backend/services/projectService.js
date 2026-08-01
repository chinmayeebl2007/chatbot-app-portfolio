import fs from "fs/promises";
import path from "path";

const PROJECTS_PATH = path.join(
  process.cwd(),
  "knowledge",
  "projects"
);

export async function loadProjects() {
  const files = await fs.readdir(PROJECTS_PATH);

  const projects = [];

  for (const file of files) {
    if (!file.endsWith(".json")) continue;

    const content = await fs.readFile(
      path.join(PROJECTS_PATH, file),
      "utf8"
    );

    projects.push(JSON.parse(content));
  }

  return projects;
}

export async function findProject(userMessage) {
  const projects = await loadProjects();

  const message = userMessage.toLowerCase();

  for (const project of projects) {
    if (
      project.name &&
      message.includes(project.name.toLowerCase())
    ) {
      return project;
    }

    if (
      project.title &&
      message.includes(project.title.toLowerCase())
    ) {
      return project;
    }
  }

  return null;
}