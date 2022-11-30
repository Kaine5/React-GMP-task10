async function getTodo(todoId){
    const res = await fetch(`https://6370ee800399d1995d86faeb.mockapi.io/api/todos/${todoId}`, { next: {revalidate: 10}});
    const data = await res.json();
    return data;
}

export default async function TodoPage({params}) {
    const todo = await getTodo(params.id)

    return (
        <div>
            <div>{todo.title}</div>
            <div>{todo.completed.toString()}</div>
        </div>
    )
}