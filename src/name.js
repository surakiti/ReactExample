import React from 'react';

// import React, { Component } from 'react';
// imrc >tab
// class Name extends Component  {
//     render(){
//         return (
//             <div><p>Surakiti</p></div>
//         )
//     }
// }
// export default Name;



const Name = props =>{

const addAge=()=>{
    props.children=props.children+1
}

    return(
    <div> 
        {/* <p> {props.title} Surakitiiii</p> */}
        <p> {props.children} {props.title}</p>
        <button onClick={addAge}>Click meeeee</button>
    </div>
    )
}
export { Name }
//state late component
//{props.children} เอาไว้ แสดงตรงกลาง <Name>ตรงนี้</Name>
// ----------------------------------------------------
// state
