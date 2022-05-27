import React, { useState, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from '../../store/constants';
import { getSongList } from "../../store/actionCreators";

import HYThemeCover from '@/components/songs-cover';
import HYPagination from '@/components/pagination';
import {
  SongListWrapper
} from "./style";

export default memo(function HYSongsList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"])
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  console.log(songList)
  const total = categorySongs.total || 0;
  const dispatch = useDispatch();

  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getSongList(page));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <HYThemeCover info={item} key={item.id} right="30px" />
            )
          })
        }
      </div>
      {/* 将页面相关信息交由HYPagination处理 */}
      <HYPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={PER_PAGE_NUMBER}
                    onPageChange={onPageChange}/> {/*监听页面相关事件*/}
    </SongListWrapper>
  )
})

