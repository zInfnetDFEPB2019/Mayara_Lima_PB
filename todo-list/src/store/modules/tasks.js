import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { getRandomQuote } from 'inspirational-quotes';

const state = {
  tasks: [],
  madeFirstFetch: false,
};
const getters = {
  allTasks: state => state.tasks,
  taskById: state => id => state.tasks.filter(t => t.id === id)[0],
  alreadyMadeFirstFetch: state => state.madeFirstFetch,
};
const actions = {
  getTasks({ commit }) {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      commit(
        'setTasks',
        response.data
          .filter(t => t.userId === 1)
          .map(t => ({ ...t, description: getRandomQuote() }))
      );
      commit('sortTasks');
      commit('setMadeFirstFetch');
    });
  },
  addTask({ commit }, newTaskTitle) {
    const response = {
      userId: 1,
      id: uuid(),
      title: newTaskTitle,
      completed: false,
      description: getRandomQuote(),
    };
    commit('pushTask', response);
  },
  deleteTask({ commit }, id) {
    commit('removeTask', id);
  },
  updateTask({ commit }, updatedTask) {
    commit('updateTask', updatedTask);
    commit('sortTasks');
  },
  sortAllTasks({ commit }) {
    commit('sortTasks');
  },
};

const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  pushTask: (state, task) => state.tasks.unshift(task),
  removeTask: (state, id) =>
    (state.tasks = state.tasks.filter(task => task.id !== id)),
  updateTask: (state, updatedTask) => {
    const index = state.tasks.findIndex(task => task.id === updatedTask.id);

    if (index !== -1) {
      return state.tasks.splice(index, 1, updatedTask);
    }
  },
  sortTasks: state =>
    (state.tasks = state.tasks.sort((t1, t2) => {
      if (t1.completed === t2.completed) return 0;
      if (t1.completed && !t2.completed) return 1;
      return -1;
    })),
  setMadeFirstFetch: state => (state.madeFirstFetch = true),
};

export default {
  state,
  actions,
  getters,
  mutations,
};
