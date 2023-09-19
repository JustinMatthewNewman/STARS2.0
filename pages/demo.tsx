import { AnimatePresence, motion } from "framer-motion";
import { RadioGroup } from "@headlessui/react";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import toast, { Toaster } from "react-hot-toast";
import { gradient } from "@/components/Gradient";

/**
 * React Icons
 *
 * GiAmericanFootballHelmet
 * GiBasketballJersey
 * GiSoccerBall
 *
 */

import { GiAmericanFootballHelmet } from "react-icons/gi";
import { GiBasketballJersey } from "react-icons/gi";
import { GiSoccerBall } from "react-icons/gi";

import college from "../public/teams";

const sport = [
    { id: 1, name: "Football", icon: GiAmericanFootballHelmet },
    { id: 2, name: "Basketball", icon: GiBasketballJersey },
    { id: 3, name: "Soccer", icon: GiSoccerBall },
    // { id: 4, name: 'Lacrosse' },
    // { id: 5, name: 'FieldHockey' },
    // { id: 6, name: 'Track and Field' },
    // { id: 7, name: 'Volleyball' },
    // { id: 8, name: 'Swimming and Diving' },
    // { id: 9, name: 'Tennis' },
    // { id: 10, name: 'Golf' },
];

const plans = [
    {
        name: "Men",
    },
    {
        name: "Women",
    },
];

