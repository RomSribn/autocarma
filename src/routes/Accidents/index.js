import { connect } from 'react-redux';
import { gettingId, fetchUsers, dumpingAccident } from 'redux/Accidents/actions';
import Accidents from './Accidents';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
  users: state.accidents.users,
  currentId: state.accidents.currentId,
  images: state.accidents.images,
});

const mapDispatchToProps = {
  gettingId,
  fetchUsers,
  dumpingAccident,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Accidents);
