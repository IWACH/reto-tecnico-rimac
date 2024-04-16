import "../styles/index.scss";

export const metadata = {
  title: "Reto Técnico",
  description: "Reto técnico Rimac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
