import React from 'react';
import { useDispatch } from 'react-redux';
// import { useSpring, animated } from 'react-spring';

export default function QuanCuoc(props) {
  const { quanCuoc } = props;

  const dispatch = useDispatch();

  // const [propsUseSpring, set, stop] = useSpring(() => {
  //   return {
  //     to: { scale: 1.25 },
  //     from: { scale: 1 },
  //     reset: true
  //   }
  // });

  return <div className='mt-5' style={{ width: 160 }}>
    <div>
      <img src={quanCuoc.hinhAnh} style={{ width: '100%' }} />
    </div>

    <div className='bg-success mt-1 p-2 text-center' style={{ borderRadius: 8 }}>
      <button className='btn btn-light' style={{ fontSize: 20, lineHeight: 1 }} onClick={() => {
        dispatch({
          type: 'DAT_CUOC_BAU_CUA',
          quanCuoc,
          tangGiam: false
        })
      }}>-</button>
      <span className='text-warning px-2'>{quanCuoc.diemCuoc.toLocaleString()}$</span>
      <button className='btn btn-light' style={{ fontSize: 20, lineHeight: 1 }} onClick={() => {
        dispatch({
          type: 'DAT_CUOC_BAU_CUA',
          quanCuoc,
          tangGiam: true
        })
      }}>+</button>
    </div>
  </div>;
}
