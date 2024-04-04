
export interface GazetteResponse {
  excerpts: GazetteModel[];
  total_excerpts: number;
}

export enum OrderFilter {
  relevance = 'relevance',
  descending_date = 'descending_date',
  ascending_date = 'ascending_date',
}

export interface GazetteModel {
  date: string;
  edition: string;
  entities: string[];
  excerpt: string;
  is_extra_edition: boolean;
  state_code: string;
  subthemes: string[];
  territory_id: string;
  territory_name: string;
  txt_url: string;
  url: string;
}

export interface GazetteFilters {
  querystring?: string;
  offset: number;
  period?: number;
  sort_by: string | undefined;
  size: number;
  until?: string | Date;
  published_since?: string | Date;
  scraped_until: string;
  scraped_since: string;
  pre_tags?: string[] | string;
  post_tags?: string[] | string;
  territory_id?: string[];
  subthemes?: string[];
  entities?: string[] | string;
  [key: string]: string | Date | (string | null)[] | undefined | number | string[];
}

export const parseGazettes = (gazettes: GazetteModel[], query: string) => {
  return gazettes.map(item => {
    item.excerpt = item.excerpt.replace(/entidadecnpj/g, '~~~').replace(/entidadeeducacao/g, '~%');
    const replaceCnpj = item.excerpt.split('<~~~>');
    let newTextCnpj = '';
    replaceCnpj.forEach(textFragment => { 
      const cnpjIndex = textFragment.indexOf('</~~~>');
      if (cnpjIndex > 0) {
        const cnpj = textFragment.slice(0, cnpjIndex).trim();
        newTextCnpj += `<a class="education-gazette-link" href='/educacao/cnpj/${removeSpecialChars(cnpj).replace(/b/g, '')}'>${textFragment}`;
      } else {
        newTextCnpj += textFragment;
      }
    });

    let newTextEntity = '';
    const replaceEntity = newTextCnpj.split('<~%>');
    replaceEntity.forEach(textFragment => { 
      const entityIndex = textFragment.indexOf('</~%>');
      if (entityIndex > 0) {
        newTextEntity += `<b class='education-gazette-entity'>${textFragment}`;
      } else {
        newTextEntity += textFragment;
      }
    });
    const date = new Date(item.date);
    let replacedText = newTextEntity.replace(/~~~/g, 'a').replace(/~%/g, 'b');
  
    return {
      ...item,
      date: `${formatMonth(date.getDate())}/${formatMonth(date.getMonth() + 1)}/${date.getFullYear()}`,
      excerpt: replacedText
    }
  });
}

export const formatMonth = (number: number) => {
  return number < 10 ? `0${number}` : number;
}

const replaceQueryToBold = (text: string, query: string) => {
  return text.replace(new RegExp(query, 'g'), `<b>${query}</b>`)
    .replace(new RegExp(query.toLowerCase(), 'g'), `<b>${query.toLowerCase()}</b>`)
    .replace(new RegExp(query.toUpperCase(), 'g'), `<b>${query.toUpperCase()}</b>`)
}

export const removeSpecialChars = (value: string) => {
  return value.replace(/[&\/\\#,+()$~%!.„'":*‚^_¤?<>|@ª{«»§}©®™]/g, '').replace('-', '');
};
