import { CityState } from "../../core/cityState";
import { RuleResult } from "../../engine/ruleResults";

export const bankruptcyConsequenceRule = (cityState: CityState): RuleResult => {
  if (cityState.flags.bankruptcyTriggered === true) {
    return {
      setValues: {
        bankruptcy: true,
        money: 0,
      },
      setFlags: {
        bankruptcyTriggered: false,
      },
    };
  }

  return {};
};
