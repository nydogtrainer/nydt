
module.exports = function (eleventyConfig) {

    // Format dates for blog articles
    eleventyConfig.addFilter("readableDate", function (date) {
        const parsedDate = new Date(date);

        return parsedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC"
        });
    });

    eleventyConfig.addFilter("htmlDateString", function (date) {
        return new Date(date).toISOString().slice(0, 10);
    });

    // Preserve existing website assets
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("admin/config.yml");

    // Collect all blog posts
    eleventyConfig.addCollection("posts", function (collectionApi) {
        return collectionApi
            .getFilteredByGlob("posts/*.md")
            .sort((a, b) => b.date - a.date);
    });

    // Collect unique blog categories
    eleventyConfig.addCollection("categories", function (collectionApi) {
        const categories = new Set();

        collectionApi.getFilteredByGlob("posts/*.md").forEach(post => {
            (post.data.categories || []).forEach(category => {
                categories.add(category);
            });
        });

        return [...categories].sort();
    });

    // Collect unique blog tags
    eleventyConfig.addCollection("tags", function (collectionApi) {
        const tags = new Set();

        collectionApi.getFilteredByGlob("posts/*.md").forEach(post => {
            (post.data.tags || []).forEach(tag => {
                tags.add(tag);
            });
        });

        return [...tags].sort();
    });

    // Generate URL-friendly slugs
    eleventyConfig.addFilter("slugify", function (value) {
        return String(value)
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");
    });

    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};
