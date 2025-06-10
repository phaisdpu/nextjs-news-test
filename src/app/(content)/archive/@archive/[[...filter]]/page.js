import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/NewsList";
import Link from "next/link";

export default async function ArchiveFileterPage({ params }) {
  const { filter } = await params;

  let selectedYear;
  let selectedMonth;

  if (filter?.length > 0) {
    selectedYear = filter[0];
  }
  if (filter?.length > 1) {
    selectedMonth = filter[1];
  }

  const availableYears = getAvailableNewsYears();
  if (selectedYear && !availableYears.includes(+selectedYear)) {
    throw new Error("Invalid year selected");
  }

  if (selectedMonth) {
    const availableMonth = getAvailableNewsMonths(selectedYear);
    if (!availableMonth.includes(+selectedMonth)) {
      throw new Error("Invaied month seleted");
    }
  }

  let links = [];

  if (!selectedYear) {
    //ยังไม่เลือกปี -> แสดงลิงค์รายปีทั้งหมด
    links = getAvailableNewsYears().map((year) => ({
      label: year,
      href: `/archive/${year}`,
    }));
  } else if (selectedYear && !selectedMonth) {
    //เลือกปีแล้ว -> แสดงลิงค์รายเดือนของปีนั้น
    links = getAvailableNewsMonths(selectedYear).map((month) => ({
      label: `เดือน ${month}`,
      href: `/archive/${selectedYear}/${month}`,
    }));
  }

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <header id="archive-hearder">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </header>
      {newsContent}
    </>
  );
}
