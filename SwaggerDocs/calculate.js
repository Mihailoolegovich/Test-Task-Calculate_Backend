/**
 * @swagger
 * tags:
 *   name: Calculate
 *   description: Calculate list management API
 */

/**
 * @swagger
 * components:
 *   value:
 *      type:Array
 */

/**
 * @swagger
 * /api/calculator:
 *   get:
 *     security:
 *       -bearerAuth: []
 *     summary: Get Calculate History
 *     tags: [Calculate]
 *     responses:
 *       204:
 *         description: The user was successfully log out.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /api/calculator/{id}:
 *   put:
 *     summary: Changing the data of the Calculate
 *     tags: [Calculate]
 *     parameters:
 *       -value: Array
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               -value
 *             properties:
 *               value:
 *                 type: Array
 *     responses:
 *       204:
 *         description: Product is deleted
 *       400:
 *         description: Some bad request.
 *       500:
 *         description: Some server error.
 */
