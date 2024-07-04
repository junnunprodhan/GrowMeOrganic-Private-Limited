
import React, { useState } from 'react';
import { List, ListItem, Collapse, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { departments } from '../data/departments';

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
        <motion.div
          key={department.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <List component="div" disablePadding>
                {department.subDepartments.map((subDepartment) => (
                  <motion.div
                    key={subDepartment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <ListItem sx={{ pl: 4 }}>
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
                  </motion.div>
                ))}
              </List>
            </motion.div>
          </Collapse>
        </motion.div>
      ))}
    </List>
  );
};

export default DepartmentList;
