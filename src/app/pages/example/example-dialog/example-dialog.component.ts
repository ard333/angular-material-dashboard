import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.css']
})
export class ExampleDialogComponent implements OnInit {

  periodicForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData : any ){}

  ngOnInit(): void {
    this.periodicForm = this.formBuilder.group({
      position: ['', Validators.required],
      name : ['', Validators.required],
      weight: ['', Validators.required],
      symbol: ['', Validators.required],
      description: ['', Validators.required]
    })

    if (this.editData) {
      this.periodicForm.controls['position'].setValue(this.editData.position);
      this.periodicForm.controls['name'].setValue(this.editData.name);
      this.periodicForm.controls['weight'].setValue(this.editData.weight);
      this.periodicForm.controls['symbol'].setValue(this.editData.symbol);
      this.periodicForm.controls['description'].setValue(this.editData.description);
    }
    
  }

  addPeriodic(): void {
    if (this.periodicForm.valid) {
      this.periodicForm.reset();
      this.dialogRef.close();
    }
  }


}
