import { translitMap } from "./constants";

export class KeyboardUtil {

  static validateInput(key: string): string {
    const findedRussianByRussianLetter = translitMap.find(
      (item) => item[1] === key
    );

    if (findedRussianByRussianLetter) {
      return findedRussianByRussianLetter[1];
    }

    const findedRussianByEnglishLetter = translitMap.find(
      ([englishLetter]) => englishLetter === key
    );

    if (findedRussianByEnglishLetter) {
      return findedRussianByEnglishLetter[1];
    }

    return "";
  }

}
