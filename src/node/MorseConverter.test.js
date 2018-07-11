"use strict";
exports.__esModule = true;
var MorseConverter_1 = require("./MorseConverter");
require("mocha");
var chai_1 = require("chai");
describe("MorseConverter", function () {
    it("Instance has been created", function () {
        var mc = new MorseConverter_1.MorseConverter();
        chai_1.expect(mc).to.exist;
    });
    it("convertTextToWords splits text into words", function () {
        var mc = new MorseConverter_1.MorseConverter();
        chai_1.expect(mc.convertTextToWords('Lorem ipsum')).to.be.an('array').that.has.lengthOf(2);
        chai_1.expect(mc.convertTextToWords('Lorem ipsum')).to.be.an('array')
            .that.includes('Lorem')
            .that.includes('ipsum')
            .that.does.not.include('Test123');
    });
    it("convertWordToLetters splits words into letters", function () {
        var mc = new MorseConverter_1.MorseConverter();
        chai_1.expect(mc.convertWordToLetters('Lorem')).to.be.an('array').that.has.lengthOf(5);
        chai_1.expect(mc.convertWordToLetters('Lorem')).to.be.an('array')
            .that.includes('L')
            .that.includes('m')
            .that.does.not.include('Test123');
    });
    it("convertLetterToMorse converts a letter to morse", function () {
        var mc = new MorseConverter_1.MorseConverter();
        chai_1.expect(mc.convertLetterToMorse('l')).to.be.an('array')
            .that.has.lengthOf(4)
            .to.deep.equal(['.', '-', '.', '.']);
        chai_1.expect(mc.convertLetterToMorse('e')).to.be.an('array')
            .that.has.lengthOf(1)
            .to.deep.equal(['.']);
        chai_1.expect(mc.convertLetterToMorse('z')).to.be.an('array')
            .that.has.lengthOf(4)
            .to.deep.equal(['-', '-', '.', '.']);
    });
});
