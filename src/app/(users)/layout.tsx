import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
