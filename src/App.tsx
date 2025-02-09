import { Input } from "./components/Input";

export function App() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = formData.get("text");
    console.log(value);
  }

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <Input.Root>
          <Input.Label required>Label</Input.Label>
          <Input.Field
            name="text"
            placeholder="Digite aqui..."
            maxLength={500}
          />
          <Input.Counter maxLength={500} />
        </Input.Root>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
