// Convierte markdown/HTML simple en texto plano para usar en meta tags
export const toPlainText = (markdown, maxLength = 160) => {
  if (!markdown) return "";

  const text = markdown
    .replace(/<[^>]*>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`~|]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  return text.slice(0, text.lastIndexOf(" ", maxLength - 1)) + "…";
};
