export interface ColumnModel {
    title: string,
    field: string,
    sortable: boolean,
    filterable: boolean,
};

export interface GridData {
    data: any[],
    total: number,
};