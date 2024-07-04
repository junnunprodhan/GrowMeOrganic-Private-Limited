
import React, { useState } from 'react';
import { List, ListItem, Collapse, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { departments } from '../data/departments';

// interface Department {
//   id: number;
//   name: string;
//   subDepartments: SubDepartment[];
// }

// interface SubDepartment {
//   id: number;
//   name: string;
// }

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});
  const [selected, setSelected] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (id: number) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const handleSelect = (id: number, isSubDepartment = false, parentId?: number) => {
    setSelected((prevState) => {
      const newState = { ...prevState, [id]: !prevState[id] };

      if (!isSubDepartment) {
        const department = departments.find((dept) => dept.id === id);
        department?.subDepartments.forEach((subDept) => {
          newState[subDept.id] = newState[id];
        });
      } else if (parentId) {
        const parentSelected = departments.find((dept) => dept.id === parentId)?.subDepartments.every((subDept) => newState[subDept.id]);
        newState[parentId] = !!parentSelected;
      }

      return newState;
    });
  };

  return (
    <List>
      {departments.map((department) => (
        <div key={department.id}>
          <ListItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!selected[department.id]}
                  onChange={() => handleSelect(department.id)}
                />
              }
              label={department.name}
            />
            <IconButton onClick={() => handleToggle(department.id)}>
              {open[department.id] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          <Collapse in={open[department.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((subDepartment) => (
                <ListItem key={subDepartment.id} sx={{ pl: 4 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={!!selected[subDepartment.id]}
                        onChange={() => handleSelect(subDepartment.id, true, department.id)}
                      />
                    }
                    label={subDepartment.name}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
