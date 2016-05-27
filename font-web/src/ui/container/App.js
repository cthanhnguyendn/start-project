import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getSession } from 'reducers/authentication';
import { setLocale } from 'reducers/locale';
import { locales } from 'config/translation';
import 'react-virtualized/styles.css';

//import '../../assets/stylus/main.styl';

var LocaleSwitcher = ({currentLocale, onLocaleChange}) => (
    <select value={currentLocale} onChange={e => onLocaleChange(e.target.value)}>
        {locales.map(lang => <option key={lang} value={lang}>{lang}</option>)}
    </select>
);

const TopMenu = (props) => {
    const items = props.items.map((item, key) => (
        <li key={key} className="pure-menu-item">
            <Link to={item.link} className="pure-menu-link">{item.label}</Link>
        </li>
    ));
    return (
        <nav className="navbar navbar-static-top" role="navigation" style={{'margin-bottom': 0}}>
            <div className="navbar-header">
                <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                <form role="search" className="navbar-form-custom" action="http://webapplayers.com/inspinia_admin-v2.3/search_results.html">
                    <div className="form-group">
                        <input style={{height: 47}} type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search"/>
                    </div>
                </form>
            </div>
            <ul className="nav navbar-top-links navbar-right">
                {items}
            </ul>

        </nav>
    );
};

export class App extends Component {

    componentDidMount() {
        this.props.getSession();
    }

    render() {
        const {currentLocale, setLocale} = this.props;
        const menuItems = [
            {label: 'Home', link: '/'},
            this.props.isAuthenticated ?
            {label: 'Logout', link: '/logout'} : {label: 'Login', link: '/login'},
            {label: 'Private page', link: '/private'},
            {label: 'User Management', link: '/usersystem/user'},
            this.props.isAuthenticated ?{label:"My Profile",link:"/profile"}:{label: 'Register', link: '/register'}
        ];

        return (
        <div>
            <div id="page-wrapper" className="gray-bg dashbard-1">
                <TopMenu items={menuItems} currentLocale={currentLocale} setLocale={setLocale}/>
                {this.props.children}
            </div>

        </div>
        );
    }
}

export default connect(
    state => ({isAuthenticated: state.authentication.isAuthenticated, currentLocale: state.locale.currentLocale}),
    {getSession, setLocale}
)(App);
