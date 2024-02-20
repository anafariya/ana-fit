"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { SearchMuscleGroupProps } from "../types";
import { Combobox, Transition } from "@headlessui/react";
import { muscleGroups } from "../constants";

const SearchMuscleGroup = ({ muscleGroup, setMuscleGroup }: SearchMuscleGroupProps) => {
  const [query, setQuery] = useState('');
  const filteredMuscleGroups = query === ""
    ? muscleGroups
    : muscleGroups.filter((item) =>
        item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <div className="flex gap-5 max-sm:w-full justify-start items-center">
      <Combobox
      value= {muscleGroup}
      onChange={setMuscleGroup}
      >
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px] right-[10px]">
            <Image
              src="/muscle.jpg"
              alt="Muscle pic"
              width={40}
              height={40}
              className="ml-4 mr-2"
            />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[48px] text-blue-900 pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Legs"
            displayValue={(muscleGroup: string) => muscleGroup}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {(
                filteredMuscleGroups.map((item) => (
                  <Combobox.Option
                  value={item}
                  key= {item}
                  className={({active}) => `relative cursor-default select-none py-2 pl-10 pr-4
                  ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMuscleGroup;
