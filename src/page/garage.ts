import { pageStructure } from "../model/model";

export const renderControls = (wrap: pageStructure) => {
  const createButtons = document.createElement("div");
  createButtons.classList.add("buttons-group");
  const raceButtons = document.createElement("div");
  raceButtons.classList.add("buttons-group");

  const createField = document.createElement("input");
  createField.setAttribute("class", "create");
  createField.setAttribute("placeholder", "Enter Name");

  const colorField = document.createElement("input");
  colorField.setAttribute("type", "color");

  const createButton = document.createElement("button");
  createButton.setAttribute("class", "button");
  createButton.innerText = "Create Car";
  createButton.addEventListener("click", () => console.log("create"));

  const generateBlock = document.createElement("div");
  generateBlock.classList.add("generate");
  const generateBtn = document.createElement("button");
  generateBtn.setAttribute("class", "button");
  generateBtn.innerText = "Generate 100 Cars";
  generateBtn.addEventListener("click", () => console.log("generate"));

  generateBlock.append(generateBtn);

  createButtons.append(createField, colorField, createButton, generateBlock);

  const startRaceButton = document.createElement("button");
  startRaceButton.classList.add("button");
  startRaceButton.setAttribute("id", "start-race");
  startRaceButton.innerText = "Start Race";
  startRaceButton.addEventListener("click", () => console.log("Start Race"));

  const resetRaceButton = document.createElement("button");
  resetRaceButton.classList.add("button");
  resetRaceButton.setAttribute("id", "reset-race");
  resetRaceButton.innerText = "Reset Race";
  resetRaceButton?.addEventListener("click", () => console.log("Reset Race"));

  raceButtons.append(startRaceButton, resetRaceButton);

  wrap.controls.append(createButtons, raceButtons);

  return wrap.controls;
};
