import React, {useState, useEffect} from "react";
import { Fragment } from "react";


import Series from "../components/Series.jsx";


const HomePage = () => {
    const [topicList, setTopicList] = useState([]);
  
    const getTopics = async() => {
      let url = 'http://localhost:5000/topics';
  
      try {
          let res = await fetch(url);
          let data = await res.json();
          let topics = data.topics;
          console.log(topics)
          setTopicList(topics);
          return topics;
      } catch (error) {
          console.log(error);
  
      }
    }
  

    
    useEffect(()=> {
      getTopics();
    }, []);
  


  return (
    <Fragment>
    <Series topicList = {topicList} />

        
    </Fragment>
  );
};

export default HomePage;
