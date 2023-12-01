import { Router } from 'express';
import usersController from './users.controller';

const router = Router();

/**
 * @swagger
 * /users/:
 *  get:
 *    description: Get a user data or all users data. If you not pass the `userId` in query, then it will return all users data.
 *    summary: Get a user data or all users data
 *    tags:
 *      - users
 *    parameters:
 *      - name: userId
 *        in: query
 *        required: false
 *        type: number
 *      - name: debug
 *        in: query
 *        required: false
 *        type: number
 *        description: 'For Developer, default 1 for checked'
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request, possibly because wrong argument(s) passed
 */
router.get('/', usersController.get);

/**
 * @swagger
 * /users/:
 *  post:
 *    summary: Create a new user
 *    description: Create a new user, the required body is just a `name` key in an object
 *    tags:
 *      - users
 *    parameters:
 *      - name: debug
 *        in: query
 *        required: false
 *        type: number
 *        description: 'For Developer, default 1 for checked'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: salman
 *            required:
 *              - name
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request, possibly because wrong argument(s) passed
 */
router.post('/', usersController.post);

/**
 * @swagger
 * /users/:
 *  put:
 *    summary: Update a user
 *    description: Update a user, the the `userId` pass in the body is required
 *    tags:
 *      - users
 *    parameters:
 *      - name: debug
 *        in: query
 *        required: false
 *        type: number
 *        description: 'For Developer, default 1 for checked'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: salman
 *              userId:
 *                type: integer
 *                example: 1
 *            required:
 *              - name
 *              - userId
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request, possibly because wrong argument(s) passed
 */
router.put('/', usersController.put);
/**
 * @swagger
 * /users/:
 *  delete:
 *    summary: delete a user
 *    description: delete a user, the the `userId` must pass in the body
 *    tags:
 *      - users
 *    parameters:
 *      - name: debug
 *        in: query
 *        required: false
 *        type: number
 *        description: 'For Developer, default 1 for checked'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              userId:
 *                type: integer
 *                example: 1
 *            required:
 *              - userId
 *    responses:
 *      200:
 *        description: Success
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request, possibly because wrong argument(s) passed
 */
router.delete('/', usersController.del);

export default router;
