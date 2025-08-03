import express from 'express';
import { auth } from '../middlewares/auth.js';
import { generateArticle, generateBlogTitle, generateImage, removeImageBackground, removeImageObject, resumeReview } from '../controllers/aiController.js';
import { upload } from '../configs/multer.js';
const aiRouter=express.Router();

aiRouter.post('/generate-article',auth,generateArticle)
aiRouter.post('/generate-blog-title',auth,generateBlogTitle)
aiRouter.post('/generate-image',auth,generateImage)
aiRouter.post('/remove-image-background',upload.single('image'), auth,removeImageBackground)
aiRouter.post('/remove-image-object',upload.single('image'), auth,removeImageObject)
aiRouter.post('/resume-review',upload.single('resume'), auth,resumeReview)

export default aiRouter


// // --------------------------



// he je khali dilel aahe te run zal aahe pn youtube var jas var dil aahe tas aahe 
// import express from 'express';
// import { requireAuth } from '@clerk/express';
// import { generateArticle, generateBlogTitle, generateImage } from '../controllers/aiController.js';

// const router = express.Router();

// router.post('/generate-article', requireAuth(), generateArticle);
// router.post('/generate-blog-title',requireAuth(),generateBlogTitle)
// router.post('/generate-image',requireAuth(),generateImage)
// export default router;


// checj gpt