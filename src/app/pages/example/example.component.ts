import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  isLoadingResults: boolean;
  resultsLength: number;
  currentPage: number;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.getPage(this.currentPage);
  }

  getPage(page: number) {
    this.isLoadingResults = true;
    // simulation
    this.delay(1000).then(() => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.getData(this.currentPage));
      this.isLoadingResults = false;
      this.resultsLength = 100;
    });
  }

  ngOnInit() {
    this.currentPage = 0;
    this.dataSource.paginator = this.paginator;
    this.getPage(this.currentPage);
  }

  // just shuffle
  getData(page: number): Array<PeriodicElement> {
    const dataSource = [
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
    let currentIndex = dataSource.length;
    let temporaryValue: any;
    let randomIndex: number;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = dataSource[currentIndex];
      dataSource[currentIndex] = dataSource[randomIndex];
      dataSource[randomIndex] = temporaryValue;
    }
    return dataSource;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
