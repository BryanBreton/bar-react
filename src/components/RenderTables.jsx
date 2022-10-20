import Table from "./Table"

export const RenderTables = (tableList) => {
    return tableList.map(t => 
        <div key={t.numero}>
            {Table(t.numero)}
        </div>
        
        )
}