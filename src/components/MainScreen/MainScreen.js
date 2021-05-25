import React, {Component} from 'react';
import CorpName from "../CorpName/CorpName";
import CompetitiveAdv from "../CompetitiveAdv/CompetitiveAdv";
import PostCorp from "../PostCorp/PostCorp";
import './MainScreen.css';
import SelectedAdvantage from "../SelectedAdvantage/SelectedAdvantage";

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            competitiveAdvantages: [],
            selectedAdvantage: "",
            corporation: {
                name: "",
                advantage: []
            }
        };
        this.selectedAdvantage = this.selectedAdvantage.bind(this);
        this.generateDetails = this.generateDetails.bind(this);
        this.saveCorp = this.saveCorp.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/compadv/beginner', {method: 'GET'})
            .then(promise => promise.json())
            .then(data => {
                this.setState({competitiveAdvantages: data})
            });
    }

    async selectedAdvantage(selected) {
        this.setState({selectedAdvantage: selected ? selected : "no advantage selected"});

        await fetch(`http://localhost:8080/compadv/getadv?id=${selected}`, {method: 'GET'})
            .then(promise => promise.json())
            .then(data => {
                this.setState(prevState => ({
                    corporation: {                   // object that we want to update
                        ...prevState.corporation,    // keep all other key-value pairs
                        advantage: data       // update the value of specific key
                    }
                }))
            });
        console.log(`selected value: ${this.state.corporation.name}, ${this.state.corporation.advantage.name}`);
    }

    async generateDetails() {
        await fetch(`http://localhost:8080/randomname`, {method: 'GET'})
            .then(promise => promise.json())
            .then(data => {
                this.setState(prevState => ({
                    corporation: {
                        ...prevState.corporation,
                        name: data.name
                    }
                }))
            });
        document.getElementById(`corp-name-input`).value = this.state.corporation.name;
    }

    async saveCorp() {
        let corp = this.state.corporation;
        let response = await fetch('http://localhost:8080/savecorp', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(corp)
        }).then(data => data.json);
        console.log(`response: ${response}`);
    }

    render() {
        return <div className="App">
            <CorpName generateDetails={this.generateDetails}/>

            <CompetitiveAdv advantagelist={this.state.competitiveAdvantages}
                            selectedAdvantage={this.selectedAdvantage}/>

            <SelectedAdvantage selectedAdvantage={this.state.corporation?.advantage}/>

            <PostCorp saveCorp={this.saveCorp}/>
        </div>;
    }
}

export default MainScreen;
