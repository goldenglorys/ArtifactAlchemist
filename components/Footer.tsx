import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-3 mt-5 flex h-16 w-full flex-col items-center justify-between space-y-3 px-3 pt-4 text-center sm:mb-0 sm:h-20 sm:flex-row sm:pt-2">
      <div>
        <div className="font-medium">
          Built with{" "}
          <a
            href=""
            className="font-semibold text-blue-600 underline-offset-4 transition hover:text-gray-700 hover:underline"
          >
            Llama
          </a>{" "}
          and{" "}
          <a
            href=""
            className="font-semibold text-blue-600 underline-offset-4 transition hover:text-gray-700 hover:underline"
          >
            groq AI
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
