import React from 'react';
import DanhSachQuanCuoc from './DanhSachQuanCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import DiemThuong from './DiemThuong';
import './css/style.css'

export default function BaiTapTongHop() {
  return <div className='container-fluid'>
    <DiemThuong/>
    <div className='row'>
      <div className='col-8'>
        <DanhSachQuanCuoc/>
      </div>
      <div className='col-4'>
        <DanhSachXucXac/>
      </div>
    </div>
  </div>;
}
