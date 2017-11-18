<template>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<style>
  @import "styles/bootstrap.css"
</style>
<script>
  import { requestLogin } from '../api/api'
  // import NProgress from 'nprogress'
  export default {
    data () {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
            // { validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
            // { validator: validaePass2 }
          ]
        },
        checked: true
      }
    },
    methods: {
      handleReset2 () {
        this.$refs.ruleForm2.resetFields()
      },
      handleSubmit2 (ev) {
        // var _this = this
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            // _this.$router.replace('/table')
            this.logining = true
            // NProgress.start()
            let params = new URLSearchParams()
            params.append('username', this.ruleForm2.account)
            params.append('password', this.ruleForm2.checkPass)
            requestLogin(params).then(data => {
              console.log(data)
              this.logining = false
              // NProgress.done()
              // let { msg, code, user } = data
              // console.log(code)
              if (data.flag !== 'success') {
                this.$message({
                  message: data.msg,
                  type: 'error'
                })
              } else {
                sessionStorage.setItem('user', JSON.stringify(data.user))
                this.$router.push({ path: '/table' })
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>