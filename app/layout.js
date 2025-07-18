import "./globals.css";
import Navbar from "@/components/navbar";
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
