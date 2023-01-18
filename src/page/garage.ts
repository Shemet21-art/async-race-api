import {
  pageStructure,
  Car,
  GetCars,
  EngineStatus,
  Handlers,
} from "../model/model";

import { CAR, NAMES, CARS_PER_PAGE, START_PAGE } from "../data/dataModel";

export const renderControls = (
  pageStructure: pageStructure,
  options: string[],
  page: number
) => {
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

  pageStructure.controls.append(createButtons, raceButtons);

  return pageStructure.controls;
};

export const pageControls = (
  car: Car,
  page: number,
  pageStructure: pageStructure
) => {
  const controls = document.createElement("div");
  controls.setAttribute("class", "controls");

  const stopButton = document.createElement("button");
  stopButton.classList.add(
    "button",
    "primary-button",
    "controls-button",
    "button-disabled"
  );
  stopButton.setAttribute("id", `stop-${car.id}`);
  stopButton.innerText = "⮜ Cancel";

  const startButton = document.createElement("button");
  startButton.classList.add("button", "primary-button", "controls-button");
  startButton.setAttribute("id", `start-${car.id}`);
  startButton.innerText = "Start ⮞";

  startButton.addEventListener("click", () => console.log("start"));

  const editButton = document.createElement("button");
  editButton.classList.add("button", "controls-button");
  editButton.setAttribute("id", `edit-${car.id}`);
  editButton.innerText = "Edit";
  editButton.addEventListener("click", (e) => console.log("edit"));

  const removeButton = document.createElement("button");
  removeButton.classList.add("button", "controls-button");
  removeButton.setAttribute("id", `remove-${car.id}`);
  removeButton.innerText = "Delete";
  removeButton.addEventListener("click", (e) => console.log(`${car.id}`));

  controls.append(stopButton, startButton, removeButton, editButton);

  return controls;
};

export const renderCarLine = (
  car: Car,
  page: number,
  pageStructure: pageStructure
) => {
  const carLine = document.createElement("div");
  carLine.setAttribute("class", "car-line");

  const controls = pageControls(car, page, pageStructure);

  const carInfo = document.createElement("div");
  carInfo.setAttribute("class", "car-info");

  const carImg = document.createElement("div");
  carImg.setAttribute("id", car.id);
  carImg.innerHTML = `<svg fill="${car.color}" class="car-image" viewBox="0 0 322 99" xmlns="http://www.w3.org/2000/svg">${CAR}</svg>`;

  const nameInfo = document.createElement("div");
  nameInfo.innerHTML = `<span id='name-${car.id}'>${car.name}</span>`;

  const message = document.createElement("div");
  message.setAttribute("id", `message-${car.id}`);
  message.classList.add("message");

  carInfo.append(nameInfo, carImg);

  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  leftSide.append(message, controls, carInfo);
  const rightSide = document.createElement("div");
  rightSide.setAttribute("id", `flag-${car.id}`);
  rightSide.classList.add("flag");
  rightSide.innerHTML = "|";

  carLine.append(leftSide, rightSide);

  return carLine;
};

export const renderCarsInGarage = (
  cars: GetCars,
  page: number,
  pageStructure: pageStructure
) => {
  const carsInGarage = new DocumentFragment();

  const garageHeading = document.createElement("div");
  garageHeading.innerText = `Cars in garage: ${cars.count} (${CARS_PER_PAGE} cars per page)`;

  carsInGarage.append(garageHeading);

  cars.data.forEach((car) => {
    const carLine = renderCarLine(car, page, pageStructure);
    carsInGarage.append(carLine);
  });

  return carsInGarage;
};

export const renderGarage = (
  pageStructure: pageStructure,
  cars: GetCars,
  page: number
) => {
  const bordGarage = renderControls(pageStructure, NAMES, page);

  const carsInGarageFragment = renderCarsInGarage(cars, page, pageStructure);

  pageStructure.carageCars.append(carsInGarageFragment);

  pageStructure.wrapper.append(
    bordGarage,
    pageStructure.carageCars,
    pageStructure.winners,
    pageStructure.overlay
  );

  document.body.append(pageStructure.wrapper);
};
