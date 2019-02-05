import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Layout from '../../components/layout';
import ContentWell from "../../components/contentWell";
import Typography from "@material-ui/core/Typography";

const About = (props) => {
  const {classes} = props;
  return (
    <Layout>
      <Typography variant="h4">
        About
      </Typography>
      <ContentWell>
        <Grid container
              spacing={16}
              direction="row"
              justify="space-evenly"
              alignItems="flex-start"
        >
          <Grid item xs={12}>
            <Paper className={classes.paperText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ipsum eu nulla bibendum semper ut et velit. Suspendisse ultricies mi et magna scelerisque malesuada. Nunc id augue bibendum, bibendum eros in, laoreet nulla. Aliquam porta lacinia leo sed congue. Integer accumsan magna dapibus quam volutpat, eget rhoncus mauris vulputate. Phasellus varius magna dictum tincidunt congue. Nulla ut erat leo. Mauris vitae justo sit amet metus imperdiet feugiat. Mauris pharetra, sem sit amet convallis ornare, libero leo consectetur metus, ac finibus augue justo sed nisl. Vivamus vitae nisi purus. Morbi aliquet egestas risus, non scelerisque enim porta fermentum.
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={4} lg={3}>
            <Paper className={classes.paperText}>
              Ut tempor pellentesque leo, at imperdiet risus tristique aliquet. Donec ac dolor auctor, volutpat nisl in, sollicitudin metus. Aliquam porta fermentum felis, eget gravida eros venenatis eu. Vestibulum ac risus lacinia, maximus felis ut, vestibulum ligula. Praesent ultricies, justo quis tempus congue, erat mi imperdiet sapien, ac pellentesque arcu eros vel mauris. Quisque mattis ut orci et pulvinar. Quisque quis erat diam. Integer metus nisl, fermentum in mollis dignissim, aliquam vel felis. In at libero eget libero suscipit facilisis. In nec massa vitae odio faucibus tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non lorem eu ex placerat venenatis at id tortor. Etiam porttitor eros lectus, id dictum quam consequat vitae. Proin ultrices felis luctus, tristique odio non, elementum risus. Suspendisse consequat elit sit amet iaculis pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={4} lg={3}>
            <Paper className={classes.paperText}>
              Sed venenatis ultrices porttitor. Morbi molestie libero accumsan, sollicitudin nulla a, varius lectus. Phasellus id luctus risus. Curabitur maximus urna massa, ut rutrum ligula commodo non. Nunc efficitur posuere turpis. Integer iaculis arcu ante, sed lobortis arcu feugiat eu. Integer quis purus sit amet massa interdum posuere sit amet vitae ex. Nulla tempus, massa eget malesuada ornare, neque tortor scelerisque mi, ac malesuada ligula tellus id eros. Morbi eleifend libero a ipsum faucibus, non condimentum est imperdiet. Mauris sodales vulputate lorem, non vulputate augue. Proin in ipsum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ac lorem eget arcu efficitur eleifend tempor a est. Maecenas a condimentum neque, quis efficitur turpis. Nulla iaculis libero sit amet nunc euismod ullamcorper.
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={4} lg={3}>
            <Paper className={classes.paperText}>
              Quisque a pellentesque sapien. Praesent finibus odio eget mollis feugiat. Suspendisse viverra sapien ac nibh euismod maximus. Duis luctus porta arcu, suscipit imperdiet eros ullamcorper sed. Aliquam sem lacus, fermentum at lacus eleifend, malesuada maximus sapien. Fusce nec convallis metus. Maecenas varius, arcu in cursus dapibus, velit dui ultricies lorem, ac viverra arcu erat sit amet leo. Duis tristique, sapien at tempus sodales, felis lacus dignissim sapien, vitae maximus urna elit vitae libero. Ut venenatis non lacus efficitur viverra. Mauris condimentum mi et placerat facilisis. Proin sodales turpis eu turpis bibendum, sit amet convallis velit gravida. Nam malesuada id orci in mollis. Praesent vitae mi id nisl varius tempus et mattis eros. Nullam ullamcorper tincidunt tempus.
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={4} lg={3}>
            <Paper className={classes.paperText}>
              Vestibulum mollis lectus sit amet erat efficitur, et eleifend nisi volutpat. Mauris maximus lectus sed dolor mollis lobortis. Etiam elementum, nulla sit amet rutrum vulputate, turpis nisl interdum erat, vitae fringilla ligula nibh a diam. Integer convallis quis justo non imperdiet. Nam in libero nisl. Nam vel tempus lorem. Nunc auctor pulvinar sapien quis laoreet. Etiam ut diam tempor lorem sollicitudin vehicula.
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperText}>
              Suspendisse leo nibh, interdum quis nunc vel, venenatis ultricies dui. Pellentesque interdum odio nulla, quis semper sapien fermentum ut. Duis tincidunt dui sit amet ultrices cursus. Aliquam venenatis, erat eget tincidunt eleifend, augue arcu dictum diam, eget bibendum nulla massa a erat. Sed ullamcorper placerat urna eget pulvinar. Vestibulum ornare, justo eget maximus placerat, purus ligula semper lorem, ut tristique felis risus eget massa. Phasellus a consectetur urna.
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paperText}>
              Quisque justo risus, fermentum ac venenatis sed, mollis sed augue. Fusce non tempus magna. Curabitur ornare tristique magna sed sodales. Ut in nunc hendrerit, volutpat sem tincidunt, pharetra nisl. Maecenas volutpat mi pharetra ante vulputate, in dictum libero fermentum. Phasellus lacus est, aliquet eu sem non, mollis iaculis lectus. Aliquam orci est, scelerisque et lacus eget, eleifend hendrerit erat. Quisque a lectus sed tellus laoreet tempor. Donec magna mi, sagittis egestas dignissim id, ultricies vitae sapien. Donec dictum enim est, vel efficitur mi sollicitudin eget. In vitae risus maximus, pharetra nulla eu, sollicitudin nisi. Maecenas at velit erat.
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paperText}>
              Suspendisse scelerisque sapien id convallis ultricies. Cras quis sapien sed velit pellentesque euismod. Aenean malesuada consectetur purus, nec auctor elit efficitur volutpat. Proin a arcu nec est consequat aliquet. Mauris leo diam, malesuada in rutrum vitae, tempus ac erat. Etiam tristique euismod metus at laoreet. Proin a scelerisque dui, sed egestas sapien. Sed pellentesque non lectus non suscipit. Aliquam erat volutpat. Phasellus ullamcorper, velit at iaculis pharetra, lacus arcu viverra nibh, sit amet tincidunt tellus ligula posuere risus. Mauris in ipsum scelerisque mauris vulputate molestie eget at ante. Ut ornare quam ipsum. Praesent at dapibus odio.
            </Paper>
          </Grid>
        </Grid>
      </ContentWell>
    </Layout>
  );
};

export default withStyles(styles)(About);
