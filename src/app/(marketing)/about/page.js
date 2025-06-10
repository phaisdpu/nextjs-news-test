import Link from "next/link";

export default function AboutPage() {
  return (
    <section id="home">
      <h1>About NextNews</h1>
      <p>
        NextNaww is your go to platform for concise and unbiased news. We aim to
        deliver information that matters without overwihlming you.
      </p>
      <Link href="/">Back to Home Page</Link>
    </section>
  );
}
