import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    username="bkeepers";
    constructor(private http:Http){
        console.log("hahah");
    }

    getDetails(username){
        this.username=username.login;
        return this.http.get('https://api.github.com/users/'+this.username)
        .map(res => res.json());
    } 
}