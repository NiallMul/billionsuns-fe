import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function AdvantageCard(props) {
    const {advantage} = props;

    return <div id={`advantage-${advantage.name}`}>
        <Card id={`${advantage.name}-card`} variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {advantage.name}
                </Typography>
                <Typography color="textSecondary">
                    {advantage.requirement}
                </Typography>
                <Typography variant="body2" component="p">
                    {advantage.description}
                </Typography>
            </CardContent>
        </Card>
    </div>
}

export default AdvantageCard;
