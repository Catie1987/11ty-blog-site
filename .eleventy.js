const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy("./src/bundle.js");
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    
    eleventyConfig.addFilter("postDate", (dateObj)=>{
        return DateTime.fromJSDate(dateObj).
        toLocaleString(DateTime.DATE_MED);
    });

   /*----- eleventyConfig.addCollection("authors", async function(collection) {
        collection = await api.authors
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
        return collection;
    });
  
    });  --------*/

    return {
        dir: {
            input: "src",
            output: "public"
        },
    templateFormats: ["css", "njk", "md", "txt"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
    };
};