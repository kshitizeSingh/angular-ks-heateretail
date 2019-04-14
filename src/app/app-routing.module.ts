import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllocateComponent} from './allocate/allocate.component';
import { SolarAllocationListComponent } from './solar-allocation-list/solar-allocation-list.component';
import { DeleteAllocationComponent } from './delete-allocation/delete-allocation.component';
 import { UpdateAllocationComponent } from './update-allocation/update-allocation.component';

/*
  Module(AppRoutingModule): Module class to manage app routing
*/
const routes: Routes = [
  {path: '',component:AllocateComponent},
  {path: 'allocate',component:AllocateComponent},
  {path: 'view', component: SolarAllocationListComponent},
  {path: 'deleteAllocation', component: DeleteAllocationComponent},
  {path: 'updateAllocation', component: UpdateAllocationComponent},
  {path: '**', redirectTo:'deleteAllocation'} // Requires modification
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }