import {ModuleWithProviders, NgModule} from '@angular/core';
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

  ]
})
export class SkillsModule {

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SkillsModule
    };
  }

  static forRoot(options = {}): ModuleWithProviders {
    return {
      ngModule: SkillsModule,
      providers: [
        {
          provide: 'options',
          useValue: options
        },
        SkillsService
      ]
    };
  }

}
