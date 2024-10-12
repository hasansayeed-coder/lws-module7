import React, { useEffect } from 'react';

import Transaction from './Transaction';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../features/Transaction/TransactionSlice';


const Transactions = () => {

    const dispatch = useDispatch() ;

    const {transactions , isLoading , isError} = useSelector((state) => state.transaction);

    useEffect( () => {
        dispatch(fetchTransactions)
    }, [dispatch])

    let content = null ;

    if(isLoading){
        content = <p>Loading...</p>
    }

    if(!isLoading && isError){
        content = <p className="error">There was an error</p>
    }

    if(!isLoading && !isError && transactions?.length > 0){
        content = transactions.map((transaction) =>(<Transaction key={transaction.id} transaction={transaction}/>))
    }

    if(!isLoading && !isError && transactions?.length === 0){
        content = <p>No Transactions Found!!!</p>
    }

    return (
    <div>

        <p className="second_heading">Your Transactions:</p>

        <div className="conatiner_of_list_of_transactions">
                    <ul>
                        {content}
                    </ul>
        </div>
            
    </div>
    );
};

export default Transactions;