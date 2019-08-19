import { connect } from 'react-redux';
import { setMarkersCoordinates } from 'redux/Accidents/actions';
import Autocarma from './Autocarma';

const mapStateToProps = state => ({
  coordinates: state.accidents.coordinates,
});

const mapDispatchToProps = {
  setMarkersCoordinates,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Autocarma);
