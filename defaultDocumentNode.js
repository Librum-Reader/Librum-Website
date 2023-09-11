import { Iframe } from "sanity-plugin-iframe-pane";

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc) {
  console.log(doc);
  return doc?._id
    ? `https://librumreader.com/preview?id=${doc._id}`
    : `https://librumreader.com`;
}

// Import this into the deskTool() plugin
const defaultDocumentNode = (S, { schemaType }) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defaultDocumentNode;
