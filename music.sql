/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50734
 Source Host           : localhost:3306
 Source Schema         : music

 Target Server Type    : MySQL
 Target Server Version : 50734
 File Encoding         : 65001

 Date: 14/09/2021 21:41:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for artists
-- ----------------------------
DROP TABLE IF EXISTS `artists`;
CREATE TABLE `artists`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `songs` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of artists
-- ----------------------------
INSERT INTO `artists` VALUES (1, 'Jean mimi', '[{\"title\":\"lolilol\",\"genre\":\"\"}]');

-- ----------------------------
-- Table structure for songs
-- ----------------------------
DROP TABLE IF EXISTS `songs`;
CREATE TABLE `songs`  (
  `guid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` char(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `title` char(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `songs_time` int(11) NULL DEFAULT NULL,
  `author` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of songs
-- ----------------------------
INSERT INTO `songs` VALUES ('c51ce410c124a10e0db5e4b97fc2af39', '欧美', 'Endless Road', 206, 'JAEFOREAL');
INSERT INTO `songs` VALUES ('b6ddb7e0d8daed581c6dd1f5dda53165', '欧美', 'Endless Road', 196, 'JAEFOREAL');
INSERT INTO `songs` VALUES ('fa9c3a46d1965b9833c6d125c4ba0c23', '欧美', 'Endless Road', 196, '');
INSERT INTO `songs` VALUES ('f66e6297c5f1a032d52d516479a150a1', '欧美', 'Endless Road', 196, '');
INSERT INTO `songs` VALUES ('85e275f14d3788049dfa4d3c068456c4', '欧美', 'Endless Road', 196, '');

SET FOREIGN_KEY_CHECKS = 1;
