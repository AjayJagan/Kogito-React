import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button
} from '@patternfly/react-core';


const contents = [
        {
            text: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        },
        {
            text: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        },
        {
            text: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        }
    ];

//  {
//               name: "StartProcess",
//               definitionId: "StartEvent_1",
//               id: "98a41db9-e1b5-4333-a15f-22e6e0a6297f",
//               enter: "2019-10-16T04:44:32.928Z",
//               exit: "2019-10-16T04:44:32.929Z"
//             },

const ProcessDetailsTimeline = ({loading, data}) => {
    const TimelineStyle = {
        marginLeft: '2em',
        height: '40em',
        position: 'relative',
        bottom: '3em',
        overflowY: 'scroll',
        marginTop: '3em'
    }
    return (
        <Card style={TimelineStyle}>
            <CardHeader>Timeline</CardHeader>
            <CardBody>
                <div className="timeline-container">
                    {!loading? contents.map((content, index) => {
                        return (
                            <div className="timeline-item">
                                <div className="timeline-item-content">
                                    {/* <time>{content.date}</time> */}
                                    <p>{content.text}</p>
                                    {/* <p>{content.defintionId}</p>     */}
                                    {/* {data.link && (
                                        <a
                                            href={data.link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {data.link.text}
                                        </a>
                                    )} */}
                                    <span className="circle" />
                                </div>
                            </div>
                        )
                    }): <p>loading...</p>}
                </div>
            </CardBody>
            <CardFooter>
                <Button variant="primary" style={{ float: 'right' }}>Primary</Button>
            </CardFooter>
        </Card>
    )
}

export default ProcessDetailsTimeline;