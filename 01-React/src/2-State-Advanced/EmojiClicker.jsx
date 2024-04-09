import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function EmojiClicker() {
    //存的变成了一个放了object的array，每个object都有id和emoji两个property
    const randomEmoji = () => {
        const emojis = ["😀", "😂", "😇", "😍", "😜", "😎"];
        return emojis[Math.floor(Math.random() * emojis.length)];
    };

    const [emojis, setEmojis] = useState([{ id: uuidv4(), emoji: randomEmoji() }]);

    const addEmojis = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuidv4(), emoji: randomEmoji() }]);
    }

    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id)
        })
    }

    const changeToHeart = () => {
        setEmojis(oldEmojis => {
            return oldEmojis.map(e => {
                return { ...e, emoji: "❤️" };
            });
        });
    };

    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)}
                    // 注意这里的onClick并不是直接excute deleteEmoji Function, 因为我们在这里并不想直接excute delete，
                    // 如果直接excute，那么每次render的时候，都会直接excutede array里每一个emoji的Function
                    // 我们在这里相当于给每一个emoji都放了一个已经放入它们对应id的delete function
                    // 只在点击时，才会excute
                    key={e.id}
                    style={{ fontSize: "3rem" }}>
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmojis}>Add Emoji!</button>
            <button onClick={changeToHeart}>Change All to Heart!</button>
        </div>
    )
}