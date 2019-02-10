import React from 'react'
import playStoreImg from '../assets/images/google-play-badge.png'
import appStoreImg from '../assets/images/Download_on_the_App_Store_Badge_US-UK_135x40.svg'

const aStyle = {
    borderBottom: 0
}

const AppStore = props => (
  <ul className="actions">
    <li>
      <a href="https://play.google.com/store/apps/details?id=com.idehub.pandoras" style={aStyle}>
        <img
          src={playStoreImg}
          alt="Get it on Google Play"
          height="50px"
          width="168.5px"
        />
      </a>
    </li>
    <li>
      <a href="https://itunes.apple.com/us/app/pandoras-devils-drinking-game/id873579821" style={aStyle}>
        <img
          src={appStoreImg}
          alt="Download on the App Store"
          height="50px"
          width="168.5px"
        />
      </a>
    </li>
  </ul>
)

export default AppStore
