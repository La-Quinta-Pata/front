

export default function getEmbedUrl(url) {
    try {
      const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;
      const match = url.match(regExp);
      return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    } catch {
      return url;
    }
  }