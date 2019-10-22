import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    TextVariants,
    TextContent
} from '@patternfly/react-core';
import ReactJson from 'react-json-view';
import JSONViewer from 'react-json-viewer';


const ProcessDetailsProcessVariables = ({loading, data}) => {
    return (
        <Card style={{ marginTop: '2em', overflowX: 'scroll' }}>
            <CardHeader>Process Variables</CardHeader>
            <CardBody>
                <TextContent style={{ width: '30em' }}>
                    {!loading ? data.ProcessInstances.map(item => {
                        return (<>
                            <ReactJson src={JSON.parse(item.variables)}></ReactJson>
                            <br/>
                            {/* <JSONViewer json={JSON.parse(item.variables)} /> */}
                            </>)
                    }) : <Text component={TextVariants.h4}>Loading...</Text>}
                </TextContent>
            </CardBody>
            <CardFooter></CardFooter>
        </Card>
    )
}

export default ProcessDetailsProcessVariables