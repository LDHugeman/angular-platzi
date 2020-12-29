import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit /*DoCheck, OnDestroy*/ {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
    // console.log('1. constructor');
  }

  ngOnInit(): void {
    // console.log(this.product);
    // console.log('3. ngOnInit');
  }

  /*ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }*/

  addCart(product: Product): void {
    this.cartService.addCart(product);
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}
