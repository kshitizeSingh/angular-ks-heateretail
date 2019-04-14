import { Component, OnInit } from '@angular/core';
import { SolarAllocationListService } from './solar-allocation-list.service';


@Component({
  selector: 'app-solar-allocation-list',
  templateUrl: './solar-allocation-list.component.html',
  styleUrls: ['./solar-allocation-list.component.css']
})


export class SolarAllocationListComponent implements OnInit {

  solarHeaterIds: number[] = [];
  selectedSolar: any;
  selectedId;
  errorMessage;

  constructor(private solarService: SolarAllocationListService) { }


  ngOnInit() {
     this.getAllId();
  }

    displaySelected() {
    this.solarService.getSolarHeaterbyId(this.selectedId).subscribe(
      data => {
        this.selectedSolar = data
      },
      err => err.error.message
    )
  }


  // This method will be invoked on page load.
  getAllId() {
    this.solarService.getAllocations()
    .subscribe(
      data => {
        this.solarHeaterIds = data;
      }
    );
  }

}