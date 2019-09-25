import { connect } from 'react-redux';
import { toggleLoader } from 'redux/User/actions';
import Home from './Home';

const mapDispatchToProps = {
  toggleLoader,
};

export default connect(
  null,
  mapDispatchToProps,
)(Home);
