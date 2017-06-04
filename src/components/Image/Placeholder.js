import styled from 'styled-components';

export default styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover svg {
        opacity: 1;
    }
`;
