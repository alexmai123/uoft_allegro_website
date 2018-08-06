import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import moment from 'moment';
import Select from 'react-select';

import {fetchMembers} from '../actions/fetch-data';

class MembersPage extends React.Component {
  state = {
    section: 'Soprano',
    members: [],
  };

  componentDidMount() {
    if(!this.props.members){
      this.props.fetchMembers();
    }
  }

  render() {
    const gg = 'gg';
    return (<div>
      {console.log('this.props.members',this.props.members)}
    </div>);
  }
}

const { func, shape } = PropTypes;

MembersPage.propTypes = {
  members: shape(),
};

const mapStateToProps = state => ({
  members: state && state.store && state.store.members,
});

const mapDispatchToProps = dispatch => ({
  fetchMembers: () => dispatch(fetchMembers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MembersPage);

// export default MembersPage;
