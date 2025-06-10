import logo from "@/assets/icon.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <img src={logo.src} alt="A newspaper" />
      <h1>A News Site by Next js</h1>
      <p>NewtNews พร้อมนำเสนอข่าวสารล่าสุดให้คุณแบบกระชับและเป็นกลาง!</p>
      <p>NewtNews มุ่งมั่นที่จะส่งต่อข่าวสารล่าสุดให้คุณอย่างกระซับ</p>
      <p>เรามีทีมผู้สื่อข่าวอาชีพที่ทุ่มเทในการนำเสนอข่าว</p>
      <p>
        <Link href="/news">อ่านข่าวล่าสุด</Link>
      </p>
    </div>
  );
}
