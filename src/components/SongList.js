import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isCompositeComponent } from 'react-dom/test-utils'

class SongList extends Component {
    render(){
        console.log(this.props)
        return <div> SongList</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList)