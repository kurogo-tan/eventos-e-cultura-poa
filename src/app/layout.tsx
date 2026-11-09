import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Observatório de Eventos e Cultura do RS",
  description: "Encontre eventos culturais gratuitos e acessíveis em Porto Alegre e no Rio Grande do Sul.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "A cultura acontece perto de você.", description: "Eventos culturais em Porto Alegre e no Rio Grande do Sul." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
