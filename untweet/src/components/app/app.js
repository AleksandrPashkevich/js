import React, { Component } from 'react';

import './app.css';
import styled from 'styled-components';

import AppHeader from '../app-header';
import SearchPannel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Going to lern React", important: false, id: 1 },
                { label: "That is good", important: true, id: 2 },
                { label: "still learning....", important: false, id: 3 },
                { label: "i need a breake....", important: true, id: 4 }
            ]
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        console.log(body);
    }
    render() {

        return (
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPannel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data}
                    onDelete={this.deleteItem} />
                <PostAddForm
                    onAdd={this.addItem} />
            </AppBlock>
        )
    }
}


