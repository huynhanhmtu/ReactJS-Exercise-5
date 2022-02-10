import React from 'react';
import { useSelector } from 'react-redux';
import QuanCuoc from './QuanCuoc';

export default function DanhSachQuanCuoc() {

  const danhSachCuoc = useSelector(state => state.baiTapTongHopReducer.danhSachCuoc); //Tương tự mapStateToProps trong statefull component

  const renderDanhSachCuoc = () => {
    return danhSachCuoc.map((item, index) => {
      return <div key={index} className='col-4 d-flex justify-content-center'><QuanCuoc quanCuoc={item} /></div>
    })
  }

  return <div className='row'>
    {renderDanhSachCuoc()}
  </div>;
}
