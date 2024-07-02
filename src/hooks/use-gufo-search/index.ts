import { GUFO_SEARCH_URL } from "./constants";

export const useGufoSearch = (word?: string) => {
  const handleSearch = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.rel = "noreferrer";
    link.href = GUFO_SEARCH_URL + word;
    link.click();
  };

  return { handleSearch };
};
