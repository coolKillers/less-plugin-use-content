/**
 * Created by renlong on 2018/7/19.
 */

var Use = function (options) {
    this.options = options;
};
Use.prototype.process = function (css, extra) {
    var f = this.options && this.options.deal;
    if (typeof f === 'function') {
        f.call(this, css, extra);
    }
    return css;
};
Use.prototype.setOptions = function (options) {
    this.options = options;
};
module.exports = Use;