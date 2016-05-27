import React from 'react';

const felds =[""]
const PrifilePage = React.createClass({
  render() {

    return (
      <div className="wrapper wrapper-content">
          <div className="row animated fadeInRight">
              <form>
                  <div className="col-md-4">
                      <div className="ibox float-e-margins">
                          <div className="ibox-title">
                              <h5>Profile Detail</h5>
                          </div>
                          <div>
                              <div className="ibox-content no-padding border-left-right">
                                  <img alt="image" className="img-responsive" src="img/profile_big.jpg"/>
                              </div>
                              <div className="ibox-content profile-content">
                                  <h4><strong>Monica Smith</strong></h4>
                                  <p><i className="fa fa-map-marker"></i> Riviera State 32/106</p>
                                  <h5>
                                      About me
                                  </h5>
                                  <p>
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.
                                  </p>
                                  <div className="user-button">
                                      <div className="row">
                                          <div className="col-md-6">
                                              <button type="button" className="btn btn-primary btn-sm btn-block"><i className="fa fa-envelope"></i> Send Message</button>
                                          </div>
                                          <div className="col-md-6">
                                              <button type="button" className="btn btn-default btn-sm btn-block"><i className="fa fa-coffee"></i> Buy a coffee</button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-8">
                      <div>

                      </div>
                  </div>
              </form>

          </div>

      </div>
    );
  }
});

export default PrifilePage;
