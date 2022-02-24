import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CellClickEvent, DataStateChangeEvent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { orderBy, SortDescriptor, process, State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { deepCopy } from '@angular-devkit/core/src/utils/object';
import { ColumnModel, GridData } from '../../../kendo-models';
import { ProductsResponse } from 'src/app/modules/products/products-models';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})


export class DataGridComponent implements OnInit {

  view: Observable<GridDataResult> | undefined;

  gridData: GridData = { data: [], total: 0 };
  gridDataClone: any[] = [];
  gridProperties: any;
  pageOptions: any = {
    buttonCount: 3,
    info: true,
    type: 'numeric',
    pageSizes: false,
    previousNext: true,
    position: 'bottom',
  };
  pagesize: number = 21; // default size of API response | workaround
  sort: SortDescriptor[] = [];
  loading: boolean = true;

  state: State = {
    skip: 0,
    take: 5,
    filter: {
      logic: "or",
      filters: []
    }
  };

  @Input() columns!: ColumnModel[];

  @Input() set dataList(value: ProductsResponse) {

    if (value) {
      this.gridData = {
        data: value.docs,
        total: value?.docs?.length * value?.totalPages //approximate calculation as the response does not have a total value
      }
      this.gridProperties = (({ docs, ...o }) => o)(value);
      this.loading = false;
    }
  };

  @Output()
  gridPageEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  doubleClickedEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  pageChange(event: PageChangeEvent): void {
    this.loading = true;
    this.state.skip = event.skip;
    this.gridPageEvent.emit(this.state.skip / this.pagesize + 1)
  }

  sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.selectedItem = [];
    this.gridData.data = orderBy(this.gridData.data, this.sort);
  }

  dataStateChange(state: DataStateChangeEvent): void {
    if (!!state.filter?.filters.length) {
      if (!this.gridDataClone.length) {
        this.gridDataClone = deepCopy(this.gridData.data);
      }
      this.gridData = process(this.gridDataClone, state);
    }

    if (!state.filter?.filters.length && !!this.gridDataClone.length) {
      this.gridData.total = this.gridData.data.length * this.gridProperties.totalPages;
      this.gridDataClone = [];
    }
  }

  selectedItem: any;

  onCellClick(event: CellClickEvent) {
    if (event) {
      this.selectedItem = event.dataItem

      setTimeout(() => {
        this.selectedItem = [];
      }, 2000);
    }
  }

  selectedDoubleClick(event: MouseEvent) {
    if (event) {
      this.doubleClickedEvent.emit(this.selectedItem);
    }
  }


}
