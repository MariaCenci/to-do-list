

const ToDoForm = () => {
    return (
        <>  
         <h1 className="text-2xl mt-4 mb-6">Add to do</h1>
        <div className="flex flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-4 " >
          
          <input type="text" placeholder="Add here your to do" className="border rounded-md p-0.5 placeholder:pl-0.5 placeholder:text-sm"/>
                <form>
                    <select className="border rounded-md p-1">
                        <option value="">Select a category</option>
                        <option value="study">Study</option>
                        <option value="private">Private</option>
                        <option value="work">Work</option>
                    </select>
                </form>
                <button className="border rounded-md p-0.5 w-16 bg-blue-400 text-white">Add</button>
            </div>
            
        </>
    )
}

export default ToDoForm
