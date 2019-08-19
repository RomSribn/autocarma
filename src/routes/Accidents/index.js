import { connect } from 'react-redux';
import Accidents from './Accidents';

const mapStateToProps = state => ({
  data: state.accidents.data,
});

export default connect(mapStateToProps)(Accidents);
