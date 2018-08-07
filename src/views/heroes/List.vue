<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <router-link :to="'/heroes/'+ item.id">edit</router-link>       
                  &nbsp;&nbsp;
                  <a @click.prevent="handleDelete(item.id)" href="javascript:void(0)">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
    // 导入axios模块
    import axios from 'axios';
    //导出列表组件
    export default {
        
        data() {
          return {
            list: []
          }
        },
        //发送请求，获取英雄列表
        created() {
         this.renderList();
        },
        methods: {
           renderList() {
              axios
                .get('http://localhost:3000/heroes')
                .then((response) => {
                  
                  if(response.status === 200) {
                    this.list = response.data;
                  }
                })
                .catch((err) => {
                  console.log(err);
                })
          },
          handleDelete(id) {
            if(!confirm('确定删除吗')) {
              return;
            };
            //发送删除请求
            axios
              .delete('http://localhost:3000/heroes/'+ id)
              .then((response) => {
                  if(response.status === 200) {
                    //重新渲染
                    this.renderList();
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

