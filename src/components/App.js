import React from 'react'
import ReactGA from 'react-ga'
import { connect } from 'react-redux'
import { Tab, Tabs } from 'react-bootstrap'
import GithubCorner from 'react-github-corner'
import '../styles/App.scss'
import Settings from './Settings'
import strings from '../helpers/localization'
import SparkCalculator from './SparkCalculator'
import { Japanese } from '../helpers/constants'
import { SET_LANGUAGE } from '../helpers/actions'
import ExperienceCalculator from './ExperienceCalculator'

class App extends React.Component {
  componentWillMount() {
    if (this.props.languageCode === Japanese) {
      this.props.changeLanguage(Japanese)
    }
  }

  handleTabSelect = (tabKey) => {
    ReactGA.modalview(tabKey)
  }

  render() {
    return (
      <div className="container mt-md-3">
        <Tabs defaultActiveKey="spark" onSelect={this.handleTabSelect}>
          <Tab eventKey="spark" title={strings.SparkCalc}>
            <SparkCalculator language={this.props.languageCode} />
          </Tab>
          <Tab eventKey="exp" title={strings.ExpRpCalc}>
            <ExperienceCalculator language={this.props.languageCode} />
          </Tab>
          <Tab eventKey="settings" title="Settings/設定">
            <Settings />
          </Tab>
        </Tabs>
        <GithubCorner
          href="https://github.com/eurea/eurea.github.io"
          bannerColor="#0288D1"
          target="_blank"
          rel="noreferrer" />
      </div>
    )
  }
}

export default connect((state) => ({
  languageCode: state.languageCode
}), (dispatch) => ({
  changeLanguage: (language) => dispatch({ type: SET_LANGUAGE, payload: language })
}))(App)
