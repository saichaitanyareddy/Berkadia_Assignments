import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryImagesComponent } from './gallery-images/gallery-images.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
