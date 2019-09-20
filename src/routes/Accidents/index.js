import { connect } from 'react-redux';
import {
  dumpingAccident, filtering, gettingId, fetchUsers,
} from 'redux/Accidents/actions';
import Accidents from './Accidents';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
  users: state.accidents.users,
  currentId: state.accidents.currentId,
  images: state.accidents.images,
  filteredMarkers: state.accidents.filteredMarkers,
  user: state.user.user,
});

const mapDispatchToProps = {
  gettingId,
  fetchUsers,
  dumpingAccident,
  filtering,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Accidents);
