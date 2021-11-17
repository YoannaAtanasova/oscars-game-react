import styled from 'styled-components';
import { GlobalColors } from '../../Global';

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
        background-color: ${GlobalColors.DarkGray};
        color: ${GlobalColors.White};
    }

    & td{
        margin: 20px;
        padding: 10px;
        background-color: ${GlobalColors.LightGray};
    }
`