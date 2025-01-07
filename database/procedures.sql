CREATE PROCEDURE CreateUser (
    IN firstName VARCHAR(255),
    IN lastName VARCHAR(255),
    IN mobile VARCHAR(10),
    IN password VARCHAR(255),
    IN createdBy VARCHAR(255)
)
BEGIN
    INSERT INTO users (firstName, lastName, mobile, password, createdBy)
    VALUES (firstName, lastName, mobile, password, createdBy);
END 

CREATE PROCEDURE GetUserByMobile (
    IN mobile VARCHAR(10)
)
BEGIN
    SELECT * FROM users WHERE mobile = mobile;
END 

CREATE PROCEDURE UpdateUser (
    IN userId INT,
    IN firstName VARCHAR(255),
    IN lastName VARCHAR(255),
    IN mobile VARCHAR(10),
    IN updatedBy VARCHAR(255)
)
BEGIN
    UPDATE users
    SET firstName = firstName, lastName = lastName, mobile = mobile, updatedBy = updatedBy
    WHERE id = userId;
END 

CREATE PROCEDURE DeleteUser (
    IN userId INT
)
BEGIN
    DELETE FROM users WHERE id = userId;
END 


