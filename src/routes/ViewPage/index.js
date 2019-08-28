import { connect } from 'react-redux';
import { dumpingId } from 'redux/Accidents/actions';
import ViewPage from './ViewPage';

const mapStateToProps = state => ({
  markers: state.accidents.markers,
  currentId: state.accidents.currentId,
  images: state.accidents.images,
});

const mapDispatchToProps = {
  dumpingId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewPage);
