import React, { memo } from 'react'

import HYPlayerInfo from './c-pages/HYPlayerInfo'
import HYSongContent from './c-pages/HYSongContent'
import HYPlayerRelevant from './c-pages/player-relevant'
import HYPlayerSongs from './c-pages/player-songs'
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
          <HYPlayerSongs/>
          <HYPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
