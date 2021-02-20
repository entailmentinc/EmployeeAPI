import { makeStyles } from '@material-ui/core/styles'

import { StyleVariables } from '../../styles/StyleVariable'

/**
 * Material UI framework styling object
 * @type {StylesHook<Styles<Theme, {}, string>>}
 */
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    maxWidth: '100%',
    height: '100vh',
  },
  paper: {
    marginTop: theme.spacing(0),
    display: StyleVariables.displayFlex,
    flexDirection: StyleVariables.flexDirectionRow,
    alignItems: StyleVariables.alignCenter,
    height: StyleVariables.fullHeight,
  },
  form: {
    width: StyleVariables.fullWidth, // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  spaceTop: {
    marginTop: theme.spacing(3),
  },
  linkItem: {
    color: StyleVariables.mutedColor,
    textDecoration: StyleVariables.none,
    '&:hover': {
      textDecoration: StyleVariables.underline,
    },
  },
  staticLink: {
    color: StyleVariables.mutedColor,
    textDecoration: StyleVariables.none,
    margin: theme.spacing(0, 1, 1),
    '&:hover': {
      textDecoration: StyleVariables.underline,
    },
  },
  brandLogo: {
    alignItems: StyleVariables.alignCenter,
    justifyContent: StyleVariables.alignCenter,
    width: StyleVariables.fullWidth,
    display: StyleVariables.displayFlex,
    height: StyleVariables.fullHeight,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  panelRight: {
    width: '65%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  panelLeft: {
    width: '35%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  authInnerForm: {
    textAlign: StyleVariables.alignCenter,
    margin: StyleVariables.alignAuto,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '85%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '65%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '50%',
    },
  },
  filterExpend: {
    backgroundColor: 'transparent',
    '& .MuiAccordionSummary-root': {
      padding: '0',
      '& .MuiAccordionSummary-content': {
        alignItems: 'center',
      },
    },
    '& .MuiAccordionSummary-root.Mui-expanded': {
      minHeight: '48px',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      margin: '12px 0',
    },
    '& .MuiAccordionDetails-root': {
      padding: '8px 0 16px',
      textAlign: 'left',
    },
  },
  headingSection: {
    fontSize: '1rem',
    fontWeight: '500',
  },
  fieldLight: {
    backgroundColor: '#f2f7ff',
    padding: theme.spacing(0, 2),
    margin: theme.spacing(4, 0, 2),
    border: 'solid 2px #D9E7FC',
    borderRadius: '5px',
  },
  linkItemJoin: {
    color: StyleVariables.blueMain,
    marginLeft: theme.spacing(1),
    textDecoration: StyleVariables.none,
    '&:hover': {
      textDecoration: StyleVariables.underline,
    },
  },
  loginOption: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      content: '" "',
      width: '100%',
      height: '1px',
      background: '#d8d9e0',
      position: 'absolute',
      top: '10px',
      left: '0',
      zIndex: '1',
    },
    '& span': {
      position: 'relative',
      zIndex: '1',
      padding: '0 15px',
      background: '#fff',
    },
  },
}))

export default useStyles
