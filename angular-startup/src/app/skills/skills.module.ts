import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkillsComponent} from './skills.component';
import {SharedModule} from '../shared/shared.module';
import {SkillsService} from './skills.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SkillsComponent
  ],
  exports: [
    SkillsComponent
  ],
  providers: [
    SkillsService
  ]
})
export class SkillsModule { }
