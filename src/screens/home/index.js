import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import Layout from '../../components/layout';
import Typography from "@material-ui/core/Typography";
import ContentWell from "../../components/contentWell";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";

class Home extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {classes} = this.props;
    const dialog = (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Lorem ipsum dolor sit amet?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ContentWell>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue
                convallis eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit
                fermentum vitae. Suspendisse eu dolor sapien.
              </Paper>
            </ContentWell>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary"
                  onClick={this.handleClose}
          >
            {'Accept'}
          </Button>
          <Button color="primary"
                  onClick={this.handleClose}
                  autoFocus
          >
            {'Decline'}
          </Button>
        </DialogActions>
      </Dialog>
    );

    return (
      <Layout>
        <Typography variant="h4">
          Home
        </Typography>
        <ContentWell>
          <Grid container
                spacing={16}
                direction="column"
                justify="center"
                alignItems="center"
          >
            <Grid item xs={12}>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue convallis
                eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit fermentum vitae.
                Suspendisse eu dolor sapien.
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Button color="primary"
                      variant={'contained'}
                      onClick={this.handleClickOpen}
              >
                {'Open Dialog'}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paperText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta fermentum elit vitae sollicitudin.
                Fusce ut facilisis nulla. Duis nec neque ac diam gravida placerat. Proin sed ex sed lacus congue convallis
                eget lobortis purus. Sed feugiat augue turpis, sed facilisis lorem pretium et. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. Phasellus sollicitudin nisl enim, id convallis elit fermentum vitae.
                Suspendisse eu dolor sapien.
              </Paper>
            </Grid>
          </Grid>
        </ContentWell>
        {dialog}
      </Layout>
    );
  }
}

export default withStyles(styles)(Home);
