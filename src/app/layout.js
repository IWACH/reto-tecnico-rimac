import Footer from "@/components/Footer";
import "../styles/index.scss";
import Header from "@/components/Header";

export const metadata = {
  title: "Reto Técnico",
  description: "Reto técnico Rimac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
