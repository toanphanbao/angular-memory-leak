import { MemoryLeakPageComponent } from './memory-leak-page/memory-leak-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalPageComponent } from './normal-page/normal-page.component';

const routes: Routes = [
  {
    path: 'memory-leak',
    component: MemoryLeakPageComponent
  },
  {
    path: 'normal',
    component: NormalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
