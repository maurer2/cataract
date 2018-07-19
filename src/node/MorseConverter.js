"use strict";
exports.__esModule = true;
var MorseSymbols_1 = require("./MorseSymbols");
var alphabetList = require("./MorseAlphabet.json");
var MorseConverter = /** @class */ (function () {
    function MorseConverter() {
        this.enumAlphabet = Object.keys(alphabetList).reduce(function (total, currentLetter) {
            var currentValue = alphabetList[currentLetter];
            // replace unicode Strings with Enums
            var symbols = currentValue.split('').map(function (currentCharacter) {
                return (currentCharacter === '.') ? MorseSymbols_1.MorseSymbols.DOT : MorseSymbols_1.MorseSymbols.DASH;
            });
            total[currentLetter.toString().toLowerCase()] = symbols;
            return total;
        }, {});
    }
    MorseConverter.prototype.reduceToAlphaText = function (text) {
        return text.replace(/[^a-z]/gi, '');
    };
    MorseConverter.prototype.convertTextToWords = function (text) {
        return text.split(' ');
    };
    MorseConverter.prototype.convertWordToLetters = function (word) {
        return word.split('');
    };
    MorseConverter.prototype.convertLetterToMorse = function (letter) {
        return this.enumAlphabet[letter];
    };
    MorseConverter.prototype.convertTextToMorse = function (text) {
        var _this = this;
        var words = this.convertTextToWords(text);
        var morseText = words.map(function (wordSingle) {
            var wordInLetters = _this.convertWordToLetters(wordSingle);
            return wordInLetters.map(_this.convertLetterToMorse, _this);
        });
        return morseText;
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
