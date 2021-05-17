import AdvantageCard from "./AdvantageCard";

function SelectedAdvantage(props) {
    const {selectedAdvantage} = props;
    return (<div id="selectedAdvContainer"><AdvantageCard advantage={selectedAdvantage}/></div>);
}

export default SelectedAdvantage;
