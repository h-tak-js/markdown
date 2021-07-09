const marked = require('marked');
module.exports = (markdown, cli_options) => {
    return marked(markdown, {
        gfm: cli_options.gfm,
    });
}