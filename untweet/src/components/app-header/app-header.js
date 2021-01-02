import React from'react';

import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size:26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue;
        }
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
        :hover {
            color: dimgrey;
        }
    }
`

const AppHeader = () => {
    const numberOfLines = 6;
    const liked = 2;
    return(
        <Header>
            <h1> Volgant Bobrilov</h1>
            <h2> {numberOfLines} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;