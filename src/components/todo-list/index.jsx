import React, { useState } from 'react';
import { Button, Container, Form, Grid, Icon, List, Menu, Modal } from 'semantic-ui-react';

const TodoList  = () => {
    const todoData = ['Lorum Ipsum 1', 'Lorum Ipsum 2', 'Lorum Ipsum 3'];
    const [todos,setTodos] = useState(todoData);
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);
    const [formData, setFormData] = useState({});

    const handleAddTodo = () => {
        setShowAddTodoModal(false);
        const todosCopy = [...todos];
        todosCopy.unshift([formData.todo]);
        setTodos(todosCopy);
        setFormData({})
    }

    const handleChange = (e, { name, value }) => {
        const formDataCopy = {...formData};
        formDataCopy[name] = value;
        setFormData(formDataCopy);
    }

    const handleDeleteTodo = (index) => {
        const todosCopy = [...todos];
        todosCopy.splice(index,1);
        setTodos(todosCopy);
    }


    return <Container>
        <Menu pointing secondary>
            <Menu.Item
                name='TODO LIST'
                active={true}
            />
        </Menu>
        <Grid>
            <Grid.Column>
                <Button size="mini" icon onClick={() => {setShowAddTodoModal(true)}}><Icon name="plus" />&nbsp;ADD TODO</Button>
                <List divided verticalAlign='middle'>
                    {todos.map((todo,i) => {
                        return <List.Item key={i}>
                            <List.Content floated='right'>
                                <Button icon onClick={handleDeleteTodo.bind(this,i)}>
                                    <Icon name="trash" />
                                </Button>
                            </List.Content>
                            <Icon name="flag" />
                            <List.Content>{todo}</List.Content>
                        </List.Item>
                    })}
                   
                </List>
                {todos.length ? null : <p>No Todos. Please add one!</p>}
            </Grid.Column>
            <Modal open={showAddTodoModal} size="small">
                <Modal.Header>ADD TODO</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.TextArea onChange={handleChange} value={formData.todo} name="todo" label="Enter Todo text"/>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => { setShowAddTodoModal(false) }}>Cancel</Button>
                    <Button disabled={!formData.todo} onClick={handleAddTodo} color="black">Add</Button>
                </Modal.Actions>
            </Modal>
        </Grid>
    </Container>
}

export default TodoList;