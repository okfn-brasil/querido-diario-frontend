const chars = [
  {
    title: 'A',
    items: [
      {
        title: 'Adjudicação',
        text: 'Procuração dada a uma terceira parte, um agente fiduciário, que passa a ter amplos direitos de liquidar seus ativos para satisfazer as reivindicações de credores. No processo licitatório é a manifestação oficial pela proposta mais vantajosa.',
      },
      {
        title: 'Atos administrativos normativos',
        text: 'São comandados pelo poder executivo, visando à correta aplicação da lei, explicitando a norma legal a ser observada pela administração e administradores. Esses atos expressam em detalhe o mandamento abstrato da lei, e o fazem com a mesma normatividade da regra legislativa. São atos normativos os decretos regulamentares e os regimentos, as resoluções, deliberações e portarias de conteúdo geral. Têm a mesma normatividade da lei e estão sujeitas a controle judicial, isto é, podem ser atacados e invalidados direta e imediatamente por via judicial comum, ou por mandado de segurança, se lesivos de direito individual líquido e certo.',
      },
      {
        title: 'Ação orçamentária',
        text: 'Instrumento que contribui para atender ao objetivo de um programa, podendo ser projeto, atividade ou operação especial.',
      },
      {
        title: 'Autarquia',
        text: 'Entidade administrativa autônoma, descentralizada da administração pública, criada por lei, com personalidade jurídica de direito público, patrimônio próprio e atribuições específicas para realizar os fins que a lei lhe determinar.',
      },
    ],
  },
  {
    title: 'B',
    items: [
      {
        title: 'Adjudicação',
        text: 'Procuração dada a uma terceira parte, um agente fiduciário, que passa a ter amplos direitos de liquidar seus ativos para satisfazer as reivindicações de credores. No processo licitatório é a manifestação oficial pela proposta mais vantajosa.',
      },
      {
        title: 'Atos administrativos normativos',
        text: 'São comandados pelo poder executivo, visando à correta aplicação da lei, explicitando a norma legal a ser observada pela administração e administradores. Esses atos expressam em detalhe o mandamento abstrato da lei, e o fazem com a mesma normatividade da regra legislativa. São atos normativos os decretos regulamentares e os regimentos, as resoluções, deliberações e portarias de conteúdo geral. Têm a mesma normatividade da lei e estão sujeitas a controle judicial, isto é, podem ser atacados e invalidados direta e imediatamente por via judicial comum, ou por mandado de segurança, se lesivos de direito individual líquido e certo.',
      },
      {
        title: 'Ação orçamentária',
        text: 'Instrumento que contribui para atender ao objetivo de um programa, podendo ser projeto, atividade ou operação especial.',
      },
      {
        title: 'Autarquia',
        text: 'Entidade administrativa autônoma, descentralizada da administração pública, criada por lei, com personalidade jurídica de direito público, patrimônio próprio e atribuições específicas para realizar os fins que a lei lhe determinar.',
      },
    ],
  },
  {
    title: 'C',
    items: [
      {
        title: 'Adjudicação',
        text: 'Procuração dada a uma terceira parte, um agente fiduciário, que passa a ter amplos direitos de liquidar seus ativos para satisfazer as reivindicações de credores. No processo licitatório é a manifestação oficial pela proposta mais vantajosa.',
      },
      {
        title: 'Atos administrativos normativos',
        text: 'São comandados pelo poder executivo, visando à correta aplicação da lei, explicitando a norma legal a ser observada pela administração e administradores. Esses atos expressam em detalhe o mandamento abstrato da lei, e o fazem com a mesma normatividade da regra legislativa. São atos normativos os decretos regulamentares e os regimentos, as resoluções, deliberações e portarias de conteúdo geral. Têm a mesma normatividade da lei e estão sujeitas a controle judicial, isto é, podem ser atacados e invalidados direta e imediatamente por via judicial comum, ou por mandado de segurança, se lesivos de direito individual líquido e certo.',
      },
      {
        title: 'Ação orçamentária',
        text: 'Instrumento que contribui para atender ao objetivo de um programa, podendo ser projeto, atividade ou operação especial.',
      },
      {
        title: 'Autarquia',
        text: 'Entidade administrativa autônoma, descentralizada da administração pública, criada por lei, com personalidade jurídica de direito público, patrimônio próprio e atribuições específicas para realizar os fins que a lei lhe determinar.',
      },
    ],
  },
  { title: 'D', items: [] },
  { title: 'E', items: [] },
  { title: 'F', items: [] },
  { title: 'G', items: [] },
  { title: 'H', items: [] },
  { title: 'I', items: [] },
  { title: 'J', items: [] },
  { title: 'K', items: [] },
  { title: 'L', items: [] },
  { title: 'M', items: [] },
  { title: 'N', items: [] },
  { title: 'O', items: [] },
  { title: 'P', items: [] },
  { title: 'Q', items: [] },
  { title: 'R', items: [] },
  { title: 'S', items: [] },
  { title: 'T', items: [] },
  { title: 'V', items: [] },
  { title: 'X', items: [] },
  { title: 'Y', items: [] },
  { title: 'Z', items: [] },
];

export const GLOSSARY = {
  title: 'Glossário',
  actions: chars
    .map((char) => {
      return { text: char.title, to: `/glossario/${char.title}` };
    }),
  text: 'Sentiu falta de algum termo? <a>Entre em contato e envie sua sugestão</a>',
  items: chars.filter((char) => char.items.length > 0),
};
