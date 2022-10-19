import React, { Component, useState } from 'react'
import Table from './Table'
import { tables } from '../functions/store'
import { useEffect } from 'react'

export default class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tables: tables 
        }
        this.RenderTables = this.RenderTables.bind(this)
    }
    
    RenderTables({tableList}) {
        return tableList.map(t => 
        <Table key={t.numero} className="flex flex-col" numero={t.numero}/>
        )
    } 
    render() {
        console.log('render');
        return (
            <div>
                {JSON.stringify(tables)}
                <div className="px-10 py-20">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-10">
                        {this.RenderTables({tableList: this.state.tables})}

                    </div>
                </div>
            </div>
        )
    }
}









// import React, { Component } from 'react'
// import Table from './Table'
// export default class Grid extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             tables: [{numero:1}, {numero:2}, {numero:3}, {numero:4}, {numero:5}, {numero:6}, {numero:7}]
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {/* <div className="grid grid-cols-1"><ThreeCols/></div> */}
//                 <div className="px-10 py-20">
//                     <div className="grid grid-cols-3 gap-x-6 gap-y-10">
//                         {RenderTables({tableList: this.state.tables})}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// function RenderTables ({tableList}) {
//     return (
//         <div className="flex flex-col">
//             {tableList.map(t => <Table key={t.numero}  numero={t.numero}/>)}
//         </div>
        
//     )
// }

