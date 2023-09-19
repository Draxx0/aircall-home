import Button from "./Button";

const GetFreeTryInput = () => {
  return (
    <div className="border border-gray-300 shadow-sm p-2 rounded-[32px] flex items-center justify-between gap-2 ">
      <input
        type="email"
        placeholder="Email professionnel"
        className="flex-1 outline-none text-secondary-500 leading-10 h-12 pl-2"
      />
      <Button text="Essai gratuit" theme="green" url="/" size="py-3" />
    </div>
  );
};

export default GetFreeTryInput;
