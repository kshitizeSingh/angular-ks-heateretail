import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DeleteAllocationService } from './delete-allocation.service';
@Component({
  selector: 'app-delete-allocation',
  templateUrl: './delete-allocation.component.html',
  styleUrls: ['./delete-allocation.component.css']
})
export class DeleteAllocationComponent implements OnInit {

  allocationDetails: any[];
  successMessage;
  errorMessage;


  constructor(private fb: FormBuilder, private deleteAllocationService: DeleteAllocationService) {
  }

  viewbookingForm = this.fb.group({
    bookingId: ['', [Validators.required, Validators.min(4)]],
  })

  ngOnInit() {
    this.view();
  }

  view() {
    this.deleteAllocationService.fetchData()
      .subscribe(
        allocationDetails => {
          this.allocationDetails = allocationDetails;
        });
  }

  delete(id) {
    this.deleteAllocationService.deleteAllocation(id)
      .subscribe(
        res => {
          this.successMessage = res.message;
          this.view();
        },
        error => {
          console.log(error.error.message)
          this.errorMessage = error.error.message
        })
  }

}