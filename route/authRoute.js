const router=require('express').Router()
const {
    signUp,
    signIn,
    addClient,
    resetPassword,
    updateBusinessProfile,
    updateClientProfile,
    getBusinessProfile,
    getClientProfile,
    getClientsByBusinessOwner
}=require('../controller/authController')
const upload = require('../middleware/upload')

router.post('/sign-up',signUp)
router.post('/sign-in',signIn)
router.post('/add-client',addClient)
router.post('/reset-password',resetPassword)
router.post('/update-business-profile',upload.single('thumbnail_image'),updateBusinessProfile)
router.post('/update-client-profile',upload.single('thumbnail_image'),updateClientProfile)

router.get('/get-business-profile',getBusinessProfile)
router.get('/get-client-profile',getClientProfile)
router.get('/get-clients',getClientsByBusinessOwner)


module.exports=router