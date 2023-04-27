import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: {
      city: '',
      dateStart: new Date(),
      dateEnd: new Date(),
      numAdult: 1,
      numChildren: 0,
      numRoom: 1
    }
  },
  reducers: {
    setLocation: (state, action) => {
      state.searchData.city = action.payload;
    },
    setDates: (state, action) => {
      state.searchData.dateStart = action.payload.startDate;
      state.searchData.dateEnd = action.payload.endDate;
    },
    setOptions: (state, action) => {
      state.searchData.numAdult = action.payload.adult;
      state.searchData.numChildren = action.payload.children;
      state.searchData.numRoom = action.payload.room;
    },
    setSearchData: (state, action) => {
      const { city, dateStart, dateEnd, numAdult, numChildren, numRoom } = action.payload;
    
      state.searchData.city = city;
      state.searchData.dateStart = new Date(dateStart);
      state.searchData.dateEnd = new Date(dateEnd);
      state.searchData.numAdult = numAdult;
      state.searchData.numChildren = numChildren;
      state.searchData.numRoom = numRoom;
    }
  },
});

export const { setLocation, setDates, setOptions, setSearchData } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;


// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isAuthenticated: false,
//     user: {},
//     token:''
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.user = {};
//       state.token = '';
//     }
//   },
// });

// export const { login,logout } = authSlice.actions;

// export const authReducer = authSlice.reducer;