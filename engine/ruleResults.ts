import { CityFlags, CityState } from "../core/cityState";

export type RuleResult = {
  setFlags?: Partial<CityFlags>;
  setValues?: Partial<CityState>;
};
