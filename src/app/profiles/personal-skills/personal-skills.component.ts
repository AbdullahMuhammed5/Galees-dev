import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];



@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html',
  styleUrls: ['./personal-skills.component.scss']
})
export class PersonalSkillsComponent implements OnInit {
  profiles;
  profiles2;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }


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


  ngOnInit() {
    this.http.get('http://localhost:8000/get-profile-card').subscribe(
      // res => this.profiles = res
      res => {
        console.log(res);
        this.profiles = res;
        this.dataSource = new MatTableDataSource(this.profiles)
      }
    );
  }
}


