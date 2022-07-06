import React from 'react'
type userprops={name:string;age:number};

const User = (props:userprops) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age} years old</p>
    
    </div>
    
  )
}

export default User