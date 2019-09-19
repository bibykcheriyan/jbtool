import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CommonService: CommonService
  ) { }

  ngOnInit() {

    // reset login status
    this.CommonService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login() {
    this.loading = true;
    this.CommonService.login("biby", "password")
      .subscribe(
        data => {
          // login successful so redirect to return url
          this.router.navigateByUrl(this.returnUrl);
        },
        error => {         
          this.loading = false;
        });
  }
}
