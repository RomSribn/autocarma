import { connect } from 'react-redux';
import { login } from 'redux/Accidents/actions';
import Form from './Login';

const mapStateToProps = state => ({
  cards: state.accidents.data,
  error: state.accidents.error,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
