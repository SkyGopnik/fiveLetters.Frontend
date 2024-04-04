import StepOneImage from "./_assets/step-1.svg";
import StepSecondImage from "./_assets/step-2.svg";
import StepThirdImage from "./_assets/step-3.svg";
import StepFourthImage from "./_assets/step-4.svg";

export const STEPS = [
  {
    title: "Суть игры",
    description: "Отгадай слово, состоящее из 5 букв с помощью " +
      "6 попыток. За отгадки ты получаешь звездочки в рейтинг.",
    image: StepOneImage
  },
  {
    title: "Дополнительная помощь",
    description: "Если не получилось отгадать слово – " +
      "получи дополнительные 2 попытки за просмотр рекламы.",
    image: StepSecondImage
  },
  {
    title: "Супер-игра",
    description: "За 2 угаданных подряд слова включается " +
      "Cупер-игра, где можно получить еще больше звездочек.",
    image: StepThirdImage
  },
  {
    title: "Мотивация",
    description: "Соревнуйся с друзьями и остальными " +
      "игроками за ТОПовые позиции в рейтинге.",
    image: StepFourthImage
  }
];
