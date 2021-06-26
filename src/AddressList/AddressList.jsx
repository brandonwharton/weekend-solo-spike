import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import AddressCard from '../AddressCard/AddressCard';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },

    control: {
        padding: theme.spacing(2),
    },
}));

function AddressList() {
    // const [spacing, setSpacing] = useState(2);
    const classes = useStyles();

    return (
        <div className="App-address-list">
            <Grid container>
                <Grid item>
                    <AddressCard />
                </Grid>
                <Grid item>
                    <AddressCard />
                </Grid>
                <Grid item>
                    <AddressCard />
                </Grid>
                <Grid item>
                    <AddressCard />
                </Grid>
            </Grid>
            {/* <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {[0, 1, 2, 3].map(value => (
                            <Card 
                        ))}
                    </Grid>
                </Grid>
            </Grid> */}
            {/* <Typography variant="h3" component="h3">
                Inside AddressList
            </Typography> */}
        </div>
    )
}

export default AddressList;