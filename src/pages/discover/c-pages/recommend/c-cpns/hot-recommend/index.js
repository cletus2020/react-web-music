import React, { memo, useEffect, useCallback } from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'
import { useHistory } from 'react-router-dom';

import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import {
  HotRecommendWrapper
} from './style'
import {getHotRecommendAction} from '../../store/actionCreators'

import HYSongsCover from '@/components/songs-cover'

export default memo(function HYHotRecommend() {
  // state

  // redux-hooks
  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch()
  const history = useHistory()

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [dispatch])

  const keywordClick = useCallback((keyword) => {
    history.pushState({pathname: "/discover/songs", cat: keyword})
  }, [history])

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" 
                        keywords={["华语","流行","民谣","摇滚","电子"]}
                        moreLink="/discover/songs"
                        keywordClick={keywordClick}/>
      <div className="recommend-list">
        {
          hotRecommends.slice(0, 8).map((item, index) => {
            return <HYSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
