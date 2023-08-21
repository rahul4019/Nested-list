// import listData from '../utils/listdata.json';

// import { useState } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// function App() {
//   const parents = listData.map((item) => item.department);
//   const children = listData.map((item) => item.sub_departments);

//   const parentNames = parents;
//   const childNames = children;

//   const [parentChecked, setParentChecked] = useState(
//     Array(parentNames.length).fill(false)
//   );

//   // Initialize childChecked array properly using nested map
//   const [childChecked, setChildChecked] = useState(
//     children.map((childArray) => Array(childArray.length).fill(false))
//   );

//   const handleParentCheckboxChange = (parentIndex) => {
//     const newParentChecked = [...parentChecked];
//     newParentChecked[parentIndex] = !newParentChecked[parentIndex];
//     setParentChecked(newParentChecked);

//     const newChildChecked = [...childChecked];
//     newChildChecked[parentIndex] = Array(childNames[parentIndex].length).fill(
//       newParentChecked[parentIndex]
//     );
//     setChildChecked(newChildChecked);
//   };

//   const handleChildCheckboxChange = (parentIndex, childIndex) => {
//     const newChildChecked = [...childChecked];
//     newChildChecked[parentIndex][childIndex] =
//       !newChildChecked[parentIndex][childIndex];
//     setChildChecked(newChildChecked);

//     const newParentChecked = [...parentChecked];
//     newParentChecked[parentIndex] = newChildChecked[parentIndex].every(
//       (checked) => checked
//     );
//     setParentChecked(newParentChecked);
//   };

//   return (
//     <div>
//       {parentNames.map((parentName, parentIndex) => (
//         <Accordion key={parentIndex}>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={parentChecked[parentIndex]}
//                   indeterminate={
//                     !parentChecked[parentIndex] &&
//                     childChecked[parentIndex].some((checked) => checked)
//                   }
//                   onChange={() => handleParentCheckboxChange(parentIndex)}
//                 />
//               }
//               label={parentName}
//             />
//           </AccordionSummary>
//           <AccordionDetails>
//             <FormGroup style={{ marginLeft: '20px' }}>
//               {childNames[parentIndex].map((childName, childIndex) => (
//                 <FormControlLabel
//                   key={childIndex}
//                   control={
//                     <Checkbox
//                       checked={childChecked[parentIndex][childIndex]}
//                       onChange={() =>
//                         handleChildCheckboxChange(parentIndex, childIndex)
//                       }
//                     />
//                   }
//                   label={childName}
//                 />
//               ))}
//             </FormGroup>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }

// export default App;

import listData from '../utils/listdata.json';

import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ListItem {
  department: string;
  sub_departments: string[];
}

function App(): JSX.Element {
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
    <div>
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
    </div>
  );
}

export default App;
