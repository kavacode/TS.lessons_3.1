class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
	_areas: Area[] = [];
	_lecturers: Lecturer[] = [];
  // 'add area'
  addArea(area: Area): void {
	this._areas.push(area);
 }

 // 'remove area'
 removeArea(area: Area): void {
	this._areas = this._areas.filter((a) => a !== area);
 }

 // 'add lecturer'
 addLecturer(lecturer: Lecturer): void {
	this._lecturers.push(lecturer);
 }

 // 'remove lecturer'
 removeLecturer(lecturer: Lecturer): void {
	this._lecturers = this._lecturers.filter((l) => l !== lecturer);
 }

 // getter-fetch?
 get areas(): Area[] {
	return this._areas;
 }

 get lecturers(): Lecturer[] {
	return this._lecturers;
 }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: Level[] = [];
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // 'add level'
  addLevel(level: Level): void {
    this._levels.push(level);
  }

  // 'remove level'
  removeLevel(level: Level): void {
    this._levels = this._levels.filter((l) => l !== level);
  }

  get levels(): Level[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  _groups: Group[] = [];
  _name: string;
  _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  // 'add group'
  addGroup(group: Group): void {
    this._groups.push(group);
  }

  // 'remove group'
  removeGroup(group: Group): void {
    this._groups = this._groups.filter((g) => g !== group);
  }

 //
  get groups(): Group[] {
    return this._groups;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }
}
class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area: Area;
  _status: string = "Active"; 
  _students: Student[] = [];

  constructor(area: Area, status: string = "Active") {
    this._area = area;
    this._status = status;
  }

  // 'add student'
  addStudent(student: Student): void {
    this._students.push(student);
  }

  // 'remove student'
  removeStudent(student: Student): void {
    this._students = this._students.filter((s) => s !== student);
  }

  // 'set status'
  set status(status: string) {
	if (status === "Active" || status === "Inactive") {
	  this._status = status;
	} else {
	  console.error("Invalid status provided.");
	}
 }

  // getters
  get area(): Area {
    return this._area;
  }

  get status(): string {
    return this._status;
  }

  get students(): Student[] {
    return this._students;
  }


  showPerformance(): Student[] {
	const sortedStudents: Student[] = this._students.slice().sort(
	  (a: Student, b: Student) => b.getPerformanceRating() - a.getPerformanceRating()
	);
	return sortedStudents;
}
}

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;
  _grades: { [subject: string]: number } = {};
  _visits: boolean[] = [];

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  // 'set grade'
  setGrade(subject: string, grade: number): void {
    this._grades[subject] = grade;
  }

  // 'set visit'
  setVisit(present: boolean): void {
    this._visits.push(present);
  }

  // getters
  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  // performance rating
  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);
    const attendancePercentage = (this._visits.filter((present) => present).length / this._visits.length) * 100;
    const averageGrade = gradeValues.length ? gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length : 0;
    return (averageGrade + attendancePercentage) / 2;
  }
}
