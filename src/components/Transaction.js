import React from 'react';
import editImage from '../assets/images/edit.svg' ;
import deleteImage from '../assets/images/delete.svg' ;
import { useDispatch } from 'react-redux';
import { editActive, removeTransactions } from '../features/Transaction/TransactionSlice';
import { deleteTransaction } from '../features/Transaction/TransactionApi';

const Transaction = ({transaction}) => {

    const {id ,name , amount , type} = transaction || {} ;

    const dispatch = useDispatch() ;

    const handleEdit = () => {
        dispatch(editActive(transaction))
    }
    const handleDelete = () => {
        dispatch(removeTransactions(id))
    }

    
    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img src={editImage} className='icon' alt="" onClick={handleEdit}/>
                </button>
                <button className="link">
                <img alt='image of delete' className="icon" src={deleteImage} onClick={handleDelete}/>
                </button>
            </div>
        </li>
    );
};

export default Transaction;