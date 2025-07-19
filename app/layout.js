import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: 'URL Shortener',
  description: 'A simple URL shortener application',
  keywords: 'URL, shortener, web development, JavaScript',
}
export default function RootLayout({ children }) {
  return (
    
    <html>
      <body >
       
        <main>
          
           <Navbar />
          
          {children}
        </main>
      </body>
    </html>

  );
}

