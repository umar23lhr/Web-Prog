import React from 'react';
import '../1st/first.css';
export default function MyFirstApp(props) {
  return (
    <div className='first'>
        <h1>My First App <br/> <br/> {props.abc} </h1>
         <p>My Name is Umar</p>
         {console.log(props.abc)};
    </div>
  );
}
