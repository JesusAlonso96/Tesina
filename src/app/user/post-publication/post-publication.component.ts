import { Component, OnInit } from '@angular/core';
import { Rental } from '../../rental/shared/rental.model';
declare var $: any;

@Component({
  selector: 'app-post-publication',
  templateUrl: './post-publication.component.html',
  styleUrls: ['./post-publication.component.scss']
})
export class PostPublicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#publicationCard").on("click", function () {
        $("#times").slideDown("fast");
        $(".data").slideDown("fast");

      });
      $("#publicationCard").on("click", function () {
        
      });
    });
  }
  close() {
    $(document).ready(function () {
      $("#times").on("click", function () {
        $("#times").slideUp("fast");
        $(".data").slideUp("fast");
      });
    });
  }

}
