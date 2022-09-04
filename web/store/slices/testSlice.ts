import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface TestState {
  dummy: string;
}

const initialState: TestState = {
  dummy: "",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestState(state, action) {
      state.dummy = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({ ...state, ...action.payload.test }),
  },
});

export const { setTestState } = testSlice.actions;

export const selectTestState = (state: AppState) => state.test;

export default testSlice.reducer;
