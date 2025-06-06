"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  currentTitle?: string;
}

export const Breadcrumb = ({ currentTitle }: BreadcrumbProps) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center text-sm text-gray-400 mb-4   sm:mx-8 md:mx-12 lg:mx-15 font-bold">
      <Link
        href="/"
        className="hover:text-gray-600 text-gray-300 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-house-icon lucide-house"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      </Link>

      {segments.map((segment, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/");
        const isLast = i === segments.length - 1;
        const label =
          segment === "content"
            ? "Contenido"
            : decodeURIComponent(currentTitle || segment);

        return (
          <div key={i} className="flex items-center">
            <span className="mx-2 font-bold  text-gray-500 flex items-center h-full ">
              {" >   "}
            </span>
            {isLast ? (
              <span className=" text-fuchsia-800 font-semibold">{label}</span>
            ) : (
              <Link href={href} className="hover:underline text-gray-500 ">
                {`   ${label}`}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
