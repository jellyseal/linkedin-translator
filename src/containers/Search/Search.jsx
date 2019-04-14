import React, { Component } from 'react';

import styles from './Search.module.scss';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Search extends Component {
    static isUrlValid = (userInput) => {
        var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if(res == null)
            return false;
        else
            return true;
    };
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            url: '',
            error: false,
            label: 'Url of the job here',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(url) {
        if (Search.isUrlValid(url)) {
            this.setState({
                url,
                label: 'Url of the job here',
                error: false,
            });
        } else if (url === '') {
            this.setState({
                url: '',
                label: 'Url of the job here',
                error: false
            });
        } else {
            this.setState({
                url: '',
                label: 'Format incorrect',
                error: true
            });
        }
        this.setState({ url });
    }
    goToJob() {
        const { url } = this.state;
        const { history } = this.props;
        const splicedUrl = url.split('/'); 
        history.push(`job/${splicedUrl[5]}`);
    }
    render() {
        const { url, error, label } = this.state;
        return (
            <div className={styles.container}>
            <Grid item xs={12}>
                <Paper className={styles.customPaper}>
                <TextField
                    label={label}
                    placeholder="Example: https://www.linkedin.com/jobs/view/1162702239/"
                    className={styles.field}
                    value={url}
                    onChange={event => this.handleChange(event.target.value)}
                    error={error}
                    margin="normal"
                />
                <Button
                    disabled={error}
                    className={styles.button}
                    variant="contained"
                    color="primary"
                    onClick={url !== '' ? () => this.goToJob() : () => {}}
                >
                    Search
                </Button>
                </Paper>
            </Grid>
            </div>
        );
    }
}

export default Search;
