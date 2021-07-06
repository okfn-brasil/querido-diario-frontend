export interface ListInterface {
  layout?: string;
  layoutAlign?: string;
  content: any;
  width?: number;
  height?: number;
  gap?: number;
}

export class List {
  type = 'list';
  layout?: string;
  layoutAlign?: string;
  content: any;
  width?: number;
  height?: number;
  gap?: number;

  constructor(props: ListInterface) {
    this.layout = props.layout;
    this.layoutAlign = props.layoutAlign;
    this.content = props.content;
    this.height = props.height;
    this.width = props.width;
    this.gap = props.gap;
  }
}

export interface IconProps {
  file: string;
  height?: number;
  width?: number;
}

export class Icon {
  type = 'icon';
  file: string;
  height?: number;
  width?: number;

  constructor(props: IconProps) {
    this.file = props.file;
    this.height = props.height;
    this.width = props.width;
  }
}

export interface LinkProps {
  text: string;
  link: string;
  icon?: Icon;
}

export class Link {
  type = 'link';
  text: string;
  link: string;
  icon?: Icon;

  constructor(props: LinkProps) {
    this.text = props.text;
    this.link = props.link;
    this.icon = props.icon;
  }
}

export interface ButtonProps {
  content: string;
  to: string;
  theme?: string;
}

export class Button {
  content: string;
  to: string;
  theme?: string;
  type = 'button';

  constructor(props: ButtonProps) {
    this.content = props.content;
    this.to = props.to;
    this.theme = props.theme;
  }
}

export class H1 {
  type = 'h1';
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}

export class H2 {
  type = 'h2';
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}

export class Text {
  type = 'text';
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}

export interface SectionProps {
  gap?: number;
  layout?: 'row' | 'column';
  layoutAlign?: string;
  content?: any;
  theme?: string;
}

export class Section {
  type = 'section';
  gap?: number;
  layout?: 'row' | 'column';
  layoutAlign?: string;
  content?: any;
  theme?: string;

  constructor(props: SectionProps) {
    this.gap = props.gap;
    this.layout = props.layout;
    this.layoutAlign = props.layoutAlign;
    this.content = props.content;
    this.theme = props.theme;
  }
}
