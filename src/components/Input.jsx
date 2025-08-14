const Input = (props) => {
  return (
    <input
      className="border border-slate-300 outline-violet-400 px-4 py-2 rounded-md"
      {...props} // Spread operator assim passa todas as props para o input
      // type={type}
      // placeholder={placeholder}
      // value={value}
      // onChange={onChange}
      // Isso permite que você use o componente Input com diferentes tipos de input e propriedades
      // sem precisar definir cada uma delas manualmente.
    />
  );
};

export default Input;


//Outro exemplo de Input.jsx sem spread operator
//Sem spread operator
// const Input = ({ type, placeholder, value, onChange }) => {
//   return (
//     <input
//       className="border border-slate-300 outline-violet-400 px-4 py-2 rounded-md"
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//     />
//   );
// };

// export default Input;
