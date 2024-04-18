import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const createGetThunk = ({ name, url }) =>
  createAsyncThunk(name, async () => {
    return axios.get(url).then((response) => {
      if (response) {
        return response;
      }
    });
  });

const createThunk = (name, method, url) =>
  createGetThunk({ name, method, url });

export const saveObject = createAction("sliceName/saveObject");

export const generateCRUD = (url, sliceName) => {
  const actions = ["fetchData"].map((action, index) => {
    const methods = ["GET"];
    return createThunk(`${sliceName}/${action}`, methods[index], url);
  });

  const handleCRUDActions = (builder) => {
    actions.forEach((action) => {
      builder
        .addCase(action.pending, (state, action) => {
          state.isLoading = true;
          state.typeFetch = action.type;
        })
        .addCase(action.rejected, (state, action) => {
          state.isLoading = false;
          state.type = action.type;
          state.error = action.error.message;
        });
    });

    builder.addCase(actions[0].fulfilled, (state, action) => {
      state.isLoading = false;
      if (Array.isArray(action.payload.data.list)) {
        state.data = action.payload.data.list;
      } else {
        state.data = action.payload.data;
      }
    });

    builder.addCase(saveObject, (state, action) => {
      state.savedObject = action.payload;
    });
  };

  return {
    fetchData: actions[0],
    saveObject,
    handleCRUDActions,
  };
};
