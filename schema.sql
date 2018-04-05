CREATE TABLE `Tickets` (
  `ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(80) NOT NULL,
  `name` varchar(80) NOT NULL DEFAULT '',
  `ticket_type` int(11) NOT NULL,
  PRIMARY KEY (`ticket_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;