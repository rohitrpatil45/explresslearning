import express from 'express'
import { userLogin, userSign } from '../controller.js'


const router = express.Router()                 

router.get('/login', userLogin)
router.get('/signin', userSign)

export default router