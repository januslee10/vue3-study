<template>
  <div class="login">
    <div class="login-form">
      <!-- <div class="left">
        <img src="../../assets/img/arsenal.png" alt="暂无图片" />
      </div> -->
      <div class="right">
        <div class="header">
          <h1>Login</h1>
          <p>please login to continue</p>
        </div>
        <el-form
          :label-position="'left'"
          :model="formLabelAlign"
          style="max-width: 460px; margin: auto"
          :size="'large'"
          ref="loginFormRef"
          :rules="rules"
        >
          <el-form-item prop="name">
            <el-input placeholder="user" v-model="formLabelAlign.name" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="password"
              v-model="formLabelAlign.password"
            />
          </el-form-item>
          <div class="extra-operate">
            <div>
              <el-checkbox
                v-model="isCache"
                label="keep mo logined in"
                size="large"
              />
            </div>
            <p style="margin: 10px; color: #606266">forgot password</p>
          </div>
          <el-form-item>
            <el-button type="primary" @click="login(loginFormRef)"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

export default defineComponent({
  name: 'Login',
  setup() {
    const isCache = ref<boolean>(false)
    const formLabelAlign = reactive({
      name: '',
      password: '',
    })
    const loginFormRef = ref<FormInstance>()
    // 校验规则
    const rules = reactive<FormRules>({
      name: [
        {
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur',
        },
        {
          min: 3,
          max: 20,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please input Activity password',
          trigger: 'blur',
        },
      ],
    })
    const login = async function (formEl: FormInstance) {
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('[登录信息]', fields, formLabelAlign)
        } else {
          console.log('[错误登录信息]', formLabelAlign)
        }
      })
    }
    return {
      formLabelAlign,
      isCache,
      loginFormRef,
      login,
      rules,
    }
  },
})
</script>

<style scoped lang="less">
.login {
  height: 100%;
  width: 100%;
  position: relative;
  background: url('../../assets/img/arsenal-bg.jpg');

  .title {
    text-align: center;
    font-size: 20px;
  }

  .login-form {
    height: 800px;
    width: 600px;
    background-color: rgb(117, 149, 151);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -400px 0 0 -300px;
    border-radius: 5px;
    display: flex;
    overflow: hidden;
    opacity: 0.95;

    .left {
      width: 50%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      width: 100%;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;

      .header {
        height: 200px;
      }
      .extra-operate {
        display: flex;
        justify-content: space-between;
      }

      :deep(.el-button) {
        width: 100%;
      }
    }
  }
}
</style>
