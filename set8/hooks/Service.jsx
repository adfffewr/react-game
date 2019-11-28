import React , { useState ,createContext , useMemo } from 'react';
import Table from './Table';
import Form from './Form'


export const CODE = {
    MINE : -7,
    NOMARL : -1,
    QUESTION : -2,
    FLAG : -3,
    QUESTION_MINE : -4,
    FLAG_MINE : -5,
    CLICKED_MINE : -6,
    OPENED : 0,
};

const plantMine = (row , cell , mine) => {  // 지뢰 칸 만드는 함수
    console.log(row , cell , mine);
    const candidate = Array( row * cell ).fill().map( (arr , i) => {
        return i;
    });
    const shuffle = [];
    while(candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor( Math.random() * candidate.length ), 1)[0];
        shuffle.push(chosen)
    };
    const data = [];
    for(let i = 0 ; i < row ; i++) {
        const rowData = [];
        data.push(rowData);
        for(let j = 0; j < cell; j++) {
            rowData.push(CODE.NOMARL);
        }
    }

    for(let k = 0; k< shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE
    }
    console.log(data)
    return data;
};

export const TableContext = createContext({
    tableData : [],
});

export let StartGame;
export let OpenCell;

const Service = () => {
    const [tableData , setTableData] = useState([]);
    const [timer , setTimer] = useState(0);
    const [result , setResult] = useState('');
    const value = useMemo( () => ({ tableData : tableData  }) , [tableData])

    StartGame = (row , cell , mine) => {
        setTableData( plantMine(row , cell , mine) )
    }

    OpenCell = (row , cell , mine) => {
        
    }

    return(
        <TableContext.Provider value={value}>  
            <Form>
            </Form>
            <div>{timer}</div>
            <Table
            />
            <div>{result}</div>
        </TableContext.Provider>
    );
}

export default Service;