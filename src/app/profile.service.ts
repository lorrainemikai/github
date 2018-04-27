import { Injectable } from '@angular/core';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
@Injectable()
export class ProfileService {
  private username:string;
  private clientid="e3a135e3053a6633a0bf";
  private clientsecret ="3a488e03da7371e6befc0fd7148a0def2fa2f8cc";

  constructor(private http:Http) { 
    console.log("service is now ready!");
    this.username = "lorrainemikai";
  }


  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username +"?client_id="+this.clientid + "$client_secret=" +this.clientsecret+"?access_token="+environment.accessToken)
    .map(res=>res.json());
  }
}
