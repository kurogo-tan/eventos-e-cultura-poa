"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, ChevronRight, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { EventFilters } from "@/components/EventFilters";
import { EventCard } from "@/components/EventCard";
import { EventDetails } from "@/components/EventDetails";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { eventosData, eventoEstaVigente } from "@/lib/events";
import { Evento } from "@/types/evento";

export default function Home() {
  const [busca, setBusca] = useState("");
  const [cidade, setCidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [acesso, setAcesso] = useState("");
  const [somenteProximos, setSomenteProximos] = useState(true);
  const [selecionado, setSelecionado] = useState<Evento | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelecionado(null); };
    document.addEventListener("keydown", close);
    document.body.style.overflow = selecionado ? "hidden" : "";
    return () => { document.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [selecionado]);

  const cidades = Array.from(new Set(eventosData.map((evento) => evento.cidade))).sort();
  const categorias = Array.from(new Set(eventosData.map((evento) => evento.categoria))).sort();
  const filtrados = useMemo(() => eventosData.filter((evento) => {
    const texto = `${evento.titulo} ${evento.descricao} ${evento.local}`.toLowerCase();
    return (!busca || texto.includes(busca.toLowerCase())) && (!cidade || evento.cidade === cidade) && (!categoria || evento.categoria === categoria) && (!acesso || (acesso === "gratuito" ? evento.gratuito : !evento.gratuito)) && (!somenteProximos || eventoEstaVigente(evento));
  }).sort((a, b) => a.dataInicio.localeCompare(b.dataInicio)), [busca, cidade, categoria, acesso, somenteProximos]);
  const limpar = () => { setBusca(""); setCidade(""); setCategoria(""); setAcesso(""); setSomenteProximos(false); };

  return <><Header /><main><Hero /><section id="eventos" className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16"><div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-coral"><Sparkles size={15} /> Agenda cultural</div><h2 className="display text-3xl font-bold tracking-tight md:text-4xl">O que está acontecendo?</h2><p className="mt-2 text-sm text-ink/60">Programação verificada para você aproveitar o RS.</p></div><div className="flex items-center gap-2 text-sm font-bold text-purple"><CalendarDays size={17} /> {filtrados.length} {filtrados.length === 1 ? "evento encontrado" : "eventos encontrados"}</div></div><EventFilters {...{ busca, setBusca, cidade, setCidade, categoria, setCategoria, acesso, setAcesso, somenteProximos, setSomenteProximos, limpar, cidades, categorias }} /><div className="mt-8">{filtrados.length > 0 ? <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtrados.map((evento) => <EventCard key={evento.id} evento={evento} onDetails={() => setSelecionado(evento)} />)}</div> : <div className="rounded-3xl border border-dashed border-purple/30 bg-[#F3E8FF]/40 px-6 py-16 text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-purple shadow-sm"><CalendarDays /></div><h3 className="display mt-5 text-2xl font-bold">Nenhum evento encontrado</h3><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink/60">Tente remover algum filtro ou buscar por outro termo. A agenda é atualizada manualmente a partir de fontes oficiais.</p><button onClick={limpar} className="mt-5 rounded-full bg-purple px-5 py-2.5 text-sm font-bold text-white hover:bg-[#6D28D9]">Ver toda a agenda</button></div>}</div><a href="#sobre" className="mt-12 flex items-center justify-center gap-1 text-sm font-bold text-purple hover:underline">Conheça o projeto <ChevronRight size={16} /></a></section><About /></main><Footer />{selecionado && <EventDetails evento={selecionado} onClose={() => setSelecionado(null)} />}</>;
}
