export default function Button({label, ...props}) {
  return <button {...props} className="hover:bg-stone-600 py-2 px-2 rounded-lg bg-stone-500 text-stone-50">
    {label}
  </button>;
  
}