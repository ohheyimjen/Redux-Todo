import React from 'react';
import { connect } from 'react-redux';
import { updateList } from '../actions';

class Todos extends React.Component {
    state = {
        newTodoText: this.props.todo,
        editing: false
    };
}

const mapStateToProps = state => {
    console.log(state);
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps, {updateList})(Todos);