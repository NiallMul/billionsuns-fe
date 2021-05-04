import './CompetitiveAdv.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import React, {useState} from 'react';
import {Button, DialogActions, DialogContent} from "@material-ui/core";
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.paper,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
let selectedId = "";

function rowSelected(props) {
    if (selectedId === "") {
        let selectedRow = document.getElementById(props.id);
        selectedRow.classList.add("selectedRow");
        selectedId = props.id;
    } else {
        let prevSelected = document.getElementById(selectedId);
        prevSelected.classList.remove("selectedRow");
        selectedId = "";
        rowSelected(props);
    }
}


function SelectAdvantage(props) {
    const {onClose, open, advantagelist, selectedAdvantage} = props;

    const handleClose = () => {
        onClose();
    }
    let headers = ["name", "level", "category", "requirement", "description"];

    const classes = useStyles();


    function submitAdv() {
        selectedAdvantage(selectedId);
        handleClose();
    }

    return <Dialog open={open} aria-labelledby="simple-dialog-title" onClose={handleClose}>
        <DialogTitle id="simple-dialog-title">Competitive Advantages</DialogTitle>
        <DialogContent>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {headers.map((title) => (
                                <StyledTableCell>{title}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {advantagelist.map((row) => (
                            <StyledTableRow id={row.id} key={row.name} hover={true} onClick={() => {
                                rowSelected(row)
                            }}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.level}</StyledTableCell>
                                <StyledTableCell align="right">{row.category}</StyledTableCell>
                                <StyledTableCell align="right">{row.requirement}</StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                            </StyledTableRow>)
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={submitAdv} color="primary">
                Select advantage
            </Button>
        </DialogActions>
    </Dialog>
}

class CompetitiveAdv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        const handleOpen = () => {
            this.setState({open: true});
        }
        const handleClose = () => {
            this.setState({open: false});
        }
        return (
            <div>
                <Button id="comp-btn" onClick={handleOpen}>
                    Select Competitive Advantage
                </Button>
                <SelectAdvantage open={this.state.open} onClose={handleClose} advantagelist={this.props.advantagelist}
                                 selectedAdvantage={this.props.selectedAdvantage}/>
            </div>
        );
    }
}

export default CompetitiveAdv;


