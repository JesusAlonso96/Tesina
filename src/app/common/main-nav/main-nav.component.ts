import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/shared/auth.service';
import { UserService } from '../../user/shared/user.service';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/user/shared/user.model';
declare var $: any;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  user: User;

  constructor(private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
      this.userService.getDataUser(this.authService.getId()).subscribe(
        (user) => {
          this.user = user;
        },
        (err) => {
          this.toastr.error(err.error.details, err.error.title);
          this.authService.logOut();
          this.router.navigate(['./login']);
        }
      )
    
  }
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  logout() {
    this.authService.logOut();
    this.toastr.success('Sesion cerrada con exito');
    this.router.navigate(['/home']);
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


}
