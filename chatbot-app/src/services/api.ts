export type Project = {
  name: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  github: string;
  demo: string;
  status: string;
};

export type ChatResponse = {
  type: "text" | "project";

  reply?: string;

  project?: Project;

  action?: string;

  url?: string | null;
};

const API_URL = "http://localhost:5000/api/chat";

export async function sendMessage(
  message: string
): Promise<ChatResponse> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Failed to contact backend");
  }

  return response.json();
}