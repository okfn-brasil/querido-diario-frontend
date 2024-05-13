export interface SearchResultCSV {
  id: string;
  municipio: string;
  uf: string;
  excerto: string;
  data_publicacao: string;
  edicao_extra: string;
  url_arquivo_txt: string;
  url_arquivo_original: string;
  // Bellow items only avaible on QD Education
  envolvidos?: string[];
  numero_edicao?: string;
  subtemas?: string[];
}
