import { readFile } from "fs/promises";
import path from "path";
import { after, NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

async function notifyDownload(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY not set — skipping resume download notification email.",
    );
    return;
  }

  const notifyTo = process.env.RESUME_NOTIFY_EMAIL || "mirza.talib7415@gmail.com";
  const from = process.env.RESUME_NOTIFY_FROM || "onboarding@resend.dev";

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const referer = request.headers.get("referer") ?? "direct";
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `Portfolio Alerts <${from}>`,
      to: notifyTo,
      subject: "Someone downloaded your resume",
      text: `Your resume was just downloaded from your portfolio.

Time: ${timestamp} (IST)
Referrer: ${referer}
IP: ${ip}
User agent: ${userAgent}`,
    });
  } catch (error) {
    console.error("Failed to send resume download notification email:", error);
  }
}

export async function GET(request: NextRequest) {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");

  let fileBuffer: Buffer;
  try {
    fileBuffer = await readFile(filePath);
  } catch {
    return NextResponse.json(
      { error: "Resume file not found." },
      { status: 404 },
    );
  }

  // Runs after the response is sent, but Vercel keeps the function alive for it —
  // a bare un-awaited call risks being frozen before the email actually sends.
  after(() => notifyDownload(request));

  return new NextResponse(new Uint8Array(fileBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Talib-Baig-Resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
