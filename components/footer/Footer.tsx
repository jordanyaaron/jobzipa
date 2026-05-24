import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        bg-[var(--main-bg)]
        p-5
        pt-[30px]
        -mt-[2px]
        -mb-5
        h-[60px]
        flex flex-col items-center justify-center
        text-center
      "
    >
      <p className="text-[var(--placeholder)] text-xs">
        <Link
          href="/about"
          className="no-underline text-[var(--placeholder)] ml-1 hover:underline"
        >
          About Us
        </Link>{" "}
        |
        <Link
          href="/contact"
          className="no-underline text-[var(--placeholder)] ml-1 hover:underline"
        >
          Contact Us
        </Link>{" "}
        |
        <Link
          href="/privacy"
          className="no-underline text-[var(--placeholder)] ml-1 hover:underline"
        >
          Privacy & Cookies Policy
        </Link>{" "}
        |
        <Link
          href="/terms"
          className="no-underline text-[var(--placeholder)] ml-1 hover:underline"
        >
          Terms & Conditions
        </Link>
      </p>

      <p className="text-[var(--placeholder)] text-xs mt-1">
        JobZipa Inc &copy; {new Date().getFullYear()}. All Rights Reserved
      </p>
    </footer>
  );
}