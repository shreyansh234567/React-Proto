// import React from 'react'

// function Event() {

//     const handleClick = () => {
//         alert("Welcome!!")
//     }
//     return (
//         <div>
//             <button onClick={handleClick}>
//                 click me
//             </button>
//         </div>
//     )
// }

//export default Event

import React from 'react'

function Event() {

    const handleMouseOver = () => {
        alert("Hii")
    }
    return (
        <div onMouseOver={handleMouseOver}>Mouse move here</div>
    )
}

export default Event