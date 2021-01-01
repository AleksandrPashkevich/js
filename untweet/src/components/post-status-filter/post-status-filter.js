import React from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

const PostStatusFilter = () => {

    return(

        <div className="btn-group">
            <Button outline color="info">All</Button>

            <Button outline color="secondary">Liked</Button>
        </div>
    )
}

export default PostStatusFilter;