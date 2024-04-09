import LuckyN from './3-Die-Game/LuckyN';
import { sum } from './3-Die-Game/utils';
import BoxGrid from './4-Board-Game/BoxGrid';


function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSame(dice) {
  return dice.every((v) => v === dice[0]);
}

function Main() {
  return (
    <div className="App">
      <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN winCheck={allSame} title="Role same Dice" />
      <BoxGrid />
    </div>
  );
}

export default Main;