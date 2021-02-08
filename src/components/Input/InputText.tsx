import React, { useRef } from "react"

type InputTextProps = {
  label: string
  id?: string
  value: string
  type: string
  placeholder: string
  name: string
  error: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputText = ({
  label,
  id,
  onChange,
  error,
  ...props
}: InputTextProps) => {
  const refInput = useRef(null)

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id || ""}
      >
        {label}
      </label>
      <input
        ref={refInput}
        id={id || ""}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-600" : ""
        }`}
        {...props}
        onChange={onChange}
      ></input>
      {error ? <p className="text-red-600">uzupełnij pole</p> : null}
      <p></p>
    </div>
  )
}

InputText.defaultProps = {
  label: "",
  id: "",
  value: "",
  placeholder: "",
  type: "text",
  error: false,
}
