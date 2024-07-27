import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringCalcComponent } from 'src/app/string-calc/string-calc.component';

const routes: Routes = [
  {
    path:'',component:StringCalcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
