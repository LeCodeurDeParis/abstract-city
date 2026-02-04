import { initialCityState } from "./core/cityState";
import { tick } from "./core/tick";

let state = initialCityState;

for (let i = 0; i < 5; i++) {
  state = tick(state);
  console.log(`Tick ${i + 1}`, state);
}
