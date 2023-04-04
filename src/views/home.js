import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Solutions Consultant</title>
        <meta property="og:title" content="Human Solutions Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
