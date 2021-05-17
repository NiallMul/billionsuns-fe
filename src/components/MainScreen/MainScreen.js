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
            advantage: []
        };
        this.selectedAdvantage = this.selectedAdvantage.bind(this);
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
                this.setState({advantage: data})
            });
        console.log(`selected value: ${this.state.advantage.name}`);
    }

    render() {
        let sAdvantage = this.state.advantage;
        return <div className="App">
            <CorpName/>

            <CompetitiveAdv advantagelist={this.state.competitiveAdvantages}
                            selectedAdvantage={this.selectedAdvantage}/>

            <SelectedAdvantage selectedAdvantage={sAdvantage}/>

            <PostCorp/>
        </div>;
    }
}

export default MainScreen;
