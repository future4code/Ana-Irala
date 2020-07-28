import React from "react";
import { render, wait} from "@testing-library/react";
import App from "./App";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";



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



describe('Criar uma tarefa no dia certo', () => {
  test('Cria a tarefa na segunda', async () => {
    axios.post = jest.fn().mockResolvedValue([
      {
        "text": "Lavar a louça",
        "day": "1"
      }
    ])

    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText("Nova tarefa")
    const select = getByTestId("select");
    const button = getByText(/Criar/);
  
    userEvent.type(input, "Lavar louça");
    userEvent.selectOptions(select, "1");
    userEvent.click(button);

  

    await wait(() => 
    expect(axios.post).toHaveBeenCalledTimes(1))
    await wait(() => 
    expect(input).toHaveValue("Lavar louça"))
  });

  test('Cria a tarefa na terça', async () => {
    axios.post = jest.fn().mockResolvedValue([
      {
        "text": "Fazer compras",
        "day": "2"
      }
    ])

    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText("Nova tarefa")
    const select = getByTestId("select");
    const button = getByText(/Criar/);
  
    userEvent.type(input, "Fazer compras");
    userEvent.selectOptions(select, "2");
    userEvent.click(button);

  

    await wait(() => 
    expect(axios.post).toHaveBeenCalledTimes(1))
    await wait(() => 
    expect(input).toHaveValue("Fazer compras"))
  });


  test('Cria a tarefa na quarta', async () => {
    axios.post = jest.fn().mockResolvedValue([
      {
        "text": "Dormir",
        "day": "3"
      }
    ])

    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText("Nova tarefa")
    const select = getByTestId("select");
    const button = getByText(/Criar/);
  
    userEvent.type(input, "Dormir");
    userEvent.selectOptions(select, "3");
    userEvent.click(button);

  

    await wait(() => 
    expect(axios.post).toHaveBeenCalledTimes(1))
    await wait(() => 
    expect(input).toHaveValue("Dormir"))
  });

  test('Cria a tarefa na quinta', async () => {
    axios.post = jest.fn().mockResolvedValue([
      {
        "text": "Natação",
        "day": "4"
      }
    ])

    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText("Nova tarefa")
    const select = getByTestId("select");
    const button = getByText(/Criar/);
  
    userEvent.type(input, "Natação");
    userEvent.selectOptions(select, "4");
    userEvent.click(button);

  

    await wait(() => 
    expect(axios.post).toHaveBeenCalledTimes(1))
    await wait(() => 
    expect(input).toHaveValue("Natação"))
  });

  test('Cria a tarefa na sexta', async () => {
    axios.post = jest.fn().mockResolvedValue([
      {
        "text": "Escalar uma montanha",
        "day": "5"
      }
    ])

    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText("Nova tarefa")
    const select = getByTestId("select");
    const button = getByText(/Criar/);
  
    userEvent.type(input, "Escalar uma montanha");
    userEvent.selectOptions(select, "5");
    userEvent.click(button);

  

    await wait(() => 
    expect(axios.post).toHaveBeenCalledTimes(1))
    await wait(() => 
    expect(input).toHaveValue("Escalar uma montanha"))
  });

  test('Cria a tarefa na sábado', async () => {
    axios.post = jest.fn().mockResolvedValue([
      {
        "text": "Aprender React",
        "day": "6"
      }
    ])

    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText("Nova tarefa")
    const select = getByTestId("select");
    const button = getByText(/Criar/);
  
    userEvent.type(input, "Aprender React");
    userEvent.selectOptions(select, "6");
    userEvent.click(button);

  

    await wait(() => 
    expect(axios.post).toHaveBeenCalledTimes(1))
    await wait(() => 
    expect(input).toHaveValue("Aprender React"))
  });

  test('Cria a tarefa na domingo', async () => {
    axios.post = jest.fn().mockResolvedValue([
      {
        "text": "Plantar uma árvore",
        "day": "7"
      }
    ])

    const {
      getByPlaceholderText,
      getByTestId,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText("Nova tarefa")
    const select = getByTestId("select");
    const button = getByText(/Criar/);
  
    userEvent.type(input, "Plantar uma árvore");
    userEvent.selectOptions(select, "7");
    userEvent.click(button);

  

    await wait(() => 
    expect(axios.post).toHaveBeenCalledTimes(1))
    await wait(() => 
    expect(input).toHaveValue("Plantar uma árvore"))
  });


  

  
})


