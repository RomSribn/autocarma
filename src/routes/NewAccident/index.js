import { connect } from 'react-redux';
import { setSubmitData, setCurrentMarker } from 'redux/Accidents/actions';
import NewAccident from './NewAccident';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
  currentMarker: state.accidents.currentMarker,
  user: state.user.user,
});

const mapDispatchToProps = {
  setSubmitData,
  setCurrentMarker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewAccident);
