'use client';

import { useCallback } from "react";
import Input from "./inputs/Input";
import { BiDollar } from 'react-icons/bi';
import { NumericFormat } from "react-number-format";


interface minMax{
    min:string,
    max:string
}

interface RangePriceProps {
    title: string;
    subtitle: string;
    value: minMax;
    onChange: (value: minMax) => void;
}

const RangePrice : React.FC<RangePriceProps> = ({
    title,
    subtitle,
    value,
    onChange
}) => {

    const {min, max} = value;

    const handlePrice = useCallback((result: any) => {
        if (result.target.id == "min") {
            onChange({min:result.target.value, max:max});
        }else {
            onChange({min:min, max:result.target.value});
        }
        
      }, [onChange, max, min]);

    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row  gap-4">
                <div className="w-full relative">
                    <label htmlFor="min">Min</label>
                    <NumericFormat
                      id="min"
                      value={min}
                      prefix="$"
                      thousandSeparator
                      placeholder="100,000"
                      onChange={handlePrice}
                      className={`
                            peer
                            w-full
                            p-2
                            pt-3
                            font-light
                            bg-white
                            border-2
                            rounded-md
                            outline-none
                            transition
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                            pl-3
                        `}
                    />
                </div>
                <div className="w-full relative">
                    <label htmlFor="max">Max</label>
                    <NumericFormat
                      id="max"
                      value={max}
                      prefix="$"
                      thousandSeparator
                      placeholder="100,000,000"
                      onChange={handlePrice}
                      className={`
                            peer
                            w-full
                            p-2
                            pt-3
                            font-light
                            bg-white
                            border-2
                            rounded-md
                            outline-none
                            transition
                            disabled:opacity-70
                            disabled:cursor-not-allowed
                            pl-3
                        `}
                    />
                </div>
            </div>
        </div>
    )
}

export default RangePrice;