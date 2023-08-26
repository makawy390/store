import {useState , useEffect} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Categories = () => {
    const [category, setCategory] = useState([]);
    const [value , setValue] = useState('')
    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(event.target.value);
    };
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then(res => setCategory(res.data))
    .catch( err => console.error(err))
  },[]) 
  const navigate = useNavigate()
  return (
    <div className='categories'>
        <Container>
    <FormControl variant="standard" >
        <InputLabel id="demo-simple-select-standard-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {category.map((category , id)=> (
        <MenuItem key={id} value={category} onClick={()=> navigate(`/categories/${category}`)}>{category}</MenuItem>
        ))}
        </Select>
      </FormControl>
        </Container>
    </div>
  )
}

export default Categories