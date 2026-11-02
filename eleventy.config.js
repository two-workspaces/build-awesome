export default function (config) {
  config.addPassthroughCopy("src/style.css");
  config.addFilter("date", (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }));
  return { dir: { input: "src" }, markdownTemplateEngine: "njk" };
}
