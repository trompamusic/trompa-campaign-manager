import React, { Component, createRef } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ReduxPromise from "redux-promise";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { reducers } from "meld-clients-core/lib/reducers";
import Score from "meld-clients-core/lib/containers/score";
import { Button } from "@material-ui/core";
import NextPageButton from "selectable-score/lib/next-page-button.js";
import PrevPageButton from "selectable-score/lib/prev-page-button.js";

const createStoreWithMiddleware = applyMiddleware(thunk, ReduxPromise)(createStore);

const styles = {
  root: {
    display        : "flex",
    flexDirection  : "column",
    justifyContent : "center",
    width          : "100%",
    height         : "75%",
    backgroundColor: "#DDE3E9",
    padding        : 15,
    boxSizing      : "border-box",
  },
  fullScreen: {
    height: "100%",
  },
  container: {
    display        : "flex",
    justifyContent : "center",
    height         : '100%',
    width          : '100%',
    "& .scorepane ": {
      display        : "inline-block",
      backgroundColor: "white",

    },
  },
  scoreControl: {
    display       : "flex",
    justifyContent: "center",
  },
};

class ScoreContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uri                 : "",
      scoreComponentLoaded: false,
    };

    this.OPTIONS = {
      scale           : 15,
      adjustPageHeight: 1,
      pageHeight      : 2100,
      pageWidth       : 1480,
      footer          : "none",
      unit            : 7,
    };

    this.store          = createStore(reducers);
    this.scoreComponent = createRef();
    this.scoreContainer = createRef();
  }

  componentDidMount() {
    this.sizeScore();

    this.getScore();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.scoreComponentLoaded && this.scoreComponent.current) {
      this.setState({ scoreComponentLoaded: true });
    }
  }

  async getScore() {
    try {
      const uri      = `https://raw.githubusercontent.com/Crowd-Transcribed-MEI-Repositories/${this.props.pdfName}/crowdmanager/aligned.mei`;
      const response = await fetch(uri,{ method: "head" });

      if (response.ok) {
        this.setState({ uri });

        return;
      }

      console.log("Score not available yet");
    } catch (e) {
      console.log(e);
    }
  }

  sizeScore = () => {
    if (!this.scoreContainer.current) {
      return;
    }

    const containerWidth = this.scoreContainer.current?.clientWidth;
    const resizeValue    = this.props.fullScreen ? 40 : 15;

    this.OPTIONS.scale = containerWidth / resizeValue;
  };

  render() {
    const { classes, showControl, fullScreen } = this.props;
    const { uri }                              = this.state;

    return (
      <div
        className={classNames(classes.root, {
          [classes.fullScreen]: fullScreen,
        })}
      >
        <Provider store={createStoreWithMiddleware(reducers)}>
          <div ref={this.scoreContainer} className={classes.container}>
            {uri && (
              <Score
                uri={uri}
                key={"score" + fullScreen}
                options={this.OPTIONS}
                ref={this.scoreComponent}
              />
            )}
          </div>
          {showControl && (
            <div className={classes.scoreControl}>
              <Button>
                <PrevPageButton buttonContent={<span>prev</span>} uri={uri} />
              </Button>
              <Button>
                <NextPageButton buttonContent={<span>next</span>} uri={uri} />
              </Button>
            </div>
          )}
        </Provider>
      </div>
    );
  }
}

export default withStyles(styles)(ScoreContainer);
