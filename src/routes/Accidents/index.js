import { connect } from 'react-redux';
<<<<<<< HEAD
import { gettingId, fetchUsers, dumpingAccident } from 'redux/Accidents/actions';
=======
import { gettingId, fetchUsers } from 'redux/Accidents/actions';
>>>>>>> 56692bb4876071864cb36fb4ef631cf08248c37b
import Accidents from './Accidents';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
  users: state.accidents.users,
<<<<<<< HEAD
  currentId: state.accidents.currentId,
  images: state.accidents.images,
=======
>>>>>>> 56692bb4876071864cb36fb4ef631cf08248c37b
});

const mapDispatchToProps = {
  gettingId,
  fetchUsers,
<<<<<<< HEAD
  dumpingAccident,
=======
>>>>>>> 56692bb4876071864cb36fb4ef631cf08248c37b
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Accidents);
