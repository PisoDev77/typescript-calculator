import './style.css'

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}
class TodoApp{
  todoList: Todo[];

  constructor(){
    this.todoList = [];
    this.initEvent();
  }
  initEvent(){
    const inputEl = document.querySelector("#todo-input");
    inputEl?.addEventListener('keydown', this.addTodo);
  }
  

  addTodo(event){
    if(event.key !== "Enter"){
      return;
    }
    
    const target = event.target;

    if(event.key === "Enter"){

      if(!target.value){
        return;
      }
      this.todoList.push({
        id: this.todoList.length + 1,
        isDone: false,
        content: target.value
      });
    }

    target.value = "";

    this.render(this.todoList);
  }

  /**
   * @returns {Todo[]} 전체 할일
   */
  getTodoList() {
    return this.todoList;
    
  }

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

  generateTodoList(todoList){
    const contaienrEl = document.createElement('div');
    const todoTemplate = `
    <div class="item__div"> 
      <input type="checkbox" ${todoList.isDone && 'checked'} />
      <div class="content" ${todoList.isDone && 'checked'} contentEditable>${todoList.content}</div>
      <button>X</button>
    </div>
    `;

    contaienrEl.classList.add("item");
    contaienrEl.innerHTML = todoTemplate;

    return contaienrEl;
  }
  render(todoList){
    const todoListEl = document.querySelector(".todo-items");
    
    const fragment = document.createDocumentFragment();
    // 실질적으로 그려지지않은 DOM 상태

    const todoListComponent = todoList.map((todo) => this.generateTodoList(todo));
 
    fragment.append(...todoListComponent);
    todoListEl?.appendChild(fragment);
  }
}

const todoApp = new TodoApp();
todoApp.render();