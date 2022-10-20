import React, { Component, useState } from 'react'
import Table from './Table'
import { tables } from '../functions/store'
import { useEffect } from 'react'
import { RenderTables } from './RenderTables'


const Grid = () => {
    const [tableList, setTableList] = useState(tables)
    return <div>
        {JSON.stringify(tables)}
        <div className="px-10 py-20">
            <div className="grid grid-cols-3 gap-x-6 gap-y-10">
                {RenderTables(tableList)}
            </div>
        </div>
    </div>
}

export default Grid