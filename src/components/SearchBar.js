import React from 'react';

class SearchBar extends React.Component{

    state = {
        term : '',
    }
    onChangeInPut = event => {
        this.setState({term: event.target.value});
    };
    onSubmitForm = event => {
        event.preventDefault();
        //Make sure to call 
        //callback from parent component
        this.props.onSearch(this.state.term);
    }
render(){
    
    return(
    <div className="search-bar ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
        <div className="filed">
        <label>Video Search</label>
        <input type="text" 
        placeholder="Search Any Video You Want From Youtube"
        value={this.state.term}
        onChange={this.onChangeInPut}
        />
        </div>
        </form>
        </div>
    );
}
}

export default SearchBar;