import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../shared/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080/api/v1/orders';

  constructor(private httpClient : HttpClient) { }

  getOrderList(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.baseUrl);
  }

  createOrder(order:Order): Observable<Object>{
    return this.httpClient.post(this.baseUrl, order);
  }

  getOrderById(id: number): Observable<Order>{
    return this.httpClient.get<Order>(`${this.baseUrl}/${id}`);
  }

  updateOrder(id: number, order: Order): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, order);
  }

  deleteOrder(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
