import { FaceNap } from './../models/FaceNap.model';
import { Injectable } from "@angular/core"
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root' //se servicee doit etre enregistrer a la raciene de application
})
export class FaceNapService{
  faceNaps: FaceNap[]=[
    {
      id: 1,
      title:'ma premmiere puublication',
      description: 'Ma decroiption',
      postDate: new Date(),
      imageurl:'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/12/huawei-matebook-13-frandroid.png?resize=580,580',
      likded: 0,
     localisation: 'Paris'
    },
    {
      id: 2,
      title:'ma premmiere puublication',
      description: 'Ma decroiption',
      postDate: new Date(),
      imageurl:'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/12/huawei-matebook-13-frandroid.png?resize=580,580',
      likded: 0,
     localisation: 'New york'
    },
    {
      id: 3,
      title:'ma premmiere puublication',
      description: 'Ma decroiption 3',
      postDate: new Date(),
      imageurl:'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/12/huawei-matebook-13-frandroid.png?resize=580,580',
      likded: 120,
    },
    {
      id: 4,
      title:'ma premmiere puublication',
      description: 'Ma decroiption',
      postDate: new Date(),
      imageurl:'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/12/huawei-matebook-13-frandroid.png?resize=580,580',
      likded: 0,
     localisation: 'Paris'
    },
    {
      id: 5,
      title:'ma premmiere puublication',
      description: 'Ma decroiption',
      postDate: new Date(),
      imageurl:'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/12/huawei-matebook-13-frandroid.png?resize=580,580',
      likded: 200,
     localisation: 'New york'
    },
    {
      id: 6,
      title:'ma premmiere puublication',
      description: 'Ma decroiption 3',
      postDate: new Date(),
      imageurl:'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/12/huawei-matebook-13-frandroid.png?resize=580,580',
      likded: 230,
    }
  ];

  getAllService() : FaceNap[] {
      return  this.faceNaps;
  }

  getFaceNapById(id :number) : FaceNap{
    const facenap= this.faceNaps.find(faceNap=>faceNap.id=== id); //faceNap est instance de FaceNapModel
    if(facenap){
        return facenap; //retourne le facenap du tableau
    }else{
      throw new Error('Facenap not found');

    }
  }

  likedFaceNapById(faceNapid : number, snapTye: 'liked' | 'unliked') :void{
      const facenap= this.getFaceNapById(faceNapid);
      snapTye==='liked' ? facenap.likded++ : facenap.likded--;
  }
}
