import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Header() {
  return <header className="border-b border-ink/10 bg-cream/90 backdrop-blur-sm"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10"><a href="#inicio" aria-label="Observatório de Eventos e Cultura do RS — início"><Image src="/logo.svg" alt="Observatório de Eventos e Cultura do RS" width={264} height={56} priority className="h-11 w-auto" /></a><nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Navegação principal"><a className="transition hover:text-purple" href="#eventos">Eventos</a><a className="transition hover:text-purple" href="#sobre">Sobre o projeto</a><a className="flex items-center gap-1 text-purple" href="#eventos">Explorar <ArrowUpRight size={16} /></a></nav></div></header>;
}
