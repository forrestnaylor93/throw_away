import React from "react";
import { Fragment } from "react";


import MyHero from "./MyHero.jsx";
import MyCardGrid from "./MyCardGrid.jsx";

const Series = (props) => {

    return (
        <Fragment>
            <MyHero seriesIndex = {1} seriesDescription = {props.description} topics = {props.topics}  />
            <MyCardGrid topicList = {props.topicList}/>
        </Fragment>
    )
}

export default Series
