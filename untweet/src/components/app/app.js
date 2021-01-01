import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPannel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPannel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm/>
        </div>
    )
}

export default App;