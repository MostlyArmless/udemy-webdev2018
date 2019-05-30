-- Connect to the database named 'test' as user 'postgres':
-- psql test -U postgres
-- Add a row to the database
INSERT INTO users(name, age, birthday) VALUES ('Mike', 27, '1930-01-25');
INSERT INTO users(name, age, birthday) VALUES ('Sally', 26, '1932-02-26');
INSERT INTO users(name, age, birthday) VALUES ('John', 28, '1942-02-26');
INSERT INTO users(name, age, birthday) VALUES ('Amy', 28, '1942-02-26');

-- Add a new column to a table:
ALTER TABLE users ADD score smallint;

-- Update existing data
UPDATE users SET score = 100 WHERE name='Mike' OR name='Dan';

-- Conditional selections:
-- Select all rows where name ends in 'y' (% is wildcard):
SELECT * FROM users WHERE name LIKE '%y';
-- Sort by the score:
SELECT * FROM users ORDER BY score DESC;

-- With math:
SELECT AVG(score) FROM users;
SELECT SUM(age) FROM users;
SELECT COUNT(name) FROM users;

-- Creating a login table:
CREATE TABLE login (
	ID serial NOT NULL PRIMARY KEY, --serial means autoincrementing. perfect for primary keys
	secret VARCHAR(100) NOT NULL,
	name text UNIQUE NOT NULL); --UNIQUE means name has to be unique or the insert will fail

INSERT INTO login(secret,name) VALUES ('abc', 'Mike');
INSERT INTO login(secret,name) VALUES ('xyz', 'Sally');
INSERT INTO login(secret,name) VALUES ('lol', 'John');

-- Joining tables
SELECT * FROM users JOIN login ON users.name = login.name;

-- Delete a user
DELETE FROM users WHERE name='Sally';

-- Delete the tables
DROP TABLE login;
DROP TABLE users;