import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import Hero from './Hero';

import './heroes.pcss';

class Heroes extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const pageCount = Math.floor(nextProps.totalHeroes / 10);
    if (prevState.pageCount !== pageCount) {
      return { pageCount };
    }
    return null;
  }
  constructor(props) {
    super(props);

    this.state = {
      pageCount: 0
    };

    this.navigate = this.navigate.bind(this);
    this.setHeroesContainerRef = this.setHeroesContainerRef.bind(this);
  }

  componentDidMount() {
    if (this.props.totalHeroes === null) {
      this.props.getHeroes();
    }
  }
  componentDidUpdate = (prevProps) => {
    console.log(prevProps.props, this.props);
    if (prevProps && prevProps.params.offset !== this.props.params.offset) {
      this.heroesContainer.scrollIntoView();
    }
  }

  setHeroesContainerRef(ref) {
    console.log(ref);
    this.heroesContainer = ref;
  }

  navigate(data) {
    const { selected } = data;
    const offset = Math.ceil(selected * 10);
    this.props.getHeroes({ offset });
  }


  render() {
    return (
      <section>
        <div className="mv-heroes__container" ref={this.setHeroesContainerRef}>
          {this.props.heroes.map(hero => (<Hero key={hero.id} {...hero} />))}
        </div>
        <div className="mv-heroes__pagination-container">
          <ReactPaginate
            previousLabel="<"
            nextLabel=">"
            breakClassName="break-me"
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.navigate}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        </div>
      </section>
    );
  }
}

export default Heroes;
