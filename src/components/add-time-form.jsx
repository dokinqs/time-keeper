import React from 'react'

const AddTimeForm = () => {
    function onSubmit(e) {
        e.preventDefault();
        console.log('form "submitted"');
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Add Time Entry</h4>
            <div>
                <label>Title</label>{' '}
                <input type="text" placeholder="title text" maxLength="15" />
            </div>
            <div>
                <label>Time</label>{' '}
                <input type="number" placeholder="time in seconds" />
            </div>
            <button onSubmit={onSubmit}>Record Time</button>
        </form>
    )
}

export default AddTimeForm;