import { CityState } from "../../core/cityState";
import { RuleResult } from "../../engine/ruleResults";

export const bankruptcyRules = (cityState: CityState): RuleResult => {
  if (
    cityState.money <= -100 &&
    !cityState.flags.bankruptcyTriggered &&
    !cityState.bankruptcy
  ) {
    return {
      setFlags: {
        bankruptcyTriggered: true,
      },
    };
  }
  return {};
};
