import { renderGarage } from "../page/garage";
import { NAMES } from "../data/dataModel";
import { START_PAGE } from "../data/dataModel";
import wrapperPage from "../page/wrapperPage";

const render = () => {
  const page = wrapperPage();
  renderGarage(page, NAMES, START_PAGE);
};

export default render;
