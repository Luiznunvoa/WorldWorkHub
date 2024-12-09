import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100vw; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    border-bottom: 1px solid var(--outline);
    padding: 1rem;

    svg {
      margin-right: 5rem;
      color: #707070; 
      cursor: pointer;
    }

    div {
        position: absolute;
        top: 3rem;
        right: 1.2rem;
        border-radius: 8px;
        padding: 1rem;
        background-color: var(--white);
        box-shadow: 0px 7px 6px -1px rgba(0,0,0,0.75);
    }

    ul {
        list-style-type: none;
    }

    li {
        cursor: pointer;
        padding: 0.5rem;
    }

    li:hover {
      font-weight: 700;
    }
`;