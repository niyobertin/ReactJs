import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const myFirstLine = <div>
    <h1>hello my dea friends I am {20 + 1} years</h1>
    <ol>
        <li>Nikuze</li>
        <li>Aline</li>
        <li>Niyonkuru</li>
        <li>Bertin</li>
    </ol>
</div>


const table = <table border={3}>
    <tr>
        <th>Name</th>
        <th>Gender</th>
    </tr>
    <tr>
        <td>Niyonkuru</td>
        <td>Male</td>
    </tr>
    <tr>
        <td>Nikuze Aline</td>
        <td>Female</td>
    </tr>
</table >
const users = ReactDOM.createRoot(document.getElementById("person"));
users.render(table);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstLine);

// React componets
//React componet comes in two types (Class componet and functional componet)

//1.functional componets

function Car(props) {
    return <>
        <h2>This is my new car it has {props.color} color!</h2>
        <p> I received it from my wedding selemony</p></>
}

users.render(<Car color="yellow" />)
// YOU can use component in separate file and then you export it
// to be allowe d to use it you mast have to import it.
//the name of that file must start with a Capitale letter.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

