-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Okt 2022 pada 17.19
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `komer` varchar(255) NOT NULL,
  `namer` varchar(255) NOT NULL,
  `alamer` varchar(255) NOT NULL,
  `provinsi` varchar(255) NOT NULL,
  `kota` varchar(255) NOT NULL,
  `kecamatan` varchar(255) NOT NULL,
  `telp` varchar(255) NOT NULL,
  `emailCus` varchar(255) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `koordinat` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `customer`
--

INSERT INTO `customer` (`id`, `uuid`, `komer`, `namer`, `alamer`, `provinsi`, `kota`, `kecamatan`, `telp`, `emailCus`, `pic`, `koordinat`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '6dfcd0a8-7651-47c6-8b85-517df6c1950a', '1', 'Anto', 'VBI 5', 'Jawa Barat', 'Bogor', 'SukaRaja', '082236123398', 'anto@gmail.com', 'Alby', '106°43\'30”BT–106°51\'00”BT dan 30\'30”LS – 6°41\'00”LS', 6, '2022-10-17 06:03:42', '2022-10-17 06:25:55');

-- --------------------------------------------------------

--
-- Struktur dari tabel `lokasi`
--

CREATE TABLE `lokasi` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `komat` varchar(255) NOT NULL,
  `komer` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `aktivasi` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `lokasi`
--

INSERT INTO `lokasi` (`id`, `uuid`, `komat`, `komer`, `alamat`, `keterangan`, `aktivasi`, `userId`, `createdAt`, `updatedAt`) VALUES
(4, 'bf17b683-ea41-4085-a398-ce9b41374652', '12088', '192018', 'VBI 5', 'Cefat', 'yes', 6, '2022-10-27 05:53:36', '2022-10-27 05:53:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `kodprod` varchar(255) NOT NULL,
  `namprod` varchar(255) NOT NULL,
  `partname` varchar(255) NOT NULL,
  `partkode` varchar(255) NOT NULL,
  `aktivasi` varchar(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `uuid`, `kodprod`, `namprod`, `partname`, `partkode`, `aktivasi`, `keterangan`, `photo`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'e4346472-7d6c-4fbd-a938-5bbde9e9c461', '21083109', 'HP', 'HP', '219736', 'YES', 'Coba', 'DCUPLOAD1665631585766-1.JPG', 6, '2022-10-13 03:26:25', '2022-10-13 03:26:25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `nodok` varchar(255) NOT NULL,
  `taren` varchar(255) NOT NULL,
  `tadib` varchar(255) NOT NULL,
  `komer` varchar(255) NOT NULL,
  `kowil` varchar(255) NOT NULL,
  `supir` varchar(255) NOT NULL,
  `idken` varchar(255) NOT NULL,
  `product` varchar(255) NOT NULL,
  `qty` varchar(255) NOT NULL,
  `kobar` varchar(255) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `schedule`
--

INSERT INTO `schedule` (`id`, `uuid`, `nodok`, `taren`, `tadib`, `komer`, `kowil`, `supir`, `idken`, `product`, `qty`, `kobar`, `keterangan`, `userId`, `createdAt`, `updatedAt`) VALUES
(3, 'bd06edaa-4d5f-402a-ae3c-5f43d9fecd70', '1223', 'dbsdb', 'sbs', '2222', '2242', 'mahmud', '002', 'ada', '001', '113141', 'ahhdg', 6, '2022-10-17 04:28:57', '2022-10-17 04:29:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('FQmItMoRgd2tj7GfxDb46_ZGEilNa7rP', '2022-10-30 15:16:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-10-29 15:16:35', '2022-10-29 15:16:35'),
('HW227Oz0Fyf48hvrbGcke4v8M1HjoVRb', '2022-10-30 15:16:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-10-29 15:16:39', '2022-10-29 15:16:39'),
('KUSuiv-MKVd2dDBQcT8dsffef4jjudR0', '2022-10-28 04:26:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-10-27 04:26:33', '2022-10-27 04:26:33'),
('OBaiXLKC30rDvPDy7GdvvGmpaU_SHY-z', '2022-10-28 05:53:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-10-27 05:53:36', '2022-10-27 05:53:36'),
('ODPDUbBenE_le_4xWxyxOrnkablI0-3v', '2022-10-30 15:16:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-10-29 15:16:06', '2022-10-29 15:16:06'),
('sfl2kXLnIcT6X1R3SAEU3HoCio3upeFf', '2022-10-30 15:16:48', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-10-29 15:16:48', '2022-10-29 15:16:48'),
('uNAcm0O3aeFAO5_K0rRfJ0Dc9ZEnUizq', '2022-10-30 15:18:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"2daa9110-945a-4247-8d21-abd72f661100\"}', '2022-10-29 15:16:48', '2022-10-29 15:18:19'),
('uSsR_xmUYw41SPf1SaEUOCVRuhyPOZ0r', '2022-10-28 06:15:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"2daa9110-945a-4247-8d21-abd72f661100\"}', '2022-10-27 04:07:23', '2022-10-27 06:15:43'),
('_SKBWUKj6hZarT5sgbqkCfZpJ-TttL6g', '2022-10-28 04:07:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2022-10-27 04:07:23', '2022-10-27 04:07:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(5, '87401642-72b0-4414-a02d-da8fc68c272d', 'Padel', 'padel@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$TdvwoSpmiwViR6rwszr4Cg$jSoJYKklzKuJenA/6a3lNkXUY4/C9PqHLRDFzbZqJOQ', 'admin', '2022-09-13 06:14:56', '2022-09-22 01:59:46'),
(6, '2daa9110-945a-4247-8d21-abd72f661100', 'User', 'admin@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$hppHUihkzm/Y8RXyX5L/KA$OGDR+k2tptNVUrCM6sEELNfWBDveIS+gMmg4pTC9DSI', 'admin', '2022-09-21 02:15:40', '2022-10-29 15:16:35'),
(7, '825c00cc-c766-46e2-96f5-0a7f50483112', 'Johan', 'johan@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$f6EOUk+B/tgc/vErJkCnbg$bqPmcYnJOviGaa1HFC4PCA3ylETBilzRA4/lBp+IneY', 'user', '2022-09-22 02:02:32', '2022-09-22 02:02:32');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `lokasi`
--
ALTER TABLE `lokasi`
  ADD CONSTRAINT `lokasi_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
