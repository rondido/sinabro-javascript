import { renderIndex } from "./pages/index";
import { renderSearch } from "./pages/search";

export const routes = {
  "/": renderIndex,
  "/search": renderSearch,
};
