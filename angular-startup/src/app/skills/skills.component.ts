import { Component, OnInit } from '@angular/core';
import {SkillsService} from './skills.service';
import {SelectableService} from '../selectable/selectable.service';

@Component({
  selector: 'skills',
  template: `    
    <div class="list-group">
      <div class="list-group-item" *ngFor="let skill of skills" [selectable]="skill">
        Skill: {{skill.name}} (<i>level: {{skill.level}}</i>)
      </div>
    </div>
  `,
  viewProviders: [
    SelectableService
  ],
  styles: []
})
export class SkillsComponent implements OnInit {

  skills = [];

  constructor(private service: SkillsService) {
    this.skills = service.getAll();
  }

  ngOnInit() {
  }

}
