import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoviesComp from '../Components/Movies';

import {
  getMovies
} from '../store/Actions';

const mapStateToProps = state => {
  return {
    moviesList: state.moviesReducer.moviesList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMovies: bindActionCreators(getMovies, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesComp);