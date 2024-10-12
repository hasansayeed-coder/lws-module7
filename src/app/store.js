import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from '../features/Transaction/TransactionSlice.js' ;

export const store = configureStore({
    reducer: {
        transaction : transactionReducer ,
    },
});
