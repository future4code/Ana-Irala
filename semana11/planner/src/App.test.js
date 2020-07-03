import React from "react";
import { render} from "@testing-library/react";
import App from "./App";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";

describe('Renderizacao inicial', () => {

  test('Renderiza tudo corretamente', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "text": "testando renderizar",
          "day": "1",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })

    const {
      getByPlaceholderText,
      findByText,
      getByText
    } = render(<App />)

    const input = getByPlaceholderText('Nova tarefa')
    expect(input).toBeInTheDocument()

    expect(getByText(/Criar/)).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalled()

    const tarefa = await findByText("testando renderizar")

    expect(tarefa).toBeInTheDocument()
  })
})
