// import "./styles.css";
// import React, { useCallback, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Label, ResponsiveContainer} from "recharts";

const Statistics = () => {
    const getLSData = JSON.parse(localStorage.getItem('donateInfo'));
    const donatedLs = getLSData.length;

    const allData = useLoaderData();
    const totalData = allData.length;

    const data = [
        { name: "Group A", value: totalData-donatedLs},
        { name: "Group B", value: donatedLs},
    ];
    const COLORS = ["#FF444A", "#00C49F"];
    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,

    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
            >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
        );
    };
    return (
        <div >
            <div className="flex justify-center ">
                <ResponsiveContainer width="100%" height={450}>
                    <PieChart height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={180}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))
                            }
                                
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="md:flex gap-20 justify-center items-center mb-8">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-[#0B0B0B] text-lg font-normal">Your Donation</h2> 
                    <span className="bg-[#00C49F] w-16 h-2 rounded"></span>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-[#0B0B0B] text-lg font-normal">Total Donation</h2>
                    <span className="bg-[#FF444A] w-16 h-2 rounded"></span>
                </div>
            </div>
        </div>
    );
};






/* const Statistics = () => {
    return (
        <div className="mx-10 md:mx-24">
        </div>
    );
}; */

export default Statistics;

