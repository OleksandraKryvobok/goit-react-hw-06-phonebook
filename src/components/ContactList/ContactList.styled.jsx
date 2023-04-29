import styled from "styled-components";

export const List = styled.ul`
    font-size: 20px;
`;

export const Item = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;