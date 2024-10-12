import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {

    const calculateIncome = (transactions) => {
    let income = 0 ;

    transactions.forEach(transaction => {
        const {type , amount} = transaction ;

        if(type === 'Income'){
            income += amount ;
        }
        else{
            income -= amount ;
        }
    })

    return income ;
 }
    const {transactions} = useSelector((state) => state.transaction)
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>{" "}
                {transactions.length > 0 ? <span>{calculateIncome(transactions)}</span> : <span>0</span>}
            </h3>
        </div>
    );
};

export default Balance;