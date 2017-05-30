var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//state
//lifecycle event
//UI of the component


class App extends React.Component{
    render(){
       return(
           <div>
               Hello World React Js
           </div>
       )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);