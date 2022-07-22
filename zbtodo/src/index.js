class TodoApp{
    /**
     * @constructs TodoApp
     */
    constructor(){}
    /**
     * 할 일 추가
     * @param {string} text 
     */
    addTodo(text){}

    /**
     * @returns {Todo[]} 전체 할일
     */
    getTodoList() {}

    /**
     * @param {string} filterType
     * @returns {Todo[]} 필터링된 타입
     */
    getTodoListByFilter(filterType) {}

    /**
     * @param {Object} todo  
     * @param {string} [todo.text] 
     * @param {string} [todo.status] 
     */
    updateTodo({id, text, status}){}

    /**
     * 할 일을 삭제
     * @param {number} id 
     */
    removeTodo(id){}
}