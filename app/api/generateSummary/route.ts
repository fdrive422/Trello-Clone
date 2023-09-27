import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();
  console.log(todos);

  // communicate with openAI GPT
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    messages: [
      {
        role: "system",
        content: `When responding, welcome the user with a salutation and say welcome fellow trailblazer. Limit the response to 200 characters.`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following of their tasks. Count how many todos there are in each category such as To do, In progress, and Done, then tell the user to have a productive day! Here is the data ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  return NextResponse.json(response.choices[0].message);
}
