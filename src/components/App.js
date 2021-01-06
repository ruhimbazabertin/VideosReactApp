import React from 'react';
import SearBar from './SearchBar';
import Youtube from './apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state = {
        videos : []
    }
    
    onVideoSearch = async (term) => {
      const response = await Youtube.get('/search',{
          params: {
              q: term,
          }
      });
         this.setState({videos: response.data.items});
        };
        
render(){
    return(
        <div className="ui container">
            <SearBar onSearch={this.onVideoSearch}/>
            {/* Wiring VideoList component in App */}
            <VideoList videos={this.state.videos}/>
            </div>
    )
}
}

export default App;