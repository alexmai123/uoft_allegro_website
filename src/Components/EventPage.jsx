import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import moment from 'moment';
import Select from 'react-select';

class RunSettings extends React.Component {

  componentWillMount() {
  }


  componentWillReceiveProps(props) {
  }

  createReport() {
  }


  deleteReport(id) {
  }

  changeReport(e) {
  }

  changeCadence(e) {
  }

  render() {
    return (<div>
    </div>);
  }
}

const { func, shape } = PropTypes;

RunSettings.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RunSettings);
