import styled from 'styled-components';

export const TableWrapper = styled.div`
    margin: 30px;
`;

export const StyledTable = styled.table`
    width: 100%;
    justify-content: center;
    align-items: center;
    border-collapse: separate;
    border-spacing: 0 10px;

    & th{
        padding: 8px;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #181b1e;
        color: white;
    }

    & td{
        margin: 20px;
        padding: 10px;
        background: #444d53;
    }
`