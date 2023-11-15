import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Zobaer", "Sheikh", "zobaersheikh@gmail.com", 40000),
    new SalesPerson("Mahadi", "Khan", "mh@gmail.com", 50000),
    new SalesPerson("Iqbal", "Hossain", "ih@gmail.com", 60000),
    new SalesPerson("Tahiyarul", "Azmi", "ta@gmail.com", 30000),
  ];

}
