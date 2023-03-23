import styled from 'styled-components';

export const HistoryTable = styled.table`
    width: 800px;
    border: 1px solid lightBlue;
    border-collapse: collapse;
    box-shadow: 5px 0px 3px gray;
}
`;

export const TableHead = styled.th`
    font-size: 18px;
    border: 1px solid gray;
    :not(:last-child){
    border-right: 1px solid lightBlue;
    }
    height: 30px;
    background-color: #2a9593;
    color: white;
`;

export const TableData = styled.td`
    font-size: 16px;
    border: 1px solid lightGray;
    text-align: center;
    height: 40px;
`;

export const TableRow = styled.tr`
:nth-child(even) {background-color: #f2f2f2;}
`