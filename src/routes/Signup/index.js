import { connect } from 'react-redux';
import { signup } from 'redux/User/actions';
import Form from './Signup';

const mapStateToProps = state => ({
  cards: state.accidents.data,
  error: state.user.error,
});

const mapDispatchToProps = {
  signup,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
