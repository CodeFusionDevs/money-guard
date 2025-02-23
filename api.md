**API Endpoints:**

- **Authentication:** (From `src/config/userTransactionsApi.js` and `src/redux/Auth/operations.js`)

  - `POST /api/auth/sign-up`: User registration
  - `POST /api/auth/sign-in`: User login
  - `DELETE /api/auth/sign-out`: User logout
  - `GET /api/users/current`: Get current user information (refresh)

- **User Data:** (From `src/config/userTransactionsApi.js` and `src/redux/Auth/operations.js`)

  - `GET /api/users/current`: Get current user information (balance)

- **Transactions:** (From `src/config/userTransactionsApi.js` and `src/redux/Transactions/operations.js`)

  - `GET /api/transactions`: Get all transactions
  - `POST /api/transactions`: Add a new transaction
  - `DELETE /api/transactions/:id`: Delete a transaction (where `:id` is the transaction ID)
  - `PATCH /api/transactions/:id`: Edit a transaction (where `:id` is the transaction ID)

- **Transaction Categories:** (From `src/config/userTransactionsApi.js` and `src/redux/Statistics/operations.js`)

  - `GET /api/transaction-categories`: Get all transaction categories

- **Transaction Summary:** (From `src/config/userTransactionsApi.js` and `src/redux/Statistics/operations.js`)

  - `GET /api/transactions-summary?month={month}&year={year}`: Get transaction summary for a specific month and year.

- **Currency:** (From `src/config/currencyApi.js` and `src/redux/Currency/currencyApi.js`)
  - `GET /bank/currency`: Get currency exchange rates (USD and EUR). This is using `https://api.monobank.ua/` as the base URL.

**Key Observations:**

- **Base URLs:**
  - `https://wallet.b.goit.study` is used for user authentication, transaction management, and categories.
  - `https://api.monobank.ua/` is used for fetching currency exchange rates.
- **Authentication Header:** The `userTransactionsApi` uses an `Authorization` header with a `Bearer` token for authenticated requests.
- **Redux Thunks:** The code uses Redux Thunks (`createAsyncThunk`) to handle asynchronous API calls and update the Redux store.
- **Error Handling:** Each thunk includes a `try...catch` block to handle potential errors during API calls.
- **Data Transformation:** The code often transforms the data received from the API to fit the application's needs (e.g., formatting dates, calculating totals).
- **Local Storage:** Currency data is cached in local storage to reduce API calls.

This list provides a comprehensive overview of the API endpoints used in your application, along with their purpose and the files where they are defined.

Currency API:

Explanation of the currency API:
USD and EUR are the only currencies that are supported by the currency API.
The API returns an array of objects, each representing a currency exchange rate.
The `currencyCodeA` is the currency code of the base currency.
The `currencyCodeB` is the currency code of the target currency.
The `date` is the date of the exchange rate.
The `rateSell` is the selling rate of the currency.
The `rateBuy` is the buying rate of the currency.

[
{
"currencyCodeA": 840,
"currencyCodeB": 980,
"date": 1552392228,
"rateSell": 27,
"rateBuy": 27.2,
"rateCross": 27.1
}
]
