import { MorseSymbols } from './MorseSymbols';
import * as data from './MorseAlphabet.json';

export class MorseConverter {
    inputText: string;

    constructor(inputText: string) {
        this.inputText = inputText;

        console.log(this.inputText);
    }
}

if (require.main == module) {
    const inputParam: string = process.argv[2] || '';
    const mc = new MorseConverter(inputParam);
}
