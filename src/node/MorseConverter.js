"use strict";
exports.__esModule = true;
// import { MorseAlphabet } from './MorseAlphabetInterface';
var alphabetList = require("./MorseAlphabet.json");
var MorseConverter = /** @class */ (function () {
    function MorseConverter() {
        this.plainAlphabet = alphabetList;
        this.separator = ' ';
    }
    MorseConverter.prototype.convertTextToMorse = function (inputText) {
        var _this = this;
        var transformedInput = inputText.split('')
            .map(function (entry) {
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
