import { Dispatch, SetStateAction } from "react";

type InputProps = {
    title: string;
    required?: boolean;
    options: string[];
    selected: string;
    value: Dispatch<SetStateAction<string>>;
}

export const Radio = ({ title, required, options, value, selected }: InputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <fieldset>
                <legend>{title} {required && "*"}</legend>
            </fieldset>

            <div className="flex flex-col gap-4 md:flex-row">
                {options.map((option) => (
                    <div key={option} className={`w-full flex gap-4 px-6 py-4 border-solid ${selected === option ? "border-[#0c7d69] bg-[#dff1e7]" : "border-black"}  border-[1px] rounded-lg`}>
                        <div className={`relative ${selected === option && "after:absolute after:w-2 after:h-2 after:bg-[#0c7d69] after:rounded-full after:right-[2.5px] after:top-[6.5px]"}`}>
                            <input
                                name={"query"}
                                id={option} value={option}
                                type="radio"
                                className=""
                                required={required}
                                onChange={(event) => value(event.target.value)}
                            />
                        </div>
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}