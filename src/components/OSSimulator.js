import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Dialog from "@material-ui/core/Dialog"
import TextField from "@material-ui/core/TextField"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Simulator from ".././Simulator"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 640,
    width: 600,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

export default function OSSimulator() {
  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const [schedulingAlgorithm, setSchedulingAlgorithm] = React.useState(1)
  const [numOfCores, setNumOfCores] = React.useState(1)
  const [numOfInitialProcesses,setNumOfInitialProcesses] = React.useState(5)

  const handleStartSimulationClick = () => {
    setOpen(false)
    new Simulator().main()
  }

  const handleSchedulingAlgorithmChange = (event) => {
    setSchedulingAlgorithm(event.target.value)
  }

  const handleNumOfCoresChange = (event) => {
    setNumOfCores(Number(event.target.value))
  }

  const handleNumOfInitialProcessesChange = (event) => {
    setNumOfInitialProcesses(Number(event.target.value))
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {}} // dont let user close the dialog
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Vamos começar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe os parâmetros abaixo para iniciar o simulador
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Número de núcleos"
            type="number"
            fullWidth
            value={numOfCores}
            onChange={handleNumOfCoresChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Número de processos iniciais"
            type="number"
            fullWidth
            value={numOfInitialProcesses}
            onChange={handleNumOfInitialProcessesChange}
          />
          {/* <FormControl className={classes.formControl}> */}
          {/* <InputLabel>Algoritmo de escalonamento</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={schedulingAlgorithm}
            onChange={handleSchedulingAlgorithmChange}
          >
            <MenuItem value={1}>FIFO</MenuItem>
            <MenuItem value={2}>SJF</MenuItem>
            <MenuItem value={3}>Round Robin</MenuItem>
          </Select>
          <FormHelperText>Algoritmo de escalonamento</FormHelperText>
          {/* </FormControl> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleStartSimulationClick} color="primary">
            Iniciar simulação
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
