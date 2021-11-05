import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router,public authService: AuthService) { this.createuserForm(); }

  ngOnInit(): void {
    localStorage.setItem('admin', JSON.stringify([{"username":"admin","password":"123"}]));
    localStorage.setItem('superadmin', JSON.stringify([{"username":"superadmin","password":"123"}]));
    localStorage.setItem('customers', JSON.stringify([{"id":1,"name":"customer","lastname":"Mehmet Kursad Yuca","password":"123"}]));
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }
  createuserForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    
    this.authService.login(this.userForm.value);
  }
  get f() { return this.userForm.controls; }

}
