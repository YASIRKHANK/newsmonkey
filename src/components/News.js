import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { ceil } from '@tensorflow/tfjs';
import Spiner from './Spiner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: PropTypes.string
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number

  }
 capitalizeFirstLetter = (str) =>{
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1
   
    }
    document.title = `$(this.capitalizeFirstLetter(this.props.category)) -  MonkeyNews`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2bb3e1ad6bb04862a47be2aa12a6cf08&page=1&pagesize=${this.props.pagesize} `;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      article: parseData.articles, totalResults: parseData.totalResults,
      loading: false
    });

  }

  async componentDidMount() {
    this.updateNews()
  }

  handlePreclick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews();
  }

  handleNextclick = async () => {

    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='mb-4 text-center'>NewsMonkey-Top Headlines</h2>
        {this.state.loading && <Spiner />}
        <div className='row'>
          {!this.state.loading && this.state.article?.map((element) => {

            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} discription={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page < 1} type="button" className="btn btn-dark" onClick={this.handlePreclick}>&larr; Previo{this.props.country}</button>
          <button disabled={this.state.page + 1 > ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
