import { createServerFn } from "@tanstack/react-start";

const SYSTEM = `You are a senior professor of computational medicinal chemistry at a leading research university. You teach pharmaceutical chemists to think, not to click.

Rules:
- Never invent papers, DOIs, authors, software flags, commands, PDB codes, or experimental numbers. If unsure, write "Verification required".
- Distinguish Known fact / Interpretation / Hypothesis / Educational example / Simulated result.
- Computational chemistry does not produce truth; it produces models whose reliability depends on assumptions, validation, sampling, and experiment.
- Do not praise the learner by default. If they are wrong, say so and explain why.
- Keep scientific terms in English even when answering in Arabic (force field, scoring function, RMSD, MM/PBSA, PME, ensemble, etc.).
- Be precise about thermodynamics, statistical mechanics, and methodological limitations.
- Cap length: structured, dense, no filler.`;

type Role = "system" | "user" | "assistant";

async function chat(messages: { role: Role; content: string }[], maxTokens = 1400) {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return { ok: false as const, error: "AI is not available" };

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      messages,
      max_tokens: maxTokens,
      temperature: 0.3,
    }),
  });
  if (!res.ok) return { ok: false as const, error: `xAI API error ${res.status}` };
  const body = (await res.json()) as {
    choices: { message: { content: string } }[];
  };
  return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
}

export const askMentor = createServerFn({ method: "POST" })
  .validator(
    (input: {
      prompt: string;
      lang: "ar" | "en";
      teachLevel: string;
      context?: string;
    }) => input,
  )
  .handler(async ({ data }) => {
    const langLine =
      data.lang === "ar"
        ? "Answer in Arabic. Keep scientific terms in English."
        : "Answer in English.";
    return chat([
      { role: "system", content: SYSTEM },
      {
        role: "user",
        content: `${langLine}\nExplanation level: ${data.teachLevel}.\n${data.context ? `Context:\n${data.context}\n` : ""}Question:\n${data.prompt}`,
      },
    ]);
  });

export const runViva = createServerFn({ method: "POST" })
  .validator(
    (input: {
      lang: "ar" | "en";
      difficulty: string;
      question: string;
      answer: string;
      ideal: string;
    }) => input,
  )
  .handler(async ({ data }) => {
    const langLine =
      data.lang === "ar"
        ? "Respond in Arabic with English scientific terms."
        : "Respond in English.";
    return chat(
      [
        { role: "system", content: SYSTEM },
        {
          role: "user",
          content: `${langLine}
You are a highly skeptical examiner at difficulty ${data.difficulty}.
Question asked: ${data.question}
Learner's answer: ${data.answer}
Reference expert points (do not copy slavishly): ${data.ideal}

Return exactly these sections:
1) Verdict (correct / partial / incorrect)
2) Scientific evaluation
3) Missing concepts
4) Weak assumptions to challenge
5) Expert-level explanation
6) Harder follow-up question`,
        },
      ],
      1600,
    );
  });

export const critiquePaper = createServerFn({ method: "POST" })
  .validator((input: { lang: "ar" | "en"; text: string }) => input)
  .handler(async ({ data }) => {
    const langLine =
      data.lang === "ar"
        ? "Respond in Arabic with English scientific terms."
        : "Respond in English.";
    return chat(
      [
        { role: "system", content: SYSTEM },
        {
          role: "user",
          content: `${langLine}
Act as a peer reviewer of a computational drug-design manuscript. Analyze:
1. hypothesis
2. methodology
3. computational workflow
4. docking protocol (if any)
5. MD protocol (if any)
6. force fields
7. validation
8. statistics
9. conclusions vs evidence
10. methodological weaknesses
11. unsupported claims
12. reproducibility
Do not invent that the paper did something it did not describe. Text:

${data.text.slice(0, 12000)}`,
        },
      ],
      1800,
    );
  });
