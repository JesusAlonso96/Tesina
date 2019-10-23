import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Componentes principales
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { InboxComponent } from './inbox/inbox.component';
import { PostPublicationComponent } from './post-publication/post-publication.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserPublicationsComponent } from './user-publications/user-publications.component';
import { MainNavComponent } from '../common/main-nav/main-nav.component';
import {RentalListComponent} from '../rental/rental-list/rental-list.component';
//Modulos de componentes
import { UserRoutingModule } from './user-routing.module';
//Services
import { UserService} from './shared/user.service';

//Angular Material
import { MaterialModule } from '../common/material.module';


@NgModule({
  declarations: [
      UserProfileComponent,
      UserComponent,
      WishListComponent,
      InboxComponent,
      PostPublicationComponent,
      UserHomeComponent,
      MainNavComponent,
      UserPublicationsComponent,
      RentalListComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    HttpClientModule,
    //Angular Material
    MaterialModule

  ],
  providers: [
    UserService
  ],
  bootstrap: []
})
export class UserModule { }
