import React from 'react';
import { mount } from 'enzyme';
import TodoList from '../../../components/todo-list';

describe('Test todo-list component', () => {

    it('test default todos', () => {
        const wrapper = mount(<TodoList />);
        expect(wrapper.find('div.list .item')).toHaveLength(3);
        wrapper.unmount();
    })

    it('test add todo button', () => {
        const wrapper = mount(<TodoList />);
        const addTodoBtn = wrapper.find('button').first();
        expect(addTodoBtn.text()).toContain('ADD TODO');
        addTodoBtn.simulate('click');
        expect(wrapper.find('.modal.visible .header').text()).toContain('ADD TODO');
        wrapper.unmount();
    });

    it('test add todo modal', () => {
        const wrapper = mount( < TodoList /> );
        const addTodoBtn = wrapper.find('button').first();
        addTodoBtn.simulate('click');
        const modal = wrapper.find('.modal.visible');
        const todoTextEle = modal.find('textarea[name="todo"]');
        expect(todoTextEle).toHaveLength(1);
        expect(modal.find('button.disabled').text()).toContain('Add')
        todoTextEle.simulate('change',{target:{name:'todo',value:'test123'}});
        expect(todoTextEle.text()).toEqual('test123');
        const addBtn = modal.find('button.black');
        addBtn.simulate('click');
        expect(wrapper.find('.modal.visible')).toHaveLength(0);
        wrapper.unmount();
    });

    it('test add todo list after add', () => {
        const wrapper = mount( <TodoList /> );
        wrapper.find('button').first().simulate('click');
        wrapper.find('.modal textarea[name="todo"]').simulate('change',{target:{name:'todo',value:'test123'}});
        wrapper.find('.modal button.black').simulate('click');
        expect(wrapper.find('div.list .item').first().text()).toEqual('test123');
        wrapper.unmount();
    });

    it('test delete todo', () => {
        const wrapper = mount( <TodoList /> );
        const firstTodoEleText = wrapper.find('div.list .item').first().text();
        wrapper.find('div.list .item button').first().simulate('click');
        expect(wrapper.find('div.list .item').first().text()).not.toEqual(firstTodoEleText)
        wrapper.unmount();
    })

    // it('test delete all todos', () => {
    //     const wrapper = mount( < TodoList /> );
    //     const todosLength = wrapper.find('div.list .item').length;

       
    //     wrapper.find('div.list .item').forEach((node) => {
    //         node.find('button').simulate('click');
    //         expect(wrapper.find('div.list .item')).toHaveLength(todosLength-1);
    //     })
    // })
})