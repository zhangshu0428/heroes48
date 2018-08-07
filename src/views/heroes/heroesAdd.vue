<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄姓名</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄姓名">
          </div>
          <div class="form-group">
            <label for="gender">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="英雄性别">
          </div>
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
     export default {
         data() {
             return {
                formData: {
                    name: '',
                    gender: ''
                }
             }         
         },
         methods: {
             handleAdd() {
                 //发送请求
                axios
                    .post('http://localhost:3000/heroes',this.formData)
                    .then((response) => {
                        if(response.status === 201) {
                            this.$router.push('/heroes');
                        }
                    })
                    .catch((err) => {
                        alert('添加失败')
                    })
             }
         }
     };
</script>

<style>

</style>

