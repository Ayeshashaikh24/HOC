
import React from 'react';
import EnhancedComponent from './About';


class App extends React.Component{
    render(){
        return<h1>{this.props.name}</h1>
    }
}
export default EnhancedComponent(App);