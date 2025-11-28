import { NextResponse } from "next/server";
import { promises as fsp } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { slug, content } = await req.json();

    if (!slug || !content) {
      return NextResponse.json(
        { error: "Missing slug or content" },
        { status: 400 }
      );
    }

    const articlesDir = path.join(process.cwd(), "articles");
    const filePath = path.join(articlesDir, `${slug}.md`);

    // Read the original file to preserve front-matter
    const originalContent = await fsp.readFile(filePath, "utf8");
    const frontMatterMatch = originalContent.match(/^---\n([\s\S]*?)\n---\n/);
    const frontMatter = frontMatterMatch ? frontMatterMatch[0] : "---\n---\n";

    // Write back with preserved front-matter + new content
    const newFileContent = frontMatter + content;
    await fsp.writeFile(filePath, newFileContent, "utf8");

    return NextResponse.json({ ok: true, message: "Article saved" });
  } catch (err) {
    console.error("Save error:", err);
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}