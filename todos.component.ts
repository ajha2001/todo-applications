
import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todoList = [
    'Go to gym',
    'Sleep',
    'Go for jogging',
    'Assignments',
    'Eat',
    'Practice sight reading',
  ];
  inps: any;

  selectedTodos: any = [];

  warn(snackbar: any) {
    snackbar.innerHTML = 'Enter a todo first';
    snackbar.classList.add('warn');
  }
  active(snackbar: any) {
    snackbar.innerHTML = 'Added to todos!';
    snackbar.classList.add('active');
  }

  add(element: any) {
    !this.selectedTodos.includes(element) && element
      ? this.selectedTodos.push(element)
      : null;

    const snackbar = <HTMLInputElement>document.querySelector('.snackbar');

    !element ? this.warn(snackbar) : null;

    !this.todoList.includes(element) && element ? this.active(snackbar) : null;

    setTimeout(() => {
      snackbar.classList.contains('active')
        ? snackbar.classList.remove('active')
        : null;
    }, 1500);
    setTimeout(() => {
      snackbar.classList.contains('warn')
        ? snackbar.classList.remove('warn')
        : null;
    }, 1500);
  }

  getValue() {
    const userInput = <HTMLInputElement>document.getElementById('user-input');

    this.add(userInput.value);
    userInput.value = '';
  }

  check(index: any, element: any): void {
    this.inps = document.querySelectorAll('input');
    this.inps[index].checked = true;
    this.add(element);
  }

  splice(elem: any, i: any) {
    this.inps = document.querySelectorAll('input');
    const index = this.todoList.indexOf(elem);
    if (this.todoList.includes(elem)) {
      this.inps[index].checked = false;
    }
    this.selectedTodos.splice(i, 1);
  }
}