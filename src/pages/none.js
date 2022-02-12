import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';

export default function NonePage() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ padding: "5%" }}>
                This page are not exsists
            </h1>
            <BiErrorCircle style={{ fontSize: "90px", color: "rgb(62, 23, 134)" }} />
        </div>
    )
}