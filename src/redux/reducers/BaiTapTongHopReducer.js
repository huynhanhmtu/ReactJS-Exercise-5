const initialState = {
  danhSachCuoc: [
    { ma: 'ga', hinhAnh: './img/BaiTapTongHop/ga.png', diemCuoc: 0 },
    { ma: 'bau', hinhAnh: './img/BaiTapTongHop/bau.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: './img/BaiTapTongHop/ca.png', diemCuoc: 0 },
    { ma: 'nai', hinhAnh: './img/BaiTapTongHop/nai.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: './img/BaiTapTongHop/cua.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: './img/BaiTapTongHop/tom.png', diemCuoc: 0 }
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: 'bau', hinhAnh: './img/BaiTapTongHop/bau.png' },
    { ma: 'bau', hinhAnh: './img/BaiTapTongHop/bau.png' },
    { ma: 'bau', hinhAnh: './img/BaiTapTongHop/bau.png' }
  ]
};

export const baiTapTongHopReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DAT_CUOC_BAU_CUA': {
      // Tìm trong dach sách cược, quân cược nào được đặt sẽ tăng hoặc giảm điểm
      const danhSachCuocUpdate = [...state.danhSachCuoc]; //Spread Operator
      const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
      if (index != -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            danhSachCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (danhSachCuocUpdate[index].diemCuoc > 0) {
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      // Cập nhật lại danhSachCuoc
      state.danhSachCuoc = danhSachCuocUpdate;
      // Sau khi thay đổi trong state => clone lại state mới và return state mới này ra để component biết store có thay đổi hay không
      return { ...state };
    }
    case 'PLAY_GAME_BAU_CUA': {
      // TUNG XÚC XẮC NGẪU NHIÊN
      const mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // Tạo số ngẫu nhiên từ 0 -> 5
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;

      // SO SÁNH - TRỪ ĐIỂM - HOÀN LẠI ĐIỂM - CỘNG ĐIỂM
      // Xử lý cộng điểm
      mangXucXacNgauNhien.forEach((xucXacNgauNhien, index) => {
        const indexQuanCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNgauNhien.ma);
        if (indexQuanCuoc != -1) {
          state.tongDiem += state.danhSachCuoc[indexQuanCuoc].diemCuoc;
        }
      })

      // Xử lý hoàn lại điểm (chỉ hoàn điểm 1 lần cho mỗi quân cược trúng thưởng -> findIndex khi có trùng thì break ra khỏi vòng lặp, không bị trùng)
      state.danhSachCuoc.forEach((quanCuoc, index) => {
        const indexXucXac = mangXucXacNgauNhien.findIndex(xx => xx.ma === quanCuoc.ma)
        if (indexXucXac != -1) {
          state.tongDiem += quanCuoc.diemCuoc;
        }
      })

      // Reset làm mới game
      // Có thể copy lại mảng
      // state.danhSachCuoc = [
      //   { ma: 'ga', hinhAnh: './img/BaiTapTongHop/ga.png', diemCuoc: 0 },
      //   { ma: 'bau', hinhAnh: './img/BaiTapTongHop/bau.png', diemCuoc: 0 },
      //   { ma: 'ca', hinhAnh: './img/BaiTapTongHop/ca.png', diemCuoc: 0 },
      //   { ma: 'nai', hinhAnh: './img/BaiTapTongHop/nai.png', diemCuoc: 0 },
      //   { ma: 'cua', hinhAnh: './img/BaiTapTongHop/cua.png', diemCuoc: 0 },
      //   { ma: 'tom', hinhAnh: './img/BaiTapTongHop/tom.png', diemCuoc: 0 }
      // ];
      state.danhSachCuoc = state.danhSachCuoc.map(qc => {
        return { ...qc, diemCuoc: 0 }
      });
      return { ...state };
    }

    case 'CHOI_LAI': {
      state.danhSachCuoc = state.danhSachCuoc.map(qc => {
        return { ...qc, diemCuoc: 0 }
      });
      state.tongDiem = 1000;
      state.mangXucXac = [
        { ma: 'bau', hinhAnh: './img/BaiTapTongHop/bau.png' },
        { ma: 'bau', hinhAnh: './img/BaiTapTongHop/bau.png' },
        { ma: 'bau', hinhAnh: './img/BaiTapTongHop/bau.png' }
      ];
      return { ...state };
    }

    default:
      return { ...state };
  }
};
