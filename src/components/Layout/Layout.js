import React, { Component } from "react";

import Navigation from "./../Navigation/Navigation";
import Footer from "./Footer/Footer";

class Layout extends Component {

  onChangeLanguageHandler = lang => {
    const { onChangeLanguage } = this.props;
    onChangeLanguage(lang);
  };
  render() {
    const { languageSelected } = this.props;
    console.log('languageSelected :', languageSelected);
    return (
      <div>
        <Navigation
          languageSelected={languageSelected}

          onChangeLanguage={this.onChangeLanguageHandler}
        />
        {this.props.children}
        {/* <HomePage languageSelected={languageSelected} /> */}
        {/* <ProjectsPage languageSelected={languageSelected}/> */}
        <Footer  languageSelected={languageSelected} />
      </div>
    );
  }
}

export default Layout;
