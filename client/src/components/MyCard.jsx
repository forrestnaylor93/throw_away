import React from 'react'
import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './MyCardStyles.js';

const MyCard = (props) => {
    const classes = useStyles();

    let full_image_url = "https://drive.google.com/uc?export=view&id=" + props.topic.image_path;
    return (
        <Fragment>
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {full_image_url}
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component ="h2">
                          {props.topic.name}
                      </Typography>
                      <Typography>
                          {props.topic.time_estimate + " min"}
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small" color="primary">
                      Lesson
                      </Button>
                      <Button size="small" color="primary">
                      Practice
                      </Button>
                      
                  </CardActions>
                </Card>
              </Grid>
        </Fragment>
    )
}

export default MyCard
