import { connect } from 'react-redux';
<<<<<<< HEAD
import { dumpingAccident, filtering, gettingId } from 'redux/Accidents/actions';
import { fetchUsers } from 'redux/User/actions';
=======
import {
  gettingId, fetchUsers, dumpingAccident, filtering,
} from 'redux/Accidents/actions';
>>>>>>> develop
import Accidents from './Accidents';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
<<<<<<< HEAD
  users: state.user.users,
  currentId: state.accidents.currentId,
  images: state.accidents.images,
  filteredMarkers: state.accidents.filteredMarkers,
  user: state.user.user,
=======
  users: state.accidents.users,
  currentId: state.accidents.currentId,
  images: state.accidents.images,
  filteredMarkers: state.accidents.filteredMarkers,
  user: state.accidents.user,
>>>>>>> develop
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
