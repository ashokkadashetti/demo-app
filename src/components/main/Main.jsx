import React from "react";
import CardComp from "../../UI/CardComp";
import "./Main.css";
import { Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useTable } from "react-table";
import { PieChart, Pie, Cell, Legend } from "recharts";

export default function Main({ isDarkMode }) {

    const dataSaleChart = [
        { name: "Direct", value: 300.56, color: isDarkMode ? "#C6C7F8" : "#1C1C1C" },
        { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
        { name: "Sponsored", value: 154.02, color: "#95A4FC" },
        { name: "E-mail", value: 48.96, color: "#B1E3FF" },
    ];

    const markers = [
        { location: "New York", revenue: 72, coordinates: [151.2093, -33.8688] },
        { location: "San Francisco", revenue: 39, coordinates: [-95.7129, 37.0902] },
        { location: "Sydney", revenue: 25, coordinates: [104.1954, 35.8617] },
        { location: "Singapore", revenue: 61, coordinates: [-51.9253, -14.2350] },
    ];

    const maxRevenue = Math.max(...markers.map((item) => item.revenue));

    const data = [
        { month: "Jan", Projections: 20, Actuals: 18 },
        { month: "Feb", Projections: 21, Actuals: 17 },
        { month: "Mar", Projections: 22, Actuals: 18 },
        { month: "Apr", Projections: 20, Actuals: 18 },
        { month: "May", Projections: 18, Actuals: 15 },
        { month: "Jun", Projections: 20, Actuals: 15 },
    ];

    const data1 = [
        { month: 'Jan', value: 10, value2: 12 },
        { month: 'Feb', value: 15, value2: 18 },
        { month: 'Mar', value: 20, value2: 17 },
        { month: 'Apr', value: 25, value2: 22 },
        { month: 'May', value: 20, value2: 18 },
        { month: 'Jun', value: 22, value2: 25 },
    ];

    const dataTable = React.useMemo(
        () => [
            { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
            { name: "Marco Lightweight Shirt", price: 128.5, quantity: 37, amount: 4754.5 },
            { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
            { name: "Lightweight Jacket", price: 20.0, quantity: 184, amount: 3680.0 },
            { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            { Header: "Name", accessor: "name" },
            { Header: "Price", accessor: "price" },
            { Header: "Quantity", accessor: "quantity" },
            { Header: "Amount", accessor: "amount" },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: dataTable });

    const renderCards = (title, firstValue, secondsValue, className, icon) => {
        return (
            <CardComp className={className}>
                <Typography style={{ margin: 15 }}>{title}</Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography style={{ marginLeft: 15, fontSize: 18, fontWeight: 600, marginBottom: 15 }}>{firstValue}</Typography>
                    <Typography style={{ display: 'flex', alignItems: 'center', marginRight: 30, fontSize: 12 }}>{secondsValue}{icon}</Typography>
                </div>
            </CardComp >
        )
    }

    const normalizedData = data.map((entry) => ({
        ...entry,
        Actuals: entry.Projections - entry.Actuals <= 0 ? 0 : entry.Projections - entry.Actuals,
        Projections: entry.Projections,
    }));

    return (
        <>
            <div className="main-container">
                <CardComp isDarkMode={isDarkMode} >
                    <div className={!isDarkMode && "section-card"}>
                        <div className="grid-container">
                            {renderCards("Customer", "3,761", "+11.07%", "card-comp", <TrendingUpIcon style={{ color: 'gray', width: 20 }} />)}
                            {renderCards("Orders", "1,219", "-0.03%", isDarkMode ? "card-comp-1-darkmode" : "card-comp-1", <TrendingDownIcon style={{ color: 'gray', width: 20, transform: 'scaleX(-1)' }} />)}
                            {renderCards("Revenue", "$695", "+15.03%", isDarkMode ? "card-comp-2-darkmode" : "card-comp-2", <TrendingUpIcon style={{ color: 'gray', width: 20 }} />)}
                            {renderCards("Growth", "30.1%", "+6.08%", "card-comp-3", <TrendingUpIcon style={{ color: 'gray', width: 20 }} />)}
                        </div>
                    </div>
                </CardComp>

                <CardComp isDarkMode={isDarkMode}>
                    <div className={isDarkMode ? "section-card-chart-darkmode" : "section-card-chart"}>
                        <div style={{ textAlign: "start", marginLeft: 40 }}>
                            <Typography style={{ fontWeight: 500, paddingTop: 10 }}>Projections VS Actuals</Typography>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <BarChart
                                width={480}
                                height={200}
                                data={normalizedData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    ticks={[0, 10, 20, 30]}
                                    tickFormatter={(value) => `${value}M`}
                                    domain={[0, 30]}
                                />
                                <Tooltip />

                                <Bar dataKey="Projections" stackId="a" fill="#8884d8" barSize={40} />
                                <Bar dataKey="Actuals" stackId="a" fill="#82ca9d" barSize={40} />
                            </BarChart>
                        </div>
                    </div>
                </CardComp>
            </div>

            <div className="main-container-second-section">
                <CardComp isDarkMode={isDarkMode}>
                    <div className={isDarkMode ? "section-card-2-darkmode" : "section-card-2"}>
                        <div style={{ display: 'flex', padding: '20px 0px 15px 60px', alignItems: 'center' }}>
                            <Typography style={{ marginRight: 30 }}>Revenue &nbsp;&nbsp;|</Typography>
                            <li style={{ marginRight: 30, fontSize: 12 }}>Current Week $58,211</li>
                            <li style={{ marginRight: 30, fontSize: 12 }}>Previous Week $68,768</li>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <LineChart
                                width={650}
                                height={250}
                                data={data1}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    ticks={[0, 10, 20, 30]}
                                    tickFormatter={(value) => `${value}M`}
                                    domain={[0, 30]}
                                />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                    dot={false}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value2"
                                    stroke="#82ca9d"
                                    strokeWidth={2}
                                    dot={false}
                                    strokeDasharray="4 5"
                                />
                            </LineChart>
                        </div>
                    </div>
                </CardComp>

                <CardComp isDarkMode={isDarkMode}>
                    <div className={isDarkMode ? "section-card-chart-2-darkmode" : "section-card-chart-2"}>
                        <div>
                            <Typography style={{ display: 'flex', justifyContent: 'center', paddingTop: 5 }}>Revenue By Location</Typography>
                            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <ComposableMap>
                                    <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                                        {({ geographies }) =>
                                            geographies.map((geo) => (
                                                <Geography
                                                    key={geo.rsmKey}
                                                    geography={geo}
                                                    style={{
                                                        default: { fill: "#D6D6DA", outline: "none" },
                                                        hover: { fill: "#F53", outline: "none" },
                                                        pressed: { fill: "#E42", outline: "none" },
                                                    }}
                                                />
                                            ))
                                        }
                                    </Geographies>
                                    {markers.map(({ name, coordinates }) => (
                                        <Marker key={name} coordinates={coordinates}>
                                            <circle r={5} fill="red" stroke="#fff" strokeWidth={2} />
                                            <text
                                                textAnchor="middle"
                                                y={-10}
                                                style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: "10px" }}
                                            >
                                                {name}
                                            </text>
                                        </Marker>
                                    ))}
                                </ComposableMap>
                            </div>
                        </div>
                        {markers.map((item) => (
                            <div key={item.location} style={{ margin: "0px 30px 10px 30px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span>{item.location}</span>
                                    <span>{item.revenue}K</span>
                                </div>
                                <div
                                    style={{
                                        height: "5px",
                                        background: "gray",
                                        borderRadius: "5px",
                                        marginTop: "5px",
                                        position: "relative",
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "100%",
                                            width: `${(item.revenue / maxRevenue) * 100}%`,
                                            background: "#A8C5DA",
                                            borderRadius: "5px",
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardComp>
            </div>

            <div style={{ marginTop: 20 }} className="main-container-second-section-1">
                <CardComp isDarkMode={isDarkMode}>
                    <div className={isDarkMode ? "section-card-2-darkmode-table" : "section-card-2-table"}>
                        <Typography style={{ padding: '20px 0px 0px 20px', fontWeight: 600 }}>
                            Top Selling Products
                        </Typography>
                        <div style={{ overflowX: 'auto' }}>
                            <table
                                {...getTableProps()}
                                style={{
                                    margin: '10px 10px 0px 20px',
                                    width: "95%",
                                    textAlign: "left",
                                    borderCollapse: "collapse",
                                    color: isDarkMode ? "#fff" : "#000",
                                }}
                            >
                                <thead>
                                    {headerGroups.map((headerGroup) => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map((column) => (
                                                <th
                                                    {...column.getHeaderProps()}
                                                    style={{
                                                        color: "gray",
                                                        padding: "10px",
                                                        borderBottom: `1px solid ${isDarkMode ? "#FFFFFF0D" : "gray"}`,
                                                        backgroundColor: isDarkMode ? "#FFFFFF0D" : "#f9f9f9",
                                                    }}
                                                >
                                                    {column.render("Header")}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map((row) => {
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map((cell) => (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        style={{
                                                            padding: "10px",
                                                        }}
                                                    >
                                                        {cell.render("Cell")}
                                                    </td>
                                                ))}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardComp>

                <CardComp isDarkMode={isDarkMode}>
                    <div className={isDarkMode ? "section-card-chart-2-darkmode-1" : "section-card-chart-2-1"}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={{ margin: '10px 0px 10px -100px' }}>Total Sales</h3>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <PieChart width={160} height={160}>
                                    <Pie
                                        data={dataSaleChart}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        fill="#8884d8"
                                    >
                                        {dataSaleChart.map((entry, index) => (
                                            <Cell key={`cell - ${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </div>
                            <div
                                style={{
                                    margin: "0px 50px",
                                    display: "grid",
                                    gridTemplateColumns: "auto 100px",
                                    rowGap: "5px",
                                    alignItems: "center",
                                }}
                            >
                                {dataSaleChart.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <span style={{ display: "flex", alignItems: "center" }}>
                                            <span style={{ color: item.color, marginRight: 5 }}>●</span>
                                            {item.name}
                                        </span>
                                        <span style={{ marginLeft: 20, textAlign: "left" }}>${item.value.toFixed(2)}</span>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardComp>
            </div>

        </>
    );
}
