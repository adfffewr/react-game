import React , { useContext , useCallback } from 'react';
import { CODE ,  OpenCell , TableContext } from './Service';

const getTdStyle = (code) => {
    switch(code) {
        case CODE.NOMARL :
        case CODE.MINE :
            return{
                background : '#444',
            };
        case CODE.OPENED :
            return{
                background : '#FFF',
            };
        default:
            return{
                background: '#FFF'
            };
    }
};

const getTdText = (code) => {
    switch(code) {
        case CODE.NOMARL :
            return '';
        case CODE.MINE :
            return 'x';
        default :
            return '';
    }
};

const Td = ({ rowIndex , cellIndex }) => {
    const { tableData } = useContext(TableContext)
    const onClickTd = useCallback( () => {
        OpenCell(rowIndex , cellIndex)
    }, [])

    return(
        <>  
            <td
                style={getTdStyle(tableData[rowIndex][cellIndex])}
                onClick={onClickTd}
            >
                {getTdText(tableData[rowIndex][cellIndex])}
            </td>
        </>
    )
};

export default Td;