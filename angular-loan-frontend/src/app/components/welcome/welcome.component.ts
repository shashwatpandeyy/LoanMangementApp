import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
    this.userService.isUserLoggedIn.subscribe(value => {
      if (localStorage.length !== 0)
        this.router.navigate(['/facility']);
    });
   }

  ngOnInit(): void {
  }

}
