import { connect } from 'react-redux';
import { logout, loginCheck, toggleLoader } from 'redux/User/actions';
import { fetchAccidents, fetchUsers } from 'redux/Accidents/actions';
import Layout from './Layout.tsx';

const mapStateToProps = state => ({
  userCurrent: state.user.userCurrent,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = {
  logout,
  loginCheck,
  fetchAccidents,
  fetchUsers,
  toggleLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
