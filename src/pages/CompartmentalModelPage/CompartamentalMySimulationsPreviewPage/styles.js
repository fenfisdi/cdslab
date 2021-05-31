import { makeStyles } from '@material-ui/core/styles'

export const useCompartamentalMySimulationPreviewStyles = makeStyles((theme) => ({ 
  root: {
    flexGrow: 1,
    marginTop: '30px',
    width: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#000',
    border: 'none !important',
    borderRadius: '0px !important'
  },
  iconDownload: {
    color: '#2394BC',
    fontSize: '50px'
  },
  textoDownload: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  variables : {
    textAlign: 'center',
    height: '52px',
    overflow: 'auto',
    display: 'flex',
    'justify-content': 'center',
    'align-content': 'center',
    'flex-direction': 'column'
  },
  plot:{
    height: '200px'
  },
  imgExt:{
    width: '30px'
  },
  notPlot: {
    background: '#eee',
    height: '300px',
    display: 'flex',
    textAlign: 'center',
    'align-items': 'center'
  },
  divPlot:{
    width: '100%',
    color: '#929292',
    fontSize: '40px'
  },
  color: {
    background: '#ECEFF1'
  },
  review:{
    width: '100%',
    display: 'inline-flex'
  }
}))
