'use client'

import { useRouter } from 'next/navigation';



const DeleteTodo = ({id, ...props}) => {

    const router = useRouter();

    async function deleteTodos(id) {
        await fetch(`https://6370ee800399d1995d86faeb.mockapi.io/api/todos/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
        router.refresh()
    }

    return (
        <button {...props} onClick={() => deleteTodos(id)}>
            Delete
        </button>
    )
}

export default DeleteTodo;