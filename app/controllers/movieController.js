const movieService = require("../services/movieService");
const slugify = require("slugify");
const multer = require("multer");
const upload = multer().single("gambar");

const getAllMovies = async (req, res) => {
  movieService
    .getAllMovies()
    .then((movies) => {
      res.status(200).json({
        status: "Success",
        message: "Success get all data movie",
        data: movies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

// const addMovie = async (req, res) => {
//   console.log(req.fields);
//   const {
//     nama,
//     tahun_rilis,
//     deskripsi,
//     resolusi,
//     durasi,
//     director,
//     studio_produksi,
//     genre_id,
//     rating_umur_id,
//     moviestatus_id,
//   } = req.body;

//   // casting to integer
//   const genre_id_int = parseInt(genre_id);
//   const rating_umur_id_int = parseInt(rating_umur_id);
//   const moviestatus_id_int = parseInt(moviestatus_id);
//   const tahun_rilis_int = parseInt(tahun_rilis);
//   const durasi_int = parseInt(durasi);

//   const gambar = req.file;

//   // casting to string
//   const slugNama = slugify(String(nama));

//   movieService
//     .addMovie({
//       nama: nama,
//       slug: slugNama,
//       tahun_rilis: tahun_rilis_int,
//       deskripsi: deskripsi,
//       resolusi: resolusi,
//       durasi: durasi_int,
//       director: director,
//       studio_produksi: studio_produksi,
//       genre_id: genre_id_int,
//       rating_umur_id: rating_umur_id_int,
//       moviestatus_id: moviestatus_id_int,
//       gambar: gambar.buffer,
//     })
//     .then((movies) => {
//       res.status(200).json({
//         status: "Success",
//         message: "Success add data movie",
//         data: movies,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         status: "Error",
//         message: "internal sever error",
//         data: err,
//       });
//     });
// };

const addMovie = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      // Error saat mengunggah gambar
      return res.status(500).json({ error: "Error uploading image" });
    }

    // Dapatkan data dari FormData
    const {
      nama,
      tahun_rilis,
      deskripsi,
      resolusi,
      durasi,
      director,
      studio_produksi,
      genre_id,
      rating_umur_id,
      moviestatus_id,
    } = req.body;

    // casting to integer
    const genre_id_int = parseInt(genre_id);
    const rating_umur_id_int = parseInt(rating_umur_id);
    const moviestatus_id_int = parseInt(moviestatus_id);
    const tahun_rilis_int = parseInt(tahun_rilis);
    const durasi_int = parseInt(durasi);

    const gambar = req.file; // File gambar yang diunggah

    const slugNama = slugify(nama);

    movieService
      .addMovie({
        nama: nama,
        slug: slugNama,
        tahun_rilis: tahun_rilis_int,
        deskripsi: deskripsi,
        resolusi: resolusi,
        durasi: durasi_int,
        director: director,
        studio_produksi: studio_produksi,
        genre_id: genre_id_int,
        rating_umur_id: rating_umur_id_int,
        moviestatus_id: moviestatus_id_int,
        gambar: gambar.buffer, // Menggunakan buffer dari req.file untuk mengakses data gambar
      })
      .then((movies) => {
        res.status(200).json({
          status: "Success",
          message: "Success add data movie",
          data: movies,
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: "Error",
          message: "Internal server error",
          data: err,
        });
      });
  });
};

module.exports = {
  addMovie,
};

const updateMovie = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      // Error saat mengunggah gambar
      return res.status(500).json({ error: "Error uploading image" });
    }

    // Dapatkan data dari FormData
    const {
      nama,
      tahun_rilis,
      deskripsi,
      resolusi,
      durasi,
      director,
      studio_produksi,
      genre_id,
      rating_umur_id,
      moviestatus_id,
      gambar,
    } = req.body;

    // casting to integer
    const genre_id_int = parseInt(genre_id);
    const rating_umur_id_int = parseInt(rating_umur_id);
    const moviestatus_id_int = parseInt(moviestatus_id);
    const tahun_rilis_int = parseInt(tahun_rilis);
    const durasi_int = parseInt(durasi);

    // const gambar = req.file; // File gambar yang diunggah

    const slugNama = slugify(nama);

    const { id } = req.params;

    movieService
      .updateMovie(
        {
          nama: nama,
          slug: slugNama,
          tahun_rilis: tahun_rilis_int,
          deskripsi: deskripsi,
          resolusi: resolusi,
          durasi: durasi_int,
          director: director,
          studio_produksi: studio_produksi,
          genre_id: genre_id_int,
          rating_umur_id: rating_umur_id_int,
          moviestatus_id: moviestatus_id_int,
          gambar: gambar, // Menggunakan buffer dari req.file untuk mengakses data gambar
        },
        id
      )
      .then((movies) => {
        res.status(200).json({
          status: "Success",
          message: "Success add data movie",
          data: movies,
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: "Error",
          message: "Internal server error",
          data: err,
        });
      });
  });
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  movieService
    .deleteMovie(id)
    .then((movies) => {
      res.status(200).json({
        status: "Success",
        message: "Success delete data movie",
        data: movies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getMoviePhotobyId = async (req, res) => {
  const { id } = req.params;

  movieService
    .getMoviePhotobyId(id)
    .then((movies) => {
      const image = movies.gambar;
      res.setHeader("Content-Type", "image/jpeg");
      // res.status(200).json({
      //   status: "Success",
      //   message: "Success get data movie",
      //   data: movies,
      // });
      res.send(image);
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getMoviebyId = async (req, res) => {
  const { id } = req.params;

  movieService
    .getMoviebyId(id)
    .then((movies) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data movie",
        data: movies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getMovieBySlug = async (req, res) => {
  const { slug } = req.params;

  movieService
    .getMovieBySlug(slug)
    .then((movies) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data movie",
        data: movies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getAllMoviesByGenreId = async (req, res) => {
  const { id } = req.params;

  movieService
    .getAllMoviesByGenreId(id)
    .then((movies) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data movie",
        data: movies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

module.exports = {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  getMoviePhotobyId,
  getMoviebyId,
  getMovieBySlug,
  getAllMoviesByGenreId,
};
