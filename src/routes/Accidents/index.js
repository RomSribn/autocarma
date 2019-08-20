import { connect } from 'react-redux';
import Accidents from './Accidents';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
});

export default connect(mapStateToProps)(Accidents);
