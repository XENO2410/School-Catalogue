# School Catalog

The School Catalog is a digital catalog designed to serve the New York City Department of Education, providing a convenient way to access quick reference material for schools across the city. This project leverages JavaScript classes and inheritance to create a hierarchical structure for different types of schools, making it easy to manage and retrieve essential information.

## Key Features

### 1. School Class Hierarchy

The foundation of the School Catalog is a versatile `School` class, from which `Primary`, `Middle`, and `High` schools inherit. This hierarchy allows for efficient data organization and management.

### 2. Comprehensive School Information

Each school instance stores crucial details such as the school's name, educational level (primary, middle, or high), and the number of students enrolled. The `numberOfStudents` property includes a setter to ensure data integrity.

### 3. Quick Reference Methods

The `School` class provides two handy methods:
- `quickFacts()`: Generates a quick summary of a school's key information, including its name, number of students, and educational level.
- `pickSubstituteTeacher()`: A static method that randomly selects a substitute teacher from a given array of teacher names, providing flexibility for managing substitute staffing.

### 4. Additional Properties

- Primary schools include a `pickupPolicy` property to specify student pickup policies.
- High schools incorporate a `sportsTeams` property, which logs all sports teams associated with the school.

## Usage

The School Catalog is designed to be user-friendly and easily accessible. Users can search for a specific school by name or location, view detailed school information, and even retrieve substitute teacher suggestions when needed.

