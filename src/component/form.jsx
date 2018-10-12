import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stars from 'react-star-rating-component';
import * as LocalStorageHelper from '../helpers/local-storage-helpers';

export class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      typeScriptLevel: 0,
      isTypeScriptLover: 0,
      isFormSubmitted: false
    };
  }

  componentDidMount() {
    const user = LocalStorageHelper.read('user');

    this.setState({
      isTypeScriptLover: user.isTypeScriptLover,
      typeScriptLevel: user.typeScriptLevel
    });
  }

  onChangeField_isTypeScriptLover() {
    this.setState({ isTypeScriptLover: !this.state.isTypeScriptLover });
  }

  onChangeField_typeScriptLevel(value) {
    this.setState({ typeScriptLevel: value });
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
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Zapisz" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
