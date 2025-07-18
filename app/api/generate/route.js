import connectDB from "@/config/mongodb";
import { configDotenv } from "dotenv";
import Link from "@/models/links";

configDotenv();
await connectDB();

export async function POST(req) {
  try {
    const { url, shorturl: desiredShort } = await req.json();
    if (!url || !desiredShort) {
      return new Response(JSON.stringify({ error: "Both url and shorturl are required" }), { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const fullShortUrl = `${baseUrl}/${desiredShort}`;
    const existing = await Link.findOne({ shorturl: fullShortUrl });
    if (existing) {
      return new Response(JSON.stringify({ error: "Short URL already exists. Please choose another." }), { status: 409 });
    }

    const link = new Link({ url, shorturl: fullShortUrl });
    await link.save();

    return new Response(JSON.stringify({ shorturl: fullShortUrl }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}