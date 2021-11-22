import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { genreApi } from "../apis/movie";
import Card from "../components/MovieCard";
import { search, inputSearch } from "../actions";
import { useSearchContext } from "../util/context";
const Search = ({ genres, searchResults, search, pages, inputSearch }) => {
  const [pagination, setPagination] = useState(1);
  const { search: s } = useSearchContext();
  useEffect(() => {
    if (s) {
      setPagination(1);
      return inputSearch(s, pagination);
    }
    search(pagination);
  }, [pagination, s]);

  return (
    <div className="search-con">
      <h1>search</h1>
      <div className="search-results">
        {searchResults?.map((data, i) => {
          return (
            <Card
              key={i}
              image={
                "https://image.tmdb.org/t/p/w220_and_h330_face/" +
                data?.poster_path
              }
              rate={data?.vote_average}
              title={data?.title}
              id={data?.id}
              genresArr={genres

                ?.filter(({ id, name }) => {
                  return data?.genre_ids.find(function (currId) {
                    if (currId == id) {
                      return name;
                    }
                  });
                })
                .filter(({ name }, i) => {
                  if (i <= 1) {
                    return name;
                  }
                })}
            />
          );
        })}
      </div>
      <div className="pagination">
        {pagination} of {pages}
      </div>
      <div
        className="button"
        onClick={() => {
          if (pagination !== 1) {
            setPagination(pagination - 1);
          }
        }}
      >
        prev
      </div>
      <div
        className="next"
        onClick={() => {
          setPagination(pagination + 1);
        }}
      >
        next
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    genres: state.genres,
    movies: state.cards,
    searchResults: state.search.data,
    pages: state.search.results,
  };
};
export default connect(mapStateToProps, { search, inputSearch })(Search);
