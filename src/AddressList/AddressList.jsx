
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddressCard from '../AddressCard/AddressCard';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
        alignContent: 'center',
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
            <Grid container className={classes.root} spacing={2} justify={'center'}>
                <Grid item xs={10}>
                    <AddressCard />
                </Grid>
                <Grid item xs={10}>
                    <AddressCard />
                </Grid>
                <Grid item xs={10}>
                    <AddressCard />
                </Grid>
                <Grid item xs={10}>
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