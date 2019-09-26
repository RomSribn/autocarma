import { connect } from 'react-redux';
import { updateProfile } from 'redux/User/actions';
import Profile from './Profile';

const mapStateToProps = state => ({
  userCurrent: state.user.userCurrent,
});

const mapDispatchToProps = {
  updateProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
