import { translitMap } from "./constants";

export class KeyboardUtil {

  static validateInput(e: KeyboardEvent): string {
    const findedRussianByRussianLetter = translitMap.find(
      (item) => item[1] === e.key
    );

    if (findedRussianByRussianLetter) {
      return findedRussianByRussianLetter[1];
    }

    const findedRussianByEnglishLetter = translitMap.find(
      ([englishLetter]) => englishLetter === e.key
    );

    if (findedRussianByEnglishLetter) {
      return findedRussianByEnglishLetter[1];
    }

    return "";
  }

}
