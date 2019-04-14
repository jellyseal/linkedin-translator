import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { setJob } from '../../store/actions/JobActions';

import styles from './Job.module.scss';

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    async componentDidMount() {
        const {
            match: { params: { id } },
            getJobDescription
        } = this.props;
        const response = await getJobDescription(id);
        if (response.data) {
           this.setState({ loading: false });
        }
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getJobDescription: setJob,
    }, dispatch);
  }

export default connect(null, mapDispatchToProps)(Job);
