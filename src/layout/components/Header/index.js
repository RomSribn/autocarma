import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => ({
  accidents: state.accidents.accidents
});

// const mapDispatchToProps = {
//   logout
// };

export default connect(
  null,
  null
)(Header);
