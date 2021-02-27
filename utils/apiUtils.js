export default {}

export const errorResponse = (res) => res.status(406).json({})

export const successResponse = (res, data = {}) => res.status(200).json(data)
