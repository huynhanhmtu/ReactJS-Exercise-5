import { combineReducers } from "redux";
import { baiTapTongHopReducer } from "./reducers/BaiTapTongHopReducer";

export const rootReducer = combineReducers({
  baiTapTongHopReducer: baiTapTongHopReducer //Có thể viết ngắn gọn baiTapTongHopReducer khi key trùng với value
})