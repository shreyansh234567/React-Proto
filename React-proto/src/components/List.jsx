import React from 'react'

function List() {

    const users = [
        { id: 1, name: "Akhil", age: 25 },
        { id: 2, name: "Ankush", age: 25 }
    ]
    return (
        <div>
            {
                users.map((student) => (
                    <div key={student.id}>
                        <h2>{student.name}</h2>
                        <p> {student.age} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default List
