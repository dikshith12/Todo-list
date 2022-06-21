export interface Category {
    name: string;
    todoList: TodoList[];
}

export interface TodoList {
    isChecked: boolean;
    todoItemName: string
}