import { MorseSymbols } from './MorseSymbols';
import { word, wordInMorse, textInMorse } from './MorseTypes';
import * as alphabetList from './MorseAlphabet.json';

export class MorseConverter {
    private enumAlphabet: { [keyString: string]: MorseSymbols[] };

    constructor() {
        this.enumAlphabet = Object.keys(alphabetList).reduce((total: any, currentLetter: string) => {
            const currentValue: string = alphabetList[currentLetter];

            // replace unicode Strings with Enums
            const symbols: MorseSymbols[] = currentValue.split('').map((currentCharacter: string) => {
                return (currentCharacter === '.') ? MorseSymbols.DOT : MorseSymbols.DASH;
            });

            total[currentLetter.toString().toLowerCase()] = symbols;

            return total;
        }, {});
    }

    public convertTextToMorse(text: string): textInMorse {
        const words: word = this.convertTextToWords(text);

        const morseText: textInMorse = words.map((wordSingle: string) => {
            const wordInLetters: word = this.convertWordToLetters(wordSingle);

            const wordMorse: wordInMorse = wordInLetters.map(this.convertLetterToMorse, this);

            return wordMorse;
        });

        return morseText;
    }

    public convertSingleTextToMorse(inputText: string): MorseSymbols[][] {
        const transformedInputText: MorseSymbols[][] = inputText.split('').map((currentCharacter: string) => {
            const currentCharacterTransformed: MorseSymbols[] = this.enumAlphabet[currentCharacter];

            return currentCharacterTransformed;
        });

        return transformedInputText;
    }

    public convertTextToWords(text: string): string[] {
        return text.split(' ');
    }

    public convertWordToLetters(wordString: string): string[] {
        return wordString.split('');
    }

    public convertLetterToMorse(letter: string): MorseSymbols[] {
        return this.enumAlphabet[letter];
    }
}

if (require.main === module) {
    const inputTextParam: string = process.argv[2] || '';
    const mc = new MorseConverter();

    const transformedText = (mc as any).convertTextToMorse(inputTextParam);

    console.log(transformedText);
}
