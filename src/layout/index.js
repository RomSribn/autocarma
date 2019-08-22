import { connect } from 'react-redux';
import { logout, loginCheck, fetchAccidents } from 'redux/Accidents/actions';
import Layout from './Layout';

const mapDispatchToProps = {
  logout,
  loginCheck,
  fetchAccidents,
};

export default connect(
  null,
  mapDispatchToProps,
)(Layout);
