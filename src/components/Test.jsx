import React from "react";

export default class Test extends React.Component {
  //Exemplo de construtor
  //O construtor é um método especial que é chamado quando a classe é instanciada
  //Você pode usar o construtor para inicializar o estado do componente
  //Neste caso, estamos inicializando o estado com uma mensagem
  //Isso é útil para definir valores iniciais para as propriedades do componente
  //Você pode usar o construtor para inicializar o estado do componente
  //e definir métodos que serão usados no componente
  //Por exemplo, você pode definir um método para lidar com eventos, como cliques de botões
  //Isso é útil para definir a lógica do componente e como ele deve se comportar
  //Você pode usar o construtor para inicializar o estado do componente
  //e definir métodos que serão usados no componente
  //Por exemplo, você pode definir um método para lidar com eventos, como cliques de botões
  //Isso é útil para definir a lógica do componente e como ele deve se comportar
  constructor(props) {
    super(props);
    this.state = {
      message: "This is a test component",
    };
  }

  //Exemplo de método de ciclo de vida
  //Esse método é chamado quando o componente é montado no DOM
  //Você pode usar esse método para fazer chamadas de API, configurar assinaturas, etc.
  //Exemplo: console.log("Componente Teste montado");
  //Isso é útil para depuração ou inicialização de dados
  //Você pode usar o método componentDidMount para executar código quando o componente é montado
  //Por exemplo, você pode querer buscar dados de uma API quando o componente for montado
  //Isso é útil para inicializar o estado do componente com dados externos
  //Você pode usar o método componentDidMount para executar código quando o componente é montado
  componentDidMount() {
    console.log("Test component mounted");
  }

  render() {
    return (
      <div>
        <h1>Teste</h1>
        <p>Este é um componente de teste.</p>
      </div>
    );
  }
}
