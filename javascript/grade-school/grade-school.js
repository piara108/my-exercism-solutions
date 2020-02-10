// Exercise Name: Grade School

export class GradeSchool {
  constructor() {
    this._schoolRoster = {};
  }

  roster() {
    for (var grade in this._schoolRoster) {
      this._schoolRoster[grade] = this._schoolRoster[grade].sort();
    }

    return this._schoolRoster;
  }

  add(name, grade) {
    if (!(grade in this._schoolRoster)) {
      this._schoolRoster[grade] = [name];
    }
    else {
      this._schoolRoster[grade].push(name);
    }
  }

  grade(grade) {
    if (!(grade in this._schoolRoster)) {
      return [];
    }

    return this._schoolRoster[grade].sort();
  }
}
