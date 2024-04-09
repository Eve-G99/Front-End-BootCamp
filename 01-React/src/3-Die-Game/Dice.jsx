import Die from './Die';
import "./Die.css";
import "./Dice.css";

function Dice({ dice, color = "slateblue" }) {
    return (
        <section className="Dice">
            {dice.map((v, i) => (
                <Die val={v} key={i} color={color} />
            ))}
        </section>
    );
}
export default Dice;