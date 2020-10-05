import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit{
  @Input() name: string;
  companies = [
    {
        Name: 'Neetu',
        Designation: 'Developer',
        Age: 27
    },
    {
      Name: 'Rahul',
      Designation: 'Team Leaad',
      Age: 40
    },
    {
      Name: 'Naresh',
      Designation: 'Manager',
      Age: 27
    }
  ];

  displayedColumns: string[] = ['Name', 'Designation'];
  dataSource = new MatTableDataSource<any>(this.companies);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
