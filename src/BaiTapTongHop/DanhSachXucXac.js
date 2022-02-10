import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import XucXac from './XucXac';

export default function DanhSachXucXac() {

  const dispatch = useDispatch();

  const mangXucXac = useSelector(state => state.baiTapTongHopReducer.mangXucXac);

  return <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
    <div className='bg-white' style={{ width: 350, height: 350, borderRadius: '50%', maxWidth: '100%' }}>
      <div className='d-flex flex-column justify-content-around align-items-center' style={{ padding: 20, width: '100%', height: '100%' }}>
        <XucXac xucXacItem={mangXucXac[0]} />
        <div className='d-flex justify-content-between' style={{ marginRight: 30 }}>
          <XucXac xucXacItem={mangXucXac[1]} />
          <XucXac xucXacItem={mangXucXac[2]} />
        </div>
      </div>
    </div>
    <button className='mt-5 btn btn-success p-3' style={{ fontSize: 18 }}onClick={()=>{
      dispatch({
        type: 'PLAY_GAME_BAU_CUA',
        // Không cần gởi payload lên store
      })
    }}>TUNG XÚC XẮC !!!</button>
  </div>
}