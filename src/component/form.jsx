import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stars from 'react-star-rating-component';
import * as LocalStorageHelper from '../helpers/local-storage-helpers';

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      typeScriptLevel: 0,
      isTypeScriptLover: 0,
      reactLevel: 0,
      isReactLover: 0,
      isFormSubmitted: false
    };
  }

  componentDidMount() {
    const user = LocalStorageHelper.read('user');

    this.setState({
      isTypeScriptLover: user.isTypeScriptLover,
      typeScriptLevel: user.typeScriptLevel,
      isReactLover: user.isReactLover,
      reactLevel: user.reactLevel,
    });
  }

  onChangeField_isTypeScriptLover() {
    this.setState({ isTypeScriptLover: !this.state.isTypeScriptLover });
  }

  onChangeField_typeScriptLevel(value) {
    this.setState({ typeScriptLevel: value });
  }

  onChangeField_isReactLover() {
    this.setState({ isReactLover: !this.state.isReactLover });
  }

  onChangeField_reactLevel(value) {
    this.setState({ reactLevel: value });
  }

  onSubmit(evt) {
    evt.preventDefault();

    LocalStorageHelper.create('user', this.state);

    this.setState({
      isFormSubmitted: true
      // typeScriptLevel: value
    });
  }

  render() {
    const userId = this.props.match.params.NAZWA;
    return (
      <div>
        <h2>User profile ({userId})</h2>
        <Link to="/">Home</Link>

        {this.state.isFormSubmitted && (
          <div className="alert alert-success">
            <h3>Success!</h3>
          </div>
        )}

        <div className="jumbotron">
          <form onSubmit={evt => this.onSubmit(evt)}>

            <div className="form-group form-check">
            <h3>TypeScript</h3>
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="1"
                  name="isTypeScriptLover"
                  checked={this.state.isTypeScriptLover}
                  onChange={() => this.onChangeField_isTypeScriptLover()}
                />
                Do you prefer TypeScript?
              </label>
            </div>
            What is your TypeScript level?
            <div className="form-group display-4">
              <Stars
                name="typeScriptLevel"
                value={this.state.typeScriptLevel}
                onStarClick={value => this.onChangeField_typeScriptLevel(value)}
              />
            </div>

            <div className="form-group form-check">
            <h3>React</h3>
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="1"
                  name="isReactLover"
                  checked={this.state.isReactLover}
                  onChange={() => this.onChangeField_isReactLover()}
                />
                Do you prefer React?
              </label>
            </div>
            What is your React level?
            <div className="form-group display-4">
              <Stars
                name="reactLevel"
                value={this.state.reactLevel}
                onStarClick={value => this.onChangeField_reactLevel(value)}
              />
            </div>

            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Zapisz" />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export { FormComponent };
