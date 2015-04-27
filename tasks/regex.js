var debug = require('debug')('workflow:activities:log')
var xregexp = require('xregexp')
var XRegExp = xregexp.XRegExp

module.exports = function (node) {
    var p = XRegExp(node.pattern,'x');

    return function(context) {
        return function(done) {
            var str = context.get(node.value);
            var match = XRegExp.exec(str, p);
            done(null, match);
        }
    }

}