import MainHeader from "@/components/Mainhearder";

export const metadata = {
  title: "Lab Next Js Page Routing & Rendering",
  description: "Learn how to use various route method",
};

export default function ContentLayout({ children }) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  );
}
