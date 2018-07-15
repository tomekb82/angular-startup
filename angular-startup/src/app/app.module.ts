import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import {SkillsModule} from './skills/skills.module';
import { SharedModule } from './shared/shared.module';
import { NavbarModule } from './navbar/navbar.module';
import {TodosModule} from './todos/todos.module';
import { FormModule } from './form/form.module';
import { FormReactiveModule } from './form-reactive/form-reactive.module';
import { FormValidationModule } from './form-validation/form-validation.module';
import { ProfileModule } from './profile/profile.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    NavbarModule,
    SharedModule,
    SkillsModule.forRoot(),
    TodosModule,
    AppRoutingModule,
    FormModule,
    FormReactiveModule,
    FormValidationModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
