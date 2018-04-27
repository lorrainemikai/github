import { Component, OnInit } from '@angular/core';
import{ProfileService}from '../profile.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private profile:any[];


  constructor(private ProfileService: ProfileService) {
    this.ProfileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
        this.profile = profile;
    });
   }

  ngOnInit() {
  }

}