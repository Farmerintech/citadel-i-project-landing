// /app/api/convert-docx/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import mammoth from 'mammoth';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'docs', 'adeyemo-chapter-one.docx');

  try {
    const buffer = await fs.readFile(filePath);
    const result = await mammoth.convertToHtml({ buffer });
    return NextResponse.json({ html: result.value });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to convert file' }, { status: 500 });
  }
}
