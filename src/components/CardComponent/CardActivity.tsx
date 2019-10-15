import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';
import { ChartArea, ChartGroup, ChartLabel, ChartVoronoiContainer } from '@patternfly/react-charts';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';
import { ThIcon, CaretDownIcon } from '@patternfly/react-icons';
export interface IOwnProps {}
export interface IStateProps {
  activeTabKey: number;
  isOpen: boolean;
}

const CardComponent:React.FunctionComponent<IOwnProps> = () => {
    const [ activeTabKey, setActiveTabKey] = useState(0);
    const [ isOpen, setisOpen] = useState(false);
    const handleTabClick = (event, tabIndex) => {
      setActiveTabKey(tabIndex);
    };
    const onToggle = isOpen => {
      setisOpen(isOpen);
    };
    const onSelect = event => {
      setisOpen(!isOpen);
    };
    const chartData = [
      { name: 'Cats', x: 1, y: 3 },
      { name: 'Cats', x: 2, y: 4 },
      { name: 'Cats', x: 3, y: 8 },
      { name: 'Cats', x: 4, y: 6 }
    ];
    // const { isOpen } =   state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Card>
        <CardHeader className="pf-l-flex">
          <TextContent>
            <Text component={TextVariants.p}>Activities</Text>
          </TextContent>
          <Dropdown
            onSelect={onSelect}
            toggle={
              <DropdownToggle onToggle={  onToggle} iconComponent={CaretDownIcon}>
                Dropdown
              </DropdownToggle>
            }
            isOpen={isOpen}
            dropdownItems={dropdownItems}
          />
        </CardHeader>

        <CardBody>
          <div>
            <div className="sparkline-container">
              <div className="sparkline-chart">
                <ChartGroup
                  ariaDesc="Average number of pets"
                  ariaTitle="Sparkline chart example"
                  containerComponent={<ChartVoronoiContainer labels={datum => `${datum.name}: ${datum.y}`} />}
                  height={75}
                  padding={0}
                  width={400}
                >
                  <ChartArea data={chartData} />
                </ChartGroup>
              </div>
              <ChartLabel text="Process utilization" />
            </div>
          </div>
        </CardBody>
        <CardBody>Need</CardBody>
        <CardBody>To</CardBody>
        <CardFooter>Design This Part</CardFooter>
      </Card>
    );
}

export default CardComponent;