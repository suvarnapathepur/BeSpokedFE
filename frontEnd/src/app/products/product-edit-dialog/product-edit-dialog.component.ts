import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product, ProductService } from '../../services/productservice';

@Component({
  selector: 'app-product-edit-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit-dialog.component.html',
  styleUrl: './product-edit-dialog.component.css'
})
export class ProductEditDialogComponent {
  @Input()
  action: 'Add' | 'Edit' = "Add";
  @Input() product: Product | null = null;
  @Output() save = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      style: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      salePrice: ['', Validators.required],
      qtyOnHand: ['', Validators.required],
      commissionPercentage: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.product) {
      this.productForm.patchValue(this.product);
    }
  }

  onSave(): void {
    if (this.productForm.valid && this.product) {
      this.productService.updateProduct(this.product.id, this.productForm.value).subscribe(() => {
        this.close.emit();
      });
    }
  }

  onCancel(): void {
    this.close.emit();
  }
}
