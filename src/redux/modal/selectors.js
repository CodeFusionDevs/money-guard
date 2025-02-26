const selectIsAddTransactionModalOpen = (state) =>
  state.modal.isAddTransactionModalOpen;

const selectIsAddCategoryModalOpen = (state) =>
  state.modal.isAddCategoryModalOpen;

const selectIsEditCategoryModalOpen = (state) =>
  state.modal.isEditCategoryModalOpen;

const selectIsDeleteTransactionModalOpen = (state) =>
  state.modal.isDeleteTransactionModalOpen;

export { selectIsAddTransactionModalOpen, selectIsAddCategoryModalOpen, selectIsEditCategoryModalOpen, selectIsDeleteTransactionModalOpen };
