import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieDetailsComp from '../Components/MovieDetails';

import {
  getMovieDetail,
} from '../store/Actions';

const mapStateToProps = state => {
  return {
    movieDetail: state.moviesReducer.movieDetail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMovieDetail: bindActionCreators(getMovieDetail, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComp);