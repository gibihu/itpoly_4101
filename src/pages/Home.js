import React from "react";

export default function Home({name, description, img}) {
    return(
        <div className="flex items-start gap-4">
            <img
                src={img}
                alt={name}
                className="size-20 rounded-lg object-cover"
            />
            <div className="text-start">
                <h3 className="text-lg/tight font-medium text-gray-900">{name}</h3>
                <p className="mt-0.5 text-gray-700"> {description} </p>
            </div>
        </div>
    );
}