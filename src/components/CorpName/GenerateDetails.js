const GenerateDetails = async () => {
    document.getElementById(`corp-name-input`).value = await fetch(`http://localhost:8080/randomname`, {method: 'GET'})
        .then(promise => promise.json())
        .then(data => data.name);
}

export default GenerateDetails
