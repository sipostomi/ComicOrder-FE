import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  order!: Order;
  id!:number;

  constructor(private orderService:OrderService,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrderById(this.id).subscribe(
      data => {this.order = data}
    )
  }

  onSubmit(){
    this.orderService.updateOrder(this.id, this.order).subscribe(
      data => {
        this.goToOrderList();
      }
    )
  }

  goToOrderList(){
    this.router.navigate(['/orders']);
  }

}
