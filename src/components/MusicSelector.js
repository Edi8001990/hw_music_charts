import React from 'react';


const MusicSelector = (props) =>{
  if (!props.songs.feed) return null
  const options = props.songs.feed.entry.map((song, index)=>{
    return <option value={index} key={index}>{song['im:name'].label}</option>
  })

  function handleChange(event){
    props.onSongSelected(event.target.value)
  }

  return(
    <select id="music-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a track...</option>
    {options}
    </select>
  )

}

export default MusicSelector;
