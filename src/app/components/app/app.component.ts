import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private authSub: Subscription;
  loginStatus: boolean = false;
  constructor(public authService: AuthService) {

  }
  ngOnInit(): void {
    this.loginStatus = this.authService.isAuthenticated();
    this.authSub = this.authService.onAuthStatusChanged.subscribe(v => this.loginStatus = v);
  }
  openClose() {
    document.querySelector(".sidebar")?.classList.toggle("open");
    this.menuBtnChange();
  }

  menuBtnChange() {
    if (document.querySelector(".sidebar")?.classList.contains("open")) {
      document.querySelector("#btn")?.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    } else {
      document.querySelector("#btn")?.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
    }
  }
  onLogoutClicked() {
    this.authService.logout();
  }
}
