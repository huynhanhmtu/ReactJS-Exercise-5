import React from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';

export default function QuanCuoc(props) {
  const { quanCuoc } = props;

  const dispatch = useDispatch();

  const [useSpringIncrease, setIncrease] = useSpring(() => {
    return {
      to: { scale: 1.1 },
      from: { scale: 1 },
      reset: true
    }
  });
  const [useSpringDecrease, setDecrease] = useSpring(() => {
    return {
      to: { scale: 1.1 },
      from: { scale: 1 },
      reset: true
    }
  });

  return <div className='mt-5' style={{ width: 160 }}>
    <div>
      <img src={quanCuoc.hinhAnh} style={{ width: '100%' }} />
    </div>

    <div className='bg-success mt-1 p-2 text-center' style={{ borderRadius: 8 }}>
      <animated.button className='btn btn-light' style={{
        fontSize: 20,
        lineHeight: 1,
        transform: useSpringDecrease.scale.interpolate(scale => `scale(${scale})`)
      }}
        onClick={() => {
          setDecrease({ scale: 1 });
          setDecrease({ scale: 1.1 });

          dispatch({
            type: 'DAT_CUOC_BAU_CUA',
            quanCuoc,
            tangGiam: false
          })
        }}>-</animated.button>
      <span className='text-warning px-2'>{quanCuoc.diemCuoc.toLocaleString()}$</span>
      <animated.button className='btn btn-light' style={{
         fontSize: 20,
          lineHeight: 1,
          transform: useSpringIncrease.scale.interpolate(scale => `scale(${scale})`)
        }} onClick={() => {
          setIncrease({ scale: 1 });
          setIncrease({ scale: 1.1 });

        dispatch({
          type: 'DAT_CUOC_BAU_CUA',
          quanCuoc,
          tangGiam: true
        })
      }}>+</animated.button>
    </div>
  </div>;
}
