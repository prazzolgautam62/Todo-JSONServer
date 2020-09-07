import React, { Component } from 'react';
import { fetchUsers } from '../api/api';

class InfoPage extends Component {

  state = {
    loading: false,
    user: [],
    hasData: false,
  };

  getUsers = () => {
    this.setState({ ...this.state, loading: true });
    fetchUsers()
      .then(res => {
        const users = res.data.data;
        this.setState({ ...this.state, loading: false, hasData: true, user: users });
        console.log(res.data);

      })
      .catch(err => {
        console.error(err);
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="info-page">
        <div className="title">Collaborators</div>
        {this.state.loading && <p>Loading Please wait..</p>}

        {this.state.hasData && (
          <React.Fragment>
            {this.state.user.map((item) => {
              return (
                <div key={item.id} className="user-info flex ci">
                  <div className="avatar">
                    <img src={item.avatar} alt="" />
                  </div>
                  <div>
                    <div className="name">
                      {item.first_name} {item.last_name}
                    </div>
                    <div className="email">{item.email}</div>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default InfoPage;