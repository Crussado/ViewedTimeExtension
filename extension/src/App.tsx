import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log('useEffect');
    const handleMessage = (message: { type: number; }) => {
      // Manejar el mensaje recibido desde el script de fondo
      console.log('msg');
      console.log(message);
      if (message.type === 1) {
          console.log('RECEIVE');
      }
    };

    // Agregar un listener para manejar mensajes entrantes
    chrome.runtime.onMessage.addListener(handleMessage);

    // Retirar el listener cuando el componente se desmonta
    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []); // Ejecutar el efecto solo una vez al montar el componente
  return (
    <>
    <button className="btn">Button</button>
    <button className="btn btn-neutral">Neutral</button>
    <button className="btn btn-primary">Primary</button>
    <button className="btn btn-secondary">Secondary</button>
    <button className="btn btn-accent">Accent</button>
    <button className="btn btn-ghost">Ghost</button>
    <button className="btn btn-link">Link</button>
    </>
  )
}

export default App
