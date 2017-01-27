import _ from 'lodash';
import CssTask from '../CssTask';

let fs = require('fs');

/*
 |----------------------------------------------------------------
 | Sass Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Sass, including minification and
 | and auto-prefixing. Sass is one of the CSS pre-precessors
 | supported by Elixir, along with the Less CSS processor.
 |
 */

Elixir.extend('split', function(src, output, baseDir, options) {
    let foldPath = Elixir.config.get('assets.css.sass.folder') + 'fold.scss';
    fs.closeSync(fs.openSync(foldPath, 'w'));

    new CssTask('sass', getPaths(foldPath, baseDir, output), options);

    fs.unlinkSync(foldPath);
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  baseDir
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
function getPaths(src, baseDir, output) {
    return new Elixir.GulpPaths()
        .src(src, baseDir || Elixir.config.get('assets.css.sass.folder'))
        .output(output || Elixir.config.get('public.css.outputFolder'), 'app.css');
};
