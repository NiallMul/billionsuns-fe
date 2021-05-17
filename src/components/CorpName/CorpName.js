import './CorpName.css';
import {useEffect, useState} from "react";

function GenerateName() {
    const [startup, setStartup] = useState("");
    fetch(`http://localhost:8080/randomname`, {method: 'GET'})
        .then(promise => promise.json())
        .then(data => {
            setStartup(data.name);
        });
    document.getElementById(`corp-name-label`).value = startup;
    console.log(`startup names: ${startup}`);
}

function CorpName() {
    return <div><label id="corp-name-label" htmlFor="corp-name-input">Corporation name: </label>
        <input id="corp-name-input" type="text" aria-label="Corporation Name:"/>
        <button id="generate-name-button" value="generate name" onClick={GenerateName}>Generate name</button>
    </div>
}

export default CorpName;
