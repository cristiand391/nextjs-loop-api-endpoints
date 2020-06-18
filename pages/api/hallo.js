export default (req, res) => {
  res.statusCode = 200
  res.json({
    id: 666,
    lang: 'German',
    greeting: 'Hallo!'
  })
}

