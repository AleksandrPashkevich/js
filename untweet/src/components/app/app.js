import React from 'react';

import './app.css';

import AppHeader from '../app-header';
import SearchPannel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


const App = () => {

    const data = [
        {label: "Going to lern React", important: false, id:1},
        {label: "That is good", important: true, id: 2},
        {label: "still learning....", important: false, id: 3},
        {label: "i need a breake....", important: true, id: 5}
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPannel />
                <PostStatusFilter />
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;