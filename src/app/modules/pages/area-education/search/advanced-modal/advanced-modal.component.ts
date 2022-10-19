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
      title: 'Para usar um desses caracteres literalmente, escape-o com uma barra invertida (\).'
    },
    {
      title: '+ significa operação E',
      desc: 'Utilize + quando os resultados devem conter ambos os termos',
      ex: 'Ex: crédito + cartão',
    },
    {
      title: '| significa operação OU',
      desc: 'Utilize | quando os resultados devem conter pelo menos um dos termos',
      ex: 'Ex: débito | crédito',
    },
    {
      title: '- nega um único token',
      desc: 'Explicação de quando utilizar',
      ex: 'Ex:',
    },
    {
      title: '" envolve um número de tokens para significar uma frase para pesquisa',
      desc: 'Explicação de quando utilizar',
      ex: 'Ex:',
    },
    {
      title: '* no final de um termo significa uma consulta de prefixo',
      desc: 'Explicação de quando utilizar',
      ex: 'Ex:',
    },
    {
      title: '~N depois de uma palavra significa editar a distância (indefinição)',
      desc: 'Explicação de quando utilizar',
      ex: 'Ex:',
    },
    {
      title: '~N depois de uma frase significa quantidade de despejo',
      desc: 'Explicação de quando utilizar',
      ex: 'Ex:',
    },
    {
      title: '* no final de um termo significa uma consulta de prefixo',
      desc: 'Explicação de quando utilizar',
      ex: 'Ex:',
    },
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
