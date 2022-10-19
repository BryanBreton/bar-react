import React, { Component } from 'react'
import { styleButtonOrder, styleTable, styleTitleTable } from '../functions/varCss'
import { tables, mutations } from '../functions/store'
import CocktailList from './CocktailList'
export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: props.numero
    }
    this.handleClickOrder = this.handleClickOrder.bind(this)
    this.handleClickPay = this.handleClickPay.bind(this)
  }

  handleClickOrder = function (e) {
      e.preventDefault()
      const table = tables.find(table => table.numero === this.state.numero)
      const indexOfTable = tables.indexOf(table)
      mutations.setTables(indexOfTable, {...table, note: table.note+10})
  }

  handleClickPay = function (e) {
    e.preventDefault()
    const table = tables.find(table => table.numero === this.state.numero)
    alert("Vous devez payer "+ table.note)
    // const indexOfTable = tables.indexOf(table)
    // mutations.setTables(indexOfTable, {...table, note: table.note+10})
}

  render() {
    return (
      <div className={styleTable()}>
        <h5 className={styleTitleTable()}>Table {this.state.numero}</h5>
        {this.props.children}
        <div>
          <button type="button" onClick={this.handleClickOrder} className={styleButtonOrder()}>Prendre la commande</button>
          <button type="button" onClick={this.handleClickPay} className={styleButtonOrder()}>Payer</button>
          <CocktailList/>
        </div>
        
      </div>
    )
  }
}
