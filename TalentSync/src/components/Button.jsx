
export default function Button({addtionalClassName,buttonText}) {
  return (
    <button className={` flex py-[.875rem] px-6 items-center  justify-center rounded-[6.25rem] border border-gray400 shadow-gray900 ${addtionalClassName}`}>
        {buttonText}
    </button>
  )
}
