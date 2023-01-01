export interface IProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
}

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

export interface ITodoProps {
    todoes: Todo[];
    setTodoes: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export interface TodoProps extends ITodoProps {
    todo: Todo;
}