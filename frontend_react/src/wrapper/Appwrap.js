import React from 'react'
import {NavigationDots, SocialMedia} from '../components'
const Appwrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`} >

    </div>
  )
}

export default Appwrap