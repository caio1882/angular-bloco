import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  // public taskList: Array<{task: string, checked: boolean}> = [];


  // public taskList: Array<TaskList> = [
  //   { task: 'Caio Oliveira', checked: true },
  //   { task: 'rosangela', checked: false },
  //   { task: 'afonso', checked: true },
  // ];



  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() {}

  // ngOnInit(): void {}

  ngDoCheck(): void {
    this.setLocalStorage();
    // this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked))
    // localStorage.setItem("list", JSON.stringify(this.taskList))
  }

  public setEmmitTaskList(event: string) {
    console.log(event);
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja deletar tudo?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('task esta vazia, deseja deletar?');
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
    localStorage.setItem('list', JSON.stringify(this.taskList));
  }
}
