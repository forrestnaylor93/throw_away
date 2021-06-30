import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({


card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow:'0px 1px 2px gray',
    borderRadius: '5px'
},

cardMedia: {
    paddingTop: '56.25%', // 16:9
    borderRadius: '5px 5px 0px 0px'
},

cardContent: {
    flexGrow: 1,
}

}))


export default useStyles; 