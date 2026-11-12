import React from "react";
import { v4 as uuidv4} from 'uuid';
import formatTag from "../../utils/formatTag";

type selectFilterType = {label: string, value: string};

interface SelectFilterProps {
    /**
     * Name
     */
    name?: string,
    /**
     * Id
     */
    id?: string,
    /**
     * An array of options
     */
    filterOptions?: string[],
    /**
     * Filter ID
     */
    filterId?: string,
    setSelectedFilter?: any,
    selectedFilter?: string,
}

export const SelectFilter = ({
    filterOptions,
    setSelectedFilter,
    selectedFilter,
    filterId
}:SelectFilterProps) => {    

    const newfilterOptions = filterOptions ? filterOptions.map((option) => {
        return {
            label: option, 
            value: formatTag(option)
        }
    }) : []


    const newOptions: selectFilterType[] = newfilterOptions;

    const changeHandler = (event) => {
        event.preventDefault();
        setSelectedFilter(event?.currentTarget?.value);
    }

    return (
        <div className="relative">
            <select 
                aria-label={filterId + "-select"}
                name={filterId} id={filterId} className="select-filter bg-transparent px-4 py-2 font-transducer text-brandRedLighter dark:text-brandBlueLighter border border-brandRedLighter dark:border-brandBlueLighter w-full outline-none focus:ring-2 focus:ring-brandRedLighter focus:ring-opacity-50 dark:focus:ring-brandBlueLighter"
                onChange={(event) => changeHandler(event)} 
                value={selectedFilter }
            >
                {(Boolean(newOptions) && newOptions?.length > 0) &&
                    newOptions?.map((option) => {
                        let id = uuidv4();                                                                      
                        return (
                            <option value={option?.value} key={id}>
                                {option?.label}
                            </option>
                        )
                    })
                }
            </select>
            <svg
                aria-hidden="true"
                viewBox="0 0 10 6"
                className={"pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-brandRedLighter dark:text-brandBlueLighter"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.8 0.8L4.8 4.8L8.8 0.8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}