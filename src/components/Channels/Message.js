import React from 'react'
import Fab from '@material-ui/core/Fab';
import {YourFab, MyFab, YourText, MyText, MyName, YourName, YourMessage, MyMessage, YourImg, MyImg} from './style'
import {connect} from 'react-redux'

function Message({username, message, user, image, first}) {
    return (
        <>
        {username === user.username
            ?
            <YourMessage>
            <YourFab size="small"><YourImg z-index="0" width="40px" src={image} /></YourFab>&nbsp;&nbsp;
            <YourName><b style={{fontWeight: "normal", color: "rgba(154, 173, 146, 1)"}}>&nbsp;&nbsp;<b>{first}</b>&nbsp;({username})</b>&nbsp;&nbsp;</YourName>
            {message}
            </YourMessage>
            :
            <MyMessage>
            <MyFab size="small"><MyImg z-index="0" width="40px" src={image} /></MyFab>&nbsp;&nbsp;
            <MyName><b style={{fontWeight: "normal", color: "rgba(251, 158, 94, 1)"}}>&nbsp;&nbsp;<b>{first}</b>&nbsp;({username})</b>&nbsp;&nbsp;</MyName>
            {message}
            </MyMessage>
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Message)