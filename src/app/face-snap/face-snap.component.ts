import { FaceNapService } from './../services/face-snap.services';
import { FaceNap } from './../models/FaceNap.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
 @Input() facenap!: FaceNap; //objet facenap

  message!: string;
  constructor(private faceNapService: FaceNapService, private router: Router){ }

  ngOnInit(): void {
      this.message="Liker";
      
    }
  // on vient de terminer de preparer les data

  linkImage(){

    if(this.message==="Liker"){
      this.faceNapService.likedFaceNapById(this.facenap.id, 'liked');
      this.message="Ne plus Like";

    }else{
      this.facenap.likded--;
      this.faceNapService.likedFaceNapById(this.facenap.id, 'unliked');
      this.message="Liker";
    }

  }
  onViewFaceNap() {
      this.router.navigateByUrl(`facesnaps/${this.facenap.id}`);
  }
}
