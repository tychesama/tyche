import { NextResponse } from "next/server";
import fs from "fs";
import { promises as fsp } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { slug, title, content } = await req.json();

    if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });

    const articlesDir = path.join(process.cwd(), "articles");
    if (!fs.existsSync(articlesDir)) fs.mkdirSync(articlesDir);

    const date = new Date().toISOString();
    const md = `---\ntitle: ${title}\ndate: ${date}\ncategory: blog\n---\n\n${content}\n`;

    const filePath = path.join(articlesDir, `${slug}.md`);
    await fsp.writeFile(filePath, md, "utf8");

    return NextResponse.json({ ok: true, path: `/articles/${slug}.md` });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}