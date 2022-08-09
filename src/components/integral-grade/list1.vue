<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class='el-icon-arrow-right'>
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>积分管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增积分等级</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <div class="app-container">
      <!-- 输入表单 -->
      <el-form :model="integralGrade" label-width="150px">
        <el-form-item label="借款额度">
          <el-input-number v-model="integralGrade.borrowAmount" :min="0"/>
        </el-form-item>
        <el-form-item label="积分区间开始">
          <el-input-number v-model="integralGrade.integralStart" :min="0"/>
        </el-form-item>
        <el-form-item label="积分区间结束">
          <el-input-number v-model="integralGrade.integralEnd" :min="0"/>
        </el-form-item>
        <el-form-item>
          <el-button
              :disabled="saveBtnDisabled"
              type="primary"
              @click="saveOrUpdate()"
          >
            保存
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
//引入api模块
import integralGradeApi from '@/api/core/integral-grade'

export default {
  name: 'list',
  data() {
    return {
      saveBtnDisabled: false, //是否禁用保存按钮，防止表单重复提交
      integralGrade: {
        id: '',
        borrowAmount: '',
        integralStart: '',
        integralEnd: ''
      } //积分等级对象
    }
  },

  created() {
  },

  methods: {
    fetchById(id) {
      integralGradeApi.getById(id).then(response => {
        this.integralGrade = response.data.record
      })
    },

    //保存或更新
    saveOrUpdate() {
      //禁用保存按钮
      this.saveBtnDisabled = true
      //调用新增
      this.saveData()
    },

    saveData() {
      integralGradeApi.save(this.integralGrade).then(response => {
        this.$router.push({ path: '/index' })
      }).catch(e=>{
        console.log(e)
      })
    },
  }
}
</script>
