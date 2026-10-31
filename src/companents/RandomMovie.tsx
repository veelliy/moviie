import { useState } from "react";

export interface Movie {

    id: string | number;

    title: string;

    year?: number | string;

    genre?: string;

    poster?: string;

    posterUrl?: string;

}

interface RandomMovieProps {

    matches: Movie[];
    onMovieSelected: () => void

}

export default function RandomMovie({

    matches,
    onMovieSelected

}: RandomMovieProps) {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [previousMovieId, setPreviousMovieId] = useState<string | number | null>(null);
    const [isRolling, setIsRolling] = useState(false);

    function chooseRandomMovie() {
        if (matches.length === 0 || isRolling) {

            return;

        }

        // Выбираем фильмы, которые можно показать

        const availableMovies: Movie[] =

            matches.length > 1 && previousMovieId !== null

                ? matches.filter(

                    (movie) => movie.id !== previousMovieId

                )

                : matches;

        // Случайный индекс

        const randomIndex = Math.floor(

            Math.random() * availableMovies.length

        );

        // Выбираем фильм

        const randomMovie = availableMovies[randomIndex];

        setIsRolling(true);

        setTimeout(() => {
            setSelectedMovie(randomMovie);
            setPreviousMovieId(randomMovie.id);
            setIsRolling(false);
            onMovieSelected();
        }, 400);
    }

    if (matches.length === 0) {

        return (

            <section className="random-movie">
                <h2>🎲 Случайный фильм</h2>
                <p>
                    У вас пока нет общих любимых фильмов.
                </p>
                <button disabled>
                    Нет совпадений
                </button>
            </section>

        );

    }

    return (

        <section className="random-movie">

            <h2>🎲 Не можете определиться?</h2>

            <p>

                Доверьте выбор случайности!

            </p>

            <button

                className="random-movie__button"

                onClick={chooseRandomMovie}

                disabled={isRolling}

            >

                {isRolling

                    ? "Выбираем фильм..."

                    : selectedMovie

                        ? "Выбрать другой фильм"

                        : "🎬 Случайный фильм"}

            </button>

            {selectedMovie && (

                <div className="random-movie__result">

                    <h3>Ваш фильм на сегодня!</h3>

                    {(selectedMovie.posterUrl ||

                        selectedMovie.poster) && (

                            <img

                                className="random-movie__poster"

                                src={

                                    selectedMovie.posterUrl ||

                                    selectedMovie.poster

                                }

                                alt={selectedMovie.title}

                            />)
                    };

                    {
                        <h2>{selectedMovie.title}</h2>
                    }

                    {selectedMovie.year && (

                        <p>{selectedMovie.year}</p>

                    )}

                    {selectedMovie.genre && (

                        <p>{selectedMovie.genre}</p>

                    )}

                </div>

            )}

        </section>)
}
