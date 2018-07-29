import { MorseConverter } from './MorseConverter';
import 'mocha';
import { expect } from 'chai';

describe("MorseConverter", () => {
    it("Instance has been created", () => {
        const mc: MorseConverter = new MorseConverter();

        expect(mc).to.exist;
    });

    it("convertTextToWords splits text into words", () => {
        const mc: MorseConverter = new MorseConverter();

        expect(mc.convertTextToWords('Lorem ipsum')).to.be.an('array').that.has.lengthOf(2)
        expect(mc.convertTextToWords('Lorem ipsum')).to.be.an('array')
            .that.includes('Lorem')
            .that.includes('ipsum')
            .that.does.not.include('Test123');
    });

    it("convertWordToLetters splits words into letters", () => {
        const mc: MorseConverter = new MorseConverter();

        expect(mc.convertWordToLetters('Lorem')).to.be.an('array').that.has.lengthOf(5)
        expect(mc.convertWordToLetters('Lorem')).to.be.an('array')
            .that.includes('L')
            .that.includes('m')
            .that.does.not.include('Test123');
    });

    it("convertLetterToMorse converts a letter to morse", () => {
        const mc: MorseConverter = new MorseConverter();

        expect(mc.convertLetterToMorse('l')).to.be.an('array')
            .that.has.lengthOf(4)
            .to.deep.equal(['.', '-', '.', '.'])

        expect(mc.convertLetterToMorse('e')).to.be.an('array')
            .that.has.lengthOf(1)
            .to.deep.equal(['.'])

        expect(mc.convertLetterToMorse('z')).to.be.an('array')
            .that.has.lengthOf(4)
            .to.deep.equal(['-', '-', '.', '.'])
    });

    it("reduceToAlphaText removes special chars", () => {
        const mc: MorseConverter = new MorseConverter();

        let textIn = 'Test'
        let textOut = 'Test'
        expect(mc.reduceToAlphaText(textIn)).to.be.an('string')
        expect(mc.reduceToAlphaText(textIn)).equals(textOut)

        textIn = 'Te_"§$%&/()=?```)/st1Te22ß*2st.Te55st:T!_est_öäü@€'
        textOut = 'TestTestTestTest'
        expect(mc.reduceToAlphaText(textIn)).to.be.an('string')
        expect(mc.reduceToAlphaText(textIn)).equals(textOut)

    });
});
