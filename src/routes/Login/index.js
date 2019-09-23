import { connect } from 'react-redux';
import { login, toggleLoader } from 'redux/User/actions';
import Form from './Login';

const mapStateToProps = state => ({
  cards: state.accidents.data,
  error: state.user.error,
});

const mapDispatchToProps = {
  login,
  toggleLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
