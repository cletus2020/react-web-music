import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import HYAlbumCover from '@/components/album-cover'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import { AlbumWrapper } from './style'

export default memo(function HYNewAlbum() {
  // redux hooks
  const {newAlbums} = useSelector(state => ({
    newAlbums: state.getIn(["recommend","newAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hookse
  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" moreLink="/discover/album"/>
      <div className="content">
        {/* 绑定往左切换样式以及点击事件 */}
        <button className="arrow arrow-left sprite_02"
                onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              // 遍历渲染获取到的专辑信息
              [0,1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item*5, (item+1)*5).map(iten => {
                        return <HYAlbumCover key={iten.id}
                                  info={iten}/>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        {/* 绑定往右切换样式以及点击事件 */}
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
      
  )
  
})
