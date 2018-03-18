-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2018 at 10:18 AM
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

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `email`, `phone`, `password`, `gender`, `dob`, `nid`, `presentaddress`, `parmanentaddress`) VALUES
(1, 'Noyon', 'shanto', 'shanto@gmail.com', '', 'sha1$ebb2bdc9$1$d77148ab8c6268c2f43b5fafdfa3f0405bd24306', 'male', '1996-05-24', '19979972342363842', 'H-23,R-4,Nikunja-2,Khilkhet,Dhaka', 'Dhaka'),
(2, 'arnob', 'arnob', 'ar@gmIL.COM', '', 'sha1$f77072c1$1$ffafbbe013a168ccde2c4c3ee99cc322e05854c6', 'male', '9843-12-12', '3245465756543', 'wgbnb,hstr', 'geawaiuobvgair,gaer');

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
  `details` varchar(8192) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `productname`, `price`, `quantity`, `catagory`, `image1`, `image2`, `image3`, `details`, `date`) VALUES
(2, 'Sony HD 4K Smart LED TV', 350, 1, 'Electronics', NULL, NULL, NULL, '', '0000-00-00'),
(3, 'Biskut', 12, 200, 'Food', NULL, NULL, NULL, 'Lohar Biskut', '0000-00-00'),
(6, 'Amazfit Bip smart watch', 4800, 1, 'Electronics', NULL, NULL, NULL, 'Watch', '0000-00-00'),
(7, 'Touhid', 10, 1, 'Men', NULL, NULL, NULL, 'lsiddlsfuklh', '0000-00-00'),
(8, 'Shanto\'s Ball', 2, 2, 'Men', NULL, NULL, NULL, 'Nice Soft Black Punchable', '0000-00-00'),
(9, 'Watch', 200, 12, 'Electronics', NULL, NULL, NULL, 'Abc', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `soldproduct`
--

CREATE TABLE `soldproduct` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` varchar(128) NOT NULL,
  `address` int(11) NOT NULL,
  `zipcode` varchar(128) NOT NULL,
  `delivery` varchar(128) NOT NULL DEFAULT 'no',
  `Orderdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `soldproduct`
--

INSERT INTO `soldproduct` (`id`, `productid`, `userid`, `quantity`, `price`, `address`, `zipcode`, `delivery`, `Orderdate`) VALUES
(5, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(6, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(7, 3, 30, 100, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(8, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(9, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(10, 3, 30, 100, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(11, 7, 30, 1, '10', 0, '1229', 'no', '2018-03-18 04:12:16'),
(12, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(13, 3, 30, 10, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(14, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(15, 7, 30, 1, '10', 0, '1229', 'no', '2018-03-18 04:12:16'),
(16, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(17, 7, 30, 1, '10', 0, '1229', 'no', '2018-03-18 04:12:16'),
(18, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(19, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(20, 7, 30, 1, '10', 0, '1229', 'no', '2018-03-18 04:12:16'),
(21, 3, 30, 100, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(22, 9, 30, 1, '200', 0, '1229', 'no', '2018-03-18 04:12:16'),
(23, 3, 30, 100, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(24, 9, 30, 1, '200', 0, '1229', 'no', '2018-03-18 04:12:16'),
(25, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(26, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(27, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(28, 7, 30, 1, '10', 0, '1229', 'no', '2018-03-18 04:12:16'),
(29, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(30, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(31, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(32, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(33, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(34, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(35, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(36, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(37, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(38, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(39, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(40, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(41, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(42, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(43, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(44, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(45, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(46, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(47, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(48, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(49, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(50, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(51, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(52, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(53, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(54, 2, 30, 1, '3', 0, '1229', 'no', '2018-03-18 04:12:16'),
(55, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(56, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(57, 3, 30, 1, '1', 0, '1229', 'no', '2018-03-18 04:12:16'),
(58, 3, 30, 1, '1', 0, '1229', 'no', '2018-03-18 04:12:16'),
(59, 3, 30, 1, '1', 0, '1229', 'no', '2018-03-18 04:12:16'),
(60, 3, 30, 1, '1', 0, '1229', 'no', '2018-03-18 04:12:16'),
(61, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(62, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(63, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(64, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(65, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(66, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(67, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(68, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(69, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(70, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(71, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(72, 3, 30, 1, '12', 0, '1229', 'no', '2018-03-18 04:12:16'),
(73, 3, 30, 1, '1', 0, '1229', 'no', '2018-03-18 04:12:16'),
(74, 2, 30, 1, '350', 0, '1229', 'no', '2018-03-18 04:12:16'),
(75, 6, 30, 1, '4800', 0, '1229', 'no', '2018-03-18 04:12:16'),
(76, 2, 30, 1, '3', 0, '1229', 'no', '2018-03-18 04:12:16'),
(77, 2, 30, 1, '3', 0, '1229', 'no', '2018-03-18 04:12:16'),
(78, 2, 30, 1, '3', 0, '1229', 'no', '2018-03-18 04:14:08'),
(79, 3, 30, 1, '1', 0, '1229', 'no', '2018-03-18 04:15:20');

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
(30, 'Md. Hasan Uzzaman', 'noyon', 'noyon892@gmail.com', 'sha1$57f1ff4a$1$ba87cb8290a3bafe3d283d25f4a33d22e681cb2f', '1733844422', 'Mahajon Bari,Affratpara,Chatmohar,Pabna'),
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
-- Indexes for table `soldproduct`
--
ALTER TABLE `soldproduct`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `soldproduct`
--
ALTER TABLE `soldproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
