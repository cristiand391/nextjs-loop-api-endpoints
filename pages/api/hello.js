export default (req, res) => {
  res.statusCode = 200
  res.json({
    id: 667,
    lang: 'English',
    greeting: 'Hello!'
  })
}
