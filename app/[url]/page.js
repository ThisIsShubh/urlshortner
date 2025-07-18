
import connectDB from "@/config/mongodb";
import Link from "@/models/links";

export default async function Page({ params }) {
  const { url } = params;
  await connectDB();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const shorturl = `${baseUrl}/${url}`;
  const link = await Link.findOne({ shorturl });
  if (link) {
    if (typeof window !== "undefined") {
      window.location.href = link.url;
      return null;
    } else {
      // For server-side redirect
      return (
        <html>
          <head>
            <meta httpEquiv="refresh" content={`0;url=${link.url}`} />
          </head>
          <body>
            <p>Redirecting...</p>
          </body>
        </html>
      );
    }
  } else {
    return (
      <div>
        <h1>404 - Short URL not found</h1>
      </div>
    );
  }
}
