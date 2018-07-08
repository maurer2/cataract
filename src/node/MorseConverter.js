"use strict";
exports.__esModule = true;
var MorseSymbols_1 = require("./MorseSymbols");
var alphabetList = require("./MorseAlphabet.json");
var MorseConverter = /** @class */ (function () {
    function MorseConverter() {
        var _this = this;
        this.plainAlphabet = alphabetList;
        this.separator = ' ';
        // replace JSON Strings with Enums
        this.enumAlphabet = Object.keys(this.plainAlphabet).reduce(function (total, current) {
            var currentEntry = _this.plainAlphabet[current];
            var enumArray = currentEntry.split('').map(function (entry) {
                return (entry === '.') ? MorseSymbols_1.MorseSymbols.DOT : MorseSymbols_1.MorseSymbols.DASH;
            });
            total[current.toString()] = enumArray;
            return total;
        }, {});
    }
    MorseConverter.prototype.convertTextToMorse = function (inputText) {
        var _this = this;
        var transformedInput = inputText.split('').map(function (entry) {
            var value = _this.plainAlphabet[entry.toLowerCase()];
            return (typeof value === 'undefined') ? _this.separator : value;
        });
        return transformedInput;
    };
    return MorseConverter;
}());
exports.MorseConverter = MorseConverter;
if (require.main == module) {
    var inputTextParam = process.argv[2] || '';
    var mc = new MorseConverter();
    var transformedText = mc.convertTextToMorse(inputTextParam);
    console.log(transformedText);
}
