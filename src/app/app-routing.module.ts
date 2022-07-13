import { MemoryLeakPageComponent } from './memory-leak-page/memory-leak-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalPageComponent } from './normal-page/normal-page.component';
import { AnotherMemoryLeakPageComponent } from './another-memory-leak-page/another-memory-leak-page.component';

const routes: Routes = [
  {
    path: 'memory-leak-page',
    component: MemoryLeakPageComponent
  },
  {
    path: 'another-memory-leak-page',
    component: AnotherMemoryLeakPageComponent
  },
  {
    path: 'normal-page',
    component: NormalPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
