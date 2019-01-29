import React, { Component } from "react";
import "./Navigation.css";
import favicon from "./images/favicon.png";
import spainFlag from "./images/spain-flag-icon-32.png";
import englandFlag from "./images/united-kingdom-flag-icon-32.png";
import { Link } from "react-router-dom";
import { getText } from "./../../services/translation";
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navCollapsed: true
    };
  }
  onToggleNav = () => {
    this.setState({
      navCollapsed: !this.state.navCollapsed
    });
  };
  selectLanguage = lang => {
    const { onChangeLanguage } = this.props;
    onChangeLanguage(lang);
  };
  render() {
    const { navCollapsed } = this.state;
    const { languageSelected } = this.props;
    console.log("languadeSelected :", languageSelected);
    return (
      <div>
        <nav className="navbar fixed-top  navbar-expand-lg navbar-dark">
          {" "}
          <Link className="text-light mr-auto" to="/">
            <img src={favicon} style={{ width: "80px" }} alt="favicon am" />
          </Link>
          <div
            onClick={this.onToggleNav}
            className="navbar-toggler"
            role="button"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="nav__spans">
              <span className="nav_span--1" />
              <span className="nav_span--2" />
              <span className="nav_span--3" />
              <span className="nav_span--4" />
            </div>
          </div>
          <div
            className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li>
                <Link
                  className="nav-link hoverLine"
                  to={{
                    pathname: "/projects"
                  }}
                >
                  {getText("MENU_MY_PROJECTS", languageSelected)}
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hoverLine"
                  id="menuAbout"
                  href="#aboutMe"
                >
                  {getText("MENU_ABOUT_ME", languageSelected)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link hoverLine"
                  id="menuContact"
                  href="#contact"
                >
                  {getText("CONTACT", languageSelected)}
                </a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <a
                onClick={() => {
                  this.selectLanguage("esp");
                }}
                title="Spanish"
                className="nav-link text-white"
                id="spain"
                href="#"
              >
                <img src={spainFlag} alt="spain flag" />
              </a>
              <a
                onClick={() => {
                  this.selectLanguage("eng");
                }}
                title="English"
                className="nav-link text-white"
                id="england"
                href="#"
              >
                <img src={englandFlag} alt="england flag" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
