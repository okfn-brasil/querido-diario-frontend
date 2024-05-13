export interface SearchResultsCSV {
  municipio: string;
  uf: string;
  excerto: string;
  data_publicacao: string;
  edicao_extra: string;
  url_arquivo_txt: string;
  url_arquivo_original: string;
  envolvidos: string[];
  id: string;
  numero_edicao?: string;
  subtemas?: string[];
}
