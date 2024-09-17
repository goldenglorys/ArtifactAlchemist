import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

export default function Header() {
  return (
    <header className="relative mx-auto mt-5 flex w-full items-center justify-center px-2 pb-7 sm:px-4">
      <Link href="/" className="absolute flex items-center gap-2">
        <h1 className="text-xl tracking-tight">
          <span className="text-sky-600">Artifact</span>Alchemist
        </h1>
      </Link>
    </header>
  );
}
