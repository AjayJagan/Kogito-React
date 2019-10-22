import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@patternfly/react-core';

const ProcessDetailsTimeline = ({ loading, data }) => {
  const TimelineStyle = {
    marginLeft: '2em',
    height: '40em',
    position: 'relative',
    bottom: '3em',
    overflowY: 'scroll',
    marginTop: '3em'
  };
  console.log('date', new Date("2019-10-22T04:43:01.146Z"))
  return (
    <Card style={TimelineStyle}>
      <CardHeader>Timeline</CardHeader>
      <CardBody>
        <div className="timeline-container">
          {!loading ? (
            data[0].nodes.map((content, index) => {
              return (
                <div className="timeline-item" key={index}>
                  <div className="timeline-item-content">
                    {/* <time>{content.date}</time> */}
                    <p>{content.name}</p>
                    <span className="circle" />
                  </div>
                </div>
              );
            })
          ) : (
            <p>loading...</p>
          )}
        </div>
      </CardBody>
      <CardFooter>
        <Button variant="primary" style={{ float: 'right' }}>
          Primary
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProcessDetailsTimeline;
