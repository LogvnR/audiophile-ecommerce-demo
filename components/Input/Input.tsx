interface InputProps {
  title: string;
  typeOf: string;
  placeholder: string;
  onAction: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ typeOf, title, placeholder, onAction }: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-2 font-Manrope">
      <label
        htmlFor={title.replace(/\s+/g, '').toLowerCase()}
        className="text-xs font-bold tracking-tight text-black"
      >
        {title}
      </label>
      <div className=" px-6 py-4 border rounded-lg border-[#CFCFCF] focus-within:border-burnt-orange">
        <input
          id={title.replace(/\s+/g, '').toLowerCase()}
          type={typeOf}
          placeholder={placeholder}
          onChange={onAction}
          className="w-full text-sm font-bold tracking-tight text-black bg-transparent outline-none caret-burnt-orange placeholder:text-black/40"
        />
      </div>
    </div>
  );
};

export default Input;
