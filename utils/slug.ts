export const slugify = (str: string, sep: string = "-"): string =>
  String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, sep) // replace non-alphanumeric characters
    .replace(/\s+/g, sep) // replace spaces with hyphens
    .replace(/-+/g, sep); // remove consecutive hyphens
