interface Todo {
    id: number,
    text: string,
    category: string,
    isCompleted: boolean
}

interface ToDoProps {
    todo: Todo;
}

const ToDo: React.FC<ToDoProps> = ({ todo }) => {
    return (
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-between mb-10 border border-gray-100 rounded-md p-4 shadow-md'>
                <div className="flex md:flex-col items-center">
                    <p className=''>{todo.text}</p>
                </div>

                <div className='flex space-x-2 mt-3 justify-center items-center md:mt-0'>
                <span className='bg-orange-400 font-medium text-white rounded-sm p-1 w-1/2 text-sm text-center shadow-md'>{todo.category}</span>
                    <button className='bg-green-600 text-white rounded-sm p-1 w-14 text-sm shadow-md'>Done</button>
                    <button className='bg-red-500 text-white rounded-sm p-1 w-6 text-sm shadow-md'>x</button>
                </div>
         
        </div>
    )
}

export default ToDo
