import express from 'express';
import { CompanyDetails } from '../controller/auth.controller.js';
import { loginApi } from '../controller/auth.controller.js';
import { FeedModelFun } from '../controller/Feed.controller.js';
import { FeedMessagedisp } from '../controller/Feed.controller.js';
import { emailadd } from '../controller/email.controller.js';
import { employeeDataFunc } from '../controller/auth.controller.js';
import { employeedatafetch } from '../controller/Feed.controller.js';
import { EmployeeloginFunc } from '../controller/auth.controller.js';
import { leaveFunc } from '../controller/leave.controller.js';
import { leavefetch } from '../controller/leave.controller.js';
import { leavemailsend } from '../controller/leavemail.controller.js';
import { logout } from '../controller/auth.controller.js';

const router = express.Router();


router.post('/api/companydetails', CompanyDetails)
router.post('/api/login', loginApi)
router.post('/api/feed', FeedModelFun)
router.get('/feeds/:email', FeedMessagedisp);
router.post('/employee/add', emailadd);
router.post('/api/employeedata', employeeDataFunc);
router.get('/fetchdata/:email', employeedatafetch);
router.post('/api/emplogin', EmployeeloginFunc);
router.post('/api/empleave', leaveFunc);
router.get('/leave/:companyEmail', leavefetch);
router.post('/leavemail/acceptleave', leavemailsend); 
router.post('/logout/:email', logout); 

export default router;