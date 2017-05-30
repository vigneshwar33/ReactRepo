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
               Hello World React Js First Commit from Git Clone Successful.
           </div>
       )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);