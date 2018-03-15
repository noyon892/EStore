-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2018 at 05:47 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `estore`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `phone` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `gender` varchar(128) NOT NULL,
  `dob` date NOT NULL,
  `nid` varchar(256) NOT NULL,
  `presentaddress` varchar(256) NOT NULL,
  `parmanentaddress` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `productname` varchar(256) NOT NULL,
  `price` int(8) NOT NULL,
  `quantity` int(8) NOT NULL,
  `catagory` varchar(64) NOT NULL,
  `image1` varchar(256) DEFAULT NULL,
  `image2` varchar(256) DEFAULT NULL,
  `image3` varchar(256) DEFAULT NULL,
  `details` varchar(8192) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `productname`, `price`, `quantity`, `catagory`, `image1`, `image2`, `image3`, `details`) VALUES
(2, 'Sony HD 4K Smart LED TV', 350, 1, 'Electronics', NULL, NULL, NULL, ''),
(3, 'Biskut', 12, 200, 'Food', NULL, NULL, NULL, 'Lohar Biskut'),
(6, 'Amazfit Bip smart watch', 4800, 1, 'Electronics', NULL, NULL, NULL, 'Watch'),
(7, 'Touhid', 10, 1, 'Men', NULL, NULL, NULL, 'lsiddlsfuklh'),
(8, 'Shanto\'s Ball', 2, 2, 'Men', NULL, NULL, NULL, 'Nice Soft Black Punchable'),
(9, 'Watch', 200, 12, 'Electronics', NULL, NULL, NULL, 'Abc');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `username` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `address` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `email`, `password`, `phone`, `address`) VALUES
(30, 'Md. Hasan Uzzaman', 'noyon', 'noyon892@gmail.com', 'sha1$57f1ff4a$1$ba87cb8290a3bafe3d283d25f4a33d22e681cb2f', '01733844422', 'Mahajon Bari,Affratpara,Chatmohar,Pabna'),
(31, 'Md. Hasan Uzzaman', 'noyon892', 'noyon@gmail.com', 'sha1$3ea3ed64$1$43ed3d8b7e5f8c07163bc5e0c8c7d1005c77de2e', '01733844422', 'Mahajon Bari,Affratpara,Chatmohar,Pabna'),
(32, 'Md. Hasan Uzzaman', 'noyon8920', 'noyon8920@gmail.com', 'sha1$56996c2c$1$a9abbf21a11ce77b4952a2e18d00bdbd27d3e605', '01733844422', 'Mahajon Bari,Affratpara,Chatmohar,Pabna'),
(33, 'Souvik', 'souvik420', 'Souvik420@gmail.com', 'sha1$066daa5e$1$d341b8bf72a59ce10a256fc5d92a584a6a74ace4', '01768864040', 'Kahalu,Bogura'),
(34, 'Md. Hasan Uzzaman', 'jame', 'jame@gmail.com', 'sha1$381f4664$1$81c2590f85491f6fb0275dfc3a065fc1b85e4ab7', '01733844422', 'Mahajon Bari,Affratpara,Chatmohar,Pabna');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
