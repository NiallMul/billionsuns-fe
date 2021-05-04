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
            selectedAdvantage: ""
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

    selectedAdvantage(selected) {
        this.setState({selectedAdvantage: selected ? selected : "no advantage selected"});
    }

    render() {
        return <div className="App">
            <CorpName/>

            <CompetitiveAdv advantagelist={this.state.competitiveAdvantages}
                            selectedAdvantage={this.selectedAdvantage}/>

            <SelectedAdvantage selectedAdvantage={this.state.selectedAdvantage}/>

            <PostCorp/>
        </div>;
    }
}

export default MainScreen;
