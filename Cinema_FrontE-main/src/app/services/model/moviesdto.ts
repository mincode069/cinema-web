import { categorymoviedto } from "./categorymoviedto";

export class Moviesdto  {
    movieId!: string;
    movieName!: string;
    movieDescription!: string;
    duration!: Date;
    actor!: string;
    director!: string;
    image!: string;
    isShowing!:boolean
    releaseDate!: Date;
    endShowDate!:Date;
    isDeleted!:boolean
    categoryMovies =  [] as categorymoviedto[];
}

