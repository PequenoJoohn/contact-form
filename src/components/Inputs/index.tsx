import { Dispatch, SetStateAction } from "react";

type InputProps = {
    title: string;
    placeholder: string;
    type: "text" | "button" | "checkbox" | "email" | "textarea";
    required?: boolean;
    value: Dispatch<SetStateAction<string>>;
}

export const Input = ({ title, placeholder, type, required, value }: InputProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-[#2b4246]">{title} <span className="text-[#87a3a6]">{required && "*"}</span></label>
            {type === "textarea" ?
                <textarea className={"px-3 py-4 border-solid border-black border-[1px] rounded-lg md:min-h-[160px]"}
                    placeholder={placeholder} required={required} onChange={(event) => value(event.target.value)} />
                :
                <input className={"px-3 py-4 border-solid border-[#2b4246] border-[1px] rounded-lg"}
                    type={type} placeholder={placeholder} required={required} onChange={(event) => value(event.target.value)} />
            }
        </div>
    )
}