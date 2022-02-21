import './App.css';
import {useEffect, useState} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import {NavBar} from "./components/nav-bar/nav-bar.component";

function App() {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');

    const getMonsters = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                console.log({users})
                setMonsters(users);
            });
    }

    useEffect(() => {
        console.log(`useEffect`);
        getMonsters();
    }, [])

    const filteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    return (
        <div className="App">
            <NavBar />
            <h1 className="text-h1">Monsters Rolodex</h1>
            <SearchBox placeholder="Search monsters..." handleChange={handleChange}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
