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

    

    const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

    module.exports = function(eleventyConfig) {
      eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "dynamic",
        functionsDir: "./netlify/functions/",
      });
    
    };


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