import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Principal Components
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { InboxComponent } from './inbox/inbox.component';
import { PostPublicationComponent } from './post-publication/post-publication.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthGuard } from '../auth/shared/auth.guard';
import { UserPublicationsComponent } from './user-publications/user-publications.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id/userProfile', component: UserProfileComponent },
      { path: ':id/userPosts', component: UserPublicationsComponent},
      { path: 'wishList', component: WishListComponent },
      { path: 'inbox', component: InboxComponent},
      { path: 'post', component:PostPublicationComponent},
      { path: 'userHome', component: UserHomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
