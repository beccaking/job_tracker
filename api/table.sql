CREATE DATABASE jobtracker;

\c jobtracker;

CREATE TABLE listings (id SERIAL, listingDate timestamp, company VARCHAR(32), position VARCHAR(32), positionURL text , notes text, status VARCHAR(32) DEFAULT 'new', applyDate timestamp, applyFdate timestamp, interviewDate timestamp, interviewFdate timestamp, tryAgainDate timestamp);

INSERT INTO listings (company, position, positionURL, notes) VALUES
('Amazon', 'Junior Dev', 'https://www.google.com/', 'This is the 1st job'),
('TP Co', 'Frontend Dev', 'https://www.google.com/', 'This is the 2nd job'),
('Nest', 'QC Engineer', 'https://www.google.com/', 'This is the 3rd job'),
('Java Inc', 'Software engineer', 'https://www.google.com/', 'This is the 4th job');
