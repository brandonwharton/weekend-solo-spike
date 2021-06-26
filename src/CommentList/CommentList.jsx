import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
        alignContent: 'center',
    },
    control: {
        padding: theme.spacing(2),
    },
    card: {
        backgroundColor: '#999',
    },
}));

function CommentList() {
    const classes = useStyles();

    return (
        <div className="App-comment-list">
            <Grid container className={classes.root} spacing={2} justify={'center'}>
                <Grid item xs={10}>
                    <Card className={classes.card} >
                        <CardContent>
                            <Typography variant="body1" component="p">
                                Comment:
                            </Typography>
                            <Typography variant="body2" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci dapibus.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10}>
                    <Card className={classes.card} >
                        <CardContent>
                            <Typography variant="body1" component="p">
                                Comment:
                            </Typography>
                            <Typography variant="body2" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10}>
                    <Card className={classes.card} >
                        <CardContent>
                            <Typography variant="body1" component="p">
                                Comment:
                            </Typography>
                            <Typography variant="body2" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros donec ac odio tempor orci dapibus.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CommentList;