import React from 'react'
import "./home.css"
import Myfirst from "../../components/myfirst/Myfirst"
import Second from '../../components/second-comp/Second'
import Third from '../../components/thirsd/Third'
const Homepage = () => {
  return (
    <div className='home-main'>
        <div>
        <Myfirst/>
        </div>

        <div>
        <Myfirst/>
        <Second/>
        <Third/>
        </div>

        <div>
        <Third/>
        </div>


    </div>
  )
}

export default Homepage