import { connect } from 'react-redux';
import ViewPage from './ViewPage';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
  currentId: state.accidents.currentId,
  images: state.accidents.images,
});

export default connect(
  mapStateToProps,
  null,
)(ViewPage);
