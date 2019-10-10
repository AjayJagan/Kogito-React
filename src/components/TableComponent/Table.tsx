import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableHeader, TableBody, sortable } from '@patternfly/react-table';
export interface IOwnProps {
  instanceType: string;
}
export interface IStateProps {
  sortBy: any;
  columnsActive: any;
  rowsActive: any;
  columnsCompleted: any;
  rowsCompleted: any;
  columnsAborted: any;
  rowsAborted: any;
  columnsInError: any;
  rowsInError: any;
}
class InstanceTable extends React.Component<IOwnProps, IStateProps> {
  constructor(props) {
    super(props);
    this.state = {
      columnsActive: [
        { title: 'Process ID', transforms: [sortable] },
        'Service ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rowsActive: [
        {
          cells: [
            {
              title: <Link to="/instanceDetail/12324">12324</Link>
            },
            '10001',
            'ABC',
            '11:20',
            '5'
          ]
        },
        {
          cells: [
            {
              title: <Link to="/instanceDetail/12325">12325</Link>
            },
            '10002',
            'DEF',
            '10:10',
            '1'
          ]
        },
        {
          cells: [
            {
              title: <Link to="/instanceDetail/12326">12326</Link>
            },
            '10003',
            'GHI',
            '01:15',
            '10'
          ]
        }
      ],
      columnsCompleted: [
        { title: 'Process ID', transforms: [sortable] },
        'Service ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rowsCompleted: [
        [
          {
            title: <Link to="/instanceDetail/1111">1111</Link>
          },
          '88888',
          'JKL',
          '12:20',
          '2'
        ],
        [
          {
            title: <Link to="/instanceDetail/22222">22222</Link>
          },
          '77777',
          'MNO',
          '15:50',
          '4'
        ],
        [
          {
            title: <Link to="/instanceDetail/33333">33333</Link>
          },
          '66666',
          'PQR',
          '21:25',
          '6'
        ]
      ],
      columnsAborted: [
        { title: 'Process ID', transforms: [sortable] },
        'Service ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rowsAborted: [
        [
          {
            title: <Link to="/instanceDetail/44444">44444</Link>
          },
          '12345',
          'STU',
          '19:40',
          '8'
        ],
        [
          {
            title: <Link to="/instanceDetail/55555">55555</Link>
          },
          '67891',
          'VWX',
          '16:50',
          '10'
        ],
        [
          {
            title: <Link to="/instanceDetail/66666">66666</Link>
          },
          '32423',
          'YZA',
          '22:22',
          '12'
        ]
      ],
      columnsInError: [
        { title: 'Process ID', transforms: [sortable] },
        'Service ID',
        { title: 'Name', transforms: [sortable] },
        'Timer',
        'Services'
      ],
      rowsInError: [
        [
          {
            title: <Link to="/instanceDetail/65432">65432</Link>
          },
          '13213',
          'AABBCC',
          '11:20',
          '5'
        ],
        [
          {
            title: <Link to="/instanceDetail/56789">56789</Link>
          },
          '34543543',
          'DDEEFF',
          '10:10',
          '1'
        ],
        [
          {
            title: <Link to="/instanceDetail/34521">34521</Link>
          },
          '435435435',
          'GGHHII',
          '01:15',
          '10'
        ]
      ],
      sortBy: {}
    };
  }
  render() {
    const {
      columnsActive,
      rowsActive,
      columnsAborted,
      rowsAborted,
      columnsCompleted,
      rowsCompleted,
      columnsInError,
      rowsInError,
      sortBy
    } = this.state;
    // <Table caption="Instance Details" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
    if (this.props.instanceType == 'ACTIVE') {
      return (
        <Table caption="Instance Details" sortBy={sortBy} cells={columnsActive} rows={rowsActive}>
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    if (this.props.instanceType == 'ABORTED') {
      return (
        <Table caption="Instance Details" sortBy={sortBy} cells={columnsAborted} rows={rowsAborted}>
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    if (this.props.instanceType == 'COMPLETED') {
      return (
        <Table caption="Instance Details" sortBy={sortBy} cells={columnsCompleted} rows={rowsCompleted}>
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    if (this.props.instanceType == 'INERROR') {
      return (
        <Table caption="Instance Details" sortBy={sortBy} cells={columnsInError} rows={rowsInError}>
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    return (
      <Table caption="Instance Details" sortBy={sortBy} cells={columnsActive} rows={rowsActive}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export default InstanceTable;
