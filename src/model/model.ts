export interface GetCars {
  data: Car[];
  count?: string;
}

export interface Car extends HTMLElement {
  name: string;
  color: string;
  id: string;
}

export type EngineStatus = "started" | "stopped";

export type Direction = "next" | "prev";

export type RaceResult = "200" | "400" | "404" | "429" | "500";

export type WinnersSorting = "id" | "wins" | "time";

export type WinnersOrder = "ASC" | "DESC";

export type SortOptions =
  | "By wins number (asc)"
  | "By best time (asc)"
  | "By wins number (desc)"
  | "By best time (desc)";

export interface pageStructure {
  wrapper: HTMLElement;
  controls: HTMLElement;
  carageCars: HTMLElement;
  winners: HTMLElement;
  overlay: HTMLElement;
  navigation: HTMLElement;
}
