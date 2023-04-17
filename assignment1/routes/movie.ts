import express, {
  Application,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";
import path from "path";
import fs from "fs";
import authenticateToken from "../userAuthorized";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  popularity: number;
  length: number;
  vote_average: number;
  genre_ids: [number];
  media_type:string;
  original_language:string;
}

interface Genre {
  id: number;
  name: string;
}
interface VideoListIf {
  id: number;
  videos: [];
}
interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

const app: Application = express();

// =========================================================

//read movie
const Movies = {
  all: function () {
    const filePath = path.join(__dirname, "../data/movieList.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent).map((movie: Movie) => ({
      ...movie,
      duration: Math.floor(Math.random() * 120) + 60, // Replace with actual duration calculation
    }));
  },
};

const movieList = Movies.all();
const PAGE_SIZE = 20;

//lấy movie list trending
app.get(
  "/api/movies/trending",
  authenticateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Lấy thông số trang hiện tại từ query string
      const currentPage = parseInt(req.query.page as string) || 1;

      // Tính vị trí bắt đầu và kết thúc của phần tử trên trang hiện tại
      const offset = (currentPage - 1) * PAGE_SIZE;
      const limit = PAGE_SIZE;

      // Lấy danh sách các film từ cơ sở dữ liệu và sắp xếp theo trường popularity giảm dần
      const movies = [...movieList]
        .sort((a: Movie, b: Movie) => b.popularity - a.popularity)
        .slice(offset, offset + limit);

      // Tính tổng số trang dựa trên số lượng phần tử và kích thước trang
      const totalMovies = movieList.length;
      const totalPages = Math.ceil(totalMovies / PAGE_SIZE);

      // Trả về danh sách các film và thông tin phân trang
      res.json({
        results: movies,
        //trả về thông tin page
        page: currentPage,
        total_pages: totalPages,
        //   pagination: {
        //     currentPage,
        //     totalPages,
        //     hasPrevPage: currentPage > 1,
        //     hasNextPage: currentPage < totalPages,
        //   },
      });
      res.status(200);
    } catch (error) {
      next(error);
    }
  }
);

// =========================================================
// lấy movie list top rate
app.get(
  "/api/movies/top-rate",
  authenticateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Lấy thông số trang hiện tại từ query string
      const currentPage = parseInt(req.query.page as string) || 1;

      // Tính vị trí bắt đầu và kết thúc của phần tử trên trang hiện tại
      const offset = (currentPage - 1) * PAGE_SIZE;
      const limit = PAGE_SIZE;

      // Lấy danh sách các film từ cơ sở dữ liệu và sắp xếp theo trường popularity giảm dần
      const movies = [...movieList]
        .sort((a: Movie, b: Movie) => b.popularity - a.popularity)
        .slice(offset, offset + limit);

      // Tính tổng số trang dựa trên số lượng phần tử và kích thước trang
      const totalMovies = movieList.length;
      const totalPages = Math.ceil(totalMovies / PAGE_SIZE);

      // Trả về danh sách các film và thông tin phân trang
      res.json({
        results: movies,
        //trả về thông tin page
        page: currentPage,
        total_pages: totalPages,
      });
      res.status(200);
    } catch (error) {
      next(error);
    }
  }
);

