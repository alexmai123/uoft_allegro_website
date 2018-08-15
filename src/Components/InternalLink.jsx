import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import moment from 'moment';
import Select from 'react-select';

class RunSettings extends React.Component {

  componentWillMount() {
    this.props.loadReports();
    this.props.loadTemplates();
  }


  componentWillReceiveProps(props) {
    if (props.reports) {
      const typesSelection = [];
      const typeset = new Set();
      _.each(props.reports, (d) => {
        if (!typeset.has(d.name) && !d.deleted) {
          typesSelection.push({ label: d.name, value: d.name });
          typeset.add(d.name);
        }
      });
      this.setState({ reportOptions: typesSelection });
    }
  }

  createReport() {
    this.props.createReport(this.state);
  }


  deleteReport(id) {
    this.props.deleteReport(id);
  }

  changeReport(e) {
    this.setState({ report: e && e.target.value });
    if (e && !this.state.reportOptions.filter(d => d.value === e.value)) {
      const typesSelection = this.state.reportOptions;
      this.setState({ reportOptions: typesSelection.push({ label: e.value, value: e.value }) });
    }
  }

  changeCadence(e) {
    this.setState({ cadence: e && e.value });
  }

  render() {
    const reports = this.props.reports;

    if (!this.props.reports || !this.props.templates) {
      return <Loading color="#333" />;
    }
    _.each(this.props.templates, (template) => {
      if (template.is_default) {
        reports[template.report]['default'] = template;
      }
    });

    const reportsList = _.map(reports, d => !d.deleted && d).filter(d => d);
    const cadenceSelection = [{ label: 'Daily', value: 'DAILY' },
      { label: 'Weekly', value: 'WEEKLY' },
      { label: 'Monthly', value: 'MONTHLY' },
      { label: 'Quarterly', value: 'QUARTERLY' },
      { label: 'Annually', value: 'ANNUALLY' }];

    return (<div>
      <Header
        title="Reports"
        breadcrumbs={[{ link: '/', text: 'Home' },
          { text: 'Reports' }]}
      />
      <div className="wrapper-content wrapper">
        <IBox title="Report Generation Settings">
          <div style={{ paddingBottom: '32px' }}>
            <label htmlFor="report" className="col-md-3 control-label">Create New Report:</label>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Type name to create new"
                value={this.state.report}
                onChange={this.changeReport}
              />
            </div>
            <div className="col-md-4">
              <Select
                value={this.state.cadence}
                options={cadenceSelection}
                onChange={this.changeCadence}
              />
            </div>
            <button
              className="btn btn-primary col-md-1"
              style={{ float: 'right' }}
              onClick={() => this.createReport()}
              disabled={this.state.cadence === '' || this.state.report === ''}
            >Create</button></div>
          <div className="ibox-content"><Table
            data={reportsList}
            className="table table-striped"
          >
            <Column cell={<CheckmarkCell />} get={d => d.automated} header="Automated" />
            <Column cell={<TextCell />} get={d => d.name} header="Report" />
            <Column cell={<TextCell />} get={d => d.cadence} header="Cadence" />
            <Column
              cell={<TextCell />}
              get={(d) => {
                if (d.default) {
                  return `${d.default.version_name} (${moment(d.default.version).calendar()})`;
                } return 'No default template';
              }}

              header="Default"
            />
            <Column
              cell={<TextCell />}
              get={(d) => {
                if (d.default) {
                  return `${d.default.status}`;
                } return 'NO TEMPLATE';
              }}
              header="Template status"
            />
            <Column
              cell={<ButtonCell text="Edit" newTab={false} onClick={d => () => this.props.router.push(d)} />}
              get={d => `/admin-reports/report/${d.id}`}
              header=""
            />
            <Column
              cell={<ButtonCell
                text=""
                iconName="fa fa-trash"
                newTab={false}
                onClick={d => () => this.deleteReport(d)}
              />}
              get={d => d.id}
              header=""
            />
          </Table></div>
        </IBox></div>
    </div>);
  }
}

const { func, shape } = PropTypes;

RunSettings.propTypes = {
  templates: shape(),
  reports: shape(),
  loadTemplates: func,
  loadReports: func,
  createReport: func,
  deleteReport: func,
  router: shape(),
};

const mapStateToProps = state => ({
  templates: state.kvs.templates,
  reports: state.kvs.reports,
});

const mapDispatchToProps = dispatch => ({
  loadReports: () => dispatch(loadReports()),
  loadTemplates: () => dispatch(loadTemplates()),
  createReport: state => dispatch(createReport(state)),
  deleteReport: id => dispatch(deleteReport(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RunSettings);
