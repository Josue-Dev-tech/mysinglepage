import { SingleFacesnapComponent } from './single-facesnap/single-facesnap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [ //tableau de toute les route de mon application
  { path: 'facesnaps/:id', component: SingleFacesnapComponent},
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component:LandingPageComponent}
];

@NgModule({
    imports:[
      RouterModule.forRoot(routes) // permet d'ajouter du routing
    ],
    exports:[
      RouterModule
    ]
})
export class AppRoutingModule {}
