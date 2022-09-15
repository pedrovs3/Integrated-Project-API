class ErrorsController {
  errorRoute(req, res) {
    res.status(404).json({ error: 'sla.' });
  }
}

export default new ErrorsController();
