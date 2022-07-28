import React from 'react';
import styles from './Footer.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const Contact = () => {
  return (
    <div className={styles.contact}>
      <p>Əlaqə</p>
      <p>Sevdiyiniz məhsullardan vaxtında yeniliklər alın</p>
      <div className={styles.inputSec}>
        <TextField
          size="small"
          className={styles.input}
          id="outlined-multiline-flexible"
          label="Sizin email"
        />
        <Button variant="contained" endIcon={<SendIcon />}>Göndər</Button>
      </div>
    </div>
  )
}

export default Contact