import React, { FC } from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

export const ChildRFC: FC<ChildProps> = ({ color, onClick }) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>)
}

