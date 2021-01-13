module.exports = {
    content: ["./_site/**/*.html"],
    css: ["./_site/assets/css/style.css"],
    defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
};
