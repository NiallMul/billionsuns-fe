import './CorpName.css';

function CorpName() {
    return <div><label id="corp-name-label" htmlFor="corp-name-input">Corporation name: </label><input id="corp-name-input" type="text"
                                                                                  aria-label="Corporation Name:"/></div>
}

export default CorpName;
