import { connect } from 'react-redux';
import { login } from 'redux/User/actions';
import Form from './Login';

const mapStateToProps = state => ({
  cards: state.accidents.data,
  error: state.user.error,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
