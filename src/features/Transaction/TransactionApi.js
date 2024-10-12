import axios from "../../utls/axios";

export const getTransactions = async() => {
    const response = await axios.get('/transactions') ;

    return response.data ;
}

export const addTransaction = async(data) => {
    const response = await axios.post('/transactions' , data) ;

    return response.data ;
}

export const editTransaction = async(id) => {
    const response = await axios.put(`/transactions/${id}`) ;

    return response.data ;
}

export const deleteTransaction = async(id) => {
    const response = axios.delete(`/transactions/${id}`) ;

    return response.data ;
}