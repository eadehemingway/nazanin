import styled from "styled-components";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { BACKGROUND_COLOR } from "../data/CONSTANTS";

export function Legend({ options, icon }) {
    const [selected, setSelected] = useState(options[0]);

    return (
        <LegendWrapper className="legend">
            <div className="icon" style={{ backgroundImage: `url(${icon})` }}></div>
            <Listbox value={selected} onChange={setSelected}>
                <Listbox.Button>{selected.name}</Listbox.Button>
                <Listbox.Options>
                    {options.map((person) => (
                        <Listbox.Option key={person.id} value={person}>
                            {({ active, selected }) => (
                                <span
                                    className={`${
                                        active || selected ? "active" : "inactive"
                                    }`}
                                >
                                    {person.name}
                                </span>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </LegendWrapper>
    );
};

const LegendWrapper = styled.div`
    width: calc(100% - 10px);
    text-align: left;
    display: flex;
    flex-direction: row;
    position: relative;
    overflow: visible;
    font-size: 13px;
    margin-left: 10px;

    .icon {
        width: 15px;
        height: 15px;
        display: flex;
        align-self: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    button {
        background: ${BACKGROUND_COLOR};
        color: #ffffff;
        border: none;
        font-family: code-saver,sans-serif;
        text-align: left;
        width: calc(100% - 15px);
        margin-left: 15px;
        height: 60px;
        z-index: 1;
        padding: 10px 0px;
        cursor: pointer;
    }

    ul {
        position: absolute;
        top: 100%;
        margin: 0px 0px 0px 20px;
        padding: 0px;
        z-index: 2;
    }

    li {
        background: ${BACKGROUND_COLOR};
        list-style: none;
        border: 1px solid #333;
        color: #666;
        padding: 10px;
        margin-top: -1px;
        cursor: pointer;
    }

    .active {
        color: #fff;
    }
`;