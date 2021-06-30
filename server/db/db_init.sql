-- Create DATABASE
CREATE DATABASE throw_away;

-- Create Tables : a) students b) topics


--  *** note the JSONB variable will be structured as {topic1: , topic2: , topic3: } => the topics excepting scores as values 0-100
CREATE table students(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    activity JSONB, 
);

CREATE TABLE topics(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    image_path VARCHAR(300) NOT NULL,
    time_estimate INT NOT NULL
)

-- Insert fake data created using mocakaroo for each of the tables

    -- For Students found in MOCK_STUDENTS.sql in DOWNLOADS
    -- \i /home/forrest/Downloads/MOCK_STUDENTS.sql

    -- FOR topics hand-spun fake data
    INSERT INTO topics
    (name, image_path, time_estimate)
    VALUES
    ('degrees', '1JoMLv3CN2o0hF72YleizzSK9-sVBreWm', 9),
    ('tau radians', '1qgJlvUMhwV9pizNaTyKKLWu4iDA1j9OX', 20),
    ('pi radians', '1NwnnNNZW_PBHC6t1GfyT-Gg_Vf6CrPrC', 15)
    ;
