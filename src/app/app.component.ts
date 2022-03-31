import { Component } from '@angular/core';
import { Product } from './common/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: any;
  title = 'SINH VIÊN';
  student = {
    name: 'Nguyễn Văn A',
    age: 20,
    address: 'Hà Nội',
    phone: '0987654321'
  };

  product: Product = {
    name: 'Iphone X',
    price: 1000,
    quantity: 10
  }
}
