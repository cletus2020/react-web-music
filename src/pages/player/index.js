import React, { memo } from 'react'

import HYPlayerInfo from './c-pages/HYPlayerInfo'
import HYSongContent from './c-pages/HYSongContent'
import HYSimiPlaylist from './c-pages/HYSimiPlaylist'
import HYSimiSong from './c-pages/HYSimiSong'
import Download from './c-pages/Download'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'

export default memo(function HYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <HYPlayerInfo/>
          <HYSongContent/>
        </PlayerLeft>
        <PlayerRight>
          <HYSimiPlaylist/>
          <HYSimiSong/>
          <Download/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
