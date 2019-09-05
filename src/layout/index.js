import { connect } from 'react-redux';
import { logout, loginCheck } from 'redux/User/actions';
import { fetchAccidents, fetchUsers } from 'redux/Accidents/actions';
import Layout from './Layout.tsx';

const mapDispatchToProps = {
  logout,
  loginCheck,
  fetchAccidents,
  fetchUsers,
};

export default connect(
  null,
  mapDispatchToProps,
)(Layout);
