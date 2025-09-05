
import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos'
import Spinner from '../components/Spinner'
import 'aos/dist/aos.css'
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'

// Initialize AOS animations
AOS.init()

function Login() {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.alertsReducer)

  function onFinish(values) {
    dispatch(userLogin(values))
    console.log(values)
  }

  return (
    <div className='login'>
      {loading && (<Spinner />)}

      <Row gutter={16} className='d-flex align-items-center'>
        {/* Left Side - Image */}
        <Col lg={16} style={{ position: 'relative' }}>
          <img
            className='w-100'
            data-aos='slide-right'
            data-aos-duration='1500'
            src="https://images.unsplash.com/photo-1532268116505-8c59cc37d2e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80"
            alt="login-banner"
          />
        </Col>

        {/* Right Side - Login Form */}
        <Col lg={8} className='text-left p-5'>
          <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
            <h1 className='login-logo'>CAR VAULT </h1>
            <h1>Login</h1>
            <hr />

            {/* Username Field */}
            <Form.Item name='username' label='Username' rules={[{ required: true }]}>
              <Input placeholder="Enter your username" />
            </Form.Item>

            {/* Password Field with Eye Toggle */}
            <Form.Item name='password' label='Password' rules={[{ required: true }]}>
              <Input.Password
                placeholder="Enter your password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>

            {/* Submit Button */}
            <button className='btn1 mt-2'>Login</button>

            <hr />
            <Link to='/register'>Click Here to Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
