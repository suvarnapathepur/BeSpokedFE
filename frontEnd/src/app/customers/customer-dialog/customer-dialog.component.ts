import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer, CustomerService } from '../../services/customerservice';

@Component({
  selector: 'app-customer-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer-dialog.component.html',
  styleUrl: './customer-dialog.component.css'
})
export class CustomerDialogComponent {
  @Input()
  action: 'Add' | 'Edit' = "Add";
  @Input() customer!: Customer ;
  @Output() save = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  customerForm: FormGroup;
  customerTest!: Customer;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private route: ActivatedRoute, private api: CustomerService) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      style: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      salePrice: ['', Validators.required],
      qtyOnHand: ['', Validators.required],
      commissionPercentage: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.api.getCustomerById(id).subscribe(customer => {
      this.customerTest = customer
      if (this.customerTest) {
        this.customerForm.patchValue(this.customerTest);
      }

    })
  }

  ngOnChanges(): void {
    if (this.customerTest) {
      this.customerForm.patchValue(this.customerTest);
    }
  }

  onSave(): void {
    if (this.customerForm.valid && this.customerTest) {
      this.customerService.updateCustomer(this.customerTest.id, this.customerForm.value).subscribe(() => {
        this.close.emit();
      });
    }
  }

  // ngOnChanges(): void {
  //   if (this.product) {
  //     this.productForm.patchValue(this.product);
  //   }
  // }

  // onSave(): void {
  //   if (this.productForm.valid && this.product) {
  //     this.productService.updateProduct(this.product.id, this.productForm.value).subscribe(() => {
  //       this.close.emit();
  //     });
  //   }
  // }

  onCancel(): void {
    this.close.emit();
  }
}
