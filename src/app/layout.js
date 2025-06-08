import MainHeader from "@/components/Mainhearder";
import "./globals.css";

export const metadata = {
  title: "Lab Next Js Page Routing & Rendering",
  description: "Learn how to use various route method",
};
export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
