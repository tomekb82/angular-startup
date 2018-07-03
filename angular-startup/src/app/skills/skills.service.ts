import { Injectable } from '@angular/core';

@Injectable()
export class SkillsService {

  skills = [
    {
      name: 'Java',
      level: 1
    },
    {
      name: 'Angular',
      level: 3
    },
    {
      name: 'Javascript',
      level: 2
    },
    {
      name: 'HTML',
      level: 2
    },
    {
      name: 'CSS',
      level: 2
    },
  ];

  getAll() {
    return this.skills;
  }

  constructor() { }

}
