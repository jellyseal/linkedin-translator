import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Job.module.scss';

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 5000);
    }
    render() {
        const { loading } = this.state;
        if (loading) {
            return (
                <div className={styles.container}>
                    <CircularProgress />
                </div>
            );
        }
        return (
            <div className={styles.container}>
                jobs
            </div>
        );
    }
}

export default Job;
