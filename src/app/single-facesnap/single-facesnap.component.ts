import { ActivatedRoute } from '@angular/router';
import { FaceNapService } from './../services/face-snap.services';
import { FaceNap } from './../models/FaceNap.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-facesnap',
  templateUrl: './single-facesnap.component.html',
  styleUrls: ['./single-facesnap.component.scss']
})
export class SingleFacesnapComponent implements OnInit {

  facenap!: FaceNap; //objet facenap

  message!: string;

  constructor(private faceNapService: FaceNapService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.message="Liker";
      const faceNapid= +this.route.snapshot.params['id'];
      this.facenap= this.faceNapService.getFaceNapById(faceNapid);
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
 

}
