import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderAdmin',
  templateUrl: './orderAdmin.component.html',
  styleUrls: ['./orderAdmin.component.scss']
})
export class OrderAdminComponent implements OnInit {
  profiles;
  displayedColumns: string[] = ['select', 'position', 'name', 'hours', 'weight', 'symbol'];
  // displayedColumns: string[] = ['select', 'Customer', 'Sitter', 'StartDate', 'EndDate'];
  dataSource;
  selection = new SelectionModel(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  // removeSelectedRows() {
  //   let selectedRows = this.selection.selected.sort((a, b) => { return b.position - a.position });

  //   let ds = this.dataSource.data; //take a copy

  //   selectedRows.forEach(item => {
  //     ds.splice(item.position - 1, 1); //splice out the selected rows
  //   });
  //   this.dataSource.data = ds;  //set the datasource so it fires the refresh

  //   this.selection = new SelectionModel;
  // }
  constructor(private http: HttpClient) { }
  pro;
  ngOnInit() {
    this.http.get('http://localhost:8000/orders').subscribe(
      res => {
        console.log(res);
        this.profiles = res;
        this.dataSource = new MatTableDataSource(this.profiles)
      }
    );
  }
}



