var less = require('less');
/*less.render('.class { width: 1 + 1 }', function (e, css) {
    console.log(css);
});
//手动调用解析器和编译器:
var parser = new(less.Parser);

parser.parse('.class { width: 1 + 1 }', function (err, tree) {
    if (err) { return console.error(err) }
    console.log(tree.toCSS({ compress: true }));
});*/

//你可以向解析器传递参数
var parser = new(less.Parser)({
    paths: ['.'], // Specify search paths for @import directives
    filename: 'style.less' // Specify a filename, for better error messages
});

parser.parse('.class { width: 1 + 1 }', function (e, tree) {
    console.log(tree.toCSS({ compress: true })); // Minify CSS output
});