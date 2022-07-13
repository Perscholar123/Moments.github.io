import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    appBar: {
      border: 'solid white',
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      // justifyContent: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    heading: {
      // color: 'rgba(0,183,255, 1)',
      color: '#7A4069',
      backgroundColor: '#DFE8CC',
      borderRadius: 10,
      border: "solid green 3px",
    },
    image: {
      // marginLeft: '10px',
      border: "solid green 3px",
      borderRadius: 15,
      backgroundColor: '#DFE8CC'
     
    },
    [theme.breakpoints.down('sm')]: {
      mainContainer:{
        flexDirection: 'column-reverse',
      }
    }
   
  }));
