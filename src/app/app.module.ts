import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TaskViewComponent } from './task/view/view.component';
import { TaskEditComponent } from './task/edit/edit.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { TimesheetViewComponent } from './timesheet/timesheet-view/timesheet-view.component';
import { TimesheetEditComponent } from './timesheet/timesheet-edit/timesheet-edit.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboadComponent,
    MailboxComponent,
    TimesheetComponent,
    TaskViewComponent,
    TaskEditComponent,
    UsereditComponent,
    UserViewComponent,
    TimesheetViewComponent,
    TimesheetEditComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
