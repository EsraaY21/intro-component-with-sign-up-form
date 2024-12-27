import IconError from "./icons/IconError";

function InputField({ type, placeholder, value, onChange, error, name }) {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={error ? "error" : ""}
      />

      {error && (
        <>
          <span className="error-icon">
            <IconError />
          </span>
          <p className="error-message">{error}</p>
        </>
      )}
    </div>
  );
}

export default InputField;
