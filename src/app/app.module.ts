import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AllocateComponent } from './allocate/allocate.component';
import { DeleteAllocationComponent } from './delete-allocation/delete-allocation.component';
import { AllocatorService } from './allocate/allocator.service';
import { SolarAllocationListComponent } from './solar-allocation-list/solar-allocation-list.component';
import { SolarAllocationListService } from './solar-allocation-list/solar-allocation-list.service';
import { DeleteAllocationService } from './delete-allocation/delete-allocation.service';
import { UpdateAllocationComponent } from './update-allocation/update-allocation.component';
import { UpdateAllocationService } from './update-allocation/update-allocation.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, AllocateComponent, DeleteAllocationComponent, SolarAllocationListComponent, UpdateAllocationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AllocatorService, SolarAllocationListService, DeleteAllocationService, UpdateAllocationService]
})
export class AppModule { }
