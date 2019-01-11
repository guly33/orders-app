import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
 
  filteredOrders: Array<Object>;

  transform(orders: any, args?: any): any {
  	this.filteredOrders = [];
    // if the value is an empty string don't filter the items
    if (args === '' || args === undefined) {
    	return orders;
    } else {
		this.filteredOrders = orders.filter((order) => {
			return (order.order_id.includes(args));
		});
		return this.filteredOrders;
    }
  }
}


