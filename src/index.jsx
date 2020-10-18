(async () => {
  const {default: React} = await import("libs/react");
  const {default: ReactDOM} = await import("libs/react-dom");
  const {default: {Button}} = await import("libs/antd");

  function App() {
    return (
      <div>
        <h1>Hello,React!</h1>
        <Button type="primary">GOT IT!!</Button>
      </div>
    )
  }

  ReactDOM.render(<App/>, document.getElementById("root"))
})()