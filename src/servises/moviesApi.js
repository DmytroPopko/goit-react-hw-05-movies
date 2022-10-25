import axios from "axios";

const KEY = "990b4ef8640f5bcf548f0b301d2ca53d";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function fetchMovies() {
  const response = await axios("trending/all/day?", {
    params: {
      api_key: KEY,
    },
  });
  // console.log(response);
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios(`movie/${id}?`, {
    params: {
      api_key: KEY,
    },
  });
  // console.log(response);
  return response.data;
}

export async function fetchMovieCredits(id) {
  const response = await axios(`movie/${id}/credits?`, {
    params: {
      api_key: KEY,
    },
  });
  // console.log(response);
  return response.data;
}

export async function fetchMovieReviews(id) {
  const response = await axios(`movie/${id}/reviews?`, {
    params: {
      api_key: KEY,
    },
  });
  // console.log(response);
  return response.data;
}

export async function fetchMoviesByName(keyword) {
  const response = await axios(`search/movie?`, {
    params: {
      api_key: KEY,
      query: keyword,
    },
  });
  return response.data.results;
}
