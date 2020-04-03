/**
 * Função que utiliza a biblioteca cheerio para extrair as tags necessárias
 * para o preview
 */

import cheerio from 'cheerio';

export default function parseHTML(html) {

  const $ = cheerio.load(html);

  const meta = [];

  $("head meta").map((index, item) => {
    if (!item.attribs) return null;

    const property = item.attribs.property || null;
    const content = item.attribs.content || null;

    if (!property || !content) return null;

    meta.push({
      tag: property,
      value: content
    });

    return null;
  });

  return Promise.resolve(meta);

}
