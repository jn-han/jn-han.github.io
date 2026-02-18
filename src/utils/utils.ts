export const prettifyTitle = (value: string) =>
  value.replace(/\b\w/g, (letter) => letter.toUpperCase());

export const summary = (text: string) =>
  text.length > 190 ? `${text.slice(0, 190).trim()}...` : text;

export const getEmailLabel = (emailHref: string) =>
  emailHref.replace("mailto:", "");
