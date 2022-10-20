import React from 'react'
import Groups from '../Components/Groups'
import Intro from '../Components/Intro'
import News from '../Components/News'

function Home() {
  return (
    <div>
        <Intro/>
        <News/>
        <Groups/>
    </div>
  )
}

export default Home