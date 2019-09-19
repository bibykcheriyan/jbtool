import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';


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

  login(username: string, password: string){    
        localStorage.setItem('currentUser', JSON.stringify({"name":"biby"}));
        //return true;
        return this
            .http
            .get("api/characters");
       // return this.http.get("/api/getuser").map(res => res.json());
    
  }

}
