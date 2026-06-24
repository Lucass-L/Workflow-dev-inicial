import { describe, it, expect, jest } from "@jest/globals";
import Evento from "../../models/evento.js";

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Evento teste',
    descricao: "Descrica do evento teste",
    data: '2026-06-24',
    autor_id: 1,
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining(objetoEvento),
    );
  });
})

