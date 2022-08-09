import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constans';
import { OffersProcess } from '../../types/state';
// import { setHoverCityIdAction } from '../action';

export const initialState: OffersProcess = {
  hoverCityId: null,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setHoverCityIdAction: (state, action) => {
      state.hoverCityId = action.payload;
    },
  }
  // extraReducers(builder) {
  //   builder
  //     .addCase(setHoverCityIdAction, (state, action) => {
  //       state.hoverCityId = action.payload;
  //     });
  // }
});

// export const offersProcess = createSlice({
//   name: NameSpace.Offers,
//   initialState,
//   // reducers: {},
//   reducers: {
//     setHoverCityIdAction:  (state, action) => {
//       state.hoverCityId = action.payload;
//     }
//   }
// });

export const { setHoverCityIdAction } = offersProcess.actions;
