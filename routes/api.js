import { Router } from 'express'
const router = Router()
import * as albumsCtrl from "../controllers/albums.js"

/* GET users listing. */
router.get('/albums', albumsCtrl.index)
router.get("/albums/:id", albumsCtrl.show)
router.post("/albums", albumsCtrl.create)
router.put("/albums/:id", albumsCtrl.update)
router.delete("albums/:id", albumsCtrl.delete)

export {
  router
}
