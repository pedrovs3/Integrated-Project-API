class HomeController {
  index(req, res) {
    res.status(200).json({ teste: 'teste' });
  }
}

export default new HomeController();
