import { CityState } from "../core/cityState";
import { RuleResult } from "./ruleResults";

type Rule = (state: CityState) => RuleResult;

export const runEngine = (state: CityState, rules: Rule[]): CityState => {
  let nextState: CityState = structuredClone(state);

  for (const rule of rules) {
    const result = rule(nextState);

    if (result.setFlags) {
      nextState.flags = {
        ...nextState.flags,
        ...result.setFlags,
      };
    }

    if (result.setValues) {
      nextState = {
        ...nextState,
        ...result.setValues,
      };
    }
  }

  return nextState;
};
