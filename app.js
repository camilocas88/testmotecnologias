"use strict";

var app = new Vue({
  el: "#test",

  data: () => ({
    title: "Prueba",
    employes: [],
    active: [],
  }),
  created() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      axios
        .get("http://www.json-generator.com/api/json/get/bVXHDUuAlK?indent=2")
        .then((res) => {
          this.employes = res.data;

          for (let i = 0; i < this.employes.length; i++) {
            const el = this.employes[i];
            if (el.age > 35) {
              this.employes[i].salary = this.employes[i].salary.replace(
                "$",
                ""
              );
              this.employes[i].salary = parseInt(this.employes[i].salary);
              this.employes[i].salary = this.employes[i].salary + 500000;
            }
          }

          console.log('El mismo arreglo pero todas las personas cuya edad sea mayor a 35 sumarle a su salario $500.000', this.employes)

          this.active = this.employes.filter((x) => x.isActive === true);
          console.log('Un arreglo de todas las personas activas ', this.active);


          let doctor = this.employes.filter(
            (doctors) => doctors.profesion === "Doctor"
          );
          let teacher = this.employes.filter(
            (teachers) => teachers.profesion === "Teacher"
          );
          let dataScientist = this.employes.filter(
            (dataScientist) => dataScientist.profesion === "Data scientist"
          );
          let softwareDeveloper = this.employes.filter(
            (softwareDeveloper) =>
              softwareDeveloper.profesion === "Software Developer"
          );
          let designer = this.employes.filter(
            (designer) => designer.profesion === "Designer"
          );

          let Doctor = []
          let Teacher = []
          let DataScientist = []
          let SoftwareDeveloper = []
          let Designer = []

          const objeto1 = Object.assign({Doctor}, doctor);
          const objeto2 = Object.assign({Teacher}, teacher);
          const objeto3 = Object.assign({DataScientist}, dataScientist);
          const objeto4 = Object.assign({SoftwareDeveloper}, softwareDeveloper);
          const objeto5 = Object.assign({Designer}, designer);

          console.log('Un objeto de todas las profesiones con sus respectivas personas', objeto1,objeto2,objeto3,objeto4,objeto5);

        })
        .catch((error) => {
          console.log("Error getting data");
          console.log(error);
        });
    },
  },
});
