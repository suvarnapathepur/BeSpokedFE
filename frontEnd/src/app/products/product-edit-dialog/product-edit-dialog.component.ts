import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product, ProductService } from '../../services/productservice';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  productTest!: Product;

  constructor(private fb: FormBuilder, private productService: ProductService, private route: ActivatedRoute,  private location: Location) {
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

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.productService.getProductById(id).subscribe(product => {
      this.productTest = product
      if (this.productTest) {
        this.productForm.patchValue(this.productTest);
      }

    })
  }

  ngOnChanges(): void {
    if (this.productTest) {
      this.productForm.patchValue(this.productTest);
    }
  }

  onSave(): void {
    if (this.productForm.valid && this.productTest) {
      this.productService.updateProduct(this.productTest.id, this.productForm.value).subscribe(() => {
        this.location.back();
      });
    }
  }

  onCancel(): void {
    this.location.back()
  }
}
