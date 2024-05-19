import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalePersonService, Salesperson } from '../../services/saleperson.service';

@Component({
  selector: 'app-salesperson-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './salesperson-update.component.html',
  styleUrl: './salesperson-update.component.css'
})
export class SalespersonUpdateComponent {
  @Input() salesPerson: Salesperson | null = null;
  @Output() save = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  salesPersonForm: FormGroup;
  salesperson!: Salesperson;

  constructor(private fb: FormBuilder, private salesPersonService: SalePersonService, private route: ActivatedRoute,  private location: Location) {
    this.salesPersonForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      startDate: ['', Validators.required],
      terminationDate: ['', Validators.required],
      manager: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getSalesPerson()
  }

  getSalesPerson() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.salesPersonService.getSalePersonById(id).subscribe(salesperson => {
      this.salesperson = salesperson
      if (this.salesperson) {
        this.salesPersonForm.patchValue(this.salesperson);
      }

    })
  }

  ngOnChanges(): void {
    if (this.salesperson) {
      this.salesPersonForm.patchValue(this.salesperson);
    }
  }

  onSave(): void {
    if (this.salesPersonForm.valid && this.salesperson) {
      this.salesPersonService.updateSalePerson(this.salesperson.id, this.salesPersonForm.value).subscribe(() => {
        this.location.back();
      });
    }
  }

  onCancel(): void {
    this.location.back()
  }
}
