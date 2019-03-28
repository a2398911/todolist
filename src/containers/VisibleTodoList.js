import {connect} from 'react-redux';
import {toggleTodo,deleteTodo} from '../actions/index';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(item => item.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(item => !item.completed);
        default:
            throw new Error('error filter: ' + filter)
    }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = {
    onTodoClick: toggleTodo, //觸發toggleTodo
    dleTodoClick:deleteTodo //觸發deleteTodo
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList


