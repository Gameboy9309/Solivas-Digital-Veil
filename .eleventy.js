module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addCollection("blog", col =>
    col.getFilteredByGlob("src/blog/*.md").reverse()
  );
  eleventyConfig.addCollection("notes", col =>
    col.getFilteredByGlob("src/notes/*.md").reverse()
  );
  eleventyConfig.addCollection("ideas", col =>
    col.getFilteredByGlob("src/ideas/*.md").reverse()
  );

  eleventyConfig.addFilter("readableDate", date =>
    new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  );
  eleventyConfig.addFilter("isoDate", date =>
    new Date(date).toISOString().split("T")[0]
  );
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  return {
    dir: { input: "src", output: "public" },
  };
};
