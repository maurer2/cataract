import { MorseSymbols } from './MorseSymbols';
// import { MorseAlphabet } from './MorseAlphabetInterface';
import * as alphabetList from './MorseAlphabet.json';

export class MorseConverter {
    plainAlphabet: { [keyString: string]: string };
    separator: string;

    constructor() {
        this.plainAlphabet = alphabetList;
        this.separator = ' ';
    }

    convertTextToMorse(inputText: string): Array<string> {
        const transformedInput = inputText.split('')
            .map((entry: string) => {
                const value: string = this.plainAlphabet[entry.toLowerCase()];

                return (typeof value === 'undefined') ? this.separator : value;
            })
        ;

        return transformedInput
    }
}

if (require.main == module) {
    const inputTextParam: string = process.argv[2] || '';
    const mc = new MorseConverter();

    const transformedText = mc.convertTextToMorse(inputTextParam);

    console.log(transformedText);
}
