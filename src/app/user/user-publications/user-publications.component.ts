import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-publications',
  templateUrl: './user-publications.component.html',
  styleUrls: ['./user-publications.component.scss']
})
export class UserPublicationsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
