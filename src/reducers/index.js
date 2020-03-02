import { combineReducers } from 'redux'


const songsReducer = () => {
    return [
        { title: 'Mario Neta', duration:'4:56' },
        { title: 'castaway', duration:'3:02' },
        { title: 'plug in baby', duration:'5:00' },
        { title: 'Magia Veneno', duration:'4:10' }

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})