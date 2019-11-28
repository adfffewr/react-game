import React , {useContext} from 'react';
import Tr from './Tr';
import { TableContext } from './Service';

const Table = () => {
    const { tableData } = useContext(TableContext)
    return(
        <>
            <table>
                <tbody>
                    {Array(tableData.length).fill().map( (tr , i) => 
                    
                        <Tr
                            rowIndex={i}
                            key={i}
                        />
                    
                    )}
                </tbody>
            </table>
        </>
    )
};

export default Table;