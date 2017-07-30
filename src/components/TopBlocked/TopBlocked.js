import React, { Component } from 'react';
import { api, makeCancelable } from '../../utils';

export default class TopBlocked extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total_blocked: 0,
      top_blocked: {}
    };

    this.updateChart = this.updateChart.bind(this);
  }

  updateChart() {
    this.updateHandler = makeCancelable(api.getTopBlocked(), { repeat: this.updateChart, interval: 10 * 1000 });
    this.updateHandler.promise.then(res => {
      this.setState({
        total_blocked: res.ads_blocked_today,
        top_blocked: res.top_ads
      });
    });
  }

  componentDidMount() {
    this.updateChart();
  }

  componentWillUnmount() {
    this.updateHandler.cancel();
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Top Blocked Domains
          </div>
          <div className="card-block">
            <div style={{overflowX: "auto"}}>
              <table className="table table-bordered">
                <tbody>
                <tr>
                  <th>Domain</th>
                  <th>Hits</th>
                  <th>Frequency</th>
                </tr>
                {
                  Object.keys(this.state.top_blocked).map((item, index) => {
                    const stat = this.state.top_blocked[item];
                    const percentage = stat / this.state.total_blocked * 100;
                    return (
                      <tr key={item}>
                        <td>
                          {item}
                        </td>
                        <td>
                          {stat.toLocaleString()}
                        </td>
                        <td>
                          <div className="progress progress-sm" title={percentage.toFixed(1) + "% of " + this.state.total_blocked.toLocaleString()}>
                            <div className="progress-bar bg-warning" style={{width: percentage + "%"}}/>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                }
                </tbody>
              </table>
            </div>
          </div>
          {
            this.state.total_blocked === 0
              ?
              <div className="card-img-overlay" style={{background: "rgba(255,255,255,0.7)"}}>
                <i className="fa fa-refresh fa-spin" style={{position: "absolute", top: "50%", left: "50%", fontSize: "30px"}}/>
              </div>
              :
              null
          }
        </div>
      </div>
    );
  }
}
