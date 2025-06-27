import { OpenAIStream, StreamingTextResponse, OpenAI } from 'ai';

const openai = new OpenAI({ apiKey: undefined });

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}