import eventos from "@/data/eventos.json";
import { Evento } from "@/types/evento";

export const eventosData = eventos as Evento[];

export function dataLocal(data: string) {
  return new Date(`${data}T12:00:00`);
}

export function eventoEstaVigente(evento: Evento, hoje = new Date()) {
  return dataLocal(evento.dataFim) >= new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
}

export function dataFormatada(data: string) {
  return dataLocal(data).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }).replace(".", "");
}

export function mapsUrl(evento: Evento) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${evento.local}, ${evento.endereco}`)}`;
}
