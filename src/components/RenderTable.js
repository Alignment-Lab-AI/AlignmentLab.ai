export default function RenderTable(props){
    const { table } = props

    return (
        <table className='table-auto w-full border-collapse overflow-scroll overflow-x-scroll'>
            <thead>
                <tr>
                    <th className='px-4 py-2'></th> {/* Empty cell for side headers */}
                    {table?.header?.map((header, index) => {
                        return (
                            <th key={index} className='px-4 py-2'>
                                {header}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {table?.rows?.map((row, rowIndex) => {
                    return (
                        <tr key={rowIndex} className={rowIndex === table?.bold ? 'bg-slate-100 dark:bg-slate-800' : ''}>
                            <td className='border px-4 py-2'>{table?.sideHeaders[rowIndex]}</td> {/* Side header */}
                            {row?.map((cell, cellIndex) => {
                                return (
                                    <td key={cellIndex} className='border px-4 py-2'>
                                        {cell}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}