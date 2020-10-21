const CorsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-METHODS', 'POST, PUT, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  return next();
}

module.exports = CorsMiddleware;