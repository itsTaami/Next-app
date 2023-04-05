import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

interface IAwards {
  wins: number;
  nominations: number;
  text: String;
}
interface IMovie {
  title: String;
  genre: [String];
  runtime: number;
  cast: [String];
  poster: String;
  plot: String;
  languages: [String];
  released: Date;
  directors: [String];
  rated: String;
  awards: IAwards;
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [String];
  tomatoes: {
    viewer: { rating: number; numRevies: number; meter: number };
    fresh: number;
  };
  critic: { rating: number; numViewer: number; meter: number };
  rotten: number;
  lastUpdated: Date;
}

interface IMovies {
  movies: IMovie[];
}

export default function Movie({ movies }: IMovies) {
  return (
    <>
      <h1 className="text-purple-800 ">Welcome</h1>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:8005/movies");
//   const data = await res.json();
//   return {
//     props: { movies: data.movies },
//   };
// }
