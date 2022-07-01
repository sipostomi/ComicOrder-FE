import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  order:Order = new Order();

  constructor(private orderService:OrderService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveOrder(){
    this.orderService.createOrder(this.order).subscribe(
      data => {
        console.log(data);
        this.goToOrderList();
      }
    )
  }

  goToOrderList(){
    this.router.navigate(['/orders']);
  }

  onSubmit(){
    this.saveOrder();
  }

}
