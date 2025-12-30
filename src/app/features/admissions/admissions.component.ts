import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss'
})
export class AdmissionsComponent {
  inquiryForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.inquiryForm = this.fb.group({
      parentName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      childName: ['', Validators.required],
      grade: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.inquiryForm.valid) {
      // Handle form submission
      console.log('Form submitted:', this.inquiryForm.value);
      this.snackBar.open('Inquiry submitted successfully!', 'Close', { duration: 3000 });
      this.inquiryForm.reset();
    } else {
      this.snackBar.open('Please fill in all required fields.', 'Close', { duration: 3000 });
    }
  }
}