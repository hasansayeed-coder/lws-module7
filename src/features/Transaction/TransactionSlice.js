import { addTransaction, deleteTransaction, editTransaction, getTransactions } from "./TransactionApi"

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")

const initialState = {
    tranasactions : [] , 
    isLoading : false , 
    isError : false ,
    error : '' ,
    editing : {} ,
}

// async thunks

export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions' , async () => {
    const tranasactions = await getTransactions() ;

    return tranasactions ;
})

export const createTransactions = createAsyncThunk('transaction/createTransaction' , async (data) => {
    const tranasaction = await addTransaction(data) ;

    return tranasaction ;
})

export const changeTransactions = createAsyncThunk('transaction/changeTransaction' , async ({id , data}) => {
    const tranasaction = await editTransaction(id , data) ;

    return tranasaction ;
})

export const removeTransactions = createAsyncThunk('transaction/removeTransaction' , async (id) => {
    const tranasaction = await deleteTransaction(id) ;

    return tranasaction ;
})

// create slice

const transactionSlice = createSlice({
    name : 'transaction' ,
    initialState ,
    reducers : {
        editActive: (state ,  action) => {
            state.editing = action.payload ;
        } ,
        editingInactive : (state , action) => {
            state.editing = {} ;
        }
    } ,
    extraReducers : (builder) => {
        builder.addCase(fetchTransactions.pending , (state) => {
             state.isError = false ;
             state.isLoading = true ;
        })
        .addCase(fetchTransactions.fulfilled, (state, action) => {
            state.isError = false ;
            state.isLoading = false ;
            state.tranasactions = action.payload ;
            state.error = '' ;
        })
        .addCase(fetchTransactions.rejected , (state , action) => {
            state.error = action.error?.message ;
            state.isError = true ;
            state.tranasactions = [] ;
            state.isLoading = false;
        })

        .addCase(createTransactions.pending , (state) => {
            state.isError = false ;
            state.isLoading = true ;
       })
       .addCase(createTransactions.fulfilled, (state, action) => {
           state.isError = false ;
           state.isLoading = false ;
           state.tranasactions.push(action.payload )
           state.error = '' ;
       })
       .addCase(createTransactions.rejected , (state , action) => {
           state.error = action.error?.message ;
           state.isError = true ;
           state.isLoading = false;
       })
       .addCase(changeTransactions.pending , (state) => {
        state.isError = false ;
        state.isLoading = true ;
       })
       .addCase(changeTransactions.fulfilled, (state, action) => {
       state.isError = false ;
       state.isLoading = false ;
       const indexToUpdate = state.tranasactions.findIndex(t => t.id === action.payload.id) ;
       state.tranasactions[indexToUpdate]  = action.payload
       state.error = '' ;
       })
       .addCase(changeTransactions.rejected , (state , action) => {
       state.error = action.error?.message ;
       state.isError = true ;
       state.isLoading = false;
       })
       .addCase(removeTransactions.pending , (state) => {
        state.isError = false ;
        state.isLoading = true ;
       })
       .addCase(removeTransactions.fulfilled, (state, action) => {
       state.isError = false ;
       state.isLoading = false ;
       state.tranasactions = state.tranasactions.filter(t => t.id !== action.meta.arg) ;
       state.error = '' ;
       })
       .addCase(removeTransactions.rejected , (state , action) => {
       state.error = action.error?.message ;
       state.isError = true ;
       state.isLoading = false;
       })
    }

})

export default transactionSlice.reducer ;
export const {editActive , editingInactive} = transactionSlice.actions ;