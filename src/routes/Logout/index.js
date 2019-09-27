import { connect } from 'react-redux';
import { logout } from 'redux/User/actions';
import Alert from './Alert.tsx';

const mapStateToProps = state => ({
  isLogout: state.user.isLogout,
});

const mapDispatchToProps = {
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert);
