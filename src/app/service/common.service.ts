import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  private messageSource = new BehaviorSubject(true);
  currentMessage = this.messageSource.asObservable();

  toogleSidebar(istoolbarActive: boolean) {
    this.messageSource.next(!istoolbarActive)
  }

  logout(){
    sessionStorage.removeItem('currentUser');
  }

  login(uname: string, pw: string){   
    let loginUrl = "http://localhost/server/cfc/public.cfc?method=getUserDetails&uname="+uname+"&pw="+pw;
       return this.http.post<any>(loginUrl,{})
            .pipe(map(user => {
                 localStorage.setItem('currentUser', JSON.stringify(user));                
                return user;
            }));
    
  }

  

}
