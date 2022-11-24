/**
 * @swagger
 * /api/fishes:
 *     get:
 *      tags:
 *        - Fish
 *      description: Get all fishes
 *      responses:
 *        200:
 *          description: Success
 */

/**
 * @swagger
 * /api/fishes:
 *     post:
 *      tags:
 *        - Fish
 *      description: Create new fish
 *      content:
 *        application/json
 *      parameters:
 *        - name: name
 *          type: string
 *          required: false
 *          in: formData
 *        - name: scientific_name
 *          type: string
 *          required: false
 *          in: formData
 *        - name: size_range
 *          type: string
 *          required: false
 *          in: formData
 *        - name: biology
 *          type: string
 *          required: false
 *          in: formData
 *        - name: environment
 *          type: string
 *          required: false
 *          in: formData
 *      responses:
 *        500:
 *          description: Error
 */

/**
 * @swagger
 * /api/fish/{id}:
 *     get:
 *        tags:
 *          - Fish
 *        description: Get fish by id
 *        parameters:
 *          - name: id
 *            type: string
 *            required: true
 *            in: path
 *        responses:
 *          500:
 *            description: Error
 */

/**
 * @swagger
 * /api/fish/{id}:
 *    patch:
 *      tags:
 *        - Fish
 *      description: Update fish with id
 *      parameters:
 *        - name: id
 *          type: string
 *          required: true
 *          in: path
 *        - name: name
 *          type: string
 *          required: false
 *          in: formData
 *        - name: price
 *          type: string
 *          required: false
 *          in: formData
 *        - name: rating
 *          type: number
 *          required: false
 *          in: formData
 *      responses:
 *        500:
 *          description: error
 */

/**
 * @swagger
 * /api/fish/{id}:
 *     delete:
 *        tags:
 *          - Fish
 *        description: Delete fish by id
 *        parameters:
 *          - name: id
 *            type: string
 *            required: true
 *            in: path
 *        responses:
 *          500:
 *            description: Error
 */
