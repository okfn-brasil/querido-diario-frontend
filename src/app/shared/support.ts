import { of } from 'rxjs';
import {
  createH1,
  createIcon,
  createLink,
  createList,
  createText,
  createSection,
  createH2,
  createColumn,
  createRow,
} from './utils';

const h1 = createH1('Precisamos do seu apoio');

const nextGoal = createColumn({
  gap: 34,
  width: 380,
  content: of([
    createIcon({ file: 'document', height: 60, width: 36 }),
    createColumn({
      gap: 12,
      content: of([
        createH2('Nossa proxima meta'),
        createText(
          'Contribua com código - o Querido Diário é um projeto de código aberto, então qualquer pessoa pode colaborar com novas funcionalidades para a plataforma'
        ),
      ]),
    }),
    createRow({
      content: [],
    }),
  ]),
});

const contribute = createColumn({
  gap: 34,
  width: 380,
  content: of([
    createIcon({ file: 'document', height: 60, width: 36 }),

    createColumn({
      gap: 12,
      content: of([
        createH2('Contribua como desenvolvedor'),
        createText(
          'Contribua com código - o Querido Diário é um projeto de código aberto, então qualquer pessoa pode colaborar com novas funcionalidades para a plataforma'
        ),
      ]),
    }),

    createRow({
      content: [],
    }),
  ]),
});

const register = createColumn({
  width: 380,
  gap: 34,
  content: of([
    createIcon({ file: 'document', height: 60, width: 36 }),

    createColumn({
      gap: 12,
      content: of([
        createH2('Contribua como desenvolvedor'),
        createText(
          'Contribua com código - o Querido Diário é um projeto de código aberto, então qualquer pessoa pode colaborar com novas funcionalidades para a plataforma'
        ),
      ]),
    }),

    createRow({
      content: [],
    }),
  ]),
});

const list = createRow({
  content: of([nextGoal, contribute, register]),
});

export const SUPPORT = createSection({
  theme: 'bg-purple-2',
  gap: 34,
  layout: 'row',
  layoutAlign: 'center',
  content: of([h1, list]),
});
