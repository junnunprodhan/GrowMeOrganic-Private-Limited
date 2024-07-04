// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, TextField, Button, Typography } from '@mui/material';

// const FormPage: React.FC = () => {
//   const [name, setName] = useState<string>('');
//   const [phone, setPhone] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const navigate = useNavigate();

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     if (name && phone && email) {
//       localStorage.setItem('user', JSON.stringify({ name, phone, email }));
//       navigate('/second');
//     } else {
//       alert('Please fill out all fields.');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" gutterBottom>
//         User Information
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           label="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <TextField
//           label="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default FormPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const FormPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && phone && email) {
      localStorage.setItem('user', JSON.stringify({ name, phone, email }));
      navigate('/second');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" gutterBottom>
          User Information
        </Typography>
      </motion.div>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onSubmit={handleSubmit}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <TextField
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </motion.div>
      </motion.form>
    </Container>
  );
};

export default FormPage;
