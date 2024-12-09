const asyncHandler = (fn) => (req,res,next)=> Promise.then(fn(req,res,next)).catch((err) => next(err))

export { asyncHandler }
