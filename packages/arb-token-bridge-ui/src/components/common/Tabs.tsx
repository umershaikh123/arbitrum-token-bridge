import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { ValidatorsData , NodeOperatorData } from './DashboardData';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper'   }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Validators" />
        <Tab label="Node Operators" />
   
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <>
       <ValidatorsData/>
  
        </>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <>
        <NodeOperatorData/>
         
        </>
      </CustomTabPanel>
    </Box>
  );
}
