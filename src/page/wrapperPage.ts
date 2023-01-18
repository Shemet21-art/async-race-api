const wrapperPage = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const controls = document.createElement("div");
  controls.classList.add("wrapper__buttons");
  controls.setAttribute("id", "buttonsId");

  const carageCars = document.createElement("div");
  carageCars.classList.add("wrapper__garage");
  carageCars.setAttribute("id", "garageId");

  const winners = document.createElement("div");
  winners.classList.add("winners");
  winners.setAttribute("id", "winnersId");

  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlayId");
  overlay.setAttribute("class", "overlay");

  const navigation = document.createElement("div");
  navigation.classList.add("navigation");

  const pageStructure = {
    wrapper,
    controls,
    carageCars,
    winners,
    overlay,
    navigation,
  };

  return pageStructure;
};

export default wrapperPage;
