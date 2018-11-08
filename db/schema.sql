USE  nsmo5i5pwnkhwnfq;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean,
PRIMARY KEY (id)
);

ALTER TABLE burgers
ADD date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;