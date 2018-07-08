"use strict";
exports.__esModule = true;
var MorseConverter = /** @class */ (function () {
    function MorseConverter(inputText) {
        this.inputText = inputText;
        console.log(this.inputText);
    }
    return MorseConverter;
}());
exports.MorseConverter = MorseConverter;
if (require.main == module) {
    var inputParam = process.argv[2] || '';
    var mc = new MorseConverter(inputParam);
}
