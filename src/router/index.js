import React from 'react'
import { Redirect } from 'react-router'

const HYDiscover = React.lazy(() => import('@/pages/discover'))
const HYRecommend = React.lazy(_ => import('@/pages/discover/c-pages/recommend'))
const HYRanking = React.lazy(_ => import('@/pages/discover/c-pages/ranking'))
const HYAlbum = React.lazy(_ => import('@/pages/discover/c-pages/album'))
const HYArtist = React.lazy(_ => import('@/pages/discover/c-pages/artist'))
const HYDjradio = React.lazy(_ => import('@/pages/discover/c-pages/djradio'))
const HYSongs = React.lazy(_ => import('@/pages/discover/c-pages/songs'))
const HYPlayer = React.lazy(_ => import('@/pages/player'))

const HYFriend = React.lazy(_ => import('@/pages/friend'))
const HYMine = React.lazy(_ => import('@/pages/mine'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      // 重定向至/discover页面
      <Redirect to="/discover"/>  
    )
  },
  {
    path: '/discover',
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          // 重定向至/discover/recommend子页面
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/djradio",
        component: HYDjradio
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/player",
        component: HYPlayer
      }
    ]
  },
  {
    path: '/friend',
    component: HYFriend
  },
  {
    path: '/mine',
    component: HYMine
  },
]

export default routes