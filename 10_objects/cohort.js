const cohort = {
  name: "May2022",
  id: 1234,
  students: ["Kim", "Chris", "Seb", "Lola"],
};

const printCohort = (cohort) => {
  console.log(
    `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`
  );
};

printCohort(cohort);
