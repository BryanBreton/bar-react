import React, { Component, useState } from 'react'
import { styleButtonOrder, styleTable, styleTitleTable } from '../functions/varCss'
import { tables, mutations } from '../functions/store'
import CocktailList from './CocktailList'

const Table = (numeroTable) => {

    const handleClickPay = (e) => {
        e.preventDefault()
        const table = tables.find(table => table.numero === numeroTable)
        alert("Vous devez payer " + table.note)
    }
    
    return (
        <div className={styleTable()}>
            <h5 className={styleTitleTable()}>Table {numeroTable}</h5>
            <div>
                {/* <button type="button" onClick={handleClickOrder} className={styleButtonOrder()}>Prendre la commande</button> */}
                <button type="button" onClick={handleClickPay} className={styleButtonOrder()}>Payer</button>
                <CocktailList />
            </div>

        </div>
    )
}



const handleClickOrder = (e) => {
//     e.preventDefault()
//     const table = tables.find(table => table.numero === this.state.numero)
//     const indexOfTable = tables.indexOf(table)
//     mutations.setTables(indexOfTable, { ...table, note: table.note + 10 })
    console.log('oui');
}

export default Table