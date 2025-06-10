import { NextResponse } from "next/server";

//ดักจับ พาส ข่าว , พาส เอพีไอ
// export const config = {
//   matcher: ["/news/:path*", "/api/:path*"],
// };

//ดักทั้งหมด
export function middleware(request) {
  // console.log("Incoming request:", request.method, request.url);

  // ตัวอย่าง redirect (กรณีผู้ใช้ไม่ได้ login)
  // if(!request.cookies.get('auth)){
  // return NextResponse.redirect(new URL('/login',requset.url));
  //}

  //
  const { pathname } = request.nextUrl;

  //บล็อคการลบข่าว ถ้าไม่ได้ส่ง header x-admin=true
  if (pathname.startsWith("/api/news") && request.method === "DELETE") {
    const isAdmin = request.headers.get("x-admin") === "true";
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next(); //อนุญาตให้ผ่านไปยัง route ปลายทาง
}
