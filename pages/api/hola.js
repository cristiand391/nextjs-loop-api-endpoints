export default (req, res) => {
  res.statusCode = 200
  res.json({
    id: 668,
    lang: 'Spanish',
    greeting: 'Hola!'
  })
}

