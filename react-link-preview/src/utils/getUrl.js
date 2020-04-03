/**
 * Função responsável por receber o texto digitado no input e verificar
 * se é um link
 */

export default function getUrl(text) {

  if (!text) return null;

  const a = document.createElement("a");

  a.href = text;

  const { protocol, host, pathname, search, hash } = a;

  const url = `${protocol}//${host}${pathname}${search}${hash}`;

  const isSameHost = host === window.location.host;

  if (isSameHost) return null;

  console.log(url);

  return url;

}
