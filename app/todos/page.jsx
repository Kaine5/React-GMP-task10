import CreateTodo from './CreateTodo';
import DeleteTodo from './DeleteTodo';
import styles from './page.module.css';

async function getTodos() {
    const res = await fetch('https://6370ee800399d1995d86faeb.mockapi.io/api/todos');
    const data = await res.json();
    return data;
}

export default async function TodosPage() {
    const todos = await getTodos();

    return (
        <div>
            <h1>Todos</h1>
            <div className={styles["todo__list"]}>
                {todos?.map(
                    todo => (
                        <div className={styles["todo__container"]} key={todo.id}>
                            <div className={styles["todo__title"]}>{todo.title}</div>
                            <div>{todo.completed.toString()}</div>
                            <DeleteTodo id={todo.id}/>
                        </div>
                    )
                )}
            </div>
            <CreateTodo />
        </div>
    )
} 