// =========================================================
//read genreList
const Genre = {
  all: function () {
    const filePath = path.join(__dirname, "../data/genreList.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent).map((genre: Genre) => genre);
  },
};

const genreList = Genre.all();
//Lấy các phim theo thể loại
app.get(
  "/api/movies/discover",
  authenticateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Lấy thông số trang hiện tại từ query string
      const currentPage = parseInt(req.query.page as string) || 1;

      //Lấy Gerne ID của thể loại muốn tìm
      const currentGenre = parseInt(req.query.genre as string);
      if (!currentGenre) {
        res.status(400).json({ message: "Not found genre param" });
        return;
      }

      // Tính vị trí bắt đầu và kết thúc của phần tử trên trang hiện tại
      const offset = (currentPage - 1) * PAGE_SIZE;
      const limit = PAGE_SIZE;

      // Lấy danh sách các film từ cơ sở dữ liệu và sắp xếp theo trường popularity giảm dần
      const movies = [...movieList]
        .filter((movie: Movie) => movie.genre_ids.includes(currentGenre))
        .slice(offset, offset + limit);

      const selectedGenre = genreList.find(
        (gen: Genre) => gen.id === currentGenre
      );
      if (!selectedGenre) {
        res.status(400).json({ message: "Not found that genre id" });
        return;
      }

      // Tính tổng số trang dựa trên số lượng phần tử và kích thước trang
      const totalMovies = movieList.length;
      const totalPages = Math.ceil(totalMovies / PAGE_SIZE);

      // Trả về danh sách các film và thông tin phân trang
      res.status(200).json({
        results: movies,
        //trả về thông tin page
        page: currentPage,
        total_pages: totalPages,
        genre_name: selectedGenre[0]?.name,
      });
    } catch (error) {
      next(error);
    }
  }
);
//get data từ video List
const Videos = {
  all: function () {
    const filePath = path.join(__dirname, "../data/videoList.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent).map((video: VideoListIf) => video);
  },
};
const videoList = Videos.all();

//accept json from body
app.use(express.json());

app.post(
  "/api/movies/video",
  authenticateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reqId = parseInt(req.body.film_id);
      if (!reqId && typeof reqId !== "string") {
        res.status(400).json({ message: "Not found film_id params" });
        return;
      }
      const filterListById = videoList.find(
        (item: VideoListIf) => item.id === reqId
      ).videos;
      const matchingVideos = filterListById.filter(
        (v: Video) =>
          v.official &&
          v.site === "YouTube" &&
          (v.type === "Trailer" || v.type === "Teaser")
      );
      if (matchingVideos.length === 0) {
        res.status(404).json({ message: "Not found video" });
        return;
      }
      // ==========================cach 1===============================
      // const latestVideo = matchingVideos.reduce((prev: Video, current: Video) => {
      //    return prev.published_at > current.published_at ? prev : current;
      // });
      // ==========================cach 2===============================
      const latestVideo = matchingVideos.sort(
        (a: Video, b: Video) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
      )[0];

      res.status(200).json({
        result: latestVideo,
      });
    } catch (error) {
      next(error);
    }
  }
);

//route search movies
app.post(
  "/api/movies/search",
  authenticateToken,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reqKeyWord =
        req.body.hasOwnProperty("keyword") && req.body.keyword
          ? req.body.keyword.toLowerCase()
          : null;

      //update
      const reqGenre = req.body.hasOwnProperty("genre") ? req.body.genre : null;
      const reqMediaType = req.body.hasOwnProperty("mediaType")
        ? req.body.mediaType.toLowerCase()
        : null;
      const reqLanguage = req.body.hasOwnProperty("language")
        ? req.body.language.toLowerCase()
        : null;
      const reqYear = req.body.hasOwnProperty("year") ? req.body.year : null;
      
      if (!reqKeyWord && typeof reqKeyWord !== "string") {
        res.status(400).json({ message: "Not found keyword params" });
        return;
      }
      const currentPage = parseInt(req.params.page) || 1;
      const offset = (currentPage - 1) * PAGE_SIZE;
      const limit = PAGE_SIZE;
      const movieListSearch = [...movieList]
      .filter((movie: Movie) => {
        // Tìm kiếm theo từ khóa
        const isMatchKeyword = (movie.title || "").replace(/\s+/g, "").toLowerCase().includes(reqKeyWord) ||
          (movie.overview || "").replace(/\s+/g, "").toLowerCase().includes(reqKeyWord);
    
        // Tìm kiếm theo thể loại
        const isMatchGenre = reqGenre ? movie.genre_ids.includes(genreList.find((genre:Genre) => genre.name === reqGenre)?.id || -1) : true;
    
        // Tìm kiếm theo loại phim
        const isMatchMediaType = reqMediaType ? movie.media_type === reqMediaType : true;
    
        // Tìm kiếm theo ngôn ngữ
        const isMatchLanguage = reqLanguage ? movie.original_language === reqLanguage : true;
    
        // Tìm kiếm theo năm phát hành
        const isMatchYear = reqYear ? new Date(movie.release_date).getFullYear() === parseInt(reqYear) : true;
    
        return isMatchKeyword && isMatchGenre && isMatchMediaType && isMatchLanguage && isMatchYear;
      })
        // .filter(
        //   (movie: Movie) =>
        //     (movie.title || "")
        //       .replace(/\s+/g, "")
        //       .toLowerCase()
        //       .includes(reqKeyWord) ||
        //     (movie.overview || "")
        //       .replace(/\s+/g, "")
        //       .toLowerCase()
        //       .includes(reqKeyWord)
        // )
        .slice(offset, limit + offset);
      const totalMovieSearch = movieListSearch.length;
      const totalPages = Math.ceil(totalMovieSearch / PAGE_SIZE);
      res.json({
        results: movieListSearch,
        //trả về thông tin page
        page: currentPage,
        total_pages: totalPages,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

const movieRoute: Router = app;
export { movieRoute };
