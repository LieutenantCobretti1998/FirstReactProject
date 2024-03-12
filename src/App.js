import './index.css';
import {useState} from "react";
import {Logo} from "./Logo";
import {Form} from "./Form";
import {Stats} from "./Stats";
import {PackingList} from "./PackingList";

function App() {
    const [items, setItems] = useState([]);
    function HandleItems(newItem) {
        setItems(items => [...items, newItem]);
    }

    function handleDeletion(id) {
        setItems(items => items.filter(item => item.id !== id));
    }

    function handleToogleItem(id) {
        setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item
            )
        );
    }

    function deleteList() {
        setItems([]);
    }

    return <div className="app">
    <Logo />
    <Form onAddItems={HandleItems} />
    <PackingList items={items} onDeleteItem={handleDeletion} onToogleItems={handleToogleItem} deleteItems={deleteList} />
    <Stats items={items}/>
  </div>
}


export default App;
