import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddTransactionModalOpen: false,
  isAddCategoryModalOpen: false,
  isEditCategoryModalOpen: false,
  isDeleteTransactionModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAddTransactionModal: (state) => {
      state.isAddTransactionModalOpen = true;
    },
    closeAddTransactionModal: (state) => {
      state.isAddTransactionModalOpen = false;
    },
    openAddCategoryModal: (state) => {
      state.isAddCategoryModalOpen = true;
    },
    closeAddCategoryModal: (state) => {
      state.isAddCategoryModalOpen = false;
    },
    openEditCategoryModal: (state) => {
      state.isEditCategoryModalOpen = true;
    },
    closeEditCategoryModal: (state) => {
      state.isEditCategoryModalOpen = false;
    },
    openDeleteTransactionModal: (state) => {
      state.isDeleteTransactionModalOpen = true;
    },
    closeDeleteTransactionModal: (state) => {
      state.isDeleteTransactionModalOpen = false;
    },
  },
});

export const {
  openAddTransactionModal,
  closeAddTransactionModal,
  openAddCategoryModal,
  closeAddCategoryModal,
  openEditCategoryModal,
  closeEditCategoryModal,
  openDeleteTransactionModal,
  closeDeleteTransactionModal,
} = modalSlice.actions;

export default modalSlice.reducer;
