import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TaskViewComponent } from './task/view/view.component';
import { TaskEditComponent } from './task/edit/edit.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { TimesheetEditComponent } from './timesheet/timesheet-edit/timesheet-edit.component';
import { TimesheetViewComponent } from './timesheet/timesheet-view/timesheet-view.component';
import { AuthGaurdService } from './service/auth-gaurd.service';


const routes: Routes = [
  {
    path: 'dashboad',
    component: HomeComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'view/:id', component: UserViewComponent },
      { path: 'edit/:id', component: UsereditComponent }
    ]
  },
  {
    path: 'task',
    component: TaskComponent,
    children: [
      { path: 'tasklist', component: TaskComponent },
      { path: 'view/:id', component: TaskViewComponent },
      { path: 'edit/:id', component: TaskEditComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'mail',
    component: MailboxComponent
  },
  {
    path: 'timesheet',
    component: TimesheetComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: TimesheetComponent },
      { path: 'view/:id', component: TimesheetViewComponent },
      { path: 'edit/:id', component: TimesheetEditComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
