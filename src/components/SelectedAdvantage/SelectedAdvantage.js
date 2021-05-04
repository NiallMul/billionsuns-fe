import React from "react";

class SelectedAdvantage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            advantage: []
        }
    }

    handleChange() {
        fetch(`http://localhost:8080/compadv/getadv?id=${this.props.selectedAdvantage}`, {method: 'GET'})
            .then(promise => promise.json())
            .then(data => {
                this.setState({advantage: data})
            });
    }

    render() {
        console.log(this.state.advantage);
        return (<div id="selectedAdvContainer"><p
            id="selectedAdvantage">{this.state.advantage ? this.state.advantage : ""}</p></div>)
    }
}

export default SelectedAdvantage;
