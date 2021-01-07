import React from 'react';
import SearBar from './SearchBar';
import Youtube from './apis/youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component{
    state = {
        videos : [],
        selectedVideo: null,
    }
    
    onVideoSearch = async (term) => {
      const response = await Youtube.get('/search',{
          params: {
              q: term,
          }
      });
         this.setState({videos: response.data.items});
        };
     onVideoSelect = video => {
         this.setState({selectedVideo: video});
         console.log('Video Selected is:', this.state.selectedVideo);
     }   
        
render(){
    return(
        <div className="ui container">
            <SearBar onSearch={this.onVideoSearch}/>
            {/* Wiring VideoDetail component in App */}
            <VideoDetail video={this.onVideoSelect} />
            {/* Wiring VideoList component in App */}
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
    )
}
}

export default App;