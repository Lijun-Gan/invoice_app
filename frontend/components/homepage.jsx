import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInvoices, fetchInvoice, createInvoice } from "../actions/invoice_actions";
import * as ReactBootStrap from 'react-bootstrap'

const Homepage =()=>{
    const dispatch = useDispatch()
    const [invoices, setInvoices] = useState([])
    // const [in]
    useEffect(()=>{
        dispatch(fetchInvoices()).then((data)=>{
            setInvoices(Object.values(data.invoices))
        })
    },[])

    // const invoices = useSelector(state => state.entities.invoices);
  
    function renderTableHeader() {
        let header = ['id', 'company', 'contragent', 'amount' , 'currency', 'date' ]
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    function renderTableData() {
        return invoices.map((student, index) => {
           const { id, company, contragent, amount , currency,date} = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{company}</td>
                 <td>{contragent}</td>
                 <td>{Number(amount).toFixed(2)}</td>
                 <td>{currency}</td>
                 <td>{date}</td>

              </tr>
           )
        })
     }

    return(
        <div>
            <h1 id='title'>Invoices</h1>
            <div className='homepage-container'>
                
                <div className='homepage-date'>
                    <button className="new-invoice">+ NEW INVOICE</button>
                    <section className="stay-right">
                        <input type="date"/>
                        <span>&&</span>
                        <input type="date"/>
                    <button className="search-button">Search</button>
                    </section>
                </div>



                <table id='homepage-invoices'> 
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                </tbody>
                </table>

            </div>

        </div>
    )
}

export default Homepage