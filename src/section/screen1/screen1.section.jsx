import React from 'react'
import ScreenTitle from './component/screenTitle.component'


const Screen1 = (props)=>{
    const {firstScreenSec} = props
    return(
        <div className="screen1" style={firstScreenSec}>
        <ScreenTitle/>
        </div>
    )
}

export default Screen1