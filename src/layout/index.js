import { connect } from 'react-redux';
import { logout, loginCheck, fetchUsers } from 'redux/User/actions';
import { fetchAccidents } from 'redux/Accidents/actions';
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
