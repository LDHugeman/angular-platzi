import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  products: Product[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.total$ = this.cartService.cart$.pipe(
      map((products: Product[]) => products.length)
    );
  }
}
