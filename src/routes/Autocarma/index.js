import { connect } from 'react-redux';
import Autocarma from './Autocarma';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
});

export default connect(mapStateToProps)(Autocarma);
