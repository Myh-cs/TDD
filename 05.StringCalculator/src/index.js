"use strict";
exports.__esModule = true;
var StringCalculator = /** @class */ (function () {
    function StringCalculator() {
        this.character = [',', '\n', '-'];
    }
    StringCalculator.prototype.add = function (str) {
        var _this = this;
        if (str.length === 0) {
            return 0;
        }
        if (str.indexOf(this.character[2]) >= 0) {
            throw new Error("can't contain negative number");
        }
        if (str.indexOf(this.character[0]) > 0 && str.indexOf(this.character[1]) > 0) {
            var arr_1 = [];
            str.split(this.character[0]).forEach(function (item) {
                item.split(_this.character[1]).forEach(function (temp) {
                    arr_1.push(temp);
                });
            });
            return this.calculate(this.character[0], arr_1.join(','));
        }
        if (str.indexOf(',') > 0) {
            return this.calculate(this.character[0], str);
        }
        if (str.indexOf('\n') > 0) {
            return this.calculate(this.character[1], str);
        }
        return parseInt(str);
    };
    StringCalculator.prototype.calculate = function (spliter, str) {
        return str.split(spliter).reduce(function (total, current) {
            return total + parseInt(current);
        }, 0);
    };
    return StringCalculator;
}());
exports.StringCalculator = StringCalculator;
