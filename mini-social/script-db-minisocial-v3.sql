-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2015 at 08:58 AM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `minisocial`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE IF NOT EXISTS `member` (
  `id` int(11) NOT NULL,
  `loginname` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `displayname` varchar(200) NOT NULL,
  `status` char(1) NOT NULL,
  `avatar` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `loginname`, `password`, `displayname`, `status`, `avatar`) VALUES
(6, 'SuperTee', '11111111', 'Monchai', '', '6.jpg'),
(7, 'it', '11111111', 'IT', '', 'avatar.png');

-- --------------------------------------------------------

--
-- Table structure for table `webboard_header`
--

CREATE TABLE IF NOT EXISTS `webboard_header` (
  `id` int(11) NOT NULL,
  `title` varchar(300) NOT NULL,
  `content` text NOT NULL,
  `postby_member` int(11) NOT NULL,
  `post_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `view_count` int(11) NOT NULL,
  `reply_count` int(11) NOT NULL,
  `status` char(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `webboard_header`
--

INSERT INTO `webboard_header` (`id`, `title`, `content`, `postby_member`, `post_date`, `view_count`, `reply_count`, `status`) VALUES
(10, 'ทำไมพนักงานSFพูดไม่ใยดีผม', 'คือเรื่องมันมีอยู่ว่า<br />เมื่อวันศุกร์ที่23ตุลา58 ผมกะน้องสาวได้ไปเที่ยวด้วยกันสองคน ผมเป็นเด็กบ้านนอกครับ อายุ 18 ปี ตัวเล็กๆ คล่ำๆหน่อย <br />เลยคุยกะน้องสาวจ้าาาาา เราไปดูที่ sf ขอนแก่นกันเถอะแกกกกกก ด้วยความว่า เออเรามีบัตร student card ลดราคาแน่ๆเลยยยย เก๋ๆไรงี้<br /><br />พอไปถึงเซ็นทรัลขอนแก่นจ้าาาา เราก็รวบรวมเงินกะน้องสวย พร้อมถือบัตร student card ไว้ในมือ คือแบบเราจะโชว์ว่า เออ เรามีบัตรนะแก<br /><br />พอไปถึงหน้าพนักงานขายตั๋วจ้าาาาาา<br />เราก็ถือเงินพร้อมบัตรออกมากโชว์ให้นางได้เห็น<br />พนง. : ดูเรื่องไรดีค่ะ กี่ที่คะ<br />เรา: หอแต๋ว รอบ 11:50  2 ที่ ครับ<br />พนง. :ค่ะ รอบนี้นะคะ โอเคคะ<br />เรา: เท่าไหร่ครับ <br /><br />--เราก็ยื่นเงินพร้อมบัตรให้นาง--<br />พนง. : ขอโทษนะคะพี่คิดราคาเต็มให้ไปแล้วค่ะ คราวหน้ายื่นบัตร student card ให้เร็วกว่านี้นะคะ <br />360บาท ค่ะ<br />เรา :  ................ <br />--ก็จ่ายตังค์ไปเพราะน้องอยากดู ในใจนี้สตันจัง คิดทีหลังกูน่าจะยกเลิกเนอะ--<br /><br />#คือแบบเราก็กะว่า แบบสั่งหนังจองเสร็จแล้วค่อยยื่นให้ไม่ใช่หรอ โดยปกติพนักงานจะถามกัน ถ้าเป็นเมเจอร์พนักงานจะยกเลิกให้ถ้ายืนยันไปแล้วถ้าเรามีเอมเจนท์  หรือว่า? เมื่อยืนยันการซื้อแล้วพนักงานยกเลิกแล้วสมัครใหม่ให้เราไม่ได้<br /><br /><br />--คือผมเสียความรู้สึกจังผมไม่รู้เลยว่ายื่นบัตรให้เร็วกว่านี้ต้องยื่นตอนไหน?คราวหลังถ้ายื่นช้าผมจะต้องจ่ายเต็มอีกใช่ไมผมต้องทำยังไง--<br /><br />"น้องต้องยื่นบัตรให้เร็วกว่านี้นะคะพี่คิดราคาเต็มให้แล้วคะ"', 6, '2015-10-25 09:00:10', 8, 6, 'A'),
(11, 'ใช้โปรแกรมอะไรทำสื่อสำหรับเด็กดีค้ะ เช่นนิทานที่มีภาพประกอบ', 'ขอสอบถามพี่ๆชาวพันทิปทีค้ะ : D<br />- คือหนูต้องทำงานส่งอาจารย์อ่ะค้ะ <br />ประมาณว่า ให้ออกแบบทำสื่อการเรียนรู้สำหรับเด็กที่เป็นประมาณนิทานที่มีรูปภาพใหญ่ๆมีเนื้อหาเล็กน้อย สีสันน่าสนใจน่าดูดึงดูดให้เด็กอยากเปิดดู แต่หนูไม่เคยทำเลย อยากทราบว่าสามารถใช้โปรแกรมอะไรทำได้บ้างค้ะ ของเป็นmicrosoftนะค้ะ ขอบคุณล่วงหน้าค้ะ', 7, '2015-10-25 14:17:29', 2, 1, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `webboard_reply`
--

CREATE TABLE IF NOT EXISTS `webboard_reply` (
  `id` int(11) NOT NULL,
  `header_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `replyby_member` int(11) NOT NULL,
  `reply_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` char(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `webboard_reply`
--

INSERT INTO `webboard_reply` (`id`, `header_id`, `content`, `replyby_member`, `reply_date`, `status`) VALUES
(55, 10, 'ปกติจะบอกหลังบอกชื่อหนังที่จะดู แล้วค่อยเลือกที่นั่งอะค่ะ', 6, '2015-10-25 09:00:45', 'A'),
(56, 10, 'เงินยังไม่จ่าย พนักงานจะทำอะไรได้  <br />ต้องใจแข็งหน่อยนะคราวหน้า ไม่จ่ายเดี๋ยวเขาก็ไปยกเลิกได้ เชื่อไหม', 6, '2015-10-25 09:00:55', 'A'),
(57, 10, 'อยากรู้ว่า ตอนที่ พนง.พูดประโยคที่ว่า "..ขอโทษนะคะพี่คิดราคาเต็มให้ไปแล้วค่ะ คราวหน้ายื่นบัตร student card ให้เร็วกว่านี้นะคะ <br />360บาท ค่ะ.." ตั๋วมันเลื่อนเครื่องที่ออกมากจากเครื่งปริ้นท์หรือยัง ถ้าออกมาแล้วอันนี้ไม่แน่ใจ แต่ถ้ายังไม่ออก พนง.น่าจะทำอะไรให้ลูกค้าดีกว่านี้นะ', 7, '2015-10-25 14:14:09', 'A'),
(58, 10, 'อยากรู้ว่า ตอนที่ พนง.พูดประโยคที่ว่า "..ขอโทษนะคะพี่คิดราคาเต็มให้ไปแล้วค่ะ คราวหน้ายื่นบัตร student card ให้เร็วกว่านี้นะคะ <br />360บาท ค่ะ.." ตั๋วมันเลื่อนเครื่องที่ออกมากจากเครื่งปริ้นท์หรือยัง ถ้าออกมาแล้วอันนี้ไม่แน่ใจ แต่ถ้ายังไม่ออก พนง.น่าจะทำอะไรให้ลูกค้าดีกว่านี้นะ', 7, '2015-10-25 14:15:58', 'A'),
(59, 10, 'จริงๆน้องก็ถือบัตรอยู่แล้ว โชว์ให้เห็น พนักงานอาจจะตาถั่วไม่เห็นเอง<br />แต่นั่นก็ไม่ใช่ประเด็น ประเด็นคือถึงน้องจะเด็ก แต่น้องก็เป็นลูกค้านะ พูดจาไม่ดีเลย<br />เด็ก 18เขาไม่ควรได้รับการบริการที่ดีหรอ งง ไม่เข้าใจพนักงาน', 6, '2015-10-25 14:16:20', 'A'),
(60, 11, 'ทำส่งอาจารย์ จะคิดว่า อายุไม่เกิน 16 ปี<br />ทำแบบ เสร็จงานก็จบไม่ได้ทำต่อ...โปรแกรมตัดต่อทั่วๆไป จะมีคำสั่งคีย์เฟรม เลื่อนซ้าย-ขวา-ล่าง-บน ย่อ-ขยาย เอาไว้สั่งให้ภาพเคลื่อนไหวไปตามทิศทางที่ต้องการ<br />หากต้องการทำอนิเม...อันนี้ต้องเข้าสู่การทำแบบติดมืออาชืพ คือทำเรื่อยๆ บ่อยๆ โปรแกรมที่ทำซับซ้อนจะมีให้เลือกใช้ตามที่ถนัดอีกที', 6, '2015-10-25 14:19:06', 'A'),
(61, 10, 'ถ้าลูกค้ายังไม่ยื่นเงินให้ พนักงานก็น่าจะยังไม่ได้ปริ้นตั๋วนะ แต่มันแปลกๆนะ อย่างตอนผมซื้อตั๋วเองจากเครื่องอัตโนมัติ มันยังมีปุ่ม Back ให้กลับไปแก้ไขไม่ใช่เหรอ แล้วเครื่องของพนักงานมันจะ Back กลับไม่ได้ได้ยังไงกัน', 7, '2015-10-25 14:19:49', 'A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `webboard_header`
--
ALTER TABLE `webboard_header`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `webboard_reply`
--
ALTER TABLE `webboard_reply`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `webboard_header`
--
ALTER TABLE `webboard_header`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `webboard_reply`
--
ALTER TABLE `webboard_reply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=62;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
