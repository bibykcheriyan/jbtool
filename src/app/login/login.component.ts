import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CommonService } from '../service/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private CommonService: CommonService
  ) { }

  ngOnInit() {

    // reset login status
    this.CommonService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // if(this.authenticationService.currentUserValue) {
  //   this.router.navigate(['/']);
  // }
  get f() { return this.loginForm.controls; }

  

  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.CommonService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {         
          if(data.RECORD === 1){
            let userObj = data.DATASET;
            sessionStorage.setItem('currentUser',userObj);
          }

          this.router.navigate(['dashboad']);
        },
        error => {
         alert(error);
          this.loading = false;
        });
  }
}
