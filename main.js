const commander = require('commander');
const fs = require('fs');
const md2html = require('./md2html');

commander.option("--gfm", "GFMを有効にする");
commander.parse(process.argv);
const cli_options = {
    gfm: false,
    ...commander.opts()
}

const file_path = commander.args[0];

fs.readFile(file_path, { encoding: "utf-8" }, (err, file) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
        return;
    } else {
        const html = md2html(file, cli_options);
        console.log(html);
    }
});
