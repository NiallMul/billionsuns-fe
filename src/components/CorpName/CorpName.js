import './CorpName.css';

function CorpName(props) {
    const generateDetails = props.generateDetails;
    return <div><label id="corp-name-label" htmlFor="corp-name-input">Corporation name: </label>
        <input id="corp-name-input" type="text" aria-label="Corporation Name:"/>
        <button id="generate-name-button" value="generate name" onClick={generateDetails}>Generate name</button>
    </div>
}

export default CorpName;
