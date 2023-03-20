import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IErrorResponse, IGetAllPayloadModel, IGetPayloadModel, IGetRequestModel, IStateMisc, ISuccessResponse, TUpdateReducerModel, TUpdateReducers } from "../../interfaces"

const stateMisc: IStateMisc = {
  loading: false,
  saving: false,
  error: null,
  statusCode: null
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
    getAll(state, action: PayloadAction<IGetAllPayloadModel>) {
      state[action.payload.key].list.loading = true;
    },
    getAllSuccess(state, action: PayloadAction<ISuccessResponse>) {
      state[action.payload.key].list.loading = false;
      state[action.payload.key].list.data = action.payload.response;
    },
    getAllFailure(state, action: PayloadAction<IErrorResponse>) {
      state[action.payload.key].list.loading = false;
      state[action.payload.key].list.error = action.payload.error;
    },


    get(state, action: PayloadAction<IGetPayloadModel>) {
      state[action.payload.key].single.loading = true;
    },
    getSuccess(state, action: PayloadAction<ISuccessResponse>) {
      state[action.payload.key].single.loading = false;
      state[action.payload.key].single.data = action.payload.response;
    },
    getFailure(state, action: PayloadAction<IErrorResponse>) {
      state[action.payload.key].single.loading = false;
      state[action.payload.key].single.error = action.payload.error;
    },


    post(state, action: PayloadAction<TUpdateReducerModel>) {
      state[action.payload.key].single.saving = true
    },
    postSuccess(state, action: PayloadAction<ISuccessResponse>) {
      state[action.payload.key].single.saving = false
      state[action.payload.key].single.statusCode = action.payload.statusCode;
    },
    postFailure(state, action: PayloadAction<IErrorResponse>) {
      state[action.payload.key].single.saving = false
      state[action.payload.key].single.statusCode = action.payload.statusCode;
    },


    put(state, action: PayloadAction<TUpdateReducerModel>) {
      state[action.payload.key].single.saving = true;
    },
    putSuccess(state, action: PayloadAction<ISuccessResponse>) {
      state[action.payload.key].single.saving = false
      state[action.payload.key].single.statusCode = action.payload.statusCode;
    },
    putFailure(state, action: PayloadAction<IErrorResponse>) {
      state[action.payload.key].single.saving = false
      state[action.payload.key].single.statusCode = action.payload.statusCode;
    },


    delete(state, action: PayloadAction<TUpdateReducers>) {
      state[action.payload.key].single.saving = true;
    },
    deleteSuccess(state, action: PayloadAction<ISuccessResponse>) {
      state[action.payload.key].single.saving = false
      state[action.payload.key].single.statusCode = action.payload.statusCode;
    },
    deleteFailure(state, action: PayloadAction<IErrorResponse>) {
      state[action.payload.key].single.saving = false
      state[action.payload.key].single.statusCode = action.payload.statusCode;
    },
  }
});

export const AuthActions = authSlices.actions;

export default authSlices.reducer;