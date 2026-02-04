import { CityState } from "../core/cityState";
import { runEngine } from "../engine/engine";

import { bankruptcyRules } from "../rules/bankruptcy/bankruptcy-rules";
import { bankruptcyConsequenceRule } from "../rules/bankruptcy/bankruptcy-consequences";

const rules = [bankruptcyRules, bankruptcyConsequenceRule];

export const tick = (state: CityState): CityState => {
  return runEngine(state, rules);
};
