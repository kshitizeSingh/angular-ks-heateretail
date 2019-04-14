import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllocatorService } from './allocator.service';

@Component({
  selector: 'app-allocate',
  templateUrl: './allocate.component.html',
  styleUrls: ['./allocate.component.css']
})
export class AllocateComponent implements OnInit {

  errorMessage: String;
  successMessage: String;

  constructor(private fb: FormBuilder, private allocateService: AllocatorService) { }

  // Reactive allocation form and its controls
  allocateForm = this.fb.group({
    distributorName: ["", Validators.required],
    purchaseDate: ["", Validators.required],
    installationDate: ["", Validators.required],
    customerId: ["", Validators.required]
  })
  ngOnInit() {
  }

  // This method gets called on form submission
  register() {
    this.errorMessage = null;
    this.successMessage = null;
    this.allocateService.getData(this.allocateForm.value)
      .subscribe(response =>
        this.successMessage = response.message,
        err =>
          this.errorMessage = err.error.message);
  }

}