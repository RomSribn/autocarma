import { connect } from 'react-redux';
import { gettingId, fetchUsers } from 'redux/Accidents/actions';
import Accidents from './Accidents';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
});

const mapDispatchToProps = {
  gettingId,
  fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Accidents);
