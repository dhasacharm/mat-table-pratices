import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['SNo', 'Name', 'Age'];
  friends: any = [
    {
      name: 'Yuvaraj',
      age: '23',
    },
    {
      name: 'Babu',
      age: '24',
    },
    {
      name: 'Balu',
      age: '23'
    },
    {
      name: 'Balu',
      age: '23'
    },
    {
      name: 'Balu',
      age: '23'
    },
    {
      name: 'Balu',
      age: '23'
    },
    {
      name: 'Balu',
      age: '23'
    },
    {
      name: 'Balu',
      age: '23'
    },
    {
      name: 'Balu',
      age: '23'
    },
    {
      name: 'Balu',
      age: '23'
    },
    {
      name: 'Balu',
      age: '23'
    }
  ];

  tableData = new MatTableDataSource<any[]>(this.friends);


  constructor() {
  }



  ngOnInit() {
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
  }

}
