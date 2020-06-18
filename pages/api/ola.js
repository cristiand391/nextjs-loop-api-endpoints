export default (req, res) => {
  res.statusCode = 200
  res.json({ 
    id: 669,
    lang: 'Brazilian Portuguese',
    greeting: 'Olá!'
  })
}

