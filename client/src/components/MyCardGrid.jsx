import React from 'react'
import { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import useStyles from './MyCardGridStyles.js';
import MyCard from './MyCard.jsx';



const MyCardGrid = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
            {props.topicList.map(topic => (
                <MyCard key = {topic.id} topic = {topic}/>
            ))}
            </Grid>
          </Container>
        </Fragment>
    )
}

export default MyCardGrid
