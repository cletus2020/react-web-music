import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils'
import { getSongDetailAction } from '@/pages/player/store'

import { TopRankingWrapper } from './style'

export default memo(function HYTopRanking(props) {
  // props and state
  const { info } = props
  const { tracks = [] } = info

  // redux hooks
  const dispatch = useDispatch()

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id))
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          {/* 绑定榜单相关信息并展示 */}
          <img src={getSizeImage(info.coverImgUrl)} alt=""/>
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          // 遍历渲染歌曲相关信息
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index+1}</div>  {/* 歌曲排行 */}
                <div className="info">  
                  <span className="name text-nowrap">{item.name}</span> {/* 歌曲名字 */}
                  <div className="operate">
                    <button className="btn sprite_02 play"
                            onClick={e => playMusic(item)}  
                            ></button>  {/* 播放按钮 */}
                    <button className="btn sprite_icon2 addto"></button>  {/* 添加到播放列表 */}
                    <button className="btn sprite_02 favor"></button> {/* 添加到喜欢 */}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
