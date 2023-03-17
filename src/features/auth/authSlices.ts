import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IErrorResponse, IGetAllPayloadModel, IGetPayloadModel, IGetRequestModel, IGetResponse, IStateMisc, TGetResponseModel } from "../../interfaces"

const stateMisc: IStateMisc = {
  loading: false,
  error: null
};


const initialState: IAuthState = {
  example: {
    list: {
      data: {},
      ...stateMisc
    },
    single: {
      data: {},
      ...stateMisc
    }
  }
};

const authSlices = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    getAll(state, payload: PayloadAction<IGetAllPayloadModel>) {
      state[payload.payload.key].list.loading = true;
    },
    getAllSuccess(state, payload: PayloadAction<IGetResponse>) {
      state[payload.payload.key].list.loading = false;
      state[payload.payload.key].list.data = payload.payload.response.data;
    },
    getAllFailure(state, payload: PayloadAction<IErrorResponse>) {
      state[payload.payload.key].list.loading = false;
      state[payload.payload.key].list.error = payload.payload.error;
    },
    get(state, payload: PayloadAction<IGetPayloadModel>) {
      state[payload.payload.key].single.loading = true;
    },
    getSuccess(state, payload: PayloadAction<IGetResponse>) {
      state[payload.payload.key].single.loading = false;
      state[payload.payload.key].single.data = payload.payload.response.data;
    },
    getFailure(state, payload: PayloadAction<IErrorResponse>) {
      state[payload.payload.key].single.loading = false;
      state[payload.payload.key].single.error = payload.payload.error;
    }
  }
});

export const AuthActions = authSlices.actions;

export default authSlices.reducer;