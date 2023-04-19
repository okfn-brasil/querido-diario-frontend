export interface CNPJResponse {
  cnpj_info: CNPJInfo;
}

export interface CNPJInfo {
  bairro: string;
  capital_social: string;
  cep: string;
  cnae: string;
  cnae_fiscal_secundario: string;
  cnpj_basico: string;
  cnpj_completo: string;
  cnpj_completo_apenas_numeros: string;
  cnpj_dv: string;
  cnpj_ordem: string;
  complemento: string;
  correio_eletronico: string;
  data_exclusao_pelo_mei: string;
  data_exclusao_pelo_simples: string;
  data_inicio_atividade: string;
  data_opcao_pelo_mei: string;
  data_opcao_pelo_simples: string;
  data_situacao_cadastral: string;
  data_situacao_especial: string;
  ddd_telefone_1: string;
  ddd_telefone_2: string;
  ddd_telefone_fax: string;
  ente_federativo_responsavel: string;
  identificador_matriz_filial: string;
  logradouro: string;
  motivo_situacao_cadastral: string;
  municipio: string;
  natureza_juridica: string;
  nome_cidade_exterior: string;
  nome_fantasia: string;
  numero: string;
  opcao_pelo_mei: string;
  opcao_pelo_simples: string;
  pais: string;
  porte: string;
  qualificacao_do_responsavel: string;
  razao_social: string;
  situacao_cadastral: string;
  situacao_especial: string;
  tipo_logradouro: string;
  uf: string;
}

export interface CNPJPartnerResponse { 
  partners: CNPJPartner[];
  total_partners: number;
}

export interface CNPJPartner {
  cnpj_basico: string;
  cnpj_completo: string;
  cnpj_completo_apenas_numeros: string;
  cnpj_cpf_socio: string;
  cnpj_dv: string;
  cnpj_ordem: string;
  data_entrada_sociedade: string;
  faixa_etaria: string;
  identificador_socio: string;
  nome_representante_legal: string;
  numero_cpf_representante_legal: string;
  pais_socio_estrangeiro: string;
  qualificacao_representante_legal: string;
  qualificacao_socio: string;
  razao_social: string;

  'CNPJ': string;
  'CPF do Sócio': string;
  'Data de início': string;
  'Faixa etária': string;
  'Identificador de Sócio': string;
  'Nome do representante legal': string;
  'CPF do representante legal': string;
  'País sócio estrangeiro': string;
  'Qualificação do representante legal': string;
  'Qualificação do sócio': string;
  'Razão Social': string;
  [key: string]: string;
}

export const parsePartners = (partners: CNPJPartner[]) => {
  return partners.map(partner => {
    return {
      'CNPJ': partner.cnpj_completo,
      'CPF do Sócio': partner.cnpj_cpf_socio,
      'Data de início': partner.data_entrada_sociedade,
      'Faixa etária': partner.faixa_etaria,
      'Identificador de Sócio': partner.identificador_socio,
      'Nome do representante legal': partner.nome_representante_legal,
      'CPF do representante legal': partner.numero_cpf_representante_legal,
      'País sócio estrangeiro': partner.pais_socio_estrangeiro,
      'Qualificação do representante legal': partner.qualificacao_representante_legal,
      'Qualificação do sócio': partner.qualificacao_socio,
      'Razão Social': partner.razao_social,
    };
  });
};