import { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import listData from '../utils/listdata.json';
import { ListItem } from '../types';

function NestedList() {
  const parents = listData.map((item: ListItem) => item.department);
  const children = listData.map((item: ListItem) => item.sub_departments);

  const parentNames: string[] = parents;
  const childNames: string[][] = children;

  const [parentChecked, setParentChecked] = useState<boolean[]>(
    Array(parentNames.length).fill(false)
  );

  // Initialize childChecked array properly using nested map
  const [childChecked, setChildChecked] = useState<boolean[][]>(
    children.map((childArray) => Array(childArray.length).fill(false))
  );

  const handleParentCheckboxChange = (parentIndex: number): void => {
    const newParentChecked = [...parentChecked];
    newParentChecked[parentIndex] = !newParentChecked[parentIndex];
    setParentChecked(newParentChecked);

    const newChildChecked = [...childChecked];
    newChildChecked[parentIndex] = Array(childNames[parentIndex].length).fill(
      newParentChecked[parentIndex]
    );
    setChildChecked(newChildChecked);
  };

  const handleChildCheckboxChange = (
    parentIndex: number,
    childIndex: number
  ): void => {
    const newChildChecked = [...childChecked];
    newChildChecked[parentIndex][childIndex] =
      !newChildChecked[parentIndex][childIndex];
    setChildChecked(newChildChecked);

    const newParentChecked = [...parentChecked];
    newParentChecked[parentIndex] = newChildChecked[parentIndex].every(
      (checked) => checked
    );
    setParentChecked(newParentChecked);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        maxWidth: 700,
        justifyContent: '',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 400,
        }}
      >
        <h1>Nested Checkboxes</h1>
        {parentNames.map((parentName, parentIndex) => (
          <Accordion key={parentIndex} elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={parentChecked[parentIndex]}
                    indeterminate={
                      !parentChecked[parentIndex] &&
                      childChecked[parentIndex].some((checked) => checked)
                    }
                    onChange={() => handleParentCheckboxChange(parentIndex)}
                  />
                }
                label={parentName}
              />
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup style={{ marginLeft: '20px' }}>
                {childNames[parentIndex].map((childName, childIndex) => (
                  <FormControlLabel
                    key={childIndex}
                    control={
                      <Checkbox
                        checked={childChecked[parentIndex][childIndex]}
                        onChange={() =>
                          handleChildCheckboxChange(parentIndex, childIndex)
                        }
                      />
                    }
                    label={childName}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default NestedList;
