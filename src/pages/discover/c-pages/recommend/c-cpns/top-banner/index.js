import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {getTopBannerAction} from '../../store/actionCreators'

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

import { Carousel } from 'antd'

export default memo(function HYTopBanner() {
  
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // 从state中获取轮播图相关数据
    topBanners: state.getIn(["recommend","topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch()

  // 其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 动态获取图片url
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20')

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          {/* 设置Carousel属性以及绑定相关事件 */}
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
            <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
