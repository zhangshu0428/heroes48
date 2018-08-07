<template>
    <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄姓名</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄姓名">
          </div>
          <div class="form-group">
            <label for="gender">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="英雄性别">
          </div>
          <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
// 导入axios模块
import axios from 'axios';
export default {
    props: ['id'],
    data() {
        return {
            formData: {
                name: '',
                gender: ''
            }
        }
    },
    created() {
        //发送对应id的英雄信息请求
        axios
            .get(`http://localhost:3000/heroes/${this.id}`)
            .then((response) => {
                if(response.status === 200) {
                    this.formData = response.data;
                    
                }
            })
            .catch((err) => {
                alert('失败');
            })
    },
    methods: {
        handleEdit() {
            //发送修改请求
            axios
                .put(`http://localhost:3000/heroes/${this.id}`,this.formData)
                .then((response) => {
                    if(response.status === 200) {
                        this.$router.push('/heroes');
                    } else {
                        alert('失败');
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
};
</script>

<style>

</style>
