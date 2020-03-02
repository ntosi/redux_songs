import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) =>{
    if (!song){
        return <div>select a song</div>
    }

    return <div> 
        <h3>Detalle de la cancion</h3>
        <p>Titulo: {song.title}</p>
        <p>Duracion: {song.duration}</p>
    </div>
}


const mapStateToProps = state =>{
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
