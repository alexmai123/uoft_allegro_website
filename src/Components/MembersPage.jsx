import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import moment from 'moment';
import CommonModal from './Modal';

import {fetchMembers} from '../actions/fetch-data';

class MembersPage extends React.Component {
  state = {
    section: 'Soprano',
    selectedMember: false,
  };

  componentWillMount() {
    if(!this.props.members){
      this.setState({height: window.innerWidth });
    }
  }


  componentDidMount() {
    if(!this.props.members){
      this.props.fetchMembers();
    }
  }

  onProfileClick = (member) => {
    this.setState({selectedMember: member});
  };

  render() {
    const gg = 'gg';
    return (<div>
      {_.map(this.props.members, (d) => (
        <div key={`member-${d.id}`} style={{width:(this.state.height && this.state.height < 550)? '50%' : '25%', display: 'inline-block'}}>
          <a className="image w3-circle" onClick={() => this.onProfileClick(d)}>
            <img
              src={d.pro_pic}
              alt=""
              style={{
                maxWidth: '90%',
                borderRadius: '50%',
              }}
            />
          </a>
          <div className="align-center">
            <h4><a>{d.name}</a></h4>
          </div>
        </div>))}
      {console.log('this.props.members',this.props.members)}
      <CommonModal title="asdf" open={this.state.selectedMember} closeModal={() => this.setState({selectedMember: false})}>
        <h3>123</h3>
      </CommonModal>
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
