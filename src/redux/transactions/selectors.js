const selectTransactions = (state) => state.transactions.transactions;
const selectTransactionCategories = (state) =>
  state.transactions.transactionCategories;
const selectIsLoading = (state) => state.transactions.isLoading;
const selectError = (state) => state.transactions.error;

export {
  selectTransactions,
  selectTransactionCategories,
  selectIsLoading,
  selectError,
};
