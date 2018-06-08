import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/pages/dashboard']);
  }

}
