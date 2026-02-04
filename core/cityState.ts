export type CityState = {
  population: number;
  money: number;
  cityName: string;
  bankruptcy: boolean;
  riotActive: boolean;
  flags: CityFlags;
};

export type CityFlags = {
  bankruptcyTriggered: boolean;
  riotTriggered: boolean;
};

export const initialCityState: CityState = {
  population: 10,
  money: 100,
  cityName: "City",
  bankruptcy: false,
  riotActive: false,
  flags: {
    bankruptcyTriggered: false,
    riotTriggered: false,
  },
};
