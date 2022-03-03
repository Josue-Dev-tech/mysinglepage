import { Route, Router } from '@angular/router';
import { FaceNapService } from './../services/face-snap.services';
import { FaceNap } from './../models/FaceNap.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceNaps!: FaceNap[];
  constructor(private faceNapService: FaceNapService, private route: Router){ // injection de dependance de service

  }

  ngOnInit(): void {
      this.faceNaps= this.faceNapService.getAllService(); //initionaiser le facespas a partice du  du service faceNapsService;
      //tout nos facenaps sont mettant regrouper dans notre facenaps
  }


}
