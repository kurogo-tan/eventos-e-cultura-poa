# Observatório de Eventos e Cultura do RS

Site de uma página para descoberta de eventos culturais em Porto Alegre e no Rio Grande do Sul. O projeto é uma iniciativa independente de extensão comunitária universitária: reúne informações culturais verificadas em um só lugar para facilitar o acesso a atividades gratuitas e acessíveis.

## Tecnologias

Next.js com App Router, TypeScript, Tailwind CSS, Lucide React e dados locais em JSON. A configuração usa `output: "export"` para gerar uma versão estática compatível com hospedagem na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Atualizar eventos

Edite `src/data/eventos.json` seguindo a interface em `src/types/evento.ts`. Cada evento publicado precisa ter `fonteOficial` e `verificadoEm`. Use datas no formato `AAAA-MM-DD`; o diretório usa `dataFim` para separar automaticamente eventos vigentes de eventos encerrados.

Antes de publicar, confirme data, horário, endereço, preço, classificação e regras de participação na fonte oficial. Não inclua eventos, links ou informações sem confirmação.

## Verificação e build

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy na Vercel

Importe o repositório na Vercel e use o comando de build padrão `npm run build`. O resultado estático será gerado na pasta `out`.

## Aviso

As informações podem mudar. Consulte a fonte oficial e confirme os detalhes com a organização antes de sair.
