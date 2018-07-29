import {MorseSymbols} from "./MorseSymbols";

export type letter = string;
export type letterInMorse = Array<MorseSymbols>;
export type word = Array<letter>
export type wordInMorse = Array<letterInMorse>
export type text = Array<word>
export type textInMorse = Array<wordInMorse>