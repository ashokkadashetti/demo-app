import React, { useState } from "react";
import { CalendarToday } from "@mui/icons-material";
import "./OrderList.css";
import { Typography } from "@mui/material";
import SearchTextField from "../../UI/SearchTextField";

import AddIcon from '@mui/icons-material/Add';
import StraightIcon from '@mui/icons-material/Straight';
import FilterListIcon from '@mui/icons-material/FilterList';

const orders = [
  { id: "#CM9801", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "#CM9802", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", color: "#28a745", status: "Complete", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
  { id: "#CM9803", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", icon: true, date: "1 hour ago", color: "#dc3545", status: "Pending", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: "#CM9804", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", color: "#007bff", status: "Approved", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", color: "#6c757d", status: "Rejected", avatar: "https://randomuser.me/api/portraits/women/46.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9806", user: "John Doe", project: "Website Redesign", address: "Sunset Blvd Los Angeles", date: "Last week", color: "#ffc107", status: "In Progress", avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { id: "#CM9807", user: "Jane Smith", project: "Mobile App", address: "Oak Street Chicago", date: "2 days ago", color: "#28a745", status: "Complete", avatar: "https://randomuser.me/api/portraits/women/48.jpg" },
];

export default function OrderList({ isDarkMode }) {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 8;

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`order-list-container ${isDarkMode ? 'dark' : 'light'}`}>
      <Typography
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isDarkMode ? '#FFFFFF0D' : '#F7F9FB',
          borderRadius: 5,
          height: 44,
          marginBottom: 20,
          color: isDarkMode ? '#ffffff' : '#000000',
        }}
      >
        <div style={{ display: 'flex' }}>
          <AddIcon
            style={{
              marginLeft: 15,
              marginRight: 15,
              width: 28,
              height: 28,
              color: isDarkMode ? '#ffffff' : '#000000',
            }}
          />
          <FilterListIcon
            style={{
              width: 28,
              height: 28,
              color: isDarkMode ? '#ffffff' : '#000000',
            }}
          />
          <div
            style={{
              marginLeft: 15,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <StraightIcon
              style={{
                width: 25,
                height: 25,
                marginRight: -23,
                color: isDarkMode ? '#ffffff' : '#000000',
              }}
            />
            <StraightIcon
              style={{
                width: 25,
                height: 25,
                transform: 'rotate(180deg)',
                color: isDarkMode ? '#ffffff' : '#000000',
              }}
            />
          </div>
        </div>
        <div style={{ marginRight: 10 }}>
          <SearchTextField
            stylesObj={{
              padding: '3px 10px',
              height: '28px',
              width: 160,
              borderRadius: 10,
              backgroundColor: isDarkMode ? '#333' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            }}
            endIcon={true}
          />
        </div>
      </Typography>

      <div className="order-list">
        <table>
          <thead>
            <tr>
              <th style={{ color: 'gray', fontSize: 12 }}><input style={{ width: 10, height: 10 }} type="checkbox" /></th>
              <th style={{ color: 'gray', fontSize: 12 }}>Order ID</th>
              <th style={{ color: 'gray', fontSize: 12 }}>User</th>
              <th style={{ color: 'gray', fontSize: 12 }}>Project</th>
              <th style={{ color: 'gray', fontSize: 12 }}>Address</th>
              <th style={{ color: 'gray', fontSize: 12 }}>Date</th>
              <th style={{ color: 'gray', fontSize: 12 }}>Status</th>
              <th style={{ color: 'gray', fontSize: 12 }}></th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={index}>
                <td style={{ fontSize: 12 }}><input style={{ width: 10, height: 10 }} type="checkbox" /></td>
                <td style={{ fontSize: 12 }}>{order.id}</td>
                <td style={{ fontSize: 12, display: 'flex', alignItems: 'center' }}>
                  <img src={order.avatar} alt={order.user} style={{ width: 24, height: 24, borderRadius: "50%" }} />
                  <span style={{ marginLeft: 10 }}>{order.user}</span>
                </td>
                <td style={{ fontSize: 12 }}>{order.project}</td>
                <td style={{ fontSize: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {order.address}
                    {order?.icon && <CalendarToday style={{ marginLeft: 5, width: 16, height: 16 }} />}
                  </div>
                </td>
                <td style={{ fontSize: 12, display: 'flex' }}>
                  <CalendarToday style={{ marginRight: 5, width: 16, height: 16 }} />
                  {order.date}
                </td>
                <td style={{ fontSize: 12 }}>
                  <span style={{ color: order.color }}>
                    <li>{order.status}</li>
                  </span>

                </td>
                <span className="status-extra">...</span>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="arrow-button"
        >
          &lt;
        </button>
        {pageNumbers.map(number => (
          <button
            style={{ fontSize: 14 }}
            key={number}
            onClick={() => handlePageChange(number)}
            className={`page-button ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="arrow-button"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

