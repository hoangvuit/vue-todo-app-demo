<template>
  <div id="app">
    <h1>My TODOs</h1>
    <div class="content-wrapper">
      <TodoInput v-on:new-item="addTodoItem" />
      <ul>
        <li 
          is="TodoItem"
          v-for="todo in todos"
          v-bind:key="todo.id"
          v-bind:text="todo.text"
          v-bind:done="todo.done"
          v-bind:id="todo.id"
          v-on:update-item="updateTodos"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
import TodoInput from './components/TodoInput.vue';

const STORAGE_KEY = 'vue-todo-app';
var todoStorage = {
  fetch: function(){
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return todos;
  }, 
  save: function(todos){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}

export default {
  name: 'app',
  components: {
    TodoItem,
    TodoInput
  }, 
  data: function(){
    return ({
      todos: todoStorage.fetch(),
    });
  },
  methods: {
    addTodoItem: function(text){
      var todo = {
        text: text,
        done: false, 
        id: Date.now().toString()
      }
      this.todos.unshift(todo);
    },
    updateTodos: function(updatedTodo){
      this.todos.forEach(element => {
        if (element.id === updatedTodo.id){
          element.done = updatedTodo.mutableDone;
        }
      });
    }
  },
  watch: {
    todos: {
      handler: function(todos){
        todoStorage.save(todos);
      }, 
      deep: true
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 400px;
  margin: 0 auto;
  margin-top: 150px;
  h1{
    text-align: center;
  }
  ul{
    padding: 0;
    list-style-type: none;
    li{
      margin-bottom: 10px;
    }
  }
}
.content-wrapper{
  padding: 20px;
  border: 1px solid #efefef;
  border-radius: 3px;
  box-shadow: 3px 3px 10px #ccc;
}
</style>
