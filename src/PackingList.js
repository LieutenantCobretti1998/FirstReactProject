import {useState} from "react";
import {Item} from "./Item";

export function PackingList({items, onDeleteItem, onToogleItems, deleteItems}) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => <Item item={item} key={item.id} onDeleteItem={onDeleteItem}
                                               onToogleItem={onToogleItems}/>)}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="input"> Sort by input orders</option>
                    <option value="description"> Sort by input description</option>
                    <option value="packed"> Sort by input packed status</option>
                </select>
                <button onClick={() => deleteItems()}>Clear List ❌</button>
            </div>

        </div>
    )
}