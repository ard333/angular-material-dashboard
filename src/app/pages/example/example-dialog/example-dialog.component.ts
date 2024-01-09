import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar,
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
      this.loadEditData();
    }
    
  }

  loadEditData(): void {
    this.periodicForm.setValue({
      'position': this.editData.position,
      'name': this.editData.name,
      'weight': this.editData.weight,
      'symbol': this.editData.symbol,
      'description': this.editData.description
    })
  }

  addPeriodic(): void {
    this.snackBar.open("Success!!!", "Dismiss", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center" 
    });
    this.dialogRef.close();
  }


}
