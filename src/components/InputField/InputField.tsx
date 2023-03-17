import "./InputField.scss";

// I create the interface so that I can define the type of my props on line 9
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>; // I get the type of setTodo when hovering it in App.tsx line 6
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          required
          className="input__box"
        />
        <label className="input__box__label">Enter a task</label>
        <button type="submit" className="input__submit">
          GO
        </button>
      </form>
    </div>
  );
};

export default InputField;
