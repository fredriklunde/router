import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';

class Hello extends React.Component {
    render(){
        return <div>Hello</div>
    }
}

class Goodbye extends React.Component {
    render(){
        return <div>Goodbye</div>
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/hello" component={Hello} />
            <Route path="/goodbye" component={Goodbye} />
        </div>
    </BrowserRouter>,
    document.querySelector('#root')
 );