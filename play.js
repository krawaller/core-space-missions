const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

(async () => {
  merger.add("./missions/001/001.pdf");
  merger.add("./missions/002/002.pdf");
  await merger.save("merged.pdf");
})();
