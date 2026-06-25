import Evento from "../models/evento.js";

class EventosController {
  static listarEventos = async (req, res) => {
    try {
      const resultado = await Evento.pegarEventos();
      if (!resultado) {
        return res.status(404).send("Not found Events");
      }
      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };
}

export default EventosController;
