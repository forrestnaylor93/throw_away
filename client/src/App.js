import React, { useEffect, useState } from 'react'
import HomePage from './routes/HomePage';










function App() {


 

 
  const [currentStudent, setCurrentStudent] = useState({});

 

  const getStudent = async() => {
    let url = 'http://localhost:5000/students/1';

    try{
      let res = await fetch(url);
      let data = await res.json();
      let student = data.student;
      console.log(student);
      setCurrentStudent(student);
    }catch(err){console.error(err)}
  }
  
  useEffect(()=> {
    getStudent();
  }, []);

 



  return (
    <div className="App">
    <HomePage />
    <div>
      {
        currentStudent.first_name
}
    </div>
    </div>
  );
}

export default App;
