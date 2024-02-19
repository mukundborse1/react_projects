import React, { useState } from 'react'

const Array = () => {
    const [students, setStudents] = useState(["Kanha"]);
    const [studentName, setStudentName] = useState("");
    
    const addName = () => {
        setStudents([...students, studentName])
        setStudentName('')
    }
  return (
    <React.Fragment>
        <div>
            <input 
                type='text'
                placeholder='Enter Student name........!!!!!'
                value={studentName}
                onChange={(e)=> setStudentName(e.target.value)}
            /><br></br>
            <button onClick={addName}>Add Data</button>        
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            students.map((sName) => {
                                return (
                                    <tr>
                                        <tb>{sName}</tb>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </div>
    </React.Fragment>
    
  )
}

export default Array;