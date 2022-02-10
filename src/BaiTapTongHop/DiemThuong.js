import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function DiemThuong() {

  const tongDiem = useSelector(state => state.baiTapTongHopReducer.tongDiem);

  const dispatch = useDispatch();

  return <div className='text-center mt-1'>
    <p style={{ color: "#28a745", fontSize: 35 }}>GAME BẦU CUA - CYBERLEARN</p>

    <div className='mt-4' style={{ fontSize: 20 }}>
      <span className='bg-success p-3 text-white' style={{ borderRadius: '10px' }}>Tổng điểm: <span className='text-warning'>{tongDiem.toLocaleString()}$</span></span>
    </div>

    <div className='mt-4' style={{ fontSize: 15 }}>
      <button className='btn btn-success p-3' style={{ borderRadius: '10px', border: 'none' }} onClick={()=>{
        dispatch({
          type: 'CHOI_LAI'
        })
      }}>Chơi lại</button>
    </div>
  </div>;
}
