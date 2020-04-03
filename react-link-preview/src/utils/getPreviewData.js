/**
 * Função que receb o array de tags e retorna um objeto
 * com as informações necessário apra o preview
 */

export default function getPreviewData(tags) {
  
  const result = tags.reduce((previewData, item) => {
    switch (item.tag) {
      case "og:title":
        previewData.title = item.value;
        break;
      case "og:url":
        previewData.link = item.value;
        break;
      case "og:description":
        previewData.description = item.value;
        break;
      case "og:site_name":
        previewData.site = item.value;
        break;
      case "og:image":
        previewData.image = item.value;
        break;
      default:
        break;
    }
    return previewData;
  }, {});

  return Promise.resolve(result);
  
}
