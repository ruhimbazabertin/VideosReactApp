import React from 'react';
import SearBar from './SearchBar';
import Youtube from './apis/youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends React.Component{
    state = {
        videos : [],
        selectedVideo: null
    }
    
    componentDidMount(){
        this.onVideoSearch('kids stories');
    }

    onVideoSearch = async (term) => {
      const response = await Youtube.get('/search',{
          params: {
              q: term,
          }
      });
         this.setState({
             videos: response.data.items,
             selectedVideo: response.data.items[0]
            });
        };
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };
        
render(){
    return(
        <div className="ui container">
            <SearBar onSearch={this.onVideoSearch}/>
            {/* Wiring VideoDetail component in App */}
            <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            {/* Wiring VideoList component in App */}
            <div className="five wide column">
            <VideoList 
            videos={this.state.videos} 
            onVideoSelect={this.onVideoSelect} 
                />
                </div>
                </div>
                </div>
            </div>
    )
}
}

export default App;