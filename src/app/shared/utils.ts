import {
  H1,
  Icon,
  IconProps,
  Link,
  LinkProps,
  List,
  ListInterface,
  Text,
  Section,
  SectionProps,
  H2,
  ButtonProps,
  Button,
} from './interfaces';

export const createList = (props: ListInterface): List => {
  return new List(props);
};

export const createColumn = (props: ListInterface): List => {
  const layoutAlign = props.layoutAlign || 'space-between';
  return new List({ ...props, layout: 'column', layoutAlign });
}

export const createRow = (props: ListInterface): List => {
  const layoutAlign = props.layoutAlign || 'space-between';
  return new List({ ...props, layout: 'row', layoutAlign });
}

export const createLink = (props: LinkProps): Link => {
  return new Link(props);
};

export const createIcon = (props: IconProps): Icon => {
  return new Icon(props);
};

export const createSection = (props: SectionProps): Section => {
  return new Section(props);
};

export const createH1 = (text: string): H1 => {
  return new H1(text);
};

export const createText = (text: string): Text => {
  return new Text(text);
};

export const createH2 = (content: string): H2 => {
  return new H2(content);
};

export const createButton = (props: ButtonProps): Button => {
  return new Button(props);
}
