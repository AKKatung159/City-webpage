import React from 'react';
// import './App.css';

function Header (props) {
  return (
    <header>
      <h1>{props.header}</h1>
    </header>
  )
}
function Content (props) {
  return (
    <div>
      <ul>
        {props.content.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
function Footer (props) {
  return (
    <footer>
      <p>{props.footer}</p>
    </footer>
  )
}
let array = ['apple', 'banana', 'orange', 'grape', 'strawberry'];

function App() {
  return (
    <div className="App">
      <Header header="Intro Mobile Computer" />
      <Content content={array} />
      <Footer footer="Ekkrit Kanchanasirih" />
    </div>
  );
}
export default App;
