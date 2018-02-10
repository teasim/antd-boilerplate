import React from "react";
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { StatelessDropdown, ButtonGroup, Button, Icon } from "teasim";
import { createStructuredSelector } from "reselect";
import { makeSelectAuthUser } from "app/actions/auth/index";
import userManager from "app/helpers/userManager";

class UserDropdownMenu extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isOpened: false
    }

    this.setReference = this.setReference.bind(this)

    this.handleToggle = this.handleToggle.bind(this)
    this.handleWindowClick = this.handleWindowClick.bind(this)
    this.handleLogoutClicked = this.handleLogoutClicked.bind(this)
  }

  componentDidMount () {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
    window.addEventListener('click', this.handleWindowClick)
    window.addEventListener('touchend', this.handleWindowClick)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.handleWindowClick)
    window.removeEventListener('touchend', this.handleWindowClick)
  }

  setReference (elem) {
    this.dropdown = elem
  }

  handleWindowClick (event) {
    const node = ReactDOM.findDOMNode(this.dropdown)
    if (event.target !== node && !node.contains(event.target) && this.state.isOpened) {
      this.handleHide()
    }
  }

  handleToggle (event) {
    event.preventDefault()
    if (this.state.isOpened) {
      this.handleHide()
    } else {
      this.handleShow()
    }
  }

  handleHide () {
    this.setState({
      isOpened: false
    })
    if (this.props.onHide) this.props.onHide()
  }

  handleShow () {
    this.setState({ isOpened: true })
    if (this.props.onShow) this.props.onShow()
  }

  handleLogoutClicked (event) {
    event.preventDefault();
    userManager.removeUser();
  }

  render() {
    const { user } = this.props;
    const { isOpened } = this.state;

    const content = (
      <div className="dw-wide" >{JSON.stringify(user.profile, null, 2)}</div>
    )

    return (
      <StatelessDropdown 
        ref={this.setReference}
        isOpened={isOpened}
        content={content}>
        <ButtonGroup outline size="medium" skin="default">
          <Button onClick={this.handleToggle}>
            {user ? user.profile.given_name : "Unknown"}
          </Button>
          <Button 
            quadrate
            onClick={this.handleLogoutClicked}>
            <Icon name="setting"/>
          </Button>
        </ButtonGroup>
      </StatelessDropdown>
    );
  }
}

UserDropdownMenu.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectAuthUser()
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(UserDropdownMenu);
