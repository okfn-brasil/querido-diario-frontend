import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'edu-advanced-modal',
  templateUrl: './advanced-modal.component.html',
  styleUrls: ['./advanced-modal.component.sass']
})
export class AdvancedModalComponent implements OnInit {
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  items = [
    {
      title: 'A sintaxe simple query string do Elasticsearch foi implementada para aperfeiçoamento de pesquisa na base de dados textuais dos Diários Oficiais. Este mecanismo funciona com o uso de caracteres como operadores de busca a fim de aprimorar os resultados.'
    },
    {
      title: 'Ao executar uma busca, cada documento da base de publicações é verificado e retornado caso corresponda com o critério desejado. Porém, apenas o melhor trecho (ou excerto) do documento é mostrado como resultado. Este excerto pode não conter a busca completa por limitação do espaço de exibição. Com operadores de busca mais complexos, o excerto pode não ser nem exibido já que deixa de ficar claro qual seria o melhor trecho para mostrar. Em qualquer um desses casos, os Diários Oficiais listados como resultados da busca estão corretos.'
    },
    {
      title: 'Conheça operadores da busca avançada, seus efeitos e alguns exemplos:'
    },
    {
      title: '| entre termos significa operação "OU"',
      desc: 'Também conhecido como “operador OR”, funciona usando o símbolo de barra vertical ( | ) para buscar um termo ou outro em toda extensão do diário. Experimente ver os resultados da busca por despacho | dispensa e repare como são de trechos que tem pelo menos uma das palavras em seu conteúdo. Atenção: Este é o operador padrão no Querido Diário. Se você não explicitar qual operador quer utilizar, a ferramenta vai sempre adotá-lo.',
      ex: 'Ex: despacho | dispensa',
    },
    {
      title: '+ entre termos significa operação "E"',
      desc: 'Também conhecido como “operador AND”, funciona usando o símbolo de adição ( + ) para buscar um termo e outro em toda a extensão do diário. Na busca por compra + computadores, os resultados são de diários que contêm ambos termos.',
      ex: 'Ex: compra + computadores',
    },
    {
      title: '- antes de um termo significa Negação',
      desc: 'É um comando de busca que usa os símbolos +- para negar o termo à direita. Buscar por ivermectina +-pandemia é buscar diários que contém o termo “ivermectina” e, adicionalmente, não contém o termo “pandemia” por toda sua extensão. Observação: para a busca funcionar corretamente, não devemos adicionar um espaço entre o símbolo de negação (-) e o termo negado.',
      ex: 'Ex: ivermectina +-pandemia',
    },
    {
      title: '"" em volta do(s) termo(s) significa Busca Exata',
      desc: 'Esta busca funciona com uma frase entre aspas (“ ”) para busca exata do conteúdo, ou seja, as mesmas palavras na mesma ordem. Observação: note a importância de se utilizar as aspas, já que o formato de busca sem aspas também funciona no projeto. Se sua pesquisa for lei de acesso à informação (sem aspas), na prática, o que está sendo buscado é: lei (ou) de (ou) acesso (ou) à (ou) informação.',
      ex: 'Ex: "lei de acesso à informação"',
    },
    {
      title: '* no fim do termo significa Busca por Prefixo',
      desc: 'Esta operação utiliza o símbolo de asterisco ( * ) para buscar por prefixo. Serve para quando o objetivo é achar palavras derivadas de um mesmo radical. Confira como a pesquisa por democr* trás resultados com democracia, democrático, democrata, democratização, etc.',
      ex: 'Ex: democr*',
    },
    {
      title: '~N após um termo significa Edição de Termo',
      desc: 'Funciona utilizando o símbolo til seguido por um número (~N) para distância de edição de termo, ou seja, qual o limite de modificações de caracteres uma palavra precisa para se transformar em outra. Um exemplo é a pesquisa por assento~3 que inclue termos como acento, assunto, assentado; todos eles distando até 3 alterações da palavra buscada. Observação: Outra forma de entender essa busca no contexto dos diários é pensar em erros de digitação já que são produzidos por pessoas: a intenção era escrever certa palavra, mas acabou saindo outra, muito próxima.',
      ex: 'Ex: assento~3',
    },
    {
      title: '~N após uma frase significa Distância entre Termos',
      desc: 'Funciona usando uma frase entre aspas seguida de um til e um valor (“ “~N) indicando a busca como distância máxima entre palavras da frase. O que será buscado são diários que têm os termos entre aspas próximos entre si até N palavras. Ao buscar por “vazamento dados”~50 o que está sendo buscado são trechos de diários que tenham essas duas palavras separadas, por no máximo, 50 outras palavras. Dica: A busca por distância máxima entre palavras é especialmente interessante no contexto do Querido Diário: ela garante que o conteúdo buscado esteja próximo e não disperso por todo o texto do diário. Observação: note que os operadores ~N servem para dois tipos de busca: quando associados a apenas um termo ou quando estão associados a uma frase entre aspas, funcionando de forma completamente diferente. Tenha atenção em seu uso.',
      ex: 'Ex: "vazamento dados"~50',
    },
    {
      title: '() em volta do(s) termo(s) significa Precedência',
      desc: 'Os parênteses como operadores indicam precedência e são usados para forçar a ordem da busca. No geral, só fazem sentido quando a busca a ser feita se complexifica, combinando outros operadores. Você pode conferir na busca por balanço + (financeiro | orçamentário). Ao adicionar os parênteses, a busca é forçada a acontecer em certa ordem: primeiro executa o comando entre parênteses e então passa a executar o resto. Neste caso, busca pelos termos “financeiro” ou “orçamentário” primeiro e, de seu resultado, seleciona apenas os casos que também tem “balanço”.',
      ex: 'Ex: balanço + (financeiro | orçamentário)',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  onClickClose() {
    this.close.emit(true);
  }

}
