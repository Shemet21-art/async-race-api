import { renderGarage } from "../page/garage";
import wrapperPage from "../page/wrapperPage";

const render = () => {
  const page = wrapperPage();
  renderGarage(page);
};

export default render;
