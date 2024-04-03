import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { UserHead as header } from "../../components/data";
import { deleteUser, getTableDataSearch } from "../../api/api";
import SubNavbar from "../../components/SubNavbar";
import { CSVLink, CSVDownload } from "react-csv";
import downloadImg from "../../assets/download.png";
import refreshBtn from "../../assets/refresh.png";
import Search from "../../components/Search";
import ReactPaginate from 'react-paginate';
import "./user.css"
const UserData = () => {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0);
  const [usersPerPage] = useState(10);
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await getTableDataSearch();
      const userData = response.data?.data;
      setUser(userData);
      console.log("userData", userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleRefresh = () => {
    setTimeout(() => {
      fetchData();
    }, 500);
  };
  const handleDelete = async (userId) => {
    setLoading(true);
    try {
      await deleteUser(userId);
      console.log("User deleted successfully");
      fetchData();
      setUser([...user]); // Force re-render by creating a new reference
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const indexOfLastUser = (currentPage + 1) * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

  const pageCount = Math.ceil(user.length / usersPerPage);
  const renderDownloadBtn = () => (
    <div className="flex space-x-4">
      <CSVLink data={user}>
        <img src={downloadImg} alt="downlaod"
        title="downlaod"
        />
      </CSVLink>
      <button onClick={handleRefresh}>
        <img src={refreshBtn} alt="refresh"
        title="Refresh"
        />
      </button>
    </div>
  );
  const rowRenderer = (product, index) => {
    const { id, name, email, phone_no, created_on } = product;

    const searchResults = [id, name, email, phone_no, created_on].filter(
      (field) => typeof field === "string"
    );
const displayIndex = index + 1
    const matchesSearchTerm = searchResults.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!matchesSearchTerm) {
      return null;
    }
    return (
      <>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {displayIndex}
        </td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{phone_no}</td>
        <td className="px-6 py-4">{created_on}</td>
        <td className="px-6 py-4 ">
          <button
            onClick={() => handleDelete(id)}
            className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
          >
           {loading? "  Deleting...": " Delete"}
          </button>
        </td>
      </>
    );
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Header />

      <SubNavbar downButton={renderDownloadBtn} />
      <Search handleSearch={handleSearch} />
      {loading? "Loading...." :
        <>
        <Table headers={header} data={currentUsers} rowrender={rowRenderer} />
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </>
      }
   
    </div>
  );
};

export default UserData;