const graphics = [
    {
        id: 1,
        name: "ESPN",
        description: "Inspired by the work of Kelly Bowmaster.",
        difficulty: "Easy",
    },
    {
        id: 2,
        name: "HERO",
        description: "Inspired by the work of Kerry Nevins.",
        difficulty: "Easy",
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function DemoPage() {
    /**
     * Background grad
     */
    useEffect(() => {
        gradient.initGradient("#gradient-canvas");
    }, []);

    /**
     * Code for the select college combobox
     */

    const [selectedOrg, setSelectedOrg] = useState(college[0]);
    const [queryOrg, setQueryOrg] = useState("");

    const filteredCollege =
        queryOrg === ""
            ? college
            : college.filter((a) =>
                  a.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(queryOrg.toLowerCase().replace(/\s+/g, ""))
              );

    /**
     * Code for the select sport combobox
     */

    const [selectedSport, setSelectedSport] = useState(sport[0]);
    const [querySport, setQuerySport] = useState("");

    const filteredSport =
        querySport === ""
            ? sport
            : sport.filter((a) =>
                  a.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(querySport.toLowerCase().replace(/\s+/g, ""))
              );

    /**
     * Gender selection
     */
    const [selectedGender, setSelectedGender] = useState(plans[0]);

    /**
     * Code from template
     */
    const [selectedType, setSelectedType] = useState(graphics[0]);

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState("Processing");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isDesktop, setIsDesktop] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);
    }, []);

    if (step === 5) {
        toast.success("Successfully toasted!");
        console.log("Rendering");
    }

    return (
        <AnimatePresence>
            {step === 5 ? (
                <div className="w-full min-h-screen flex flex-col px-4 pt-2 pb-8 md:px-8 md:py-2 relative overflow-x-hidden">
                    <div>
                        <Toaster />
                    </div>
                    {completed ? (
                        <div className="w-full flex flex-col max-w-[1080px] mx-auto mt-[10vh] overflow-y-auto pb-8 md:pb-12">
                            <motion.div
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.35, ease: [0.075, 0.82, 0.165, 1] }}
                                className="relative md:aspect-[16/9] w-full max-w-[1080px] overflow-hidden bg-[#1D2B3A] rounded-lg ring-1 ring-gray-900/5 shadow-md flex flex-col items-center justify-center">
                                {/**
                                 *
                                 * CODE HERE
                                 *
                                 */}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.15,
                                    ease: [0.23, 1, 0.82, 1],
                                }}
                                className="flex flex-col md:flex-row items-center mt-2 md:mt-4 md:justify-between space-y-1 md:space-y-0">
                                <div className="flex flex-row items-center space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-[#407BBF] shrink-0">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                    <p className="text-[14px] font-normal leading-[20px] text-[#1a2b3b]">
                                        Graphics are not stored on our servers, and will go away as
                                        soon as you leave the page.
                                    </p>
                                </div>
                                <Link
                                    href="https://github.com/Tameyer41/liftoff"
                                    target="_blank"
                                    className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                                    style={{
                                        boxShadow:
                                            "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                                    }}>
                                    <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                                        <svg
                                            className="w-[16px] h-[16px] text-white"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"></path>
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5.5 6.5L12 12.25L18.5 6.5"></path>
                                        </svg>
                                    </span>
                                    Star on Github
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.15,
                                    ease: [0.23, 1, 0.82, 1],
                                }}
                                className="mt-8 flex flex-col">
                                <div className="mt-8">
                                    <h2 className="text-xl font-semibold text-left text-[#1D2B3A] mb-2">
                                        Feedback
                                    </h2>
                                </div>
                            </motion.div>
                        </div>
                    ) : (
                        <div className="h-full w-full items-center flex flex-col mt-[10vh]">
                            <div className="w-full flex flex-col max-w-[1080px] mx-auto justify-center">
                                <p>
                                    {" "}
                                    This App is currently under development. We are working
                                    diligently to convert our initial 1.0 java release to this fully
                                    functional web based platform.
                                    {" "}

                                </p>
                                <p>{selectedType.name}</p>
                                <p>{selectedOrg.name}</p>
                                <p>{selectedSport.name}</p>
                                <p>{selectedGender.name}</p>
                            </div>
                            {/**
                             * 
                             * CODE FOR THE RENDERING PROCESS
                             * 
                             */}
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex flex-col md:flex-row w-full md:overflow-hidden">
                    <div style={{zIndex: 3}} className="w-full min-h-[60vh] md:w-1/2 md:h-screen flex flex-col px-4 pt-2 pb-8 md:px-0 md:py-2 justify-center">
                        {/**
                         *
                         * LOGIC FOR MAIN STEPS PAGEs
                         *
                         */}
                         

                        <div className="h-full w-full items-center justify-center flex flex-col">
                            {step === 1 ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    key="step-1"
                                    transition={{
                                        duration: 0.95,
                                        ease: [0.165, 0.84, 0.44, 1],
                                    }}
                                    className="max-w-lg mx-auto px-4 lg:px-0">
                                    <h2 className="text-4xl font-bold text-[#1E2B3A]">
                                        Select a graphic type.
                                    </h2>
                                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                                        We have hundreds of graphic presets. Choose a type to get
                                        started.
                                    </p>
                                    <div>
                                        <RadioGroup
                                            value={selectedType}
                                            onChange={setSelectedType}>
                                            <RadioGroup.Label className="sr-only">
                                                Server size
                                            </RadioGroup.Label>
                                            <div className="space-y-4">
                                                {graphics.map((graphic) => (
                                                    <RadioGroup.Option
                                                        key={graphic.name}
                                                        value={graphic}
                                                        className={({ checked, active }) =>
                                                            classNames(
                                                                checked
                                                                    ? "border-transparent"
                                                                    : "border-gray-300",
                                                                active
                                                                    ? "border-blue-500 ring-2 ring-blue-200"
                                                                    : "",
                                                                "relative cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none flex justify-between"
                                                            )
                                                        }>
                                                        {({ active, checked }) => (
                                                            <>
                                                                <span className="flex items-center">
                                                                    <span className="flex flex-col text-sm">
                                                                        <RadioGroup.Label
                                                                            as="span"
                                                                            className="font-medium text-gray-900">
                                                                            {graphic.name}
                                                                        </RadioGroup.Label>
                                                                        <RadioGroup.Description
                                                                            as="span"
                                                                            className="text-gray-500">
                                                                            <span className="block">
                                                                                {
                                                                                    graphic.description
                                                                                }
                                                                            </span>
                                                                        </RadioGroup.Description>
                                                                    </span>
                                                                </span>
                                                                <RadioGroup.Description
                                                                    as="span"
                                                                    className="flex text-sm ml-4 mt-0 flex-col text-right items-center justify-center">
                                                                    <span className=" text-gray-500">
                                                                        {graphic.difficulty ===
                                                                        "Easy" ? (
                                                                            <svg
                                                                                viewBox="0 0 24 24"
                                                                                fill="currentColor"
                                                                                height="1em"
                                                                                width="1em">
                                                                                <path
                                                                                    fill="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                />
                                                                                <path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 01.215.062l4.355 2.772a.4.4 0 010 .674L7.615 15.11A.4.4 0 017 14.77V9.23a.4.4 0 01.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z" />
                                                                            </svg>
                                                                        ) : (
                                                                            <svg
                                                                                viewBox="0 0 24 24"
                                                                                fill="currentColor"
                                                                                height="1em"
                                                                                width="1em">
                                                                                <path
                                                                                    fill="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                />
                                                                                <path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zm-1 2H3v12h12V6zM7.4 8.829a.4.4 0 01.215.062l4.355 2.772a.4.4 0 010 .674L7.615 15.11A.4.4 0 017 14.77V9.23a.4.4 0 01.4-.4zM21 8.84l-4 2.8v.718l4 2.8V8.84z" />
                                                                            </svg>
                                                                        )}
                                                                    </span>
                                                                    <span className="font-medium text-gray-900">
                                                                        {graphic.difficulty}
                                                                    </span>
                                                                </RadioGroup.Description>
                                                                <span
                                                                    className={classNames(
                                                                        active
                                                                            ? "border"
                                                                            : "border-2",
                                                                        checked
                                                                            ? "border-blue-500"
                                                                            : "border-transparent",
                                                                        "pointer-events-none absolute -inset-px rounded-lg"
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            </>
                                                        )}
                                                    </RadioGroup.Option>
                                                ))}
                                            </div>
                                        </RadioGroup>
                                    </div>
                                    <div className="flex gap-[15px] justify-end mt-8">
                                        <div>
                                            <Link
                                                href="/"
                                                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
                                                style={{
                                                    boxShadow:
                                                        "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                                                }}>
                                                Back
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setStep(2);
                                                }}
                                                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                                                style={{
                                                    boxShadow:
                                                        "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                                                }}>
                                                <span> Continue </span>
                                                <svg
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.75 6.75L19.25 12L13.75 17.25"
                                                        stroke="#FFF"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M19 12H4.75"
                                                        stroke="#FFF"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : step === 2 ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    key="step-2"
                                    transition={{
                                        duration: 0.95,
                                        ease: [0.165, 0.84, 0.44, 1],
                                    }}
                                    className="max-w-lg mx-auto px-4 lg:px-0">
                                    <h2 className="text-4xl font-bold text-[#1E2B3A]">
                                        Select University.
                                    </h2>
                                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                                        Choose your college. You can always try again with another
                                        one.
                                    </p>
                                    <div className="z-2 w-72">
                                        <Combobox
                                            value={selectedOrg}
                                            onChange={setSelectedOrg}>
                                            <div className="relative mt-1">
                                                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                    <Combobox.Input
                                                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                        displayValue={(college) => college.name}
                                                        onChange={(event) =>
                                                            setQueryOrg(event.target.value)
                                                        }
                                                    />
                                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </Combobox.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                    afterLeave={() => setQueryOrg("")}>
                                                    <Combobox.Options
                                                        style={{ zIndex: 3 }}
                                                        className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {filteredCollege.length === 0 &&
                                                        queryOrg !== "" ? (
                                                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                Nothing found.
                                                            </div>
                                                        ) : (
                                                            filteredCollege.map((college) => (
                                                                <Combobox.Option
                                                                    key={college.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                            active
                                                                                ? "bg-teal-600 text-white"
                                                                                : "text-gray-900"
                                                                        }`
                                                                    }
                                                                    value={college}>
                                                                    {({ selectedOrg, active }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${
                                                                                    selectedOrg
                                                                                        ? "font-medium"
                                                                                        : "font-normal"
                                                                                }`}>
                                                                                {college.name}
                                                                            </span>
                                                                            {selectedOrg ? (
                                                                                <span
                                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                                        active
                                                                                            ? "text-white"
                                                                                            : "text-teal-600"
                                                                                    }`}>
                                                                                    <CheckIcon
                                                                                        className="h-5 w-5"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Combobox.Option>
                                                            ))
                                                        )}
                                                    </Combobox.Options>
                                                </Transition>
                                            </div>
                                        </Combobox>
                                    </div>
                                    <div className="flex gap-[15px] justify-end mt-8">
                                        <div>
                                            <button
                                                onClick={() => setStep(1)}
                                                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 z-0 duration-75"
                                                style={{
                                                    boxShadow:
                                                        "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                                                }}>
                                                Back
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setStep(3);
                                                }}
                                                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                                                style={{
                                                    boxShadow:
                                                        "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                                                }}>
                                                <span> Continue </span>
                                                <svg
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.75 6.75L19.25 12L13.75 17.25"
                                                        stroke="#FFF"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M19 12H4.75"
                                                        stroke="#FFF"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : step === 3 ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    key="step-3"
                                    transition={{
                                        duration: 0.95,
                                        ease: [0.165, 0.84, 0.44, 1],
                                    }}
                                    className="max-w-lg mx-auto px-4 lg:px-0">
                                    <h2 className="text-4xl font-bold text-[#1E2B3A]">
                                        Select Sport.
                                    </h2>
                                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                                        Choose your Sport. You can always try again with another
                                        one.
                                    </p>

                                    <div className="z-2 w-72">
                                        <Combobox
                                            value={selectedSport}
                                            onChange={setSelectedSport}>
                                            <div className="relative mt-1">
                                                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                    <Combobox.Input
                                                        className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                        displayValue={(sport) => sport.name}
                                                        onChange={(event) =>
                                                            setQueryOrg(event.target.value)
                                                        }
                                                    />
                                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                    </Combobox.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                    afterLeave={() => setQueryOrg("")}>
                                                    <Combobox.Options
                                                        style={{ zIndex: 3 }}
                                                        className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {filteredSport.length === 0 &&
                                                        querySport !== "" ? (
                                                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                Nothing found.
                                                            </div>
                                                        ) : (
                                                            filteredSport.map((sport) => (
                                                                <Combobox.Option
                                                                    key={sport.id}
                                                                    className={({ active }) =>
                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                            active
                                                                                ? "bg-teal-600 text-white"
                                                                                : "text-gray-900"
                                                                        }`
                                                                    }
                                                                    value={sport}>
                                                                    {({
                                                                        selectedSport,
                                                                        active,
                                                                    }) => (
                                                                        <>
                                                                            <span
                                                                                className={`block truncate ${
                                                                                    selectedSport
                                                                                        ? "font-medium"
                                                                                        : "font-normal"
                                                                                }`}>
                                                                                {sport.name}
                                                                            </span>
                                                                            {selectedSport ? (
                                                                                <span
                                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                                        active
                                                                                            ? "text-white"
                                                                                            : "text-teal-600"
                                                                                    }`}>
                                                                                    <CheckIcon
                                                                                        className="h-5 w-5"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Combobox.Option>
                                                            ))
                                                        )}
                                                    </Combobox.Options>
                                                </Transition>
                                            </div>
                                        </Combobox>
                                    </div>

                                    <div className="flex gap-[15px] justify-end mt-8">
                                        <div>
                                            <button
                                                onClick={() => setStep(2)}
                                                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 z-0 duration-75"
                                                style={{
                                                    boxShadow:
                                                        "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                                                }}>
                                                Back
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setStep(4);
                                                }}
                                                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                                                style={{
                                                    boxShadow:
                                                        "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                                                }}>
                                                <span> Continue </span>
                                                <svg
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.75 6.75L19.25 12L13.75 17.25"
                                                        stroke="#FFF"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M19 12H4.75"
                                                        stroke="#FFF"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    key="step-1"
                                    transition={{
                                        duration: 0.95,
                                        ease: [0.165, 0.84, 0.44, 1],
                                    }}
                                    className="max-w-lg mx-auto px-4 lg:px-0">
                                    <h2 className="text-4xl font-bold text-[#1E2B3A]">
                                        Select Gender.
                                    </h2>
                                    <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
                                        Some sports may not include both genders.
                                    </p>
                                    <div className="w-full px-4 py-16">
                                        <div className="mx-auto w-full max-w-md">
                                            <RadioGroup
                                                value={selectedGender}
                                                onChange={setSelectedGender}>
                                                <RadioGroup.Label className="sr-only">
                                                    Server size
                                                </RadioGroup.Label>
                                                <div className="space-y-2">
                                                    {plans.map((plan) => (
                                                        <RadioGroup.Option
                                                            key={plan.name}
                                                            value={plan}
                                                            className={({ active, checked }) =>
                                                                `${
                                                                    active
                                                                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                                                                        : ""
                                                                }
                                              ${
                                                  checked
                                                      ? "bg-sky-900 bg-opacity-75 text-white"
                                                      : "bg-white"
                                              }
                                                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                                            }>
                                                            {({ active, checked }) => (
                                                                <>
                                                                    <div className="flex w-full items-center justify-between">
                                                                        <div className="flex items-center">
                                                                            <div className="text-sm">
                                                                                <RadioGroup.Label
                                                                                    as="p"
                                                                                    className={`font-medium  ${
                                                                                        checked
                                                                                            ? "text-white"
                                                                                            : "text-gray-900"
                                                                                    }`}>
                                                                                    {plan.name}
                                                                                </RadioGroup.Label>
                                                                            </div>
                                                                        </div>
                                                                        {checked && (
                                                                            <div className="shrink-0 text-white">
                                                                                <CheckIcon className="h-6 w-6" />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </RadioGroup.Option>
                                                    ))}
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className="flex gap-[15px] justify-end mt-8">
                                        <div>
                                            <button
                                                onClick={() => setStep(3)}
                                                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 z-0 duration-75"
                                                style={{
                                                    boxShadow:
                                                        "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                                                }}>
                                                Back
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setStep(5);
                                                }}
                                                className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                                                style={{
                                                    boxShadow:
                                                        "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                                                }}>
                                                <span> Continue </span>
                                                <svg
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M13.75 6.75L19.25 12L13.75 17.25"
                                                        stroke="#FFF"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M19 12H4.75"
                                                        stroke="#FFF"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <motion.canvas
                    initial={{
                      filter: "blur(20px)",
                    }}
                    animate={{
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.075, 0.82, 0.965, 1],
                    }}
                    style={{
                      clipPath:
                        "polygon(100px 0,100% 0,calc(100% + 225px) 100%, 480px 100%)",
                      zIndex: 0
                    }}
                    id="gradient-canvas"
                    data-transition-in
                    className="z-50 fixed top-0 right-[-2px] w-[80%] md:w-1/2 h-screen bg-[#c3e4ff]"
                  ></motion.canvas>
                </div>
            )}
        </AnimatePresence>
    );
}
