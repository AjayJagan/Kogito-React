import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth
} from '@patternfly/react-table';

export interface IOwnProps {}
export interface IStateProps {
  sortBy: any;
  columns: any;
  rows: any;
}
class InstanceTable extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Service ID', transforms: [sortable] },
        'Process ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rows: [
        ['12323', '10001', 'ABC', '11:20', '5'],
        ['12324', '10002', 'DEF', '10:10', '1'],
        ['12325', '10003', 'GHI', '01:15', '10']
      ],
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table caption="Instance Details" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export default InstanceTable;
