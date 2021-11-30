import logo from './logo.svg';
import './App.css';
import { DataGrid } from '@material-ui/data-grid';




function App() {

  const columns=[
    {field:'id',headerName:'ID',width:70},
    {field:'firstName',headerName:'First name',width:130},
    {field:'lastName',headerName:'Last name',width:130},
    {
      field:'age',
      headerName:'Age',
      type:'number',
      width:90,
      sortable:true,
    },
   
  ];
  
  const rows = [
    {id:1,lastName:'Snow',firstName:'Jon',age:35},
    {id:2,lastName:'Lannister',firstName:'Cersei',age:null},
    {id:3,lastName:'Lannister',firstName:'Jaime',age:24},
    {id:4,lastName:'Stark',firstName:'Arya',age:22},
    {id:5,lastName:'Targaryen',firstName:'Daenerys',age:36},
    {id:6,lastName:'Melisandre',firstName:null,age:100},
    {id:7,lastName:'Clifford',firstName:'Ferrara',age:44},
    {id:8,lastName:'Frances',firstName:'Rossini',age:36},
    {id:9,lastName:'Roxie',firstName:'Harvey',age:88},
  ];
  
  return(
    <div style={{height:400, width:'100%'}}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default App;
