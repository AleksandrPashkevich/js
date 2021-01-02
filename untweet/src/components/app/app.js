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
                { label: "Going to lern React", important: false, like: false, id: 1 },
                { label: "That is good", important: true, like: false, id: 2 },
                { label: "still learning....", important: false, like: false, id: 3 },
                { label: "i need a breake....", important: true, like: false, id: 4 }
            ]
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId=5;
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
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
        const newItem = {
            label: body, 
            important: false,
            id: this.maxId++,
                        
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }

        });
    }

    onToggleImportant(id) {
        console.log(`Impodrant id = ${id}`);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }


    render() {
        const {data} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        return (
            <AppBlock>
                <AppHeader 
                liked = {liked}
                allPosts = {allPosts}/>
                
                <div className="search-panel d-flex">
                    <SearchPannel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data}
                    onDelete={this.deleteItem} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem} />
            </AppBlock>
        )
    }
}


