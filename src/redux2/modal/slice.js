import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalType: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    toggleAddModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
      state.modalType = action.type;
    },
    toggleEditModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
      state.modalType = action.type;
    },
    toggleLogOutModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
      state.modalType = action.type;
    },
    toggleModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleTeamModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
      state.modalType = null;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  toggleAddModal,
  toggleEditModal,
  toggleLogOutModal,
  toggleModal,
  toggleTeamModal,
} = modalSlice.actions;
