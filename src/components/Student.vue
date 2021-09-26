<template>
  <div v-if="currentStudent" class="edit-form">
    <h4>Student</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentStudent.name"
        />
      </div>
      <div class="form-group">
        <label for="description">ID No</label>
        <input
          type="text"
          class="form-control"
          id="idno"
          v-model="currentStudent.idno"
        />
      </div>
    </form>

    <button type="submit" class="btn badge-success" @click="updateStudent">
      Update
    </button>

    <button class="btn mr-2" @click="deleteStudent">Delete</button>

    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Student...</p>
  </div>
</template>

<script>
import StudentDataService from "../services/StudentDataService";
export default {
  name: "Student",
  data() {
    return {
      currentStudent: null,
      message: "",
    };
  },
  methods: {
    getStudent(id) {
      StudentDataService.get(id)
        .then((response) => {
          this.currentStudent = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateStudent() {
      StudentDataService.update(this.currentStudent.id, this.currentStudent)
        .then((response) => {
          console.log(response.data);
          this.message = "The Student was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteStudent() {
      if (confirm("Are you sure to delete: " + this.currentStudent.name)) {
        StudentDataService.delete(this.currentStudent.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "Students" });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  mounted() {
    this.message = "";
    this.getStudent(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>