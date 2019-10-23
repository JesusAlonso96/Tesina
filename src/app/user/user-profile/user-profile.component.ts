import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { AuthService } from '../../auth/shared/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  view: string;

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService,
    private authService: AuthService) { }

  ngOnInit() {
    this.user = new User();
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.userService.getDataUser(params.get("id")).subscribe(
          (user) => {
            this.user = user;
          },
          (err) => {
            this.toastr.error(err.error.details, err.error.title);
          }

        )
      }
    })
  }
  isMyOwnProfile(){
    return this.authService.ownProfile(this.user._id);
  }

}
