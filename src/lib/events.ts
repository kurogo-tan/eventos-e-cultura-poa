import eventos from "@/data/eventos.json";
import { Evento } from "@/types/evento";

export const eventosData = eventos as Evento[];

export function dataLocal(data: string) {
  return new Date(`${data}T12:00:00`);
}

export function eventoEstaVigente(evento: Evento, hoje = new Date()) {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(hoje);
  const valor = (tipo: string) => partes.find((parte) => parte.type === tipo)?.value;
  const diaAtual = `${valor("year")}-${valor("month")}-${valor("day")}`;
  return evento.dataFim >= diaAtual;
}

export function dataFormatada(data: string) {
  return dataLocal(data).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }).replace(".", "");
}

export function mapsUrl(evento: Evento) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${evento.local}, ${evento.endereco}`)}`;
}
