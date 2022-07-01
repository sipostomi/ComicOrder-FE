import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders!: Order[];

  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrderList().subscribe(
      (data)=>{
        this.orders = data;
      })
  }

  updateOrder(id:number){
    this.router.navigate(['order-details', id]);
  }

  deleteOrder(id:number){
    this.orderService.deleteOrder(id).subscribe(
      data => {
        console.log(data);
        this.getOrders();
      }
    )
  }

}
