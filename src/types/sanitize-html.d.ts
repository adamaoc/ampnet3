declare module 'sanitize-html' {
  type SanitizeAttributes = Record<string, string>;

  type SanitizeOptions = {
    allowedTags?: string[];
    allowedAttributes?: Record<string, string[]>;
    allowedSchemes?: string[];
    allowProtocolRelative?: boolean;
    disallowedTagsMode?:
      | 'discard'
      | 'completelyDiscard'
      | 'escape'
      | 'recursiveEscape';
    transformTags?: Record<
      string,
      (
        tagName: string,
        attribs: SanitizeAttributes
      ) => { tagName: string; attribs: SanitizeAttributes }
    >;
  };

  function sanitizeHtml(html: string, options?: SanitizeOptions): string;
  export default sanitizeHtml;
}
