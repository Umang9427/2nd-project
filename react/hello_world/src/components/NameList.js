import React from 'react'

function NameList() {
    const names=['Umang','Sujit','Parva','Meetraj']
    return (
        <div>
          {                                                 //This is how you write javascript in jsx
            names.map((name,index) => <h2 key={index}>{index} {name}</h2>)              //map method iterates over array and applies the given function
          }
        </div>
    )
}

export default NameList
