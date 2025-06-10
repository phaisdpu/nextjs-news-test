import "./globals.css";

export const metadata = {
  title: "Lab Next Js Page Routing & Rendering",
  description: "Learn how to use various route method",
};
export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
