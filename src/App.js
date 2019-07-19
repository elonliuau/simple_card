import React from 'react';
import './App.css';
import Section from "./components/Section";

function App() {
    return (
        <div className="App">
            <div className="App-body">
                <Section header='This is the first one' theme='green'/>
                <Section header='This is the second one' theme='gold'/>
                <Section header='This is the third one' theme='red'/>
            </div>
        </div>
    );
}

export default App;
