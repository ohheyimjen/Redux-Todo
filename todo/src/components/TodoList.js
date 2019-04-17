import React from 'react';
import { addToto } from '../actions';
import { connect } from 'react-redux';

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }


render() {
    return (

        <div>
            <h2>Jen's Todo</h2>
        

        <input
            type='text'
            name='todo'
            value={this.state.friend} 
            placeholder="Get 'er done"
            onChange={this.handleChange}
        />

        <button>Add It!</button>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addToto })(TodoList);