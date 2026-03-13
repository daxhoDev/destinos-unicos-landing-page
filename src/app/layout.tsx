import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
