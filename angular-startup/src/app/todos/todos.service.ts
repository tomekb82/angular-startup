import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  todos = [
    {
      name: 'Java',
    },
    {
      name: 'Angular',
    },
    {
      name: 'Javascript',
    },
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
  ];

  getAll() {
    return this.todos;
  }

  constructor() { }

}
