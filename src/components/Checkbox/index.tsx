import { Dispatch, SetStateAction } from "react";

type InputProps = {
    title: string;
    required?: boolean;
    options: string[];
    value: Dispatch<SetStateAction<string>>;
}

export const Checkbox = ({ title, required, options, value }: InputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <fieldset>
                <legend>{title} {required && "*"}</legend>
            </fieldset>

            <div className="flex flex-col gap-4 md:flex-row">
                {options.map((option) => (
                    <div key={option} className={"w-full flex gap-4 px-6 py-4 border-solid border-black border-[1px] rounded-lg"}>
                        <input name={"query"} id={option} value={option}
                            type="radio" required={required} onChange={(event) => value(event.target.value)} />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}