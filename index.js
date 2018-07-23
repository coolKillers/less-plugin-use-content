/**
 * Created by renlong on 2018/7/19.
 * @description 该文件用于
 */
module.exports = function () {
    var Add = function (options) {
        this.options = options;
    };

    Add.prototype = {
        install: function (less, pluginManager) {
            var Use = require('./lib/Use.js');
            pluginManager.addPostProcessor(new Use(this.options));
        }
    };

    return Add;
};