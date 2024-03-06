import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { PropertiesHead as header } from "../../components/data";
import { Link } from "react-router-dom";
import { getProperties } from "../../api/api";
import SubNavbar from "../../components/SubNavbar";
import downloadImg from "../../assets/download.png";
import refreshBtn from "../../assets/refresh.png";
import { CSVLink, CSVDownload } from "react-csv";
import Search from "../../components/Search";
import { deleteProperties, updateProperties } from "../../api/api";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false)
  const renderProperties = async () => {
    setLoading(true)
    try {
      const response = await getProperties();

      const propertiesData = response.data?.data;
      console.log(propertiesData)
      setProperties(propertiesData);
    } catch (error) {
      console.error("Error fetching properties data:", error);
    } finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    renderProperties();
  }, []);
  const handleRefresh = () => {
    setTimeout(() => {
      renderProperties();
    }, 500);
  };
  const handleDelete = async (userId) => {
    setLoading(true)
    try {
      await deleteProperties(userId);
      renderProperties()
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }finally{
      setLoading(false)
    }
  };

  const rowRenderer = (product, index) => {
    const { id, title, created_on } = product;
    const searchResults = [title, created_on].filter(
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
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {title}
        </td>
        <td className="px-6 py-4">{created_on}</td>

        <td className="px-6 py-4 ">
          <button
            onClick={() => handleDelete(id)}
            className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
          >
           {loading? "Deleting.." : "Delete"}
          </button>
        </td>
        <td className="px-6 py-4 ">
        <td className="px-6 py-4 ">
          <Link
            to={`/edit_properties/${index}/${id}/`}
            
            className="font-medium text-yellow dark:text-red-500 hover:underline cursor-pointer"
          >
            Edit
          </Link>
        </td>
        </td>
        <td className="px-6 py-4 ">
          <Link
            to={`/reviews/${id}`}
            className="font-medium text-yellow dark:text-red-500 hover:underline cursor-pointer"
          >
            reviews
          </Link>
        </td>
      </>
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const renderDownloadBtn = () => (
    <div className="flex space-x-4">
      <CSVLink data={properties}>
        <img src={downloadImg} alt="downlaod" />
      </CSVLink>
      <button onClick={handleRefresh}>
        <img src={refreshBtn} alt="refresh" />
      </button>
      <Link to="/add_properties">Add New Property</Link>
    </div>
  );
  return (
    <div>
      <Header />
      <SubNavbar downButton={renderDownloadBtn} />
      <Search handleSearch={handleSearch} />
     {loading? "loading...." :
      <Table headers={header} data={properties} rowrender={rowRenderer} />
     }
    </div>
  );
};

export default Properties;
