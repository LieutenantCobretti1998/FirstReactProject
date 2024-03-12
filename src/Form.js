import {useState} from "react";

export function Form({onAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("1");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);

        if (!description) {
            return;
        }

        const newItem = {description, quantity, packed: false, id:Date.now()};
        onAddItems(newItem);
        console.log(newItem);
    }

    return  (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 💕 trip?</h3>
            <select name="" id="" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({length: 20}, (_, i) => i + 1)
                    .map((num) => (<option value={num} key={num}>{num}</option>))}
            </select>
            <input type="text" placeholder="Item...." value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button>Add</button>
        </form>
    );
}