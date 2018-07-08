import { MorseSymbols } from './MorseSymbols';
import * as alphabetList from './MorseAlphabet.json';

export class MorseConverter {
    plainAlphabet: { [keyString: string]: string };
    enumAlphabet: { [keyString: string]: Array<MorseSymbols> };
    separator: string;

    constructor() {
        this.plainAlphabet = alphabetList;
        this.separator = ' ';

        // replace JSON Strings with Enums
        this.enumAlphabet = Object.keys(this.plainAlphabet).reduce((total: any, current: string) => {
            const currentEntry: string = this.plainAlphabet[current];
            const enumArray: Array<MorseSymbols> = currentEntry.split('').map((entry: string) => {
                return (entry === '.') ? MorseSymbols.DOT : MorseSymbols.DASH;
            });

            total[current.toString()] = enumArray;

            return total;
        }, {});
    }

    convertTextToMorse(inputText: string): Array<string> {
        const transformedInput = inputText.split('').map((entry: string) => {
            const value: string = this.plainAlphabet[entry.toLowerCase()];

            return (typeof value === 'undefined') ? this.separator : value;
        });

        return transformedInput
    }
}

if (require.main == module) {
    const inputTextParam: string = process.argv[2] || '';
    const mc = new MorseConverter();

    const transformedText = mc.convertTextToMorse(inputTextParam);

    console.log(transformedText);
}
