import React from 'react';
import SearBar from '../components/SearchBar'

class App extends React.Component{
    state = {
        term : '',
    }   
    //setState();

render(){
    return(
        <div className="ui container">
            <SearBar/>
            </div>
    )
}
}

export default App;