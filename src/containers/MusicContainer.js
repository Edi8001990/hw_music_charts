import React from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail'



class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[],
      currentSong: null
};
      this.handleSongSelected = this.handleSongSelected.bind(this);
    };




  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs: songs}))
    .catch(err => console.error)
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({currentSong: selectedSong});
  }

  render(){
    return(
      <div>
          <h2>Song Chart</h2>
          <MusicSelector
          songs={this.state.songs}
          onSongSelected={this.handleSongSelected}
          />
          <MusicDetail song={this.state.currentSong}/>
      </div>
    );
  }

}

export default MusicContainer;
