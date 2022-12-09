1.select name from students

2.select * from students where age>30

3.select Name from students where Gender = 'F' AND Age = 30

4.select Points from students WHERE name = 'Alex'

5.INSERT INTO students( Name,Age , Gender , Points ) VALUES('Hadi',21,'M',600)

6.UPDATE students SET Points=Points+100 WHERE name = 'Basma'

7.UPDATE students SET Points=points-50 WHERE name='Alex'

8.Save files

9. Commit 'Basic queries'

.CREATE TABLE "graduates" (
"ID" INTEGER  NOT NULL ,
"Name" TEXT NOT NULL UNIQUE,
"Age" INTEGER,
"Gender" TEXT,
"Points" INTEGER,
"Graduation" TEXT,
PRIMARY KEY ("ID" AUTOINCREMENT)
);

10.INSERT INTO graduates (ID, Name, Age, Gender, Points)
SELECT * FROM students
WHERE Name = 'Layal';

11.UPDATE graduates
SET Graduation = '08/09/2018'
WHERE Name = 'Layal'

12.DELETE FROM students
WHERE Name = 'Layal'

13.Commit "Creating Table"

14.SELECT employees.Name ,employees.Company, companies.Date
FROM employees,companies
WHERE  employees.Company = companies.Name

15.SELECT employees.Name FROM companies, employees WHERE employees.Company = companies.Name AND companies.date < 2000; 

16.SELECT companies.Name FROM companies,employees WHERE employees.Role = 'Graphic Designer' AND companies.Name = employees.Company
