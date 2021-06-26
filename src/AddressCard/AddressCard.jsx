import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
    },
    card: {
        backgroundColor: '#999',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // should be 16:9
    },
}));

function AddressCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card} >
            <CardHeader title="Card Title" />
            <CardMedia 
                className={classes.media}
                image="/image.jpg"
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    This is where address information is going to live.
                </Typography>
                <Typography variant="body2" component="p">
                    This is where ratings information is going to live.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AddressCard;