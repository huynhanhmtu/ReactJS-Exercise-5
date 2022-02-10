import React from 'react';
import './css/style.css';
import { useSpring, animated } from 'react-spring';

export default function XucXac(props) {

  const [propsDice, set] = useSpring(() => ({
    to: {
      xyz: [720, 720, 720]
    },
    from: {
      xyz: [0, 0, 0]
    },
    config: {
      duration: 1000
    },
    reset: true
  }))

  // const xucXac = props.xucXacItem; //Không phải distructuring
  const { xucXacItem } = props; //Distructuring

  return <div style={{ width: '25%' }}>
    <animated.div className='scene' style={{
      transform: propsDice.xyz.interpolate((x,y,z)=>`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
    }}>
      <div className='cube'>
        <img className='cube__face front' src={xucXacItem.hinhAnh} />
        <img className='cube__face right' src='./img/BaiTapTongHop/ca.png' />
        <img className='cube__face back' src='./img/BaiTapTongHop/cua.png' />
        <img className='cube__face left' src='./img/BaiTapTongHop/ga.png' />
        <img className='cube__face top' src='./img/BaiTapTongHop/nai.png' />
        <img className='cube__face bottom' src='./img/BaiTapTongHop/tom.png' />
      </div>
    </animated.div>
  </div>;
}
