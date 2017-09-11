import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {UserService} from "./user-service/user.service";

const appRoutes: Routes = [
  {path: 'index', component: MainPageComponent},
  {path: 'dashboard', component: DashBoardComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
