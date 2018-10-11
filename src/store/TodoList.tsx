import { observable, action } from 'mobx'

export class Todo {
    title: string
}
export class TodoList {
    @observable todos: Todo[] = []
    @action push(todo: Todo) {
        this.todos.push(todo)
    }
    @action pop() {
        this.todos.pop()
    }
}

export default new TodoList()
