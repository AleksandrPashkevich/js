import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {

    return( 
        <div className="bottom-panel d-flex">
            <input
            type="text"
            placeholder="О чем вы думаете сейчас?"
            className="form-control new-post-lsbel"/>
            <button 
            type="submit"
            className="btn btn-outline-secondary"
            onClick={() => onAdd('Thisis a body......')}>
                Добавить
            </button>
        </div>
    )
}

export default PostAddForm;