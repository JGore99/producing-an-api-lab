import { Album } from "../models/albums.js"

function index(req, res) {
  Album.find({})
  .then(albums => {
    res.status(200).json(albums)
  })
}

function show(req, res) {
  Album.findById(req.params.id)
  .then(album => {
    res.json(album)
  })
}

function create(req, res) {
  Album.create(req.body)
  .then(album => {
    res.json(album)
  })
  .catch(err => {
    res.json(err)
  })
}

function update(req, res) {
  Album.findByIdAndUpdate(req.params.id, req,body, {news: true})
  .then((album) => {
    res.json(album)
  })
}

function deleteAlbum(req, res) {
  Album.findByIdAndDelete(req.params.id)
  .then(album => {
    res.json(album)
  })
}

export {
  index,
  show,
  create,
  update,
  deleteAlbum as delete
}