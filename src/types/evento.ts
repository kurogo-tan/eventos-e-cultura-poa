export interface Evento {
  id: string;
  titulo: string;
  categoria: string;
  descricao: string;
  descricaoCompleta: string;
  cidade: string;
  local: string;
  endereco: string;
  dataInicio: string;
  dataFim: string;
  horario: string;
  gratuito: boolean;
  preco: string;
  classificacaoEtaria?: string;
  comoParticipar: string;
  fonteOficial: string;
  verificadoEm: string;
  imagem?: string;
}
