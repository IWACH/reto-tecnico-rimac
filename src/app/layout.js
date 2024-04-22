import "../styles/index.scss";
import Header from "@/components/Header";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "Reto Técnico",
  description: "Reto técnico Rimac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
