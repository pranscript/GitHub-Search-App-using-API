import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'github',
  templateUrl: './githubhtml.component.html',
  styleUrls:['./githubcss.component.css'],
  providers:[]
})
export class GithubComponent {
  title = 'app works!';
  savedUserDetails=[];
  savedUsername=[];
  showprofile:boolean=false;
  showsavebutton:boolean=true;
  namesort:boolean=true;
  follsort:boolean=true;

  constructor(private githubService:GithubService){
  }

  addUsername(username){
      //this.savedUser.push(username);
      this.githubService.getDetails(username).subscribe(users => {
          console.log(users);
          this.showsavebutton=true;
          this.showprofile=true;
          this.savedUserDetails.splice(0,1);
          this.savedUserDetails.push(users);
      },
        (err)=>alert("No User Found")
      )}

  showUsername(users){
          this.showsavebutton=false;
          this.showprofile=true;
          this.savedUserDetails.splice(0,1);
          this.savedUserDetails.push(users);

  }

    saveUsername(username){
      if(this.showsavebutton==true)
      {
      this.savedUsername.push(username);
      console.log("saved"+username.avatar_url);
      this.showsavebutton=false;
      }
      else{
        alert("Already Saved");
      }
      

  }

    deleteUsername(i){
      this.savedUsername.splice(i,1);
  }

    delall(){
      this.savedUsername.splice(0,this.savedUsername.length);
  }


  
    sort(value){
      if(value=="nameasc"){
        console.log("nameasc");
        console.log(this.savedUsername);
        this.namesort=false;
        this.savedUsername.sort(function(a, b){
            if (a.login < b.login) //sort string ascending
              return -1;
            if (a.login > b.login)
              return 1;
            return 0; //default return value (no sorting)
            });
            console.log(this.savedUsername);
      }
      else if(value=="namedsc"){
        console.log("namedsc");
        console.log(this.savedUsername);
        this.namesort=true;
        this.savedUsername.sort(function(a, b){
            if (a.login > b.login) //sort string ascending
              return -1;
            if (a.login < b.login)
              return 1;
            return 0; //default return value (no sorting)
            });
            console.log(this.savedUsername);
      }
      else if(value=="follasc"){
        console.log("follasc");
        console.log(this.savedUsername);
        this.follsort=false;
        this.savedUsername.sort(function(a, b){
            if (a.followers < b.followers) //sort string ascending
              return -1;
            if (a.followers > b.followers)
              return 1;
            return 0; //default return value (no sorting)
            });
            console.log(this.savedUsername);
      }
      else if(value=="folldsc"){
        console.log("folldsc");
        console.log(this.savedUsername);
        this.follsort=true;
        this.savedUsername.sort(function(a, b){
            if (a.followers > b.followers) //sort string ascending
              return -1;
            if (a.followers < b.followers)
              return 1;
            return 0; //default return value (no sorting)
            });
            console.log(this.savedUsername);
      }
  }
}
