import { connect } from 'react-redux';
import { setSubmitData, setCurrentMarker } from 'redux/Accidents/actions';
import NewAccident from './NewAccident';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
  currentMarker: state.accidents.currentMarker,
  userCurrent: state.user.userCurrent,
});

const mapDispatchToProps = {
  setSubmitData,
  setCurrentMarker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewAccident);
