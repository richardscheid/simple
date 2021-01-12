import { v1 as uuidv1 } from 'uuid'
import multer from 'multer'
import path from 'path'

export const upload = multer({
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'files'),
    filename (req, file, callback) {
      const ext = path.extname(file.originalname)
      const name = uuidv1()
      return callback(null, `${name}${ext}`)
    }
  })
})
