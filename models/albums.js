import mongoose from "mongoose"
const Schema = mongoose.Schema

const albumSchema = new Schema({
  artist: {type: String, required: true},
  title: {type: String, required: true},
  release_year: { type: Number}
})

const Album = mongoose.model("Album", albumSchema)

export {
  Album
}