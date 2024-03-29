/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

const blockContent = {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        { title: "P", value: "p" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      initialValue: {
        wrap: "noWrap",
        alignment: "center",
        size: "medium",
      },
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "size",
          title: "Image Size",
          type: "string",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
              { title: "Full", value: "full" },
            ],
          },
        },
        {
          name: "alignment",
          title: "Image Alignment",
          type: "string",
          options: {
            list: [
              { title: "Left", value: "flex-start" },
              { title: "Center", value: "center" },
              { title: "Right", value: "flex-end" },
            ],
          },
        },
        {
          name: "wrap",
          title: "Wrap Text Around Image",
          type: "string",
          options: {
            list: [
              { title: "No wrap", value: "noWrap" },
              { title: "Wrap - align right", value: "wrap-right" },
              { title: "Wrap - align left", value: "wrap-left" },
            ],
            layout: "radio",
          },
        },
      ],
    },
    {
      name: "video",
      title: "Video File",
      type: "file",
      description: "Upload the video file.",
      options: {
        accept: "video/*", // Specify the accepted video file formats
      },
      fields: [
        {
          name: "videoSize",
          title: "Video Size",
          type: "string",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
            ],
          },
        },
      ],
    },
  ],
};

export default blockContent;
