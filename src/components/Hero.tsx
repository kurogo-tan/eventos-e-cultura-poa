import { ArrowDown, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="grain overflow-hidden border-b border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-5 py-12 md:grid-cols-[1.08fr_.92fr] md:px-10 md:py-16">
        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-purple"><MapPin size={15} strokeWidth={2.5} /> Porto Alegre & Rio Grande do Sul</div>
          <h1 className="display max-w-3xl text-5xl font-bold leading-[.98] tracking-[-.045em] text-ink md:text-7xl">A cultura acontece <span className="text-purple">perto de você.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink/70 md:text-lg">Descubra eventos, apresentações, exposições e atividades culturais em Porto Alegre e no Rio Grande do Sul.</p>
          <a href="#eventos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple/20 transition hover:-translate-y-0.5 hover:bg-[#6D28D9]">Explorar eventos <ArrowDown size={17} /></a>
        </div>
        <div className="relative hidden min-h-[230px] md:block">
          <div className="absolute right-9 top-2 h-52 w-52 rounded-[35%_65%_55%_45%] bg-[#E9D5FF]" />
          <div className="absolute right-24 top-8 h-44 w-44 rounded-[45%_55%_35%_65%] border border-purple/20 bg-[#F5EFFF]" />
          <div className="absolute bottom-2 right-0 flex h-28 w-64 items-center justify-center rounded-3xl bg-ink p-5 text-cream shadow-2xl">
            <div>
              <div className="mb-2 h-1 w-8 rounded-full bg-coral" />
              <p className="display text-2xl font-bold leading-none">tem sempre<br /><span className="text-amber">algo acontecendo.</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
