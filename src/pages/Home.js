import React, { useState } from 'react'
import data from '../data';
import List from '../components/list/List';


const Home = () => {
    const [student, setStudent] = useState(data);
    return (
        <>
            <h2>Attendance List for {student.length} students</h2>
            <List student={student}/>
            <button onClick = {()=>setStudent([])}>Clear list</button>
        </>
    )
}

export default Home
