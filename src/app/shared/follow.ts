import { of } from "rxjs";
import { EVOLUTION_LIST } from "../data/home";
import { createH1, createIcon, createLink, createList, createSection } from "./utils";

const h1 = createH1('Acompanhe a evolução do Querido Diário');

const list = createList({
  layout: 'row',
  layoutAlign: 'space-between',
  content: of(EVOLUTION_LIST),
});

const icon = createIcon({
  file: 'white-arrow',
  height: 12,
  width: 12,
});

const link = createLink({
  text: 'Conheça os níveis de acesso',
  link: '/acesso',
  icon: icon,
});

export const FOLLOW = createSection({
  theme: 'bg-purple-1',
  gap: 62,
  layout: 'row',
  layoutAlign: 'center',
  content: of([h1, list, link]),
});