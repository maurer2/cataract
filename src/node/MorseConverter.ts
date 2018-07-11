import { MorseSymbols } from './MorseSymbols';
import { word, wordInMorse, textInMorse } from './MorseTypes';
import * as alphabetList from './MorseAlphabet.json';

export class MorseConverter {
    enumAlphabet: { [keyString: string]: Array<MorseSymbols> };

    constructor() {
        this.enumAlphabet = Object.keys(alphabetList).reduce((total: any, currentLetter: string) => {
            const currentValue: string = alphabetList[currentLetter];

            // replace unicode Strings with Enums
            const symbols: Array<MorseSymbols> = currentValue.split('').map((currentCharacter: string) => {
                return (currentCharacter === '.') ? MorseSymbols.DOT : MorseSymbols.DASH;
            });

            total[currentLetter.toString().toLowerCase()] = symbols;

            return total;
        }, {});
    }

    convertTextToWords(text: string): Array<string> {
        return text.split(' ');
    }

    convertWordToLetters(word: string): Array<string> {
        return word.split('');
    }

    convertLetterToMorse(letter: string): Array<MorseSymbols> {
        return this.enumAlphabet[letter];
    }

    convertTextToMorse(text: string): textInMorse {
        const words: word = this.convertTextToWords(text);

        const morseText: textInMorse = words.map((wordSingle: string) => {
            const wordInLetters: word = this.convertWordToLetters(wordSingle);

            const wordMorse: wordInMorse = wordInLetters.map(this.convertLetterToMorse, this);

            return wordMorse;
        });

        return morseText;
    }

    convertSingleTextToMorse(inputText: string): Array<Array<MorseSymbols>> {
        const transformedInputText: Array<Array<MorseSymbols>> = inputText.split('').map((currentCharacter: string) => {
            const currentCharacterTransformed: Array<MorseSymbols> = this.enumAlphabet[currentCharacter];

            return currentCharacterTransformed;
        });

        return transformedInputText;
    }
}

if (require.main == module) {
    const inputTextParam: string = process.argv[2] || '';
    const mc = new MorseConverter();

    const transformedText = mc.convertTextToMorse(inputTextParam);

    console.log(transformedText);
}
