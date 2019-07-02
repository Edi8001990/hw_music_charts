import React,{Fragment} from 'react';

const MusicDetail = ({song}) =>{
  if(!song) return null
  return(
    <Fragment>

    <h3>{song['im:name'].label}</h3>

    </Fragment>

  )
}

export default MusicDetail;
