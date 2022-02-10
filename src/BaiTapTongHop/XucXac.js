import React from 'react';
import './css/style.css'

export default function XucXac(props) {

  // const xucXac = props.xucXacItem; //Không phải distructuring
  const { xucXacItem } = props; //Distructuring

  return <div style={{ width: '25%' }}>
    <div className='scene'>
      <div className='cube'>
        <img className='cube__face front' src={xucXacItem.hinhAnh} />
        <img className='cube__face right' src='./img/BaiTapTongHop/ca.png' />
        <img className='cube__face back' src='./img/BaiTapTongHop/cua.png' />
        <img className='cube__face left' src='./img/BaiTapTongHop/ga.png' />
        <img className='cube__face top' src='./img/BaiTapTongHop/nai.png' />
        <img className='cube__face bottom' src='./img/BaiTapTongHop/tom.png' />
      </div>
    </div>
  </div>;
}
