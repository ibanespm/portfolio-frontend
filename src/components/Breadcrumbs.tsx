"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

interface Props {
  title?: string; // solo para /content/[slug]
}

export default function Breadcrumbs({ title }: Props) {
  const pathname = usePathname();

  const isContentList = pathname === "/content";
  const isContentDetail = pathname.startsWith("/content/") && !isContentList;

  return (
    <ol className="flex items-center gap-2 text-sm text-muted-foreground py-2">
      {/* Home */}
      <li>
        <Link href="/" className="hover:text-white transition-colors">
          <Home className="w-4 h-4" />
        </Link>
      </li>

      {/* › */}
      <li>
        <ChevronRight className="w-3.5 h-3.5" />
      </li>

      {/* Contenido */}
      <li>
        <Link href="/content" className="hover:text-white">
          Contenido
        </Link>
      </li>

      {/* Si estamos en /content/[slug], añadimos el título */}
      {isContentDetail && title && (
        <>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="text-red-400">{title}</li>
        </>
      )}
    </ol>
  );
}